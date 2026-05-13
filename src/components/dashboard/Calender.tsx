"use client";

import React, { useMemo, useState } from "react";
import { FiBell, FiX, FiPlay } from "react-icons/fi";

type CalendarEvent = {
  day: number;
  title: string;
  tag: string;
  tone: string;
  note: string;
};

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const events: CalendarEvent[] = [
  { day: 1, title: "Engagement Post", tag: "Growth", tone: "from-[#f9d65f] to-[#d9a52a]", note: "Scheduled for 9:00 AM." },
  { day: 2, title: "Product Demo", tag: "Video", tone: "from-[#1f4e7a] to-[#7cc6d0]", note: "Demo cut is ready for review." },
  { day: 3, title: "Launch Day", tag: "Campaign", tone: "from-[#0f8ec2] to-[#3fb2e0]", note: "Primary launch post goes live." },
  { day: 4, title: "Daily Tip", tag: "Content", tone: "from-[#b2c86a] to-[#f0d76a]", note: "Tip card prepared for social channels." },
  { day: 5, title: "Early Bird Promo", tag: "Offer", tone: "from-[#f5f0a8] to-[#d9d980]", note: "Promotion is pending approval." },
  { day: 6, title: "Team Spotlight", tag: "Brand", tone: "from-[#d4df92] to-[#91c6a2]", note: "Team intro creative is uploaded." },
  { day: 7, title: "Weekend Video", tag: "Reel", tone: "from-[#9bd1a2] to-[#6fb7aa]", note: "Short-form video is queued." },
  { day: 8, title: "Behind Scenes", tag: "Story", tone: "from-[#c6e2b4] to-[#8cc29f]", note: "Story set for afternoon posting." },
  { day: 10, title: "Kickoff Event", tag: "Live", tone: "from-[#7e9ab1] to-[#e3c3a8]", note: "Livestream reminder attached." },
  { day: 12, title: "Flash Sale", tag: "Promo", tone: "from-[#f3d06f] to-[#f6a85b]", note: "Sale banner can be published." },
  { day: 15, title: "Grand Launch", tag: "Priority", tone: "from-[#24468f] to-[#f5d76e]", note: "Top priority launch post." },
  { day: 18, title: "Ad Campaign", tag: "Ads", tone: "from-[#e3b0be] to-[#f2d7df]", note: "Campaign assets are synced." },
  { day: 20, title: "Feature Highlight", tag: "Feature", tone: "from-[#d4e3f1] to-[#9ec2da]", note: "Feature tile is ready." },
  { day: 21, title: "Community Post", tag: "Community", tone: "from-[#bfe0c9] to-[#8ed1b6]", note: "Community response template ready." },
  { day: 22, title: "Lazy Sunday", tag: "Soft", tone: "from-[#d8e8d9] to-[#f4e6a6]", note: "Light content scheduled." },
  { day: 24, title: "Explainer", tag: "Education", tone: "from-[#d8f1c8] to-[#b2e0aa]", note: "Explainer script is complete." },
  { day: 26, title: "Case Study", tag: "Proof", tone: "from-[#d5f3d8] to-[#e8efb2]", note: "Case study draft attached." },
  { day: 28, title: "Sneak Peek", tag: "Teaser", tone: "from-[#d9f3bb] to-[#cbe68d]", note: "Teaser video needs final sign-off." },
  { day: 29, title: "Lifestyle", tag: "Content", tone: "from-[#c7f3cd] to-[#e0f0c3]", note: "Lifestyle tile is in place." },
  { day: 30, title: "Announcement", tag: "Update", tone: "from-[#d7e6fb] to-[#b8c8eb]", note: "Announcement is ready to publish." },
  { day: 31, title: "Halloween Special", tag: "Seasonal", tone: "from-[#f0d9ea] to-[#e7e7a0]", note: "Seasonal creative is queued." },
];

const monthCells = [
  null, null, null, null, null, null,
  1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28,
  29, 30, 31,
];

