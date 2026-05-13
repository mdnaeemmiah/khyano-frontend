"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  IconArrowLeft,
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconCloud,
  IconCloudUpload,
  IconItalic,
  IconPointFilled,
  IconPencil,
  IconRefresh,
  IconSearch,
  IconUnderline,
  IconX,
} from "@tabler/icons-react";

const textStyles = [
  { title: "Add a heading", sub: "Manrope ExtraBold 24pt", active: true },
  { title: "Add a subheading", sub: "Manrope Bold 18pt", active: false },
  { title: "Add a little bit of body text", sub: "Inter Regular 14pt", active: false },
];

const combinations = [
  { label: "SALE", sub: "LIMITED TIME" },
  { label: "Bloom", sub: "SPRING COLLECTION" },
  { label: "#TECH", sub: "CONFERENCE 2024" },
  { label: "GLOW", sub: "SKINCARE ROUTINE" },
];

export default function ImageEditor() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/library");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#f6f8ff_0%,#eceff6_52%,#e6ebf5_100%)] p-3 sm:p-4 lg:p-5">
      <div className="pointer-events-none absolute -left-16 top-16 h-56 w-56 rounded-full bg-[#d9e5ff] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-[#f2dceb] opacity-70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-375 overflow-hidden rounded-2xl border border-[#dfe6f2] bg-white/95 shadow-[0_20px_46px_rgba(15,23,42,0.14)] backdrop-blur">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e8edf6] bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)] px-4 py-2.5">
          <div className="flex items-center gap-3 text-[#2f4ea2]">
            <button
              onClick={handleBack}
              className="rounded-md p-1.5 transition hover:-translate-y-0.5 hover:bg-[#eef3ff]"
              type="button"
              aria-label="Go back"
            >
              <IconArrowLeft className="h-4 w-4" />
            </button>
            <div className="h-4 w-px bg-[#d7deee]" />
            <span className="text-xs font-medium text-slate-500">Social Media Post</span>
            <IconPencil className="h-3.5 w-3.5 text-slate-400" />
          </div>

          <div className="flex items-center gap-2 text-[#6e7ea7]">
            <button type="button" className="rounded-md p-1 transition hover:-translate-y-0.5 hover:bg-[#f1f5fc]">
              <IconRefresh className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-md p-1 transition hover:-translate-y-0.5 hover:bg-[#f1f5fc]">
              <IconRefresh className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-md p-1 transition hover:-translate-y-0.5 hover:bg-[#f1f5fc]">
              <IconCloud className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-md border border-[#dbe3f2] bg-white px-3 py-1 text-[11px] font-semibold text-[#25479d]">
              Share
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#30449f,#d45ca7)] px-4 py-1.5 text-[11px] font-semibold text-white shadow-[0_10px_22px_rgba(72,70,160,0.34)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Publish
              <IconCloudUpload className="h-3.5 w-3.5" />
            </button>
          </div>
        </header>

        <div className="grid min-h-197.5 grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)]">
          <aside className="border-r border-[#edf1f7] bg-[linear-gradient(180deg,#fcfdff_0%,#f6f9ff_100%)] p-4">
            <p className="text-3xl font-semibold tracking-[-0.02em] text-[#28499d]">Text Styles</p>

            <div className="mt-3 space-y-2.5">
              {textStyles.map((style) => (
                <button
                  key={style.title}
                  className={`group w-full rounded-2xl border p-3 text-left transition duration-200 hover:-translate-y-0.5 ${
                    style.active
                      ? "border-[#2e4ea2] bg-[linear-gradient(180deg,#f4f7ff_0%,#edf2ff_100%)] shadow-[0_10px_18px_rgba(46,78,162,0.16)]"
                      : "border-[#e9eff8] bg-white hover:border-[#d8e0ef] hover:bg-[#fbfcff] hover:shadow-[0_6px_14px_rgba(38,60,120,0.08)]"
                  }`}
                  type="button"
                >
                  <p className="text-[28px] font-semibold leading-[1.15] text-[#244799]">{style.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{style.sub}</p>
                </button>
              ))}
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
              Font Combinations
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {combinations.map((combo) => (
                <div
                  key={combo.label}
                  className="rounded-xl border border-[#e8eef8] bg-white px-2 py-4 text-center text-[#314b8f] transition hover:-translate-y-0.5 hover:border-[#d9e1f1] hover:shadow-sm"
                >
                  <p className="text-[21px] font-semibold leading-none tracking-[-0.01em]">{combo.label}</p>
                  <p className="mt-1 text-[9px] font-semibold tracking-widest text-slate-400">{combo.sub}</p>
                </div>
              ))}
            </div>
          </aside>

          <section className="relative bg-[linear-gradient(180deg,#f2f5fa_0%,#eef2f8_100%)]">
            <div className="p-4 sm:p-5">
              <div className="mx-auto mt-2 max-w-270 rounded-full border border-[#e4eaf5] bg-white px-5 py-2.5 shadow-[0_12px_26px_rgba(15,23,42,0.1)]">
                <div className="flex items-center gap-3 text-slate-500">
                  <span className="text-[11px] font-semibold text-[#29489c]">Manrope</span>
                  <span className="text-[11px]">42</span>
                  <button className="rounded p-1 font-bold text-[#344b8f] transition hover:bg-[#f2f5fc]" type="button">
                    <IconBold className="h-3.5 w-3.5" />
                  </button>
                  <button className="rounded p-1 text-[#344b8f] transition hover:bg-[#f2f5fc]" type="button">
                    <IconItalic className="h-3.5 w-3.5" />
                  </button>
                  <button className="rounded p-1 text-[#344b8f] transition hover:bg-[#f2f5fc]" type="button">
                    <IconUnderline className="h-3.5 w-3.5" />
                  </button>
                  <button className="rounded p-1 text-[#344b8f] transition hover:bg-[#f2f5fc]" type="button">
                    <IconAlignLeft className="h-3.5 w-3.5" />
                  </button>
                  <button className="rounded p-1 text-[#344b8f] transition hover:bg-[#f2f5fc]" type="button">
                    <IconAlignCenter className="h-3.5 w-3.5" />
                  </button>
                  <button className="rounded p-1 text-[#344b8f] transition hover:bg-[#f2f5fc]" type="button">
                    <IconAlignRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="mt-8 flex justify-center pb-24">
                <div className="relative w-full max-w-160 overflow-hidden rounded-md border border-[#b6c4dd] shadow-[0_18px_34px_rgba(15,23,42,0.18)] ring-4 ring-white/70">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/assets/AB6AXuAWnOWFz5Lg4NUD-itraNbTAozryVCn5bVX6k1upSukmecB7GQGvYtNy-4kfkobDcfBO5VRZ33XSaszudApcll9crgUYOKOjFbFguPBlt4rfH3b3awRGspnFzMgnWtBZLRNODkYleBYdSAdB1mTZeqj7ltlkCp_3B34fQyXGmkzAVd6v6PRsIyfdmrDz88OHcOwDNN.png"
                      alt="Editable design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 right-7 rounded-2xl border border-[#e4eaf6] bg-white/95 px-4 py-3 shadow-[0_16px_30px_rgba(15,23,42,0.16)]">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-[#f6e7f4] p-2 text-[#c74c97]">
                    <IconPointFilled className="h-2.5 w-2.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#2f4ea2]">Pro Tip</p>
                    <p className="text-[11px] text-slate-500">Drag to move any text element!</p>
                  </div>
                  <button type="button" className="ml-2 rounded p-1 text-slate-300 transition hover:bg-[#f3f6fd] hover:text-slate-500">
                    <IconX className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[#e4eaf5] bg-white/85 px-4 py-2 text-[10px] text-slate-500">
                <div className="flex items-center gap-2">
                  <IconSearch className="h-3 w-3" />
                  <span>65%</span>
                  <span>Page Grid</span>
                </div>
                <span>2 collaborators</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
