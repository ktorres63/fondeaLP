import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import CreditGauge from "./CreditGauge";
import LoanDetail from "./LoanDetail";
import { fetchLoanConfig, fetchLoanCalculation } from "./api";
import type { LoanConfig, LoanCalculation, ScoreResult } from "./api";

export type { ScoreResult };

// ── Helpers ───────────────────────────────────────────────────────────────────
function gaugeToCode(
  value: number,
  ranges: LoanConfig["creditScoreRanges"],
): string {
  const idx = Math.floor(value * ranges.length);
  return ranges[Math.min(idx, ranges.length - 1)].code.toLowerCase();
}

function scoreToCenterGauge(index: number, total: number): number {
  return (index + 0.5) / total;
}

// ── Skeleton ──────────────────────────────────────────────────────────────────
function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-lg animate-pulse bg-gray-200", className)} />
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function LoanCalculator() {
  const [config, setConfig] = useState<LoanConfig | null>(null);
  const [configError, setConfigError] = useState(false);

  const [monto, setMonto] = useState(0);
  const [plazo, setPlazo] = useState<number | null>(null);
  const [cuotas, setCuotas] = useState<number | null>(null);
  const [gaugeScore, setGaugeScore] = useState(0.15);
  const [detailKey, setDetailKey] = useState<string | null>(null);

  const [calc, setCalc] = useState<LoanCalculation | null>(null);
  const [calculating, setCalculating] = useState(false);

  const ranges = config?.creditScoreRanges ?? [];

  const activeCode = useMemo(() => {
    return config ? gaugeToCode(gaugeScore, ranges) : "";
  }, [gaugeScore, config, ranges]);

  const activeCalc = calc?.scores[activeCode] ?? null;

  // ── Load config ────────────────────────────────────────────────────────────
  useEffect(() => {
    fetchLoanConfig()
      .then((cfg) => {
        setConfig(cfg);
        setMonto(cfg.amounts[0]?.value ?? 0);
        setPlazo(cfg.terms[0]?.value ?? null);
        setCuotas(cfg.installments[0]?.value ?? null);
      })
      .catch(() => setConfigError(true));
  }, []);

  // ── Calculate ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!config || plazo === null || cuotas === null || monto <= 0) return;

    const controller = new AbortController();
    setCalculating(true);

    fetchLoanCalculation(monto, plazo, cuotas, config, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) setCalc(res);
      })
      .catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      })
      .finally(() => {
        if (!controller.signal.aborted) setCalculating(false);
      });

    return () => controller.abort();
  }, [monto, plazo, cuotas, config]);

  function handlePlazo(p: number) {
    setPlazo(p);
    setCuotas(config?.installments[0]?.value ?? 1);
  }

  const amountMin = config?.amounts[0]?.value ?? 0;
  const amountMax = config?.amounts.at(-1)?.value ?? 0;
  const amountStep =
    config && config.amounts.length > 1
      ? config.amounts[1].value - config.amounts[0].value
      : 1;

  // ── Error ─────────────────────────────────────────────────────────────────
  if (configError) {
    return (
      <div className="rounded-2xl shadow-lg p-8 w-90 text-center bg-white">
        <p className="font-bold mb-2">No se pudo cargar la calculadora</p>
        <button
          className="text-sm underline text-cyan-600"
          onClick={() => window.location.reload()}
        >
          Reintentar
        </button>
      </div>
    );
  }

  // ── Loading ────────────────────────────────────────────────────────────────
  if (!config) {
    return (
      <div className="rounded-2xl shadow-lg p-5 w-90 flex flex-col gap-4 bg-white">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  return (
    <div className="relative w-90">
      {/* ── CALCULADORA ───────────────────────────────────────── */}
      <div className="rounded-2xl shadow-lg p-5 bg-white text-slate-800">
        {/* Monto */}
        <div className="flex justify-between mb-3">
          <span className="font-bold text-sm">¿Cuánto dinero necesitas?</span>
          <div className="text-xl font-extrabold border rounded-xl px-3 py-1">
            S/ {monto.toFixed(2)}
          </div>
        </div>

        {/* Slider */}
        <input
          type="range"
          min={amountMin}
          max={amountMax}
          step={amountStep}
          value={monto}
          onChange={(e) => setMonto(Number(e.target.value))}
          className="w-full accent-cyan-500 mb-4"
        />

        {/* Plazos */}
        <div className="mb-4">
          <p className="text-sm font-bold mb-2">Plazos</p>
          <div className="flex gap-2">
            {config.terms.map((t) => (
              <button
                key={t.value}
                onClick={() => handlePlazo(t.value)}
                className={cn(
                  "flex-1 py-2 rounded-xl border text-sm font-bold",
                  plazo === t.value
                    ? "bg-cyan-500 text-white border-cyan-500"
                    : "border-gray-300",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cuotas */}
        {config.installments.length > 1 && (
          <div className="mb-4">
            <p className="text-sm font-bold mb-2">Número de cuotas</p>
            <div className="flex gap-2">
              {config.installments.map((inst) => (
                <button
                  key={inst.value}
                  onClick={() => setCuotas(inst.value)}
                  className={cn(
                    "w-10 h-10 rounded-lg border font-bold",
                    cuotas === inst.value
                      ? "bg-cyan-500 text-white border-cyan-500"
                      : "border-gray-300",
                  )}
                >
                  {inst.value}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cronograma */}
        {config.installments.length > 1 && (
          <div className="mb-4">
            <p className="text-sm font-bold mb-2">Cronograma</p>

            {calculating || !activeCalc ? (
              <Skeleton className="h-16 w-full" />
            ) : (
              activeCalc.schedule.map((item, i) => (
                <div key={i} className="flex text-sm mb-1">
                  <span>{item.label}</span>
                  <strong className="ml-auto">
                    S/ {item.amount.toFixed(2)}
                  </strong>
                </div>
              ))
            )}
          </div>
        )}

        {/* Score */}
        <div className="mb-4">
          <p className="text-sm font-bold mb-2">Según tu perfil pagarías:</p>

          <div className="flex gap-2">
            {ranges.map((range, idx) => {
              const key = range.code.toLowerCase();
              const s = calc?.scores[key];
              const isActive = key === activeCode;

              return (
                <button
                  key={key}
                  onClick={() =>
                    setGaugeScore(scoreToCenterGauge(idx, ranges.length))
                  }
                  className={cn(
                    "flex-1 border-2 rounded-xl p-2 text-left transition",
                    isActive ? "opacity-100" : "opacity-40",
                  )}
                  style={{ borderColor: range.color }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: range.color }}
                  >
                    {range.label}
                  </span>

                  {calculating || !s ? (
                    <Skeleton className="h-5 mt-1" />
                  ) : (
                    <div
                      className="font-extrabold"
                      style={{ color: range.color }}
                    >
                      S/ {s.total.toFixed(2)}
                    </div>
                  )}

                  <span
                    className="text-xs underline mt-1 block"
                    style={{ color: range.color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDetailKey(key);
                    }}
                  >
                    Ver detalle →
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gauge */}
        <div className="flex flex-col items-center">
          <CreditGauge value={gaugeScore} />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={gaugeScore}
            onChange={(e) => setGaugeScore(Number(e.target.value))}
            className="w-1/2 accent-cyan-500"
          />
        </div>

        {/* CTA */}
        <button
          className="w-full py-4 mt-4 bg-cyan-500 text-white rounded-xl font-bold"
          disabled={calculating || !calc}
        >
          {calculating ? "Calculando..." : "Solicitar Préstamo →"}
        </button>

        <button
          className="w-full text-sm underline mt-2"
          onClick={() => setDetailKey(activeCode)}
        >
          Ver detalles
        </button>
      </div>

      {/* ── MODAL LOCAL (CORREGIDO) ───────────────────────────────── */}
      {detailKey && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl">
          <LoanDetail
            monto={monto}
            scoreData={calc?.scores[detailKey] ?? null}
            cuotas={cuotas ?? 1}
            calculating={calculating}
            onClose={() => setDetailKey(null)}
          />
        </div>
      )}
    </div>
  );
}
