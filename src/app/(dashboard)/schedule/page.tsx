"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { IconArrowLeft, IconChevronLeft, IconChevronRight, IconInfoCircle } from "@tabler/icons-react";

type Platform = "facebook" | "instagram" | "tiktok";
type Meridiem = "am" | "pm";

const days = [
  [26, false],
  [27, false],
  [28, false],
  [29, false],
  [30, false],
  [31, false],
  [1, true],
  [2, true],
  [3, true],
  [4, true],
  [5, true],
  [6, true],
  [7, true],
  [8, true],
  [9, true],
  [10, true],
  [11, true],
  [12, true],
  [13, true],
  [14, true],
  [15, true],
  [16, true],
  [17, true],
  [18, true],
  [19, true],
  [20, true],
  [21, true],
  [22, true],
] as const;

function normalizeHours(value: string) {
  const digitsOnly = value.replace(/\D/g, "").slice(0, 2);
  if (!digitsOnly) return "";
  const numeric = Number(digitsOnly);
  if (Number.isNaN(numeric)) return "";
  const clamped = Math.min(12, Math.max(1, numeric));
  return String(clamped).padStart(2, "0");
}

function normalizeMinutes(value: string) {
  const digitsOnly = value.replace(/\D/g, "").slice(0, 2);
  if (!digitsOnly) return "";
  const numeric = Number(digitsOnly);
  if (Number.isNaN(numeric)) return "";
  const clamped = Math.min(59, Math.max(0, numeric));
  return String(clamped).padStart(2, "0");
}

