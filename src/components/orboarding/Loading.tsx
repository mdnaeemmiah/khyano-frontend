"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiZap } from 'react-icons/fi';
import { MdOutlineInsights, MdOutlineTrendingUp } from 'react-icons/md';

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      router.replace('/businessIdentity');
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f7fb] px-6 py-10 flex justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(207,69,157,0.10),_transparent_30%),radial-gradient(circle_at_20%_25%,_rgba(38,71,159,0.12),_transparent_24%),radial-gradient(circle_at_80%_22%,_rgba(124,74,168,0.10),_transparent_22%)]"></div>

      <div className="relative z-10 w-full max-w-[700px] flex flex-col items-center pt-10">
        <div className="relative mb-12 flex h-40 w-40 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[7px] border-[#dfe3f3] border-t-[#26479f] animate-spin [animation-duration:1.2s]"></div>
          <div className="absolute inset-4 rounded-full bg-white/50 blur-[1px]"></div>
          <div className="absolute inset-5 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.95)_0%,_rgba(239,241,251,0.92)_100%)] shadow-[0_14px_40px_rgba(38,71,159,0.10)]"></div>
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#26479f] text-[30px] shadow-[0_8px_20px_rgba(38,71,159,0.14)]">
            <FiZap />
          </div>
        </div>

        <div className="w-full max-w-[420px] rounded-[20px] bg-white px-9 py-10 text-center shadow-[0_18px_48px_rgba(30,54,120,0.10)] ring-1 ring-white/80">
          <h1 className="text-[18px] font-medium text-[#26479f] mb-4">Crafting Your Strategy</h1>
          <p className="mx-auto max-w-[330px] text-[15px] leading-7 text-gray-600">
            Our intelligence engine is currently weaving your business&apos;s unique story and competitive edge.
          </p>

          <p className="mt-7 text-[15px] font-medium text-[#cf459d]">Analyzing your Business...</p>

          <div className="mt-6 h-1.5 rounded-full bg-[#edf0f8] overflow-hidden">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-[#26479f] via-[#7c4aa8] to-[#cf459d] shadow-[0_0_18px_rgba(207,69,157,0.35)]" />
          </div>

          <div className="mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
            <span>Engine Status: Optimal</span>
            <span>Estimated Time: &lt; 30s</span>
          </div>
        </div>

        <div className="mt-12 grid w-full max-w-[700px] grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-center gap-4 rounded-[16px] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(30,54,120,0.06)] ring-1 ring-white/70">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f7ff] text-[22px] text-[#26479f]">
              <MdOutlineInsights />
            </div>
            <div>
              <div className="text-[14px] text-gray-600">Identity Scan</div>
              <div className="text-[16px] font-bold text-[#26479f]">Business DNA Found</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-[16px] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(30,54,120,0.06)] ring-1 ring-white/70">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf3fb] text-[22px] text-[#cf459d]">
              <MdOutlineTrendingUp />
            </div>
            <div>
              <div className="text-[14px] text-gray-600">Market Pulse</div>
              <div className="text-[16px] font-bold text-[#26479f]">Trends Detected</div>
            </div>
          </div>
        </div>

        <div className="mt-32 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] text-gray-600 shadow-[0_10px_24px_rgba(30,54,120,0.06)] ring-1 ring-white/80">
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"></span>
          System secure and ready for output
        </div>
      </div>
    </div>
  )
}
