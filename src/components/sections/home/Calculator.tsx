import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(3000);
  const [months, setMonths] = useState(6);

  const monthlyPayment = Math.round((amount * 1.15) / months);

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">
        Simula tu préstamo
      </h3>

      {/* Amount */}
      <div className="mb-5">
        <label className="text-sm text-slate-600 font-medium">
          Monto solicitado
        </label>
        <input
          type="range"
          min="500"
          max="10000"
          step="100"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full mt-2"
        />
        <p className="mt-2 font-semibold text-sky-600">S/ {amount}</p>
      </div>

      {/* Months */}
      <div className="mb-5">
        <label className="text-sm text-slate-600 font-medium">
          Número de cuotas
        </label>
        <select
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="w-full mt-2 border rounded-lg px-3 py-2"
        >
          <option value={3}>3 meses</option>
          <option value={6}>6 meses</option>
          <option value={9}>9 meses</option>
          <option value={12}>12 meses</option>
        </select>
      </div>

      {/* Result */}
      <div className="bg-sky-50 rounded-xl p-4 mb-5">
        <p className="text-sm text-slate-600">Cuota estimada mensual</p>
        <p className="text-2xl font-bold text-sky-600">S/ {monthlyPayment}</p>
      </div>

      {/* CTA */}
      <Button className="w-full bg-lime-400 text-black hover:opacity-90">
        Solicitar ahora
      </Button>
    </div>
  );
}
