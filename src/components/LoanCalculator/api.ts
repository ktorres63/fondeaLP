// ─────────────────────────────────────────────────────────────────────────────
// MOCK API — Loan Calculator
// ─────────────────────────────────────────────────────────────────────────────

export interface LoanConfig {
  productId: string;
  productName: string;
  amounts: { value: number; label: string }[];
  terms: { value: number; label: string }[];
  installments: { value: number; label: string }[];
  creditScoreRanges: {
    id: string;
    productId: string;
    code: string;
    label: string;
    color: string;
    minScore: number;
    maxScore: number;
    displayOrder: number;
    isActive: boolean;
  }[];
}

export interface FeeItem {
  key: string;
  name: string;
  originalAmount: number;
  discountAmount: number;
  finalAmount: number;
  discountHistory: any[];
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
  label: string;
  amount: number;
}

export interface ScoreResult {
  code: string;
  label: string;
  color: string;
  lightBg: string;

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

  fees: FeeItem[];
  discounts: DiscountItem[];
  schedule: ScheduleItem[];
}

export interface LoanCalculation {
  monto: number;
  plazo: number;
  cuotas: number;
  scores: Record<string, ScoreResult>;
}

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG MOCK
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchLoanConfig(): Promise<LoanConfig> {
  return {
    productId: "mock-product",
    productName: "Préstamo Personal",

    amounts: [
      { value: 300, label: "300" },
      { value: 500, label: "500" },
      { value: 1000, label: "1000" },
      { value: 2000, label: "2000" },
      { value: 3000, label: "3000" },
    ],

    terms: [
      { value: 7, label: "7 días" },
      { value: 14, label: "14 días" },
      { value: 30, label: "30 días" },
    ],

    installments: [
      { value: 1, label: "1" },
      { value: 3, label: "3" },
      { value: 6, label: "6" },
    ],

    creditScoreRanges: [
      {
        id: "1",
        productId: "mock",
        code: "LOW",
        label: "Bajo",
        color: "#ef4444",
        minScore: 0,
        maxScore: 300,
        displayOrder: 1,
        isActive: true,
      },
      {
        id: "2",
        productId: "mock",
        code: "MEDIUM",
        label: "Medio",
        color: "#f59e0b",
        minScore: 301,
        maxScore: 700,
        displayOrder: 2,
        isActive: true,
      },
      {
        id: "3",
        productId: "mock",
        code: "HIGH",
        label: "Alto",
        color: "#22c55e",
        minScore: 701,
        maxScore: 1000,
        displayOrder: 3,
        isActive: true,
      },
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// CALCULATION MOCK
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchLoanCalculation(
  monto: number,
  plazo: number,
  cuotas: number,
  _config?: any, // opcional (no lo usas en mock)
  signal?: AbortSignal, // para compatibilidad con AbortController
): Promise<LoanCalculation> {
  if (signal?.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }

  function buildScore(
    code: string,
    label: string,
    color: string,
    multiplier: number,
  ): ScoreResult {
    const total = +(monto * multiplier).toFixed(2);
    const cuota = +(total / cuotas).toFixed(2);

    return {
      code,
      label,
      color,
      lightBg: color + "20",

      total,
      cuotaAmt: cuota,

      totalFeesOriginal: 50,
      totalPercentageDiscounts: 5,
      totalFeesWithPercentageDiscounts: 45,
      totalFixedDiscounts: 10,
      totalFeesWithFixedDiscounts: 35,
      totalDiscounts: 15,
      totalFeesResult: 35,
      igv: 6,

      fees: [
        {
          key: "fee1",
          name: "Comisión de servicio",
          originalAmount: 50,
          discountAmount: 15,
          finalAmount: 35,
          discountHistory: [],
        },
      ],

      discounts: [
        {
          key: "disc1",
          name: "Descuento promocional",
          type: "FIXED",
          calculationType: "FIXED_AMOUNT",
          totalDiscountAmount: 10,
          order: 1,
        },
      ],

      schedule: Array.from({ length: cuotas }).map((_, i) => ({
        installmentNo: i + 1,
        dueDate: "",
        label: `Cuota ${i + 1}`,
        amount: cuota,
      })),
    };
  }

  return {
    monto,
    plazo,
    cuotas,

    scores: {
      low: buildScore("LOW", "Bajo", "#ef4444", 1.3),
      medium: buildScore("MEDIUM", "Medio", "#f59e0b", 1.2),
      high: buildScore("HIGH", "Alto", "#22c55e", 1.1),
    },
  };
}
