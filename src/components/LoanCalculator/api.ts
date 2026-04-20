/**
 * Loan Calculator — API
 *
 * Sección 1: fetchLoanConfig      → GET  /api/products/{productId}/options  (REAL)
 * Sección 2: fetchLoanCalculation → POST /api/simulate/landing               (REAL)
 */

// ─────────────────────────────────────────────────────────────────────────────
// Configuración
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCT_ID =
  import.meta.env.VITE_PRODUCT_ID || "03d17890-251f-4946-bb91-49d35ff62800";
export const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://fondea-backend-production.up.railway.app/api";

// ─────────────────────────────────────────────────────────────────────────────
// Tipos — Sección 1: Config
// ─────────────────────────────────────────────────────────────────────────────

interface ApiAmount {
  value: number;
  label: string;
}
interface ApiTerm {
  value: number;
  label: string;
}
interface ApiInstallment {
  value: number;
  label: string;
}

export interface ApiCreditScoreRange {
  id: string;
  productId: string;
  code: string;
  label: string;
  color: string;
  minScore: number;
  maxScore: number;
  displayOrder: number;
  isActive: boolean;
}

interface ApiProductOptions {
  product: { id: string; name: string };
  amounts: ApiAmount[];
  terms: ApiTerm[];
  installments: ApiInstallment[];
  creditScoreRanges: ApiCreditScoreRange[];
}

