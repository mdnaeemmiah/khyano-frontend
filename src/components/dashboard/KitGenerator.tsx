"use client";

import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function KitGenerator() {
  return (
    <div className="min-h-screen bg-[#f5f8ff] p-8 md:p-12 font-sans text-slate-900">
      {/* Header */}
      <div className=" mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-xl font-medium text-slate-800">
            Your Marketing Kit
          </h1>
          <p className="text-[15px] text-slate-500 mt-1">
            Your complete AI-generated marketing system
          </p>
        </div>
        <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-[14px] font-semibold text-[#1e3a8a] shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:bg-slate-50 transition-colors">
          Regenerate Kit
        </button>
      </div>

      {/* Main Grid */}
      <div className="mx-auto flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column */}
        <div className="flex-1 w-full space-y-8">
          {/* Brand Kit Card */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_25px_rgb(30,41,59,0.03)] border border-white">
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[52px] h-[52px] bg-[#eef3fb] rounded-2xl flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#24439b"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.5L21.5 8V16L12 21.5L2.5 16V8L12 2.5Z" />
                </svg>
              </div>
              <div>
                <h2 className="text-[22px] tracking-tight font-medium text-slate-800">
                  Brand Kit
                </h2>
                <p className="text-[15px] text-slate-500">
                  Visual identity and tone guide
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Logo Preview & Typography */}
              <div>
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Logo Preview
                </h3>
                <div className="h-[120px] rounded-[24px] border border-dashed border-slate-200 bg-slate-50/50 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-[38px] h-[38px] bg-[#1e40af] rounded-lg"></div>
                    <span className="text-[26px] font-black text-[#1e40af] tracking-tight">
                      LUMINA
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Typography
                  </h3>
                  <h4 className="text-[28px] tracking-tight font-bold text-[#1e40af] mb-1">
                    Manrope Bold
                  </h4>
                  <p className="text-slate-500 text-[15px]">
                    Inter Regular - Body Copy
                  </p>
                </div>
              </div>

              {/* Colors & Tone */}
              <div>
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Color Palette
                </h3>
                <div className="flex gap-4 mb-10">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#1d3b8e] shadow-sm"></div>
                  <div className="w-[52px] h-[52px] rounded-full bg-[#f0529d] shadow-sm"></div>
                  <div className="w-[52px] h-[52px] rounded-full bg-[#f8fafc] shadow-sm"></div>
                  <div className="w-[52px] h-[52px] rounded-full bg-[#1a1f2c] shadow-sm"></div>
                </div>

                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Brand Tone
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-1.5 bg-[#eef3fb] text-[#304b9c] text-[13px] font-semibold rounded-full tracking-wide">
                    Bold
                  </span>
                  <span className="px-4 py-1.5 bg-[#fdefdf] text-[#f0529d] text-[13px] font-semibold rounded-full tracking-wide">
                    Modern
                  </span>
                  <span className="px-4 py-1.5 bg-[#e8edfe] text-[#7184cd] text-[13px] font-semibold rounded-full tracking-wide">
                    Youthful
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Kit Card */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_25px_rgb(30,41,59,0.03)] border border-white">
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[52px] h-[52px] bg-[#fbf5fa] rounded-2xl flex items-center justify-center">
                <FiTrendingUp className="text-[#e25098] text-[22px] stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-[22px] tracking-tight font-medium text-slate-800">
                  Strategy Kit
                </h2>
                <p className="text-[15px] text-slate-500">
                  Targeting and channel optimization
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Funnel */}
              <div>
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Funnel Performance Projection
                </h3>
                <div className="space-y-4">
                  {/* Awareness */}
                  <div className="h-[46px] bg-[#f4f6fb] rounded-lg relative overflow-hidden flex items-center px-4">
                    <div className="absolute left-0 top-0 bottom-0 bg-[#485db6] w-[90%] rounded-lg"></div>
                    <span className="relative z-10 text-white text-[13px] font-semibold tracking-wide">
                      Awareness (90%)
                    </span>
                  </div>
                  {/* Engagement */}
                  <div className="h-[46px] bg-[#f4f6fb] rounded-lg relative overflow-hidden flex items-center px-4">
                    <div className="absolute left-0 top-0 bottom-0 bg-[#e461a6] w-[65%] rounded-lg"></div>
                    <span className="relative z-10 text-white text-[13px] font-semibold tracking-wide">
                      Engagement (65%)
                    </span>
                  </div>
                  {/* Conversion */}
                  <div className="h-[46px] bg-[#f4f6fb] rounded-lg relative overflow-hidden flex items-center px-4">
                    <div className="absolute left-0 top-0 bottom-0 bg-[#4e3ebd] w-[30%] rounded-lg"></div>
                    <span className="relative z-10 text-white text-[13px] font-semibold tracking-wide">
                      Conversion (30%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Platforms & Pillars */}
              <div>
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Platforms
                </h3>
                <div className="space-y-2.5 mb-8">
                  <button className="flex items-center justify-center gap-2.5 px-4 py-2.5 bg-[#f4f6fb] rounded-[10px] w-36">
                    <FaInstagram className="text-[#d84074] text-lg" />
                    <span className="text-[13px] font-semibold text-slate-800">
                      Instagram
                    </span>
                  </button>
                  <button className="flex items-center justify-center gap-2.5 px-4 py-2.5 bg-[#f4f6fb] rounded-[10px] w-36">
                    <FaTiktok className="text-black text-lg" />
                    <span className="text-[13px] font-semibold text-slate-800">
                      TikTok
                    </span>
                  </button>
                  <button className="flex items-center justify-center gap-2.5 px-4 py-2.5 bg-[#f4f6fb] rounded-[10px] w-36">
                    <FaFacebook className="text-[#1877f2] text-lg" />
                    <span className="text-[13px] font-semibold text-slate-800">
                      Facebook
                    </span>
                  </button>
                </div>

                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Pillars
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 border border-slate-200 bg-white text-slate-600 text-[12px] font-semibold rounded-lg tracking-wide">
                    Education
                  </span>
                  <span className="px-3.5 py-1.5 border border-slate-200 bg-white text-slate-600 text-[12px] font-semibold rounded-lg tracking-wide">
                    Lifestyle
                  </span>
                  <span className="px-3.5 py-1.5 border border-slate-200 bg-white text-slate-600 text-[12px] font-semibold rounded-lg tracking-wide">
                    UGC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Pro Tip) */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="bg-white rounded-[32px] p-6 shadow-[0_4px_25px_rgb(30,41,59,0.03)] border border-white h-auto">
            <div className="bg-[linear-gradient(135deg,#7351bf_0%,#a84b90_100%)] rounded-[24px] p-8 pb-10 text-white relative overflow-hidden shadow-sm">
              {/* Decorative Elements */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-white opacity-[0.08] rounded-full"></div>
              <div className="absolute top-10 right-4 w-12 h-12 bg-white opacity-[0.05] rotate-45 transform">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M12 0l3.5 8.5L24 12l-8.5 3.5L12 24l-3.5-8.5L0 12l8.5-3.5L12 0z" />
                </svg>
              </div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white opacity-[0.1] rotate-12 transform">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M12 0l2 10L24 12l-10 2L12 24l-2-10L0 12l10-2L12 0z" />
                </svg>
              </div>

              <h3 className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-4">
                Pro Tip
              </h3>
              <p className="text-[17px] font-medium leading-[1.4] mb-8 relative z-10">
                Your Instagram engagement is up 22%. Time to double down on
                Video Content?
              </p>

              <button className="w-full py-3.5 bg-white text-[#5b48c1] rounded-xl text-[14px] font-bold hover:bg-slate-50 transition-colors shadow-sm relative z-10">
                Apply Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
