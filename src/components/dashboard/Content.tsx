"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { BiImageAdd } from 'react-icons/bi'
import { BsFileEarmarkText, BsMegaphone } from 'react-icons/bs'
import { FiEdit2, FiImage, FiRefreshCcw, FiSettings } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'

export default function Content() {
  const [logoPic, setLogoPic] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      if (logoPic?.startsWith('blob:')) {
        URL.revokeObjectURL(logoPic)
      }
    }
  }, [logoPic])

  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    if (logoPic?.startsWith('blob:')) {
      URL.revokeObjectURL(logoPic)
    }

    const nextPreview = URL.createObjectURL(file)
    setLogoPic(nextPreview)
    event.target.value = ''
  }

  return (
    <div className="min-h-screen bg-[#edf1f7] px-4 py-8 text-slate-900 sm:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto w-full max-w-360">
        <header className="mb-6">
          <h1 className="text-[34px] font-bold tracking-[-0.03em] text-[#123d91]">Create something amazing</h1>
          <p className="mt-2 text-sm text-slate-500">
            Let AI handle the heavy lifting while you focus on the vision.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[440px_minmax(0,960px)] xl:justify-between">
          <section className="space-y-4">
            <div className="rounded-3xl border border-[#e7ecf5] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(22,43,89,0.05)]">
              <div className="flex items-center gap-2">
                <Link
                  href="/Content"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#223f95] px-4 py-2 text-[12px] font-semibold text-white"
                >
                  <BsFileEarmarkText className="text-sm" />
                  Posts
                </Link>
                <Link
                  href="/Content/adsPhoto"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#f3f6fb] px-4 py-2 text-[12px] font-semibold text-slate-600 transition hover:bg-[#eaf0fa]"
                >
                  <BsMegaphone className="text-sm" />
                  Ads
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-[#e7ecf5] bg-white px-4 py-5 shadow-[0_8px_24px_rgba(22,43,89,0.05)]">
              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#5674b9]">
                WHAT ARE WE CREATING TODAY?
              </h3>

              <textarea
                className="h-40 w-full resize-none rounded-2xl border border-[#edf1f7] bg-[#f4f7fc] p-4 text-[13px] leading-6 text-slate-600 outline-none focus:ring-2 focus:ring-[#3251a8]/20"
                placeholder="e.g. A captivating LinkedIn post about the future of AI in creative workflows, focusing on efficiency and collaboration..."
              />

              <div className="mt-4">
                <label className="block text-[12px] font-semibold text-[#2f4ea2]">
                  Upload Logo <span className="font-normal text-slate-400">(Optional)</span>
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-2 flex h-21.5 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#d7deec] bg-[#f8fafe] transition hover:bg-[#f0f5ff]"
                >
                  {logoPic ? (
                    <span className="relative block h-full w-full">
                      <Image
                        src={logoPic}
                        alt="Uploaded logo"
                        fill
                        unoptimized
                        className="rounded-2xl object-contain p-2"
                      />
                    </span>
                  ) : (
                    <>
                      <FiImage className="text-lg text-slate-400" />
                      <p className="mt-1 text-[12px] text-slate-500">
                        Drop your logo here or <span className="font-bold text-[#25479f]">browse</span>
                      </p>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <FiSettings className="text-[12px]" />
                  Style: Professional & Inspiring
                </span>
                <span>124/500</span>
              </div>

              <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#30449f_0%,#d55ca7_100%)] py-3 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(58,78,166,0.28)] transition hover:brightness-105">
                Generate Content
                <HiOutlineSparkles className="text-lg" />
              </button>
            </div>
          </section>

          <section className="rounded-3xl border border-[#e7ecf5] bg-white px-4 py-5 shadow-[0_10px_28px_rgba(22,43,89,0.06)] sm:px-6 sm:py-6">
            <div className="flex items-center justify-between border-b border-[#eff3f9] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#c4204f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d16496]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b3b8f8]" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">DRAFT_PREVIEW_V1.JPG</p>
              </div>
              <span className="rounded-full bg-[#f5e1ef] px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#b13e82]">
                Social Media
              </span>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-[#e4eaf6] shadow-[0_12px_22px_rgba(20,30,55,0.15)]">
              <div className="relative h-56 w-full sm:h-64 lg:h-72 xl:h-75">
                <Image
                  src="/assets/AB6AXuAWnOWFz5Lg4NUD-itraNbTAozryVCn5bVX6k1upSukmecB7GQGvYtNy-4kfkobDcfBO5VRZ33XSaszudApcll9crgUYOKOjFbFguPBlt4rfH3b3awRGspnFzMgnWtBZLRNODkYleBYdSAdB1mTZeqj7ltlkCp_3B34fQyXGmkzAVd6v6PRsIyfdmrDz88OHcOwDNN.png"
                  alt="AI generated visual"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-semibold leading-8 tracking-[-0.03em] text-[#133f92] sm:text-3xl sm:leading-9 xl:text-[38px] xl:leading-10">
                The Horizon of Human-AI Creativity
              </h2>

              <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600 sm:text-base xl:text-[17px] xl:leading-8">
                <p>The dawn of AI is not the end of creativity, it is the beginning of a superpower.</p>
                <p>
                  Imagine a workflow where the friction between idea and execution evaporates. Where you provide the spark, and Lumina handles the flame. We are seeing a shift from tool-centric to intent-centric design, and the results are breathtaking.
                </p>
                <p>
                  How are you integrating AI into your creative journey this year? Let us discuss in the comments below.
                </p>
              </div>

              <p className="mt-3 text-sm font-semibold text-[#1f479e] sm:text-base xl:text-lg">#AI #Creativity #Innovation #FutureOfWork</p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-[#dde4f2] bg-white px-4 py-2 text-sm font-semibold text-[#214398] transition hover:bg-[#f5f8ff]">
                <FiRefreshCcw className="text-sm" />
                Regenerate
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-[#dde4f2] bg-white px-4 py-2 text-sm font-semibold text-[#214398] transition hover:bg-[#f5f8ff]">
                <FiEdit2 className="text-sm" />
                Edit
              </button>
            </div>

            <button className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(90deg,#30449f_0%,#d55ca7_100%)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(58,78,166,0.28)] transition hover:brightness-105">
              <BiImageAdd className="text-base" />
              Save to Library
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}