export interface LoanConfig {
  productId: string;
  productName: string;
  amounts: ApiAmount[];
  terms: ApiTerm[];
  installments: ApiInstallment[];
  creditScoreRanges: ApiCreditScoreRange[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Tipos — Sección 2: Simulación (contrato del endpoint)
// ─────────────────────────────────────────────────────────────────────────────

interface ApiDiscountHistoryItem {
  code: string;
  name: string;
  type: string;
  value: number;
  amountBefore: number;
  discountAmount: number;
  amountAfter: number;
  order: number;
}

interface ApiFeeItem {
  name: string;
  type: string;
  originalAmount: number;
  discountAmount: number;
  finalAmount: number;
  discountHistory: ApiDiscountHistoryItem[];
  config: { calculationType: string; value: number };
}

interface ApiDiscountItem {
  name: string;
  type: string;
  calculationType: string;
  value: number;
  totalDiscountAmount: number;
  isFirstLoanOnly: boolean;
  order: number;
}

interface ApiSimulation {
  product: { id: string; name: string };
  principal: number;
  termDays: number;
  installmentCount: number;
  isFirstLoan: boolean;
  fees: Record<string, ApiFeeItem>;
  discounts: Record<string, ApiDiscountItem>;
  summary: {
    totalFeesOriginal: number;
    totalPercentageDiscounts: number;
    totalFeesWithPercentageDiscounts: number;
    totalFixedDiscounts: number;
    totalFeesWithFixedDiscounts: number;
    totalDiscounts: number;
    totalFeesResult: number;
    totalIgvFromTotalFeesResult: number;
    totalToPay: number;
  };
  schedule: { installmentNo: number; dueDate: string; amount: number }[];
}

interface ApiSimulateItem {
  rangeCode: string;
  rangeLabel: string;
  rangeColor: string;
  minScore: number;
  maxScore: number;
  displayOrder: number;
  simulation: ApiSimulation;
}

// ─────────────────────────────────────────────────────────────────────────────
// Tipos internos — usados por los componentes
// ─────────────────────────────────────────────────────────────────────────────

export interface FeeItem {
  key: string;
  name: string;
  originalAmount: number;
  discountAmount: number;
  finalAmount: number;
  discountHistory: ApiDiscountHistoryItem[];
}

export interface DiscountItem {
  key: string;
  name: string;
  type: string;
  calculationType: string;
  totalDiscountAmount: number;
  order: number;
}

export interface ScheduleItem {
  installmentNo: number;
  dueDate: string;
  label: string; // formateado: "Domingo - 13 Abr"
  amount: number;
}

export interface ScoreResult {
  code: string;
  label: string;
  color: string;
  lightBg: string;
  // Totales del summary
  total: number;
  cuotaAmt: number;
  totalFeesOriginal: number;
  totalPercentageDiscounts: number;
  totalFeesWithPercentageDiscounts: number;
  totalFixedDiscounts: number;
  totalFeesWithFixedDiscounts: number;
  totalDiscounts: number;
  totalFeesResult: number;
  igv: number;
  // Detalle
  fees: FeeItem[];
  discounts: DiscountItem[];
  schedule: ScheduleItem[];
}

export interface LoanCalculation {
  monto: number;
  plazo: number;
  cuotas: number;
  scores: Record<string, ScoreResult>; // key = rangeCode.toLowerCase()
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function hexToLightBg(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 0.08)`;
}

const DAYS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
const MONTHS = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

function formatDueDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return `${DAYS[d.getDay()]} - ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

function mapSimulateItem(item: ApiSimulateItem): ScoreResult {
  const { simulation: sim } = item;

  const fees: FeeItem[] = Object.entries(sim.fees).map(([key, f]) => ({
    key,
    name: f.name,
    originalAmount: f.originalAmount,
    discountAmount: f.discountAmount,
    finalAmount: f.finalAmount,
    discountHistory: f.discountHistory,
  }));

  const discounts: DiscountItem[] = Object.entries(sim.discounts)
    .map(([key, d]) => ({
      key,
      name: d.name,
      type: d.type,
      calculationType: d.calculationType,
      totalDiscountAmount: d.totalDiscountAmount,
      order: d.order,
    }))
    .sort((a, b) => a.order - b.order);

  const schedule: ScheduleItem[] = sim.schedule.map((s) => ({
    installmentNo: s.installmentNo,
    dueDate: s.dueDate,
    label: formatDueDate(s.dueDate),
    amount: s.amount,
  }));

  const total = sim.summary.totalToPay;
  const cuotaAmt =
    sim.installmentCount > 1
      ? +(total / sim.installmentCount).toFixed(2)
      : total;

  return {
    code: item.rangeCode,
    label: item.rangeLabel,
    color: item.rangeColor,
    lightBg: hexToLightBg(item.rangeColor),
    total,
    cuotaAmt,
    totalFeesOriginal: sim.summary.totalFeesOriginal,
    totalPercentageDiscounts: sim.summary.totalPercentageDiscounts,
    totalFeesWithPercentageDiscounts:
      sim.summary.totalFeesWithPercentageDiscounts,
    totalFixedDiscounts: sim.summary.totalFixedDiscounts,
    totalFeesWithFixedDiscounts: sim.summary.totalFeesWithFixedDiscounts,
    totalDiscounts: sim.summary.totalDiscounts,
    totalFeesResult: sim.summary.totalFeesResult,
    igv: sim.summary.totalIgvFromTotalFeesResult,
    fees,
    discounts,
    schedule,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Sección 1 — Config (REAL)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * GET /api/products/{productId}/options
 */
export async function fetchLoanConfig(): Promise<LoanConfig> {
  const res = await fetch(`${BASE_URL}/products/${PRODUCT_ID}/options`);
  if (!res.ok)
    throw new Error(`fetchLoanConfig: ${res.status} ${res.statusText}`);
  const data: ApiProductOptions = await res.json();
  return {
    productId: data.product.id,
    productName: data.product.name,
    amounts: data.amounts,
    terms: data.terms,
    installments: data.installments,
    creditScoreRanges: data.creditScoreRanges
      .filter((r) => r.isActive)
      .sort((a, b) => a.displayOrder - b.displayOrder),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Sección 2 — Simulación (REAL)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * POST /api/simulate/landing
 */
export async function fetchLoanCalculation(
  monto: number,
  plazo: number,
  cuotas: number,
  config: LoanConfig,
  signal?: AbortSignal,
): Promise<LoanCalculation> {
  const res = await fetch(`${BASE_URL}/simulate/landing`, {
    method: "POST",
    headers: { "Content-Type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      productId: config.productId,
      amount: monto,
      termDays: plazo,
      installmentCount: cuotas,
      isFirstLoan: true,
    }),
    signal,
  });
  if (!res.ok)
    throw new Error(`fetchLoanCalculation: ${res.status} ${res.statusText}`);

  const data: ApiSimulateItem[] = await res.json();

  const scores: Record<string, ScoreResult> = {};
  for (const item of data) {
    scores[item.rangeCode.toLowerCase()] = mapSimulateItem(item);
  }

  return { monto, plazo, cuotas, scores };
}
