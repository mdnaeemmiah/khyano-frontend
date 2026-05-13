"use client";

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  accent?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    subtitle: "Core features for beginners.",
    price: "$0",
    features: [
      "Basic analytics dashboard",
      "Up to 5 smart automations",
      "Community support access",
    ],
  },
  {
    name: "Professional",
    subtitle: "Best for growing brands.",
    price: "$29",
    popular: true,
    accent: true,
    features: [
      "Advanced AI insights",
      "Unlimited automations",
      "Priority email support",
      "Custom reporting tools",
    ],
  },
  {
    name: "Business",
    subtitle: "For small teams and busy shops.",
    price: "$79",
    features: [
      "Team collaboration (5 seats)",
      "Full API access",
      "24/7 Priority support",
      "Data export capabilities",
    ],
  },
  {
    name: "Agency",
    subtitle: "Full power for multiple brands.",
    price: "$199",
    features: [
      "Unlimited brand accounts",
      "White-label reports",
      "Dedicated account manager",
      "Custom model training",
    ],
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("Professional");

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#eceff5] px-4 py-10 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute -bottom-24 left-0 h-44 w-full bg-[radial-gradient(120%_80%_at_0%_100%,rgba(88,102,171,0.35),transparent_60%),radial-gradient(90%_80%_at_100%_100%,rgba(228,117,180,0.35),transparent_55%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-[#d7deed] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#2f3f73]">
            Plans & Pricing
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#121a33] sm:text-5xl">
            Simple, Transparent <span className="text-[#cb57ad]">Pricing</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4f5b73] sm:text-base">
            Choose the plan that fits your growth goals. Scale your intelligence
            without the complexity.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.name;

            return (
            <article
              key={plan.name}
              className={`rounded-xl border bg-[#f6f7fb] p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md ${
                isSelected
                  ? "border-[#8d63bd] ring-2 ring-[#d8c7ec]"
                  : plan.accent
                    ? "border-[#bfc6dc]"
                    : "border-[#e5e9f2]"
              }`}
            >
              {plan.popular && (
                <div className="mb-4 flex justify-center">
                  <span className="rounded-full bg-gradient-to-r from-[#4650b7] to-[#ca4f9e] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-3xl font-bold text-[#232a35]">{plan.name}</h3>
              <p className="mt-2 min-h-10 text-sm text-[#5f697f]">{plan.subtitle}</p>

              <div className="mt-5 flex items-end gap-1">
                <span className={`text-4xl font-black ${plan.accent ? "text-[#7d57b8]" : "text-[#232a35]"}`}>
                  {plan.price}
                </span>
                <span className="mb-1 text-sm font-medium text-[#5f697f]">/mo</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[#2f3a52]">
                    <FiCheckCircle className={`mt-0.5 h-4 w-4 shrink-0 ${plan.accent ? "text-[#e057a8]" : "text-[#3e57b8]"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setSelectedPlan(plan.name)}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-bold transition ${
                  isSelected
                    ? "border-transparent bg-gradient-to-r from-[#354ab5] to-[#d04ea2] text-white"
                    : "border-[#d9dfec] bg-white text-[#3855b8] hover:border-[#c2cce0]"
                }`}
              >
                {isSelected ? "Selected" : "Choose Plan"}
              </button>
            </article>
          );
          })}
        </div>
      </div>
    </section>
  );
}
