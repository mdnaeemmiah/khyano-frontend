"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiChevronDown,
  FiImage,
  FiUser,
  FiVideo,
  FiZap,
  FiUploadCloud,
} from "react-icons/fi";

const lightingStyles = ["Daylight", "Golden Hour", "Night", "Studio", "Cyberpunk"];

export default function AiAvatar() {
  const [mode, setMode] = useState("Text to Avatar");
  const [lightingStyle, setLightingStyle] = useState("Daylight");
  const [cameraDistance, setCameraDistance] = useState("Medium (Waist up)");
  const [promptScale, setPromptScale] = useState(0.75);
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("Young Adult");
  const [ethnicity, setEthnicity] = useState("Caucasian");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f8ff] px-3 py-4 text-[#17346f] sm:px-4 sm:py-6 lg:px-6 lg:py-8">
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#dbe7ff] blur-3xl opacity-50 lg:-left-16 lg:top-0 lg:h-96 lg:w-96" />
      <div className="pointer-events-none absolute -right-28 top-44 h-80 w-80 rounded-full bg-[#f7d7ea] blur-3xl opacity-40 lg:right-0 lg:top-16 lg:h-120 lg:w-120" />

      <div className="relative mx-auto ">
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
            { label: "Text to Avatar", icon: FiUser },
            { label: "Image to Avatar", icon: FiImage, href: "/aiAvatar/iamgeToAvatar" },
            { label: "Video to Avatar", icon: FiVideo, href: "/aiAvatar/videoToAvatar" },
          ].map(({ label, icon: Icon }) => {
            const active = mode === label;
            return (
              <Link
                key={label}
                href={label === "Image to Avatar" ? "/aiAvatar/iamgeToAvatar" : label === "Video to Avatar" ? "/aiAvatar/videoToAvatar" : "/aiAvatar"}
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

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start lg:gap-6 xl:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)]">
          <div className="space-y-4 lg:space-y-5">
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-[1.6rem] lg:p-6">
              <div className="mb-3 flex items-center gap-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                <span className="text-[#e24e9b]">✦</span>
                Appearance
              </div>
              <p className="mb-3 text-xs text-[#7f8ca4] sm:text-sm lg:mb-4 lg:text-[0.98rem]">
                Describe the appearance of your avatar.
              </p>
              <textarea
                className="min-h-28 w-full resize-none rounded-xl bg-[#f4f7fc] px-4 py-4 text-sm text-[#6b7a90] outline-none placeholder:text-[#91a0b7] sm:min-h-32 lg:min-h-36 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-[1rem]"
                placeholder="e.g. A futuristic detective with cybernetic enhancements..."
              />

              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:mt-5 lg:gap-4">
                {[
                  {
                    label: "Gender",
                    value: gender,
                    options: ["Male", "Female", "Non-binary", "Prefer not to say"],
                    setter: setGender,
                  },
                  {
                    label: "Age",
                    value: age,
                    options: ["Child", "Teen", "Young Adult", "Adult", "Senior"],
                    setter: setAge,
                  },
                  {
                    label: "Ethnicity",
                    value: ethnicity,
                    options: [
                      "African",
                      "Asian",
                      "Caucasian",
                      "Hispanic / Latino",
                      "Middle Eastern",
                      "South Asian",
                      "Mixed",
                      "Other",
                    ],
                    setter: setEthnicity,
                  },
                ].map((field) => (
                  <div key={field.label}>
                    <div className="mb-1 text-[11px] font-medium text-[#6f7d96] lg:mb-2 lg:text-[0.78rem]">
                      {field.label}
                    </div>
                    <div className="relative">
                      <select
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        className="h-10 w-full appearance-none rounded-lg bg-[#f4f7fc] px-3 pr-9 text-sm text-[#41506a] outline-none transition-colors hover:bg-[#eef3fb] lg:h-11 lg:rounded-xl lg:px-4 lg:text-[0.96rem]"
                      >
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#97a5bb]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-[1.6rem] lg:p-6">
              <div className="mb-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                Outfit (Optional)
              </div>
              <textarea
                className="min-h-20 w-full resize-none rounded-xl bg-[#f4f7fc] px-4 py-4 text-sm text-[#6b7a90] outline-none placeholder:text-[#91a0b7] lg:min-h-24 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-[1rem]"
                placeholder="Describe clothes, fabrics, and colors..."
              />

              <div className="mt-3 flex flex-wrap gap-2 lg:mt-4 lg:gap-2.5">
                {[
                  "Casual",
                  "Formal",
                  "Sporty",
                  "Doctor",
                  "Nurse",
                  "Chef",
                  "Worker",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#fde8f3] px-3 py-1 text-[11px] font-medium text-[#cb4d92] lg:px-3.5 lg:py-1.5 lg:text-[0.74rem]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 lg:mt-5">
                <p className="mb-2 text-[11px] font-medium text-[#6f7d96] lg:text-[0.78rem]">
                  Upload the picture of the clothes that you want on the Avatar
                </p>
                <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#d8e0ee] bg-[#fbfcff] px-4 py-4 text-center transition-colors hover:bg-[#f7faff] lg:min-h-36 lg:rounded-[1.4rem] lg:px-6 lg:py-6">
                  <input className="hidden" type="file" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3fd] text-[#6f86ab] lg:h-12 lg:w-12">
                    <FiUploadCloud className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-[#22408c] lg:mt-4 lg:text-[0.98rem]">
                    Click to upload or drag and drop
                  </div>
                  <div className="mt-1 text-[10px] font-medium tracking-[0.12em] text-[#a2afc3] lg:mt-1.5 lg:text-[0.72rem]">
                    PNG, JPG up to 10MB
                  </div>
                </label>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-[1.6rem] lg:p-6">
              <div className="mb-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                Behavior Prompt
              </div>
              <p className="mb-3 text-xs text-[#7f8ca4] sm:text-sm lg:mb-4 lg:text-[0.98rem]">
                Describe the avatar&apos;s actions, expressions, or style
              </p>
              <textarea
                className="min-h-24 w-full resize-none rounded-xl bg-[#f4f7fc] px-4 py-4 text-sm text-[#6b7a90] outline-none placeholder:text-[#91a0b7] lg:min-h-28 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-[1rem]"
                placeholder="e.g. Standing confidently with a slight smirk, hands in pockets..."
              />

              <div className="mt-4 flex items-center justify-between gap-3 text-[11px] font-medium text-[#6f7d96] lg:mt-5 lg:text-[0.78rem]">
                <span>Prompt guidance scale</span>
                <span className="text-sm font-semibold text-[#2b4fa8]">
                  {promptScale.toFixed(2)}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-3 lg:mt-3">
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#b0bacb] lg:text-[0.66rem]">
                  CREATIVE
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
                  STRICT
                </span>
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#3047a3] to-[#df53a7] px-5 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(73,77,180,0.22)] transition-transform hover:scale-[1.01] sm:text-lg lg:rounded-2xl lg:py-4.5 lg:text-[1.08rem] lg:shadow-[0_16px_34px_rgba(73,77,180,0.24)]">
              <FiZap className="h-4 w-4" />
              Generate Avatar
            </button>
          </div>

          <div className="space-y-4 lg:sticky lg:top-6 lg:space-y-5">
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-[1.6rem] lg:p-6">
              <div className="mb-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                More details (Optional)
              </div>
              <textarea
                className="min-h-28 w-full resize-none rounded-xl bg-[#f4f7fc] px-4 py-4 text-sm text-[#6b7a90] outline-none placeholder:text-[#91a0b7] lg:min-h-36 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-[1rem]"
                placeholder="Hair style, tattoos, beards, freckles..."
              />
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-[1.6rem] lg:p-6">
              <div className="mb-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                Camera &amp; Lighting
              </div>

              <div className="mb-2 text-[11px] font-medium text-[#6f7d96] lg:text-[0.78rem]">
                Lighting Style
              </div>
              <div className="flex flex-wrap gap-2 lg:gap-2.5">
                {lightingStyles.map((item) => {
                  const active = lightingStyle === item;
                  return (
                    <button
                      key={item}
                      onClick={() => setLightingStyle(item)}
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-colors lg:px-3.5 lg:py-1.5 lg:text-[0.74rem] ${
                        active
                          ? "bg-[#2e4ea3] text-white shadow-[0_4px_10px_rgba(46,78,163,0.22)]"
                          : "bg-[#edf2fb] text-[#496081] hover:bg-[#e5ecf8]"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 lg:mt-5">
                <div className="mb-2 text-[11px] font-medium text-[#6f7d96] lg:text-[0.78rem]">
                  Camera Distance
                </div>
                <div className="relative">
                  <select
                    value={cameraDistance}
                    onChange={(e) => setCameraDistance(e.target.value)}
                    className="h-10 w-full appearance-none rounded-lg bg-[#f4f7fc] px-3 pr-9 text-sm text-[#41506a] outline-none transition-colors hover:bg-[#eef3fb] lg:h-11 lg:rounded-xl lg:px-4 lg:text-[0.96rem]"
                  >
                    {[
                      "Close-up",
                      "Medium (Waist up)",
                      "Full body",
                      "Wide shot",
                    ].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#97a5bb]" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(40,66,122,0.06)] sm:p-5 lg:rounded-[1.6rem] lg:p-6">
              <div className="mb-2 text-[15px] font-medium text-[#24428b] lg:text-[1.05rem]">
                Background
              </div>
              <p className="mb-3 text-xs text-[#7f8ca4] sm:text-sm lg:mb-4 lg:text-[0.98rem]">
                Describe the background scene.
              </p>
              <textarea
                className="min-h-24 w-full resize-none rounded-xl bg-[#f4f7fc] px-4 py-4 text-sm text-[#6b7a90] outline-none placeholder:text-[#91a0b7] lg:min-h-28 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-[1rem]"
                placeholder="e.g. Neon-lit Tokyo street at night..."
              />

              <div className="mt-4 lg:mt-5">
                <div className="mb-2 text-[11px] font-medium text-[#6f7d96] lg:text-[0.78rem]">
                  Scene type
                </div>
                <textarea
                  className="min-h-16 w-full resize-none rounded-xl bg-[#f4f7fc] px-4 py-4 text-sm text-[#6b7a90] outline-none placeholder:text-[#91a0b7] lg:min-h-20 lg:rounded-2xl lg:px-5 lg:py-5 lg:text-[1rem]"
                  placeholder="Cinematic, Studio, Outdoors..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
