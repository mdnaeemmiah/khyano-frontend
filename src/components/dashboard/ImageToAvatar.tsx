"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiImage,
  FiMic,
  FiUploadCloud,
  FiUser,
  FiVideo,
  FiZap,
} from "react-icons/fi";

const voiceOptions = [
  { name: "Elena (English, US)", subtitle: "Professional & Calm" },
  { name: "Marcus (English, UK)", subtitle: "Warm & Narrator-style" },
  { name: "Mia (Spanish, ES)", subtitle: "Bright & Friendly" },
];

export default function ImageToAvatar() {
  const [mode, setMode] = useState("Image to Avatar");
  const [script, setScript] = useState(
    "Hello everyone! Welcome to Aura Studio. Today I will show you how AI can transform your video creation workflow...",
  );
  const [behavior, setBehavior] = useState(
    "Friendly and enthusiastic, using occasional hand gestures for emphasis. Keep a professional yet warm smile.",
  );
  const [selectedVoice, setSelectedVoice] = useState(0);

  return (
    <section className="min-h-screen bg-[#f4f8ff] px-3 py-4 text-[#17346f] sm:px-4 sm:py-6 lg:px-6 lg:py-8">
      <div className="mx-auto ">
        <div className="mb-3 md:mb-4 lg:mb-6">
          <h1 className="text-2xl font-semibold tracking-[-0.03em] text-[#163a89] sm:text-3xl md:text-4xl lg:text-[3rem] lg:leading-[1.02]">
            Create something amazing
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-[#8895ad] sm:text-[15px] lg:mt-2 lg:text-[1.05rem]">
            Let AI handle the heavy lifting while you focus on the vision.
          </p>
        </div>

        <div className="mb-4 flex rounded-full bg-[#edf2fb] p-1 shadow-[inset_0_0_0_1px_rgba(56,86,155,0.06)] md:mb-5 lg:max-w-3xl lg:p-1.5">
          {[
            { label: "Text to Avatar", icon: FiUser, href: "/aiAvatar" },
            { label: "Image to Avatar", icon: FiImage, href: "/aiAvatar/iamgeToAvatar" },
            { label: "Video to Avatar", icon: FiVideo, href: "/aiAvatar/videoToAvatar" },
          ].map(({ label, icon: Icon, href }) => {
            const active = mode === label;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMode(label)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm lg:px-5 lg:py-3 ${
                  active
                    ? "bg-white text-[#22408c] shadow-[0_8px_24px_rgba(41,66,129,0.14)]"
                    : "text-[#7d8aa3] hover:bg-white/70 hover:text-[#23408a]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.72fr)] lg:items-start lg:gap-5">
          <div className="space-y-4 lg:space-y-5">
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-3xl lg:p-6">
              <div className="mb-3 flex items-center gap-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                <span className="text-[#e24e9b]">▣</span>
                Video Script
              </div>
              <p className="mb-3 text-xs text-[#7f8ca4] sm:text-sm lg:mb-4 lg:text-[0.95rem]">
                Type exactly what you want your avatar to say.
              </p>
              <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                className="min-h-28 w-full resize-none rounded-xl bg-[#f4f7fc] px-4 py-4 text-sm leading-6 text-[#6b7a90] outline-none placeholder:text-[#91a0b7] sm:min-h-32 lg:min-h-45 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-[0.98rem]"
                placeholder="Hello everyone! Welcome to Aura Studio..."
              />
              <div className="mt-3 flex items-center justify-between gap-3 text-[10px] font-medium text-[#9aa8bc] lg:mt-4 lg:text-[0.72rem]">
                <span>124 / 5000 characters</span>
                <button className="inline-flex items-center gap-1 font-semibold text-[#2f4fa1] transition-colors hover:text-[#1d3e8e]">
                  <span>✦</span>
                  AI Rewrite for Clarity
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-3xl lg:p-6">
              <div className="mb-3 flex items-center gap-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                <span className="text-[#e24e9b]">◌</span>
                Avatar Behavior
              </div>
              <p className="mb-3 text-xs text-[#7f8ca4] sm:text-sm lg:mb-4 lg:text-[0.95rem]">
                Describe the tone, gestures, or specific movements.
              </p>
              <textarea
                value={behavior}
                onChange={(e) => setBehavior(e.target.value)}
                className="min-h-24 w-full resize-none rounded-xl bg-[#f4f7fc] px-4 py-4 text-sm leading-6 text-[#6b7a90] outline-none placeholder:text-[#91a0b7] lg:min-h-35 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-[0.98rem]"
                placeholder="Friendly and enthusiastic..."
              />
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-3xl lg:p-6">
              <div className="mb-3 flex items-center gap-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                <span className="text-[#e24e9b]">◔</span>
                Voice Selection
              </div>

              <div className="inline-flex rounded-lg bg-[#eef2f7] p-1 text-xs font-semibold text-[#7a879b]">
                <button className="rounded-md bg-white px-3 py-1.5 text-[#22408c] shadow-sm">
                  AI Voice Library
                </button>
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-2">
                {voiceOptions.map((voice, index) => {
                  const active = selectedVoice === index;
                  return (
                    <button
                      key={voice.name}
                      onClick={() => setSelectedVoice(index)}
                      className={`rounded-xl border px-4 py-4 text-left transition-all lg:rounded-2xl ${
                        active
                          ? "border-[#3a56b5] bg-[#f7f9ff] shadow-[0_0_0_1px_rgba(58,86,181,0.12)]"
                          : "border-[#e0e7f1] bg-white hover:border-[#cad6ea]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-full ${active ? "bg-[#e8f0ff] text-[#3555b1]" : "bg-[#edf2fb] text-[#6f86ab]"}`}>
                          <FiMic className="h-5 w-5" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-[#1f2f57]">
                            {voice.name}
                          </div>
                          <div className="text-xs text-[#7a879b]">
                            {voice.subtitle}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}

              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#3047a3] to-[#df53a7] px-5 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(73,77,180,0.22)] transition-transform hover:scale-[1.01] sm:text-lg lg:rounded-2xl lg:py-4 lg:text-[1.08rem] lg:shadow-[0_16px_34px_rgba(73,77,180,0.24)]">
              <FiZap className="h-4 w-4" />
              Generate Avatar
              <FiArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-4 lg:sticky lg:top-6 lg:space-y-5">
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-3xl lg:p-6">
              <div className="mb-3 flex items-center gap-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                <span className="text-[#e24e9b]">▣</span>
                Avatar Visuals
              </div>

              <label className="flex min-h-42.5 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#d7dfec] bg-[#f9fbff] px-4 py-6 text-center transition-colors hover:bg-[#f5f8fe] lg:min-h-58.75 lg:rounded-3xl">
                <input type="file" className="hidden" accept="image/*" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3fd] text-[#6f86ab] lg:h-14 lg:w-14">
                  <FiUploadCloud className="h-6 w-6" />
                </div>
                <div className="mt-4 text-sm font-semibold text-[#22408c] lg:text-[1rem]">
                  Upload Avatar Image
                </div>
                <div className="mt-1 max-w-45 text-[10px] leading-4 text-[#9aa8bc] lg:text-[0.72rem]">
                  JPG, PNG up to 10MB.
                  <br />
                  Face should be clearly visible.
                </div>
              </label>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-[10px] font-bold tracking-[0.18em] text-[#8d9bb1] lg:text-[0.68rem]">
                  <span>Preview Quality</span>
                  <span className="tracking-[0.12em] text-[#24428b]">HD (1080P)</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#e3eaf4]">
                  <div className="h-1.5 w-[82%] rounded-full bg-[#2f4ea3]" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#2946a0] p-5 text-white shadow-[0_14px_30px_rgba(41,70,160,0.26)] lg:rounded-3xl lg:p-6">
              <div className="mb-2 flex items-center gap-2 text-[15px] font-medium lg:text-[1.05rem]">
                <span>◌</span>
                Pro Tip
              </div>
              <p className="text-sm leading-6 text-[#d8e1f7] lg:text-[0.95rem]">
                For the most realistic results, use a high-resolution photo with
                even lighting and a neutral background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
