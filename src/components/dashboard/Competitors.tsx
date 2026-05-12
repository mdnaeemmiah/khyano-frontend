"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiCrosshair,
  FiLogIn,
  FiLink2,
  FiPlus,
  FiStar,
  FiX,
} from "react-icons/fi";

const competitors = [
  {
    id: "vortex-digital",
    initials: "V",
    name: "Vortex Digital",
    domain: "vortex-marketing.io",
    tag: "TOP PERFORMER",
    tagTone: "bg-emerald-50 text-emerald-700 border-emerald-100",
    stats: [
      { label: "Avg. Engagement", value: "4.8%" },
      {
        label: "Follower Growth",
        value: "+12%",
        valueTone: "text-emerald-500",
      },
      { label: "Post Frequency", value: "3.2 /day" },
    ],
  },
  {
    id: "skyline-media",
    initials: "S",
    name: "Skyline Media",
    domain: "skylinedigital.com",
    tag: "RISING THREAT",
    tagTone: "bg-amber-50 text-amber-700 border-amber-100",
    stats: [
      { label: "Avg. Engagement", value: "3.1%" },
      {
        label: "Follower Growth",
        value: "+24%",
        valueTone: "text-emerald-500",
      },
      { label: "Post Frequency", value: "1.5 /day" },
    ],
  },
  {
    id: "lumina-social",
    initials: "L",
    name: "Lumina Social",
    domain: "lumina-brand.co",
    tag: "STEADY",
    tagTone: "bg-slate-100 text-slate-500 border-slate-200",
    stats: [
      { label: "Avg. Engagement", value: "2.4%" },
      { label: "Follower Growth", value: "+2%", valueTone: "text-slate-400" },
      { label: "Post Frequency", value: "5.0 /day" },
    ],
  },
  {
    id: "nexus-ai",
    initials: "N",
    name: "Nexus AI",
    domain: "nexus-marketing.ai",
    tag: "STEADY",
    tagTone: "bg-slate-100 text-slate-500 border-slate-200",
    stats: [
      { label: "Avg. Engagement", value: "3.9%" },
      { label: "Follower Growth", value: "+8%", valueTone: "text-emerald-500" },
      { label: "Post Frequency", value: "2.1 /day" },
    ],
  },
  {
    id: "lumina-social-2",
    initials: "L",
    name: "Lumina Social",
    domain: "lumina-brand.co",
    tag: "STEADY",
    tagTone: "bg-slate-100 text-slate-500 border-slate-200",
    stats: [
      { label: "Avg. Engagement", value: "2.4%" },
      { label: "Follower Growth", value: "+2%", valueTone: "text-slate-400" },
      { label: "Post Frequency", value: "5.0 /day" },
    ],
  },
  {
    id: "nexus-ai-2",
    initials: "N",
    name: "Nexus AI",
    domain: "nexus-marketing.ai",
    tag: "STEADY",
    tagTone: "bg-slate-100 text-slate-500 border-slate-200",
    stats: [
      { label: "Avg. Engagement", value: "3.9%" },
      { label: "Follower Growth", value: "+8%", valueTone: "text-emerald-500" },
      { label: "Post Frequency", value: "2.1 /day" },
    ],
  },
];

