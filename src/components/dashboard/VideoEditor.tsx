"use client";

import { useRouter } from "next/navigation";
import {
  IconArrowLeft,
  IconCloudUpload,
  IconPlayerPlayFilled,
  IconPlus,
  IconRefresh,
  IconRotate,
  IconSearch,
  IconTextSize,
  IconVideo,
  IconWaveSine,
} from "@tabler/icons-react";

const mediaItems = [
  { name: "Clip 01", duration: "0:12" },
  { name: "Clip 02", duration: "0:08" },
];

export default function VideoEditor() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/library");
  };

  return (
    <div className="min-h-screen bg-[#eef2f7] p-3 sm:p-4 lg:p-6">
      <div className="mx-auto w-full max-w-375 overflow-hidden rounded-2xl border border-[#dfe6f1] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.12)]">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9edf5] px-4 py-2.5">
          <div className="flex items-center gap-3 text-[#2b4a9f]">
            <button
              type="button"
              onClick={handleBack}
              className="rounded-md p-1.5 transition hover:bg-[#eef3ff]"
              aria-label="Go back"
            >
              <IconArrowLeft className="h-4 w-4" />
            </button>
            <p className="text-sm font-semibold">Video Editor</p>
            <div className="h-4 w-px bg-[#d8dfed]" />
            <button type="button" className="rounded-md p-1 text-[#6b7ca7] hover:bg-[#f2f5fb]">
              <IconRotate className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-md p-1 text-[#6b7ca7] hover:bg-[#f2f5fb]">
              <IconRefresh className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md border border-[#d9e0ed] bg-[#f8faff] px-4 py-1.5 text-xs font-medium text-[#54668f]"
            >
              Preview
            </button>
            <button
              type="button"
              className="rounded-md bg-[linear-gradient(135deg,#30449f,#d45ca7)] px-4 py-1.5 text-xs font-semibold text-white shadow-[0_8px_16px_rgba(72,69,160,0.3)]"
            >
              Export
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[175px_minmax(0,1fr)_260px]">
          <aside className="border-r border-[#e8edf6] bg-[#fafcff] p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-[#26489d]">Media Pool</p>
              <button type="button" className="rounded-md p-1 text-[#27489d] hover:bg-[#eef3ff]">
                <IconPlus className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-2.5 space-y-2">
              {mediaItems.map((item) => (
                <div key={item.name} className="rounded-md bg-[#0d0f14] px-2.5 py-2 text-white shadow-sm">
                  <div className="flex items-center justify-between text-[10px]">
                    <IconPlayerPlayFilled className="h-3 w-3" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="border-r border-[#e8edf6] bg-white">
            <div className="p-3">
              <div className="relative mx-auto max-w-190 overflow-hidden border border-[#dfe6f2] bg-[#0f1320] shadow-[0_12px_24px_rgba(0,0,0,0.24)]">
                <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full bg-black/65 px-3 py-1 text-[10px] text-white">
                  00:04:12 / 00:15:00
                </div>
                <div className="relative aspect-4/3 w-full bg-[radial-gradient(circle_at_center,#222735_0%,#10131a_100%)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-2xl bg-white p-6 shadow-2xl">
                      <IconPlayerPlayFilled className="h-12 w-12 text-[#1f2838]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="bg-[#fafcff] p-3">
            <div className="rounded-lg border border-[#e4eaf6] bg-white p-3">
              <p className="text-xs font-semibold text-[#2f4ea1]">Subtitles</p>
              <label className="mt-2 block text-[11px] font-semibold text-slate-500">Content</label>
              <textarea
                defaultValue="Discover the universe beyond our reach..."
                className="mt-1 h-14 w-full resize-none rounded-md border border-[#e3e9f5] p-2 text-xs text-slate-600 outline-none"
              />

              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <label className="mb-1 block text-[11px] font-semibold text-slate-500">Font</label>
                  <select className="w-full rounded-md border border-[#e2e8f5] bg-white px-2 py-1.5 text-xs text-slate-600">
                    <option>Manrope</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-[11px] font-semibold text-slate-500">Weight</label>
                  <select className="w-full rounded-md border border-[#e2e8f5] bg-white px-2 py-1.5 text-xs text-slate-600">
                    <option>Bold</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                className="mx-auto mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-[#d8e0ef] bg-[#f7faff] px-3 py-2 text-[11px] font-semibold text-[#5770a4] hover:bg-[#eef3ff]"
              >
                <IconCloudUpload className="h-4 w-4" />
                Upload Audio
              </button>
            </div>
          </aside>
        </div>

        <div className="border-t border-[#e9edf5] bg-[#fbfcff]">
          <div className="grid grid-cols-[52px_minmax(0,1fr)]">
            <div className="border-r border-[#e6ebf5] px-2 py-2 text-[#8a97b8]">
              <div className="flex items-center gap-1 text-[10px]">
                <IconSearch className="h-3 w-3" />
                <IconSearch className="h-3 w-3" />
              </div>
              <div className="mt-4 space-y-4 text-[9px] font-semibold uppercase tracking-wider">
                <div className="flex flex-col items-center gap-1">
                  <IconTextSize className="h-3.5 w-3.5" />
                  Text
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconVideo className="h-3.5 w-3.5" />
                  Video
                </div>
                <div className="flex flex-col items-center gap-1">
                  <IconWaveSine className="h-3.5 w-3.5" />
                  Audio
                </div>
              </div>
            </div>

            <div className="relative px-2 py-2">
              <div className="mb-2 flex items-center gap-8 text-[9px] font-medium text-[#a0aac3]">
                <span>00:00:00</span>
                <span>00:00:05</span>
                <span className="font-bold text-[#223f95]">00:00:10</span>
                <span>00:00:15</span>
                <span>00:00:20</span>
                <span>00:00:25</span>
                <span>00:00:30</span>
              </div>

              <div className="absolute bottom-0 left-42.5 top-0 w-0.5 bg-[#eb66b7]" />

              <div className="space-y-2.5 pb-3">
                <div className="h-9 max-w-[320px] rounded-md border border-[#e6bfd6] bg-[#fdeef6] px-3 text-[11px] text-[#cb71a1] flex items-center">
                  <span className="mr-2 rounded bg-[#f6ddeb] px-1 py-0.5 text-[9px] font-semibold text-[#b05a8b]">Tr</span>
                  Discover the universe...
                </div>
                <div className="h-9 max-w-125 rounded-md border border-[#9eb3dc] bg-[#eaf1ff] px-3 text-[11px] text-[#2c4f9f] flex items-center">
                  Beach_Drone_POV.mp4
                </div>
                <div className="h-9 max-w-160 rounded-md border border-[#bcb6e5] bg-[#e6e0ff] px-3 text-[11px] text-[#6d63a4] flex items-center">
                  AI_Score.wav
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