export default function SchedulePage() {
  const router = useRouter();
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [selectedDay, setSelectedDay] = useState(12);
  const [hours, setHours] = useState("09");
  const [minutes, setMinutes] = useState("30");
  const [meridiem, setMeridiem] = useState<Meridiem>("am");

  const selectedPlatformLabel = useMemo(() => {
    if (platform === "facebook") return "Facebook Feed";
    if (platform === "tiktok") return "TikTok Feed";
    return "Instagram Feed";
  }, [platform]);

  const displayHours = normalizeHours(hours) || "01";
  const displayMinutes = normalizeMinutes(minutes) || "00";
  const formattedDate = `Sept ${String(selectedDay).padStart(2, "0")}, 2024`;
  const formattedTime = `${displayHours}:${displayMinutes} ${meridiem.toUpperCase()}`;

  return (
    <section className="min-h-screen bg-[#f3f6fb] p-4 md:p-8">
      <div className="">
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-2 inline-flex items-center text-[#2f4e95]"
        >
          <IconArrowLeft size={20} />
        </button>

        <h1 className="text-3xl font-extrabold tracking-tight text-[#23408a] md:text-5xl">
          Schedule Your Content
        </h1>
        <p className="mt-2 text-sm text-[#6f7f9b] md:text-lg">
          Pick the perfect moment to share your magic with the world.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-[#e4e9f2] bg-white p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#edf1f7] text-sm font-semibold text-[#4c6094]">
                  1
                </span>
                <h2 className="text-lg font-semibold text-[#23408a]">Where to publish?</h2>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setPlatform("facebook")}
                  className={`rounded-2xl border p-5 text-center transition ${
                    platform === "facebook"
                      ? "border-[#2f5ec8] bg-[#f7faff]"
                      : "border-[#e5e9f1] bg-white hover:border-[#cfd8e8]"
                  }`}
                >
                  <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-lg font-bold text-white">
                    f
                  </span>
                  <p className="mt-3 font-semibold text-[#34415c]">Facebook</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform("instagram")}
                  className={`rounded-2xl border p-5 text-center transition ${
                    platform === "instagram"
                      ? "border-[#f04db4] bg-[#fff7fd]"
                      : "border-[#e5e9f1] bg-white hover:border-[#cfd8e8]"
                  }`}
                >
                  <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-lg font-bold text-white">
                    i
                  </span>
                  <p className="mt-3 font-semibold text-[#34415c]">Instagram</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform("tiktok")}
                  className={`rounded-2xl border p-5 text-center transition ${
                    platform === "tiktok"
                      ? "border-[#222a3a] bg-[#f8f9fb]"
                      : "border-[#e5e9f1] bg-white hover:border-[#cfd8e8]"
                  }`}
                >
                  <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    Tik
                  </span>
                  <p className="mt-3 font-semibold text-[#34415c]">TikTok</p>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#e4e9f2] bg-white p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#edf1f7] text-sm font-semibold text-[#4c6094]">
                    2
                  </span>
                  <h2 className="text-lg font-semibold text-[#23408a]">Select Date</h2>
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[#2f3f63]">September 2024</p>
                  <div className="flex items-center gap-2 text-[#30468f]">
                    <button type="button" className="rounded p-1 hover:bg-[#f3f6fc]">
                      <IconChevronLeft size={18} />
                    </button>
                    <button type="button" className="rounded p-1 hover:bg-[#f3f6fc]">
                      <IconChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-7 gap-y-3 text-center text-xs uppercase tracking-wide text-[#a0acc3]">
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                  <span>Su</span>
                </div>

                <div className="mt-3 grid grid-cols-7 gap-y-3 text-center text-sm text-[#3b4a68]">
                  {days.map(([day, inCurrentMonth], idx) => {
                    const isActive = day === selectedDay && inCurrentMonth;
                    return (
                      <button
                        key={`${day}-${idx}`}
                        type="button"
                        disabled={!inCurrentMonth}
                        onClick={() => setSelectedDay(day)}
                        className={`mx-auto h-8 w-8 rounded-lg transition ${
                          !inCurrentMonth
                            ? "cursor-not-allowed text-[#ccd4e4]"
                            : isActive
                              ? "bg-linear-to-r from-[#5a50d8] to-[#cd4ca8] font-semibold text-white"
                              : "hover:bg-[#eff3fa]"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-[#e4e9f2] bg-white p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#edf1f7] text-sm font-semibold text-[#4c6094]">
                    3
                  </span>
                  <h2 className="text-lg font-semibold text-[#23408a]">Pick Time</h2>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 rounded-2xl bg-[#f6f8fc] p-3 text-center">
                    <input
                      aria-label="hours"
                      value={hours}
                      inputMode="numeric"
                      maxLength={2}
                      onChange={(e) => setHours(e.target.value.replace(/\D/g, "").slice(0, 2))}
                      onBlur={() => setHours((current) => normalizeHours(current) || "01")}
                      className="w-full bg-transparent text-center text-4xl font-extrabold text-[#1f2937] outline-none"
                    />
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#98a7c2]">Hours</p>
                  </div>
                  <span className="text-2xl font-bold text-[#9ba7be]">:</span>
                  <div className="flex-1 rounded-2xl bg-[#f6f8fc] p-3 text-center">
                    <input
                      aria-label="minutes"
                      value={minutes}
                      inputMode="numeric"
                      maxLength={2}
                      onChange={(e) => setMinutes(e.target.value.replace(/\D/g, "").slice(0, 2))}
                      onBlur={() => setMinutes((current) => normalizeMinutes(current) || "00")}
                      className="w-full bg-transparent text-center text-4xl font-extrabold text-[#1f2937] outline-none"
                    />
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#98a7c2]">Minutes</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 rounded-xl bg-[#f3f6fc] p-1">
                  <button
                    type="button"
                    onClick={() => setMeridiem("am")}
                    className={`rounded-lg py-2 text-sm font-semibold uppercase ${
                      meridiem === "am" ? "bg-white text-[#2645a3]" : "text-[#96a6c2]"
                    }`}
                  >
                    AM
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeridiem("pm")}
                    className={`rounded-lg py-2 text-sm font-semibold uppercase ${
                      meridiem === "pm" ? "bg-white text-[#2645a3]" : "text-[#96a6c2]"
                    }`}
                  >
                    PM
                  </button>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#eef3fb] px-3 py-3 text-sm text-[#3d56a2]">
                  <IconInfoCircle size={16} />
                  <span>Best time for engagement is 10:45 AM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-[#e4e9f2] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-[#273a67]">Preview</h3>
                <div className="flex items-center gap-2 text-[#8da0c2]">
                  <span className="inline-flex h-4 w-4 rounded-sm border" />
                  <span className="inline-flex h-4 w-3 rounded-sm border" />
                </div>
              </div>

              <Image
                src="/assets/ai-sample-1.svg"
                width={640}
                height={400}
                alt="Post preview"
                className="h-40 w-full rounded-xl object-cover"
              />

              <div className="mt-3 flex items-center gap-2 text-sm text-[#8ea0ba]">
                <span className="inline-flex h-3 w-3 rounded-full bg-[#e13f95]" />
                <span>{selectedPlatformLabel}</span>
              </div>

              <p className="mt-2 text-sm leading-6 text-[#5e6e88]">
                Embracing the flow of digital creativity. Our latest AI-generated series explores the intersection of
                design and imagination.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e4e9f2] bg-white p-5">
              <div className="space-y-3 text-sm text-[#70839f]">
                <div className="flex items-center justify-between">
                  <span>Scheduled Date</span>
                  <span className="font-semibold text-[#2f3f63]">{formattedDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Scheduled Time</span>
                  <span className="font-semibold text-[#2f3f63]">{formattedTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Platforms</span>
                  <div className="flex items-center">
                    <span className="-mr-1 h-4 w-4 rounded-full border border-white bg-[#2a67d4]" />
                    <span className="h-4 w-4 rounded-full border border-white bg-[#cc5e9f]" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-linear-to-r from-[#2d47a8] to-[#d24ea5] px-4 py-3 font-semibold text-white shadow-[0_8px_20px_rgba(72,82,191,0.35)]"
              >
                Schedule Post
              </button>

              <p className="mt-4 text-center text-[10px] font-bold tracking-[0.18em] text-[#b4bed0]">
                YOU CAN EDIT THIS LATER IN YOUR CALENDAR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
