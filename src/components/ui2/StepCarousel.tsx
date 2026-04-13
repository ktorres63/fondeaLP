import { useState } from "react";

type StepItem = {
  title: string;
  description?: string;
  image: string;
};

type Props = {
  steps: StepItem[];
};

export default function StepCarousel({ steps }: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
      {/* Image carousel */}
      <div className="relative w-full max-w-sm lg:max-w-md shrink-0">
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentStep * 100}%)` }}
          >
            {steps.map((step, i) => (
              <div key={i} className="w-full shrink-0 aspect-3/4 bg-sky-50">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-5 gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentStep
                  ? "bg-sky-600 w-6 h-2"
                  : "bg-slate-200 hover:bg-slate-300 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Steps list */}
      <div className="flex flex-col gap-2 w-full max-w-md">
        {steps.map((step, i) => {
          const isActive = i === currentStep;
          return (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`text-left group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-sky-50 border border-sky-200"
                  : "hover:bg-slate-50 border border-transparent"
              }`}
            >
              {/* Number bubble */}
              <span
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                  isActive
                    ? "bg-sky-600 text-white"
                    : "bg-slate-100 text-slate-400 group-hover:bg-sky-100 group-hover:text-sky-500"
                }`}
              >
                {i + 1}
              </span>

              <div>
                <p
                  className={`font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-sky-900"
                      : "text-slate-400 group-hover:text-slate-600"
                  }`}
                >
                  {step.title}
                </p>
                {step.description && isActive && (
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}

        {/* CTA */}
        <a
          href="/solicitar"
          className="mt-4 inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-2xl transition-colors duration-200 w-fit"
        >
          Solicitar préstamo
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