export default function Calender() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [monthLabel] = useState("October 2023");
  const [view, setView] = useState("Month");
  const [message, setMessage] = useState("Awaiting final approval from Creative Team");

  const selectedEvent = useMemo(
    () => events.find((event) => event.day === selectedDay) ?? null,
    [selectedDay],
  );

  function openDay(day: number) {
    setSelectedDay(day);
    const event = events.find((item) => item.day === day);
    setMessage(event ? `Opened ${event.title} for review.` : `Day ${day} selected.`);
  }

  return (
    <section className="min-h-screen bg-[#eef2f7] px-3 py-4 text-[#17346f] sm:px-4 sm:py-6 lg:px-6 lg:py-8">
      <div className="mx-auto ">
        <div className="flex  lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-[-0.03em] text-[#1d3f97] sm:text-[2.15rem] lg:text-[2.6rem]">
              {monthLabel}
            </h1>
            <p className="mt-1 text-sm text-[#7d8aa3] sm:text-[15px]">
              31 posts scheduled for this month
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            <div className="inline-flex rounded-full bg-white p-1 shadow-[0_8px_20px_rgba(55,76,132,0.08)]">
              {["Month", "Week", "Day"].map((item) => {
                const active = view === item;
                return (
                  <button
                    key={item}
                    onClick={() => setView(item)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-[#eff4ff] text-[#22408c] shadow-sm"
                        : "text-[#8391a8] hover:text-[#22408c]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <button className="inline-flex items-center gap-2 rounded-xl border-2 border-[#2448b4] bg-white px-5 py-3 text-sm font-semibold text-[#2448b4] transition-colors hover:bg-[#f5f8ff] lg:px-6">
              <FiBell className="h-4 w-4" />
              Set Reminder
            </button>
          </div>
        </div>

        <div  className="mt-5">
          <div className="rounded-4xl bg-white p-4 shadow-[0_18px_40px_rgba(63,85,135,0.08)] sm:p-5 lg:p-6">
            <div className="grid grid-cols-7  gap-1 border-b border-[#edf1f7] pb-3 text-center text-[10px] font-semibold tracking-[0.18em] text-[#a0adbf] sm:text-[11px] lg:text-xs">
              {weekdays.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-7 gap-3">
              {monthCells.map((day, index) => {
                const event = day ? events.find((item) => item.day === day) : null;
                const isActive = day === selectedDay;
                return (
                  <button
                    key={`${day ?? "empty"}-${index}`}
                    onClick={() => day && openDay(day)}
                    className={`group relative min-h-28 rounded-3xl border p-3 text-left transition-all sm:min-h-32 lg:min-h-36 ${
                      day
                        ? isActive
                          ? "border-[#2547b2] bg-[#f8fbff] shadow-[0_6px_20px_rgba(37,71,178,0.06)]"
                          : "border-[#f0f4fa] bg-white hover:border-[#d8e4fb] hover:shadow-[0_10px_24px_rgba(63,85,135,0.05)]"
                        : "border-transparent bg-transparent"
                    }`}
                  >
                    {day && (
                      <>
                        <div className="flex items-start justify-between">
                          <span className="text-sm font-semibold text-[#2b3c63]">{day}</span>
                        </div>

                        {event ? (
                          <>
                            <div className="absolute top-3 right-3 w-16 overflow-hidden rounded-lg shadow-md">
                              <div className={`w-full h-full ${event.tone}`} />
                            </div>

                            <div className="mt-3">
                              <span className="inline-block rounded-full bg-white/60 px-2 py-0.5 text-[10px] font-semibold text-[#2f5da9]">
                                {event.tag}
                              </span>
                              <div className="mt-2 text-sm font-semibold text-[#24428b] line-clamp-2">
                                {event.title}
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="mt-3 h-14 rounded-lg bg-[#f6f9fd]" />
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 py-8 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl rounded-3xl bg-white p-6 shadow-[0_40px_80px_rgba(12,32,63,0.28)] sm:p-8">
              <button
                onClick={() => setSelectedDay(null)}
                className="absolute right-5 top-5 rounded-full p-2 text-[#7a879a] transition-colors hover:bg-[#eef2f7] hover:text-[#21345f]"
                aria-label="Close popup"
              >
                <FiX className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                <div className="sm:col-span-7">
                  <div className="relative rounded-xl overflow-hidden bg-[#0f1724] shadow-inner">
                    <div className={`aspect-video w-full bg-linear-to-br ${selectedEvent.tone}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/10 p-3 text-white shadow-lg">
                        <FiPlay className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-4 rounded-md bg-black/30 px-3 py-1 text-xs text-white">0:24 / 1:00</div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 w-16 overflow-hidden rounded-lg border bg-[#f6f8fb]">
                        <div className={`w-full h-full ${selectedEvent.tone}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <h3 className="text-2xl font-semibold text-[#17346f]">{selectedEvent.title}</h3>
                  <p className="mt-1 text-sm text-[#7d8aa3]">Post ID: LX-9942 • Day {selectedEvent.day} • {selectedEvent.tag}</p>

                  <div className="mt-4 rounded-lg bg-[#f7f9fd] p-4 text-sm text-[#5c6b85]">
                    {selectedEvent.note}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-white border p-3 text-[#4b5d7a]">Platform<br/><span className="mt-1 block font-semibold text-[#17346f]">Instagram Reel</span></div>
                    <div className="rounded-xl bg-white border p-3 text-[#4b5d7a]">Estimated reach<br/><span className="mt-1 block font-semibold text-[#16a34a]">24.5k - 40k</span></div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 flex-wrap">
                    <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-sm text-[#2547b2]">Product Launch</span>
                    <span className="rounded-full bg-[#fff0f7] px-3 py-1 text-sm text-[#d6337a]">Cyber-Core</span>
                    <button className="rounded-full border px-3 py-1 text-sm text-[#51607a]">+ Add Tag</button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-t pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-[#dfe8ff]" />
                  <div className="text-sm text-[#6b7b99]">{message}</div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setMessage(`Editing ${selectedEvent.title}...`)}
                    className="rounded-xl border border-[#d9e2ef] px-4 py-2 text-sm font-semibold text-[#23408a] hover:bg-[#f4f7ff]"
                  >
                    Edit Post
                  </button>
                  <button
                    onClick={() => setMessage(`${selectedEvent.title} approved.`)}
                    className="rounded-xl border border-[#d9e2ef] px-4 py-2 text-sm font-semibold text-[#23408a] bg-white"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => setMessage(`${selectedEvent.title} scheduled.`)}
                    className="rounded-xl bg-linear-to-r from-[#3047a3] to-[#df53a7] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(73,77,180,0.18)]"
                  >
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
