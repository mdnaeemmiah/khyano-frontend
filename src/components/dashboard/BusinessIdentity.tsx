import React from 'react'
import Image from 'next/image'
import { FiTarget, FiHeadphones, FiLayers } from 'react-icons/fi'

const roadmapCards = [
  {
    title: 'Audience Segment',
    description:
      'High-intent creative professionals looking for workflow automation without losing the human touch.',
    bullets: ['Design Agency Owners', 'Solo Content Strategists'],
    icon: FiTarget,
    accent: '#3b5bdb',
  },
  {
    title: 'Marketing Tactics',
    description:
      'Leveraging deep-dive thought leadership and high-visual social storytelling on LinkedIn & X.',
    bullets: ['Educational Threads', 'Exclusive Masterclasses'],
    icon: FiHeadphones,
    accent: '#f06595',
  },
  {
    title: 'Content Pillars',
    description:
      'Focusing on "Future-Proofing," "AI-Human Hybrid," and "Minimalist Productivity."',
    bullets: ['Narrative Storytelling', 'Actionable Blueprints'],
    icon: FiLayers,
    accent: '#3b5bdb',
  },
]

const contentSamples = [
  {
    label: 'Instagram Post',
    image: '/assets/ai-sample-1.svg',
    quote:
      '"Efficiency does not have to be cold. Discover the art of Calm Power in your creative..."',
    tags: ['#BrandStrategy', '#ModernWorkflow'],
  },
  {
    label: 'LinkedIn Article',
    image: '/assets/ai-sample-2.svg',
    quote:
      '"The future of strategy is not just about data...it is about empathy. Why human intuition is still the..."',
    tags: ['#FutureOfWork', '#ThoughtLeadership'],
  },
  {
    label: 'X Thread',
    image: '/assets/ai-sample-3.svg',
    quote:
      '"Stop chasing metrics. Start building moments. 1/10 How we re-aligned our brand voice to..."',
    tags: ['#BrandVoice', '#CreatorEconomy'],
  },
]

export default function BusinessIdentity() {
  return (
    <div className="min-h-screen bg-[#f5f8ff] text-slate-900">
      <div className="mx-auto px-6 py-10 lg:px-10">
        <div className="rounded-3xl bg-white/80 p-6 shadow-[0_20px_45px_rgba(30,41,59,0.08)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#5b6bd5]">
            Strategy Ready
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-[#15326a] sm:text-4xl">
            Your Brand Engine is Primed.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            We have analyzed your market position and synthesized a comprehensive growth roadmap. Here is the
            blueprint for your brand&#39;s next evolution.
          </p>
        </div>

        <section className="mt-10">
          <div className="flex items-center gap-2 text-[#20459d]">
            <span className="text-base font-semibold">Brand Identity</span>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-6 lg:grid-cols-[2fr,1fr]">
            <div className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(30,41,59,0.08)]">
              <h2 className="text-base font-semibold text-slate-800">Brand Voice &amp; Personality</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Your brand speaks with <span className="font-semibold text-[#3b5bdb]">Calm Power</span>. It is
                sophisticated but never aloof-using clear, intentional language that empowers the audience while
                maintaining a premium, editorial flair.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Authoritative', 'Ethereal', 'Transparent'].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(30,41,59,0.08)]">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Primary Palette</div>
              <div className="mt-4 flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#203da9]" />
                <div className="h-10 w-10 rounded-lg bg-[#f06595]" />
                <div className="h-10 w-10 rounded-lg bg-[#e2e8f0]" />
              </div>
              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Typography</div>
              <div className="mt-3 text-sm text-slate-700">
                <p className="font-semibold">Manrope Bold</p>
                <p className="text-slate-500">Inter Regular</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2 text-[#20459d]">
            <span className="text-base font-semibold">Strategic Roadmap</span>
          </div>
          <div className="mt-4 grid gap-5 lg:grid-cols-3">
            {roadmapCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_18px_40px_rgba(30,41,59,0.08)]"
                  style={{ borderTopColor: card.accent, borderTopWidth: 4 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-[#20459d]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-800">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                  <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-600">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3b5bdb]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2 text-[#20459d]">
            <span className="text-base font-semibold">AI Content Samples</span>
          </div>
          <div className="mt-4 grid gap-6 lg:grid-cols-3">
            {contentSamples.map((sample) => (
              <div
                key={sample.label}
                className="rounded-2xl bg-white p-4 shadow-[0_18px_40px_rgba(30,41,59,0.08)]"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-xl">
                  <Image
                    src={sample.image}
                    alt={sample.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    {sample.label}
                  </div>
                </div>
                <p className="mt-4 text-xs leading-5 text-slate-600">{sample.quote}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-semibold text-[#3b5bdb]">
                  {sample.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
