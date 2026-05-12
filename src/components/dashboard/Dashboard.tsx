"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiImage,
  FiMaximize2,
  FiMoreHorizontal,
  FiPlay,
  FiPlus,
  FiUploadCloud,
  FiX,
  FiZap,
} from 'react-icons/fi'

const actionSteps = [
  {
    day: 'Day 1',
    title: 'Analyze core identity & assets',
    status: 'done',
  },
  {
    day: 'Day 2',
    title: 'Competitive map & marketing strategy',
    status: 'active',
  },
  {
    day: 'Day 3',
    title: 'Persona + target market insights',
    status: 'next',
  },
  {
    day: 'Day 4',
    title: 'Brand voice + campaign deck',
    status: 'next',
  },
  {
    day: 'Day 5',
    title: 'Narrative + visual system',
    status: 'next',
  },
  {
    day: 'Day 6',
    title: 'Launch story + media plan',
    status: 'next',
  },
  {
    day: 'Day 7',
    title: 'Insights & automation',
    status: 'next',
  },
]

const contentCards = [
  {
    label: 'VIDEO + AI',
    title: 'Cyberpunk Cityscape X',
    subtitle: 'Created 2 days ago • 4 videos',
    image: '/assets/ai-sample-1.svg',
  },
  {
    label: 'VIDEO + HDR',
    title: 'Futuristic Workspace Loop',
    subtitle: 'Generated 4 days ago • 3 reels',
    image: '/assets/ai-sample-2.svg',
  },
  {
    label: 'POSTS + AI',
    title: 'Organic Architecture Study',
    subtitle: 'Generated yesterday • 9 posts',
    image: '/assets/ai-sample-3.svg',
  },
]

const inspirationCards = [
  {
    tag: 'VIDEO',
    title: 'Eco-Tech Launch Reel',
    sub: 'Engagement',
    metric: '1.3K Likes',
    source: 'TikTok',
    cover: '/assets/ai-sample-1.svg',
    chip: 'VIRAL',
  },
  {
    tag: 'TOP PERFORMER',
    title: 'Premium Lifestyle Series',
    sub: 'Conversion',
    metric: '8.4% Rate',
    source: 'Instagram',
    cover: '/assets/ai-sample-2.svg',
    chip: 'TOP',
  },
  {
    tag: 'TRENDING',
    title: 'Data Insight Film',
    sub: 'Series',
    metric: '4.2K Retweets',
    source: 'X',
    cover: '/assets/ai-sample-3.svg',
    chip: 'NEW',
  },
]

