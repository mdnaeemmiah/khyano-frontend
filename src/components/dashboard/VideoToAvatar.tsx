"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiCheckCircle,
  FiChevronDown,
  FiImage,
  FiUploadCloud,
  FiUser,
  FiVideo,
  FiZap,
} from "react-icons/fi";

const requirements = [
  "Duration must be greater than 15s for high fidelity",
  "Clear lighting with no harsh shadows on face",
  "16:9 Aspect Ratio (Horizontal) preferred",
  "Stable camera, no excessive motion blur",
];

const referenceCards = [
  { src: "/assets/ai-sample-1.svg", label: "CLEAR FACE", status: "ok" },
  { src: "/assets/AB6AXuAWnOWFz5Lg4NUD-itraNbTAozryVCn5bVX6k1upSukmecB7GQGvYtNy-4kfkobDcfBO5VRZ33XSaszudApcll9crgUYOKOjFbFguPBlt4rfH3b3awRGspnFzMgnWtBZLRNODkYleBYdSAdB1mTZeqj7ltlkCp_3B34fQyXGmkzAVd6v6PRsIyfdmrDz88OHcOwDNN.png", label: "BLURRED", status: "bad" },
  { src: "/assets/AB6AXuCRdQh-YIne0iaza8vyVlWYXfN8HJMXXHHTLu23xlh9jg5nwmcJCeWUE1ZjPWe4jAloHLY_PtuY3D8Z844l6-q9WiFBI5E03dpyErTGLDiXeaQCkpjla_BO1EltRDBC3Bpy0_Q351kyoztU6FVA2mvmm8ZIxjUJ20VK6pNPULzjZ4rUvYoc3VWQFh3vSMOTD4V6Jn8.png", label: "OBSTRUCTED", status: "bad" },
  { src: "/assets/Visual%20Asset.svg", label: "TOO FAR", status: "bad" },
];

export default function VideoToAvatar() {
  const [mode, setMode] = useState("Video to Avatar");
  const [promptScale, setPromptScale] = useState(0.75);
  const [videoName, setVideoName] = useState<string | null>(null);

  function handleVideoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setVideoName(file.name);
  }

  return (
    <section className="min-h-screen bg-[#f4f8ff] px-3 py-4 text-[#17346f] sm:px-4 sm:py-6 lg:px-6 lg:py-8">
      <div className="mx-auto">
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

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:items-start lg:gap-5">
          <div className="space-y-4 lg:space-y-5">
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-3xl lg:p-6">
              <div className="mb-3 flex items-center gap-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                <span className="text-[#e24e9b]">
                  <FiUploadCloud className="h-5 w-5" />
                </span>
                Upload your video
              </div>

              <label className="flex min-h-42.5 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#d7dfec] bg-[#f9fbff] px-4 py-6 text-center transition-colors hover:bg-[#f5f8fe] lg:min-h-55 lg:rounded-[1.45rem]">
                <input type="file" className="hidden" accept="video/*" onChange={handleVideoUpload} />
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3fd] text-[#6f86ab] lg:h-14 lg:w-14">
                  <FiUploadCloud className="h-6 w-6" />
                </div>
                <div className="mt-4 text-sm font-semibold text-[#1f2f57] lg:text-[1rem]">
                  Drag and drop video files
                </div>
                <div className="mt-1 text-[10px] leading-4 text-[#9aa8bc] lg:text-[0.72rem]">
                  MP4, MOV up to 500MB
                </div>
                {videoName && (
                  <div className="mt-3 max-w-full truncate text-[11px] font-medium text-[#2f4fa1] lg:text-[0.78rem]">
                    {videoName}
                  </div>
                )}
              </label>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-3xl lg:p-6">
              <div className="mb-3 flex items-center gap-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                <span className="text-[#e24e9b]">
                  <FiChevronDown className="h-5 w-5 rotate-180" />
                </span>
                Behavior Prompt
              </div>
              <p className="mb-3 text-xs text-[#7f8ca4] sm:text-sm lg:mb-4 lg:text-[0.95rem]">
                Character Actions &amp; Emotions
              </p>
              <textarea
                className="min-h-28 w-full resize-none rounded-xl bg-[#f4f7fc] px-4 py-4 text-sm leading-6 text-[#6b7a90] outline-none placeholder:text-[#91a0b7] sm:min-h-32 lg:min-h-44 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-[0.98rem]"
                placeholder="e.g., The character should maintain a professional yet warm smile. Subtle hand gestures while explaining concepts. Occasional thoughtful nods..."
              />

              <div className="mt-4 flex items-center justify-between gap-3 text-[11px] font-medium text-[#6f7d96] lg:mt-5 lg:text-[0.78rem]">
                <span>Prompt guidance scale</span>
                <span className="rounded-md bg-[#edf2ff] px-2 py-1 text-[11px] font-semibold text-[#4a61c5]">
                  {promptScale.toFixed(2)}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-3 lg:mt-3">
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#b0bacb] lg:text-[0.66rem]">
                  CREATIVE (0.0)
                </span>
                <input
                  value={promptScale}
                  onChange={(e) => setPromptScale(Number(e.target.value))}
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  className="h-1.5 w-full accent-[#3e60c0]"
                />
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#b0bacb] lg:text-[0.66rem]">
                  PRECISE (1.0)
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:sticky lg:top-6 lg:space-y-5">
            <div className="rounded-3xl bg-[#2c3138] p-4 text-white shadow-[0_14px_30px_rgba(33,37,43,0.22)] sm:p-5 lg:p-6">
              <div className="mb-4 flex items-center gap-2 text-[15px] font-medium lg:text-[1.05rem]">
                <span className="text-[#ff5dbb]">
                  <FiZap className="h-5 w-5" />
                </span>
                Video Requirements
              </div>

              <div className="space-y-3 text-sm text-[#cdd6e3] lg:text-[0.92rem]">
                {requirements.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#24d46b]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 lg:mt-6">
                {referenceCards.map((card) => (
                  <div key={card.label} className="relative overflow-hidden rounded-lg bg-[#171a1f] shadow-[0_6px_16px_rgba(0,0,0,0.2)]">
                    <div
                      className="h-28 bg-cover bg-center lg:h-32"
                      style={{ backgroundImage: `url(${card.src})` }}
                    />
                    <Image
                      src="/assets/Border.png"
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="pointer-events-none object-cover"
                    />
                    <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-[#22262d] text-[10px] font-bold leading-4 text-white">
                      {card.status === "ok" ? "✓" : "✕"}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-2 py-2 text-[10px] font-bold tracking-[0.12em] text-white">
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-8 lg:max-w-190">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#3047a3] to-[#df53a7] px-5 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(73,77,180,0.22)] transition-transform hover:scale-[1.01] sm:text-lg lg:rounded-2xl lg:py-4 lg:text-[1.08rem] lg:shadow-[0_16px_34px_rgba(73,77,180,0.24)]">
            <FiZap className="h-4 w-4" />
            Generate Avatar
          </button>
        </div>
      </div>
    </section>
  );
}
