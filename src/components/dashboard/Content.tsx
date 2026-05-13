/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { FiImage, FiSettings, FiEdit2, FiRefreshCcw } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { BiImageAdd } from "react-icons/bi";
import { BsFileEarmarkText, BsMegaphone } from "react-icons/bs";
import Link from "next/link";

export default function Content() {
  const [logoPic, setLogoPic] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoPic(url);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-8 md:p-12 font-sans text-slate-900">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-[34px] tracking-tight font-bold text-[#1e3a8a] mb-2">
          Create something amazing
        </h1>
        <p className="text-slate-500 text-[16px]">
          Let AI handle the heavy lifting while you focus on the vision.
        </p>
      </div>

      <div className=" mx-auto flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column (Controls & Input) */}
        <div className="w-full lg:w-[420px] flex flex-col gap-6 shrink-0">
          {/* Content Type Toggle */}
          <div className="bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white">
            <div className="flex items-center gap-2">
              <Link
                href="/Content"
                className="flex justify-center items-center gap-2 bg-[#203c94] text-white px-5 py-2 rounded-full text-[13px] font-semibold flex-1"
              >
                <BsFileEarmarkText className="text-base" />
                Posts
              </Link>
              <Link
                href="Content/adsPhoto"
                className="flex justify-center items-center gap-2 bg-slate-50 text-slate-600 px-5 py-2 rounded-full text-[13px] font-semibold flex-1 hover:bg-slate-100 transition-colors"
              >
                <BsMegaphone className="text-base" />
                Ads
              </Link>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white">
            <h3 className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-4">
              WHAT ARE WE CREATING TODAY?
            </h3>

            {/* AI Prompt Input */}
            <textarea
              className="w-full h-[180px] bg-[#f8fafc] border border-[#f1f5f9] rounded-2xl p-5 text-[14px] text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#203c94]/20 resize-none mb-6"
              placeholder="e.g. A captivating LinkedIn post about the future of AI in creative workflows, focusing on efficiency and collaboration..."
            ></textarea>

            {/* Logo Upload */}
            <div className="mb-6">
              <label className="block text-[13px] font-bold text-[#0f172a] mb-2">
                Upload Logo{" "}
                <span className="font-normal text-slate-400">(Optional)</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleLogoUpload}
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border border-dashed border-slate-300 rounded-2xl h-[90px] flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100/50 cursor-pointer transition-colors group overflow-hidden relative"
              >
                {logoPic ? (
                  <img
                    src={logoPic}
                    alt="Uploaded logo"
                    className="h-full w-full object-contain p-2"
                  />
                ) : (
                  <>
                    <div className="text-slate-400 mb-2 group-hover:text-[#203c94] transition-colors">
                      <FiImage className="text-xl" />
                    </div>
                    <div className="text-[13px] font-medium text-slate-500">
                      Drop your logo here or{" "}
                      <span className="text-[#203c94] font-bold">browse</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Meta Row */}
            <div className="flex justify-between items-center mb-6 text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              <div className="flex items-center gap-1.5">
                <FiSettings className="text-slate-400 text-sm" />
                Style: Professional & Inspiring
              </div>
              <div className="text-slate-400">124/500</div>
            </div>

            {/* Generate Button */}
            <button className="w-full py-4 bg-[linear-gradient(135deg,#4c5ba6_0%,#c4569e_100%)] text-white rounded-xl text-[15px] font-bold hover:opacity-95 transition-opacity shadow-sm flex items-center justify-center gap-2">
              Generate Content
              <HiOutlineSparkles className="text-lg" />
            </button>
          </div>
        </div>

        {/* Right Column (Preview) */}
        <div className="flex-1 w-full bg-white rounded-[32px] p-6 md:p-10 shadow-[0_4px_30px_rgb(0,0,0,0.04)] border border-white relative">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f94d50]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#c71e2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#bdc3fb]"></div>
              </div>
              <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                DRAFT_PREVIEW_V1.JPG
              </span>
            </div>
            <span className="px-3 py-1 bg-[#fae8f3] text-[#cf4590] text-[10px] font-extrabold uppercase tracking-widest rounded-full">
              Social Media
            </span>
          </div>

          {/* Generated Image placeholder */}
          <div className="w-full aspect-[16/9] lg:aspect-[2/1] xl:aspect-[16/9] max-h-[400px] bg-slate-100 rounded-[24px] mb-8 overflow-hidden relative group">
            {/* If actual image exists, replace src. Example fallback: */}
            <img
              src="/assets/Visual Asset.svg"
              alt="Generated Visual"
              className="w-full h-full object-cover"
              onError={(e) => {
                // simple fallback if image not found
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Content Body */}
          <div className="max-w-2xl">
            <h2 className="text-[28px] tracking-tight font-bold text-[#1e3a8a] mb-4">
              The Horizon of Human-AI Creativity
            </h2>

            <div className="text-[15px] leading-[1.8] text-slate-600 space-y-4 mb-10">
              <p>
                The dawn of AI isn't the end of creativity; it's the beginning
                of a superpower. 🚀
              </p>
              <p>
                Imagine a workflow where the friction between idea and execution
                evaporates. Where you provide the spark, and Lumina handles the
                flame. We're seeing a shift from 'tool-centric' to
                'intent-centric' design, and the results are breathtaking.
              </p>
              <p>
                How are you integrating AI into your creative journey this year?
                Let's discuss in the comments below! 👇
              </p>
            </div>

            {/* Hashtags */}
            <p className="text-[#203c94] font-bold text-[14px] mb-10 tracking-wide">
              #AI #Creativity #Innovation #FutureOfWork
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-2.5 border border-slate-200 text-[#203c94] font-bold text-[13px] rounded-xl hover:bg-slate-50 transition-colors bg-white">
                <FiRefreshCcw />
                Regenerate
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 border border-slate-200 text-[#203c94] font-bold text-[13px] rounded-xl hover:bg-slate-50 transition-colors bg-white">
                <FiEdit2 />
                Edit
              </button>
              <button className="flex items-center gap-2 px-8 py-2.5 bg-[linear-gradient(135deg,#5e51a6_0%,#c1529a_100%)] text-white font-bold text-[13px] rounded-xl hover:opacity-95 transition-opacity sm:ml-auto">
                <BiImageAdd className="text-lg" />
                Save to Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