export default function Dashboard() {
  const [activeInspiration, setActiveInspiration] = useState<(typeof inspirationCards)[number] | null>(null)
  const [productImagePreview, setProductImagePreview] = useState<string | null>(null)
  const [productImageName, setProductImageName] = useState<string>('')

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveInspiration(null)
      }
    }

    if (activeInspiration) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => window.removeEventListener('keydown', handleEscape)
  }, [activeInspiration])

  useEffect(() => {
    return () => {
      if (productImagePreview) {
        URL.revokeObjectURL(productImagePreview)
      }
    }
  }, [productImagePreview])

  const handleProductImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    if (productImagePreview) {
      URL.revokeObjectURL(productImagePreview)
    }

    const nextPreview = URL.createObjectURL(file)
    setProductImagePreview(nextPreview)
    setProductImageName(file.name)
  }

  const clearProductImage = () => {
    if (productImagePreview) {
      URL.revokeObjectURL(productImagePreview)
    }

    setProductImagePreview(null)
    setProductImageName('')
  }

  return (
    <>
      <div className="min-h-screen bg-[linear-gradient(180deg,#f8faff_0%,#eef2ff_45%,#f4f6fb_100%)] text-slate-900">
        <div className="relative overflow-hidden">
          <div className="mx-auto w-full px-6 pb-16 pt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Morning, Alex
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-slate-900">
                  Performance Overview
                </h1>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:bg-white hover:shadow-md">
                Last 30 Days
                <FiChevronRight className="text-slate-400" />
              </button>
            </div>

            <div className="mt-8 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    7-Day Action Plan
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    AI-Optimized Marketing Sprint
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[28%] rounded-full bg-[linear-gradient(90deg,#6366f1,#22c55e)]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500">28% Complete</span>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-4 lg:grid-cols-7">
                {actionSteps.map((step) => (
                  <div
                    key={step.day}
                    className={`rounded-2xl border px-4 py-4 text-xs shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                      step.status === 'active'
                        ? 'border-indigo-200 bg-indigo-50/80 text-indigo-900'
                        : step.status === 'done'
                          ? 'border-emerald-200 bg-emerald-50/80 text-emerald-900'
                          : 'border-slate-200 bg-white text-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                        {step.day}
                      </span>
                      {step.status === 'done' && (
                        <FiCheckCircle className="text-emerald-500" />
                      )}
                      {step.status === 'active' && <FiClock className="text-indigo-500" />}
                    </div>
                    <p className="mt-3 text-[13px] font-semibold leading-snug text-slate-900">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Recently Generated Content
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    AI outputs from the last 7 days
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md">
                  Explore
                  <FiChevronRight className="text-white" />
                </button>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-[repeat(3,minmax(0,1fr))_220px]">
                {contentCards.map((card) => (
                  <div
                    key={card.title}
                    className="group overflow-hidden rounded-2xl border border-white/70 bg-white/85 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative h-32 overflow-hidden bg-slate-100">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.15),rgba(15,23,42,0))]" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                        {card.label}
                      </span>
                    </div>
                    <div className="space-y-2 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-500">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-slate-50 px-4 py-6 text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400">
                      <FiPlus />
                    </div>
                    <p className="text-xs font-semibold text-slate-400">Generate More</p>
                  </div>
                  <div className="border-t border-slate-100 px-4 py-4">
                    <h3 className="text-sm font-semibold text-slate-900">Create New Asset</h3>
                    <p className="mt-1 text-xs text-slate-500">1,209 credits remaining</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Ad Inspiration</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Top performing campaigns for your industry
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:bg-white hover:shadow-md">
                  Explore
                  <FiChevronRight className="text-slate-400" />
                </button>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {inspirationCards.map((card) => (
                  <div
                    key={card.title}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveInspiration(card)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setActiveInspiration(card)
                      }
                    }}
                    className="overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative h-36 overflow-hidden bg-slate-900">
                      <Image
                        src={card.cover}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.2),rgba(15,23,42,0))]" />
                      <span className="absolute left-3 top-3 rounded-full bg-pink-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                        {card.chip}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)]">
                          <FiPlay className="translate-x-px text-lg" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-700">
                        {card.source}
                      </span>
                    </div>
                    <div className="space-y-3 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                      <div className="flex items-start justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        <div>
                          <p className="text-[10px]">{card.sub}</p>
                          <p className="mt-1 text-sm font-semibold normal-case text-slate-800">
                            {card.metric}
                          </p>
                        </div>
                        <span className="mt-3 h-6 w-px rounded-full bg-slate-200" />
                      </div>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          setActiveInspiration(card)
                        }}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b2a70] px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#0a2460]"
                      >
                        <FiZap />
                        Recreate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeInspiration && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-2 py-2 sm:items-center sm:px-4 sm:py-6">
          <div
            className="absolute inset-0 bg-slate-900/55 backdrop-blur-[10px]"
            onClick={() => setActiveInspiration(null)}
          />

          <div className="relative z-10 flex max-h-[calc(100vh-1rem)] w-full max-w-[calc(100vw-1rem)] flex-col overflow-hidden rounded-2xl border border-white/80 bg-[#f7f9fd] shadow-[0_30px_90px_rgba(15,23,42,0.38)] sm:max-h-[calc(100vh-3rem)] sm:max-w-280 sm:rounded-[28px]">
            <div className="flex items-start justify-between gap-3 border-b border-slate-200/80 bg-white/95 px-3 py-3 sm:items-center sm:px-5 sm:py-3.5">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveInspiration(null)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                  aria-label="Back"
                >
                  <FiChevronLeft />
                </button>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-[11px] sm:tracking-[0.24em]">
                    Ad Inspiration Preview
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-slate-700 sm:text-sm">
                    {activeInspiration.title}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveInspiration(null)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                aria-label="Close"
              >
                <FiX />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-5">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-5">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#071423] shadow-[0_18px_40px_rgba(7,20,35,0.24)] sm:rounded-3xl">
                <div className="relative aspect-4/5 min-h-72 w-full sm:aspect-4/3 sm:min-h-130">
                  <Image
                    src={activeInspiration.cover}
                    alt={activeInspiration.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,22,0.3),rgba(4,10,22,0.1)_40%,rgba(4,10,22,0.55))]" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_38%)]" />

                  <div className="absolute left-3 top-3 rounded-full bg-slate-950/55 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-[10px] sm:tracking-[0.2em]">
                    Captured in Creatives Dashboard
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white/24 text-white shadow-[0_14px_40px_rgba(15,23,42,0.45)] backdrop-blur-sm transition hover:scale-105 sm:h-16 sm:w-16"
                      aria-label="Play preview"
                    >
                      <FiPlay className="translate-x-px text-xl sm:text-2xl" />
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 flex max-w-[70%] flex-wrap gap-2 sm:bottom-4 sm:left-4">
                    <div className="rounded-full bg-slate-950/55 px-2.5 py-1.5 text-[9px] font-medium text-white/90 backdrop-blur-sm sm:px-3 sm:text-[10px]">
                      {activeInspiration.source}
                    </div>
                    <div className="rounded-full bg-slate-950/55 px-2.5 py-1.5 text-[9px] font-medium text-white/90 backdrop-blur-sm sm:px-3 sm:text-[10px]">
                      Ready to recreate
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-2 sm:bottom-4 sm:right-4">
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/55 text-white/90 backdrop-blur-sm transition hover:bg-slate-950/70 sm:h-9 sm:w-9"
                      aria-label="Options"
                    >
                      <FiMoreHorizontal />
                    </button>
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/55 text-white/90 backdrop-blur-sm transition hover:bg-slate-950/70 sm:h-9 sm:w-9"
                      aria-label="Expand preview"
                    >
                      <FiMaximize2 className="text-[15px]" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:mt-0 sm:rounded-3xl sm:px-5 sm:py-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3d5ef7] sm:text-[11px] sm:tracking-[0.22em]">
                      Add Your Product Info
                    </p>
                    <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.02em] text-slate-900 sm:text-[20px]">
                      Recreate this ad in your style
                    </h3>
                    <p className="mt-2 text-[11px] leading-5 text-slate-500 sm:text-[12px]">
                      Match the structure, colors, and motion cues before generating the video.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px] sm:tracking-[0.18em]">
                      Prompt
                    </span>
                    <textarea
                      rows={4}
                      placeholder="Describe the exact product, tone, and visual style..."
                      className="w-full resize-none rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-3 text-[13px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#5970ff] focus:bg-white"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px] sm:tracking-[0.18em]">
                      Product Image
                    </span>
                    <input
                      id="product-image-upload"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleProductImageChange}
                    />
                    <div className="relative overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 transition hover:border-[#7a8cff] hover:bg-white">
                      <label
                        htmlFor="product-image-upload"
                        className="flex min-h-20 cursor-pointer items-center justify-center px-3 py-4 text-center sm:min-h-21.5 sm:px-4"
                      >
                        {productImagePreview ? (
                          <div className="w-full space-y-3">
                            <div className="relative mx-auto h-24 w-full max-w-65 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:h-28">
                              <Image
                                src={productImagePreview}
                                alt={productImageName || 'Uploaded product image'}
                                fill
                                unoptimized
                                className="object-cover"
                              />
                            </div>
                            <p className="wrap-break-word text-[12px] font-semibold text-slate-700">
                              {productImageName}
                            </p>
                            <p className="text-[11px] text-slate-400">Click to replace image</p>
                          </div>
                        ) : (
                          <div>
                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4d68ff] shadow-sm">
                              <FiUploadCloud className="text-[18px]" />
                            </div>
                            <p className="mt-2 text-[12px] font-semibold text-slate-700">
                              Click to upload
                            </p>
                            <p className="mt-1 text-[11px] text-slate-400">SVG, PNG, JPG up to 10MB</p>
                          </div>
                        )}
                      </label>

                      {productImagePreview && (
                        <button
                          type="button"
                          onClick={clearProductImage}
                          className="absolute right-2 top-2 rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-sm transition hover:text-slate-900 sm:right-3 sm:top-3 sm:px-2.5"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px] sm:tracking-[0.18em]">
                      Product Type
                    </span>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-3 text-[13px] text-slate-700 outline-none transition focus:border-[#5970ff] focus:bg-white">
                        <option>Select category...</option>
                        <option>Beauty</option>
                        <option>Fashion</option>
                        <option>Tech</option>
                        <option>Food & Beverage</option>
                      </select>
                      <FiChevronRight className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-400" />
                    </div>
                  </label>
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-[14px] bg-[linear-gradient(90deg,#5b48c1_0%,#eb6aa8_100%)] px-4 py-3 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(91,72,193,0.28)] transition hover:brightness-105"
                >
                  Generate Video
                </button>

                <p className="mt-3 text-center text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-[10px] sm:tracking-[0.22em]">
                  Ready to proceed • 3 credits
                </p>

                <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
                      <FiImage />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-slate-700">Design hint</p>
                      <p className="text-[11px] text-slate-500">
                        Keep the same dark contrast and neon accent colors for a close match.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}