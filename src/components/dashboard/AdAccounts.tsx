import Link from 'next/link'
import { FiArrowLeft, FiArrowRight, FiPlus } from 'react-icons/fi'

const accountCards = [
  {
    id: 'meta',
    title: 'Meta Ad Account',
    subtitle: 'Facebook & Instagram ads',
    description:
      "Unlock powerful targeting across Facebook and Instagram. I-Create.AI will automatically optimize your creative performance based on Meta's real-time signals.",
    actionText: 'Connect Meta Account',
    primary: true,
    logoText: 'Meta',
    logoClass:
      'bg-[linear-gradient(160deg,#0a0d12_0%,#17253c_100%)] text-[#3cb2ff] text-[10px] tracking-[0.02em]',
  },
  {
    id: 'tiktok',
    title: 'TikTok Ad Account',
    subtitle: 'Short-form video ads',
    description:
      'Reach a massive engaged audience on TikTok. Integration allows for automated video generation and trend-aware bidding strategies.',
    actionText: 'Connect TikTok Account',
    primary: false,
    logoText: '♪',
    logoClass:
      'bg-[linear-gradient(160deg,#040507_0%,#10171e_100%)] text-white text-lg',
  },
]

export default function AdAccounts() {
  return (
    <div className="min-h-screen bg-[#edf1f7] px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-[-0.02em] text-[#23479e]">Ad Accounts</h1>
            <p className="mt-2 text-sm text-slate-600">
              Connect and manage your social media advertising accounts.
            </p>
          </div>
          <Link
            href="/settings"
            className="inline-flex items-center gap-2 rounded-xl border border-[#d7def0] bg-white px-4 py-2 text-sm font-semibold text-[#2f4ea2] transition hover:bg-[#f7f9ff]"
          >
            <FiArrowLeft />
            Back to Settings
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {accountCards.map((card) => (
            <article
              key={card.id}
              className="rounded-2xl border border-[#e6ebf3] bg-white px-6 py-6 shadow-[0_12px_30px_rgba(28,52,110,0.07)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl font-semibold ${card.logoClass}`}
                    aria-hidden
                  >
                    {card.logoText}
                  </div>
                  <div>
                    <h2 className="text-[34px] font-semibold tracking-[-0.02em] text-[#123a8f]">{card.title}</h2>
                    <p className="text-sm leading-5 text-slate-600">{card.subtitle}</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#f9dede] px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-[#b22f42]">
                  DISCONNECTED
                </span>
              </div>

              <p className="mt-4 min-h-[96px] text-[24px] leading-8 text-slate-600">{card.description}</p>

              <div className="mt-5 border-t border-[#eef2f8] pt-5">
                {card.primary ? (
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#3044a0_0%,#d45ca5_100%)] px-5 py-3 text-lg font-semibold text-white shadow-[0_10px_20px_rgba(62,76,164,0.24)] transition hover:brightness-105"
                  >
                    {card.actionText}
                    <FiArrowRight />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#d9e1f0] bg-white px-5 py-3 text-lg font-semibold text-[#173e92] transition hover:bg-[#f7f9ff]"
                  >
                    {card.actionText}
                    <FiPlus />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