export default function Competitors() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f9ff_0%,#eef3ff_50%,#f4f7fb_100%)] text-slate-900">
      <div className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#d9e6ff] blur-3xl opacity-70" />
        <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-[#f8d5e7] blur-3xl opacity-60" />

        <div className="mx-auto w-full">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                Analysis <span className="text-[#213f9a]">/ Competitors</span>
              </p>
              <h1 className="mt-3 text-[30px] font-semibold tracking-[-0.04em] text-[#16357f] sm:text-[44px]">
                Competitor Analysis
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                Real-time intelligence on your market landscape.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 self-start rounded-full bg-[linear-gradient(90deg,#3246a7_0%,#6d57cc_42%,#d95aa6_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(77,79,175,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(77,79,175,0.34)]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white">
                <FiPlus className="text-[15px]" />
              </span>
              Add Competitor
            </button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competitors.map((competitor) => (
              <article
                key={competitor.id}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_20px_45px_rgba(30,41,59,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(30,41,59,0.12)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#eef3ff_0%,#f7f9ff_100%)] text-lg font-semibold text-slate-400 shadow-inner">
                    {competitor.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${competitor.tagTone}`}
                    >
                      {competitor.tag}
                    </div>
                    <h2 className="mt-4 text-[18px] font-medium tracking-[-0.03em] text-[#213f9a] lg:text-[20px]">
                      {competitor.name}
                    </h2>
                    <p className="mt-1 text-xs text-slate-400">
                      {competitor.domain}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {competitor.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between gap-4 text-sm">
                      <span className="min-w-0 flex-1 text-slate-500">{stat.label}</span>
                      <span className={`shrink-0 text-right font-semibold text-[#213f9a] ${stat.valueTone ?? ''}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <Link
                    href={`/competitors/${competitor.id}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#213f9a] transition hover:border-[#d4daf3] hover:bg-[#f8faff]"
                  >
                    View Full Analysis
                    <FiArrowRight className="text-[15px]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/35 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-4 sm:py-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative my-auto w-full max-w-140 overflow-y-auto rounded-[26px] bg-white px-4 py-5 shadow-[0_30px_90px_rgba(15,23,42,0.22)] max-h-[calc(100vh-2rem)] sm:px-6 sm:py-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute left-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#27408c] transition hover:bg-slate-100"
              aria-label="Close modal"
            >
              <FiX className="text-[22px]" />
            </button>

            <div className="flex flex-col items-center pt-7 text-center sm:pt-8">
              {/* <div className="flex h-13 w-13 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#eff0ff_0%,#f8f4ff_100%)] text-[#2f47a5] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <FiSearch className="text-[26px]" strokeWidth={1.7} />
              </div> */}

              <h2 className="mt-5 text-[20px] font-semibold tracking-[-0.04em] text-[#17357f] sm:text-[24px]">
                Add New Competitor
              </h2>
              <p className="mt-2 max-w-[320px] text-[13px] leading-6 text-slate-500 sm:text-sm">
                Enter a website URL or social media profile to start your AI-powered analysis.
              </p>
            </div>

            <form className="mt-6 space-y-4 sm:mt-7">
              <label className="block">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#27408c]">
                  Target Link
                </span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#f5f8fe] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  <FiLink2 className="shrink-0 text-[18px] text-slate-400" />
                  <input
                    type="url"
                    placeholder="https://competitor-site.com"
                    className="w-full bg-transparent text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#27408c]">
                    Competitor Name
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Acme Corp"
                    className="w-full rounded-2xl border border-slate-100 bg-[#f5f8fe] px-4 py-3.5 text-[14px] text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] placeholder:text-slate-400 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#27408c]">
                    Industry/Niche
                  </span>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-2xl border border-slate-100 bg-[#f5f8fe] px-4 py-3.5 pr-10 text-[14px] text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] focus:outline-none">
                      <option>Select sector</option>
                      <option>AI / SaaS</option>
                      <option>Marketing</option>
                      <option>E-commerce</option>
                      <option>Education</option>
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[16px] text-slate-400" />
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(90deg,#dd5db1_0%,#3447a8_100%)] px-4 py-4 text-sm font-semibold text-white shadow-[0_16px_28px_rgba(57,70,168,0.26)] transition hover:brightness-105 sm:text-[15px]"
              >
                <FiStar className="text-[16px]" />
                Start Competitor Analysis
              </button>
            </form>

            <div className="mt-8 pb-1 sm:mt-10">
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">
                How It Works
              </p>

              <div className="relative mt-5">
                <div className="absolute left-4 right-4 top-6 hidden border-t border-dashed border-slate-200 sm:block" />
                <div className="grid gap-4 sm:grid-cols-3 sm:gap-2">
                  {[
                    {
                      icon: FiLogIn,
                      label: "1. Enter Link",
                      description: "Input any public URL",
                    },
                    {
                      icon: FiCrosshair,
                      label: "2. AI Scans Content",
                      description: "Processing live data",
                    },
                    {
                      icon: FiBarChart2,
                      label: "3. Get Insights",
                      description: "Ready in seconds",
                    },
                  ].map((step) => {
                    const StepIcon = step.icon;

                    return (
                      <div key={step.label} className="flex flex-col items-center text-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#2f47a5] shadow-[0_8px_18px_rgba(15,23,42,0.08)]">
                          <StepIcon className="text-[18px]" />
                        </div>
                        <div className="mt-2">
                          <p className="text-[12px] font-semibold text-[#213f9a]">{step.label}</p>
                          <p className="mt-1 text-[10px] text-slate-400 sm:text-[11px]">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
