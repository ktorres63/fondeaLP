import { X, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ScoreResult } from "./api";

interface Props {
  monto: number;
  scoreData: ScoreResult | null;
  cuotas: number;
  calculating: boolean;
  onClose: () => void;
}

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-lg animate-pulse", className)}
      style={{ backgroundColor: "#e5e7eb" }}
    />
  );
}

export default function LoanDetail({
  monto,
  scoreData,
  cuotas,
  calculating,
  onClose,
}: Props) {
  const loading = calculating || !scoreData;
  const color = scoreData?.color ?? "var(--lc-primary)";
  const lightBg = scoreData?.lightBg ?? "var(--lc-primary-light)";

  return (
    <div
      className="rounded-2xl shadow-lg overflow-hidden w-[320px] shrink-0 font-sans"
      style={{ backgroundColor: "var(--lc-bg)", color: "var(--lc-text)" }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ backgroundColor: "var(--lc-header-bg)" }}
      >
        <span
          className="font-bold text-[16px]"
          style={{ color: "var(--lc-header-text)" }}
        >
          Detalle del Préstamo
        </span>
        <button
          onClick={onClose}
          className="bg-transparent border-none cursor-pointer p-1 rounded-full hover:opacity-70 transition-opacity"
          aria-label="Cerrar"
        >
          <X size={18} style={{ color: "var(--lc-header-text)" }} />
        </button>
      </div>

      <div className="px-5 py-4">
        {/* Monto original */}
        <Row
          label={<strong>Monto Original</strong>}
          value={<strong>S/ {monto.toFixed(2)}</strong>}
        />
        <Divider />

        {/* Comisiones (fees dinámicos) */}
        <section className="py-1">
          <p className="text-[13px] font-bold mb-2">Comisiones</p>
          {loading ? (
            <div className="flex flex-col gap-2 mb-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ) : (
            scoreData!.fees.map((fee) => (
              <div
                key={fee.key}
                className="flex justify-between items-center text-[13px] py-1 gap-2"
              >
                <span>{fee.name}</span>
                <span className="flex items-center gap-1.5">
                  {fee.discountAmount > 0 && (
                    <s
                      className="text-[11px] opacity-80"
                      style={{ color: "var(--lc-bajo)" }}
                    >
                      S/ {fee.originalAmount.toFixed(2)}
                    </s>
                  )}
                  <span>S/ {fee.finalAmount.toFixed(2)}</span>
                </span>
              </div>
            ))
          )}
          <Divider />
          <Row
            label={"Subtotal Comisiones"}
            value={
              loading ? (
                <Skeleton className="h-4 w-16" />
              ) : (
                <span className="flex items-center gap-1.5">
                  {scoreData!.totalPercentageDiscounts > 0 && (
                    <s
                      className="text-[11px] opacity-80"
                      style={{ color: "var(--lc-bajo)" }}
                    >
                      S/ {scoreData!.totalFeesOriginal.toFixed(2)}
                    </s>
                  )}
                  S/ {scoreData!.totalFeesWithPercentageDiscounts.toFixed(2)}
                </span>
              )
            }
          />
        </section>

        {/* Descuentos (solo FIXED_AMOUNT) */}
        {!loading &&
          scoreData &&
          (() => {
            const fixedDiscounts = scoreData.discounts.filter(
              (d) => d.calculationType === "FIXED_AMOUNT",
            );

            return fixedDiscounts.length > 0 ? (
              <>
                <section className="py-1">
                  <p className="text-[13px] font-bold mb-2">Descuentos</p>
                  {fixedDiscounts.map((d) => (
                    <div
                      key={d.key}
                      className="flex justify-between text-[13px] py-1"
                    >
                      <span style={{ color: "var(--lc-bajo)" }}>{d.name}</span>
                      <span style={{ color: "var(--lc-bajo)" }}>
                        -S/ {d.totalDiscountAmount.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </section>
                <Divider />
                <Row
                  label={<strong>Subtotal comisiones neto</strong>}
                  value={
                    <strong>S/ {scoreData.totalFeesResult.toFixed(2)}</strong>
                  }
                />
              </>
            ) : null;
          })()}

        {/* IGV */}
        <Row
          label={<strong>IGV</strong>}
          value={
            loading ? (
              <Skeleton className="h-4 w-16" />
            ) : (
              <strong>S/ {scoreData!.igv.toFixed(2)}</strong>
            )
          }
        />

        {/* Total box */}
        <div
          className="border-2 rounded-xl p-3 my-3 flex justify-between items-end transition-all duration-300"
          style={{ borderColor: color, backgroundColor: lightBg }}
        >
          <div>
            <p className="text-[12px] font-semibold mb-1">Monto Total</p>
            {loading ? (
              <Skeleton className="h-8 w-32 mt-1" />
            ) : (
              <p
                className="text-[26px] font-extrabold leading-none"
                style={{ color }}
              >
                S/ {scoreData!.total.toFixed(2)}
              </p>
            )}
          </div>
          {!loading && cuotas > 1 && (
            <span
              className="text-[11px] text-right whitespace-nowrap"
              style={{ color: "var(--lc-muted)" }}
            >
              S/ {scoreData!.cuotaAmt.toFixed(2)} × {cuotas} cuotas
            </span>
          )}
        </div>

        {/* Cronograma */}
        <div className="pt-1">
          <div className="flex items-center gap-1.5 mb-2">
            <Square
              size={12}
              style={{ color: "var(--lc-muted)", fill: "var(--lc-muted)" }}
            />
            <p className="text-[13px] font-bold">Cronograma de Pagos</p>
          </div>
          {loading ? (
            <div className="flex flex-col gap-2">
              {Array.from({ length: cuotas }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="w-2 h-2 rounded-full" />
                  <Skeleton className="h-3 flex-1" />
                  <Skeleton className="h-3 w-16" />
                </div>
              ))}
            </div>
          ) : (
            scoreData!.schedule.map((item) => (
              <div
                key={item.installmentNo}
                className="flex items-center gap-2 text-[13px] mb-1.5"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--lc-primary)" }}
                />
                <span>{item.label}</span>
                <strong className="ml-auto">S/ {item.amount.toFixed(2)}</strong>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center text-[13px] py-1.5 gap-2">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Divider() {
  return <hr className="border-t my-1" style={{ borderColor: "#ebebeb" }} />;
}
