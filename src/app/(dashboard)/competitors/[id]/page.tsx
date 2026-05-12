"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiBarChart2, FiCheckCircle, FiClock, FiEdit3, FiFileText, FiImage, FiMapPin, FiTrendingUp, FiX, FiZap } from "react-icons/fi";
import { SiInstagram, SiTiktok, SiX } from "react-icons/si";

const competitorMeta: Record<string, { name: string; growth: string }> = {
	"vortex-digital": { name: "Vortex Digital", growth: "+32K last month" },
	"skyline-media": { name: "Skyline Media", growth: "+45K last month" },
	"lumina-social": { name: "Lumina Social", growth: "+21K last month" },
	"nexus-ai": { name: "Nexus AI", growth: "+38K last month" },
	"lumina-social-2": { name: "Lumina Social", growth: "+19K last month" },
	"nexus-ai-2": { name: "Nexus AI", growth: "+27K last month" },
};

const metricCards = [
	{ title: "Total Followers", value: "1.2M", helper: "~+12.8%" },
	{ title: "Engagement Rate", value: "4.82%", helper: "~+0.41%" },
	{ title: "Monthly Growth", value: "+45.2K", helper: "vs. 32K last month", accent: true },
	{ title: "Content Velocity", value: "12 / wk", helper: "stable trend" },
];

const topContent = [
	{
		badge: "VIRAL",
		title: "How we automated 90% of our data entry using NextGen's new...",
		views: "12.4K",
		likes: "842",
	},
	{
		badge: "HIGH GROWTH",
		title: "Inside our HQ: The culture driving the new era of AI innovation in SF.",
		views: "9.2K",
		likes: "315",
	},
	{
		badge: "TOP PERFORMED",
		title: "Our Q3 Growth Report is out. Here's why SNX is outperforming the S&P...",
		views: "19.8K",
		likes: "1.2K",
	},
];

const whatWorks = [
	{
		title: "User-Generated Content",
		points: ["Real customer testimonials", "Unfiltered product demos", "Lifestyle action shots"],
	},
	{
		title: "Bright Color Palettes",
		points: ["High-contrast foregrounds", "Vibrant coral & ocean blues", "Clean white backgrounds"],
	},
	{
		title: "Direct Question Headlines",
		points: ["\"Why haven't you tried...\"", "\"What if you could save...\"", "Open-ended user prompts"],
	},
];

const platformBreakdown = [
	{
		name: "Instagram",
		percent: 48,
		tone: "bg-[#3564df]",
		Icon: SiInstagram,
		iconWrap: "border-[#f2c2df] bg-[#fff6fb]",
		iconTone: "text-[#de4e98]",
	},
	{
		name: "TikTok",
		percent: 32,
		tone: "bg-black",
		Icon: SiTiktok,
		iconWrap: "border-[#dce2ee] bg-white",
		iconTone: "text-black",
	},
	{
		name: "Twitter/X",
		percent: 20,
		tone: "bg-[#5b97ec]",
		Icon: SiX,
		iconWrap: "border-[#cfe0fa] bg-[#f1f6ff]",
		iconTone: "text-[#5b97ec]",
	},
];

export default function CompetitorDetailsPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);
	const [isInsightModalOpen, setIsInsightModalOpen] = useState(false);
	const profile = competitorMeta[id] ?? { name: "NextGen AI", growth: "+45K last month" };

	useEffect(() => {
		if (!isInsightModalOpen) {
			return;
		}

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsInsightModalOpen(false);
			}
		};

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleEscape);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleEscape);
		};
	}, [isInsightModalOpen]);

	return (
		<div className="min-h-screen bg-[#f4f6fb] text-[#1d2d63]">
			<div className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
				<section className="rounded-[26px] border border-[#e8ecf7] bg-white p-4 shadow-[0_16px_50px_rgba(31,47,86,0.08)] sm:p-6 lg:p-8">
					<p className="text-[30px] font-semibold leading-tight tracking-[-0.03em] text-[#17357f] sm:text-[38px]">
						NextGen AI Analytics
					</p>
					<p className="mt-2 text-sm text-slate-500">
						Comprehensive performance breakdown of {profile.name}&apos;s digital footprint and engagement velocity.
					</p>

					<div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
						{metricCards.map((metric) => (
							<article
								key={metric.title}
								className="rounded-2xl border border-[#edf1fa] bg-[#fbfcff] p-4"
							>
								<p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
									{metric.title}
								</p>
								<p className="mt-2 text-[29px] font-semibold leading-none tracking-[-0.03em] text-[#143275]">
									{metric.value}
								</p>
								<p className={`mt-2 text-xs ${metric.accent ? "text-[#0f8a5f]" : "text-slate-400"}`}>
									{metric.helper}
								</p>
							</article>
						))}
					</div>

					<div className="mt-7 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
						<article className="rounded-2xl border border-[#edf1fa] p-4 sm:p-5 lg:min-h-95">
							<div className="flex items-center justify-between gap-3">
								<h2 className="text-[15px] font-semibold text-[#1e377e]">Engagement Performance Trends</h2>
								<span className="rounded-lg bg-[#f2f5fc] px-3 py-1 text-[11px] font-medium text-slate-500">Last 30 Days</span>
							</div>

							<div className="mt-5 flex h-40 items-end justify-between gap-2 lg:h-64">
								{[22, 44, 46, 49, 67, 55, 75, 64, 46, 36].map((height, index) => (
									<div key={height + index} className="flex h-full w-full items-end">
										<div
											style={{ height: `${(height / 75) * 100}%` }}
											className={`w-full rounded-t-md ${index === 4 ? "bg-[#c7a2c8]" : "bg-[#9ba9cb]"}`}
										/>
									</div>
								))}
							</div>

							<div className="mt-3 flex justify-between text-[10px] font-semibold text-slate-400">
								<span>OCT 01</span>
								<span>OCT 08</span>
								<span>OCT 15</span>
								<span>OCT 22</span>
								<span>OCT 30</span>
							</div>
						</article>

						<article className="rounded-2xl border border-[#edf1fa] p-4 sm:p-5 lg:min-h-95">
							<h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#123684]">Platform Breakdown</h2>
							<div className="mt-6 space-y-5">
								{platformBreakdown.map((platform) => {
									const PlatformIcon = platform.Icon;

									return (
										<div key={platform.name}>
											<div className="mb-2 flex items-center justify-between">
												<div className="flex items-center gap-2.5">
													<div className={`flex h-6 w-6 items-center justify-center rounded-md border ${platform.iconWrap}`}>
														<PlatformIcon className={`text-[13px] ${platform.iconTone}`} />
													</div>
													<span className="text-[18px] font-semibold tracking-[-0.02em] text-[#1f2430] lg:text-[19px]">
														{platform.name}
													</span>
												</div>
												<span className="text-sm font-semibold text-[#123684]">{platform.percent}%</span>
											</div>
											<div className="h-2.5 rounded-full bg-[#e4e9f1]">
												<div className={`h-2.5 rounded-full ${platform.tone}`} style={{ width: `${platform.percent}%` }} />
											</div>
										</div>
									);
								})}
							</div>

							<div className="mt-12 border-t border-[#e7ecf5] pt-7">
								<p className="mx-auto max-w-72.5 text-center text-[15px] leading-7 text-[#65738f] lg:text-[16px]">
									&quot;Instagram remains their primary lead generation source with 2.4x higher conversion vs TikTok.&quot;
								</p>
							</div>
						</article>
					</div>

					<section className="mt-9">
						<h3 className="text-[34px] font-semibold tracking-[-0.03em] text-[#143275] sm:text-[40px]">Top Performing Content</h3>

						<div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
							{topContent.map((item, index) => (
								<article key={item.title} className="overflow-hidden rounded-2xl border border-[#e9edf8] bg-white">
									<div
										className={`relative flex h-36 items-end p-3 lg:h-52 ${{
											0: "bg-[radial-gradient(circle_at_60%_35%,#1e8bbf_0%,#0d1b43_44%,#0a1330_100%)]",
											1: "bg-[radial-gradient(circle_at_45%_30%,#6ad5ff_0%,#1b3f73_38%,#101d3f_100%)]",
											2: "bg-[radial-gradient(circle_at_40%_25%,#f4f6fb_0%,#d9deea_50%,#b8c2d8_100%)]",
										}[index]}`}
									>
										<span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[9px] font-semibold tracking-[0.11em] text-white">
											{item.badge}
										</span>
									</div>
									<div className="p-3">
										<p className="text-[12px] leading-5 text-[#243c82]">{item.title}</p>
										<div className="mt-2 flex items-center gap-4 text-[11px] text-slate-400">
											<span>{item.views}</span>
											<span>{item.likes}</span>
										</div>
									</div>
								</article>
							))}
						</div>
					</section>

					<section className="mt-10">
						<div className="flex items-center gap-2">
							<h3 className="text-[38px] font-semibold tracking-[-0.03em] text-[#143275] sm:text-[44px]">What Works</h3>
							<FiCheckCircle className="text-[#cf3e91]" />
						</div>

						<div className="mt-4 grid gap-4 md:grid-cols-3">
							{whatWorks.map((item) => (
								<article key={item.title} className="rounded-2xl border border-[#e9edf8] bg-[#fbfcff] p-4">
									<h4 className="text-[21px] font-semibold tracking-[-0.02em] text-[#1d387c]">{item.title}</h4>
									<ul className="mt-3 space-y-2 text-sm text-slate-500">
										{item.points.map((point) => (
											<li key={point} className="flex items-start gap-2">
												<span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#cf3e91]" />
												<span>{point}</span>
											</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</section>

					<section className="mt-10 border-t border-[#e6ebf5] pt-6">
						<div className="flex items-center gap-2">
							<h3 className="text-[38px] font-semibold tracking-[-0.03em] text-[#143275] sm:text-[44px]">Why It Works</h3>
							<FiClock className="text-[#cf3e91]" />
						</div>

						<div className="mt-5 grid gap-4 lg:grid-cols-2">
							<article className="rounded-2xl border border-[#e9edf8] p-5">
								<div className="flex items-start gap-3">
									<div className="rounded-xl bg-[#edf2ff] p-2 text-[#3958b5]">
										<FiBarChart2 className="text-lg" />
									</div>
									<div>
										<p className="text-[36px] font-semibold leading-none tracking-[-0.03em] text-[#143275]">40%</p>
										<p className="mt-1 text-sm font-semibold text-[#1f3576]">Trust Increase</p>
										<p className="mt-2 text-sm leading-6 text-slate-500">
											  The Social Proof Effect. Users perceive UGC as more authentic and less &quot;salesy&quot;. This builds immediate cognitive trust.
										</p>
									</div>
								</div>
							</article>

							<article className="rounded-2xl border border-[#e9edf8] p-5">
								<div className="flex items-start gap-3">
									<div className="rounded-xl bg-[#ffeff8] p-2 text-[#cb3f93]">
										<FiTrendingUp className="text-lg" />
									</div>
									<div>
										<p className="text-[36px] font-semibold leading-none tracking-[-0.03em] text-[#cb3f93]">2.4x</p>
										<p className="mt-1 text-sm font-semibold text-[#1f3576]">Thumb-Stop Rate</p>
										<p className="mt-2 text-sm leading-6 text-slate-500">
											Visual Salience. Bright, high-contrast colors trigger automatic attention response in the human brain.
										</p>
									</div>
								</div>
							</article>
						</div>
					</section>

					<section className="mt-10 rounded-2xl border border-[#e7ecf7] bg-[#f8faff] p-5 text-center sm:p-7">
						<p className="text-[32px] font-semibold tracking-[-0.03em] text-[#143275] sm:text-[38px]">Ready to scale your success?</p>
						<p className="mt-2 text-sm text-slate-500">
							Leverage these insights to auto-generate a fresh batch of content that matches your highest-performing themes.
						</p>
						<button
							type="button"
							onClick={() => setIsInsightModalOpen(true)}
							className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#4c57c8_0%,#d95aa6_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(50,73,170,0.28)] transition hover:brightness-105"
						>
							Generate Similar Content
							<FiArrowRight className="text-[15px]" />
						</button>
					</section>
				</section>
			</div>

			{isInsightModalOpen ? (
				<div
					className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/30 p-3 backdrop-blur-[2px] sm:items-center sm:p-6"
					onClick={() => setIsInsightModalOpen(false)}
				>
					<div
						className="w-full max-w-6xl rounded-[20px] border border-white/70 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-6"
						onClick={(event) => event.stopPropagation()}
					>
						<div className="mb-4 flex items-start justify-between gap-3 lg:mb-5">
							<div>
								<h3 className="text-[30px] font-semibold tracking-[-0.03em] text-[#17357f] sm:text-[38px]">Insight-to-Action</h3>
								<p className="mt-1 max-w-105 text-sm text-slate-500">Create high-performing content based on your competitor analysis.</p>
							</div>
							<button
								type="button"
								onClick={() => setIsInsightModalOpen(false)}
								className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100"
							>
								<FiX className="text-lg" />
							</button>
						</div>

						<div className="grid gap-5 lg:grid-cols-[1.25fr_0.9fr]">
							<section className="p-1 sm:p-2">
								<div className="grid grid-cols-3 gap-2 text-center sm:gap-3">
									<button className="flex min-h-22 flex-col items-center justify-center gap-2 rounded-xl border border-[#3e5ec6] bg-white px-2 py-3 text-[11px] font-semibold text-[#3150b8] shadow-[0_6px_16px_rgba(39,72,180,0.15)]">
										<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef2ff] text-[#3658c1]">
											<FiEdit3 className="text-[13px]" />
										</span>
										Generate Post
									</button>
									<button className="flex min-h-22 flex-col items-center justify-center gap-2 rounded-xl border border-[#e6ebf5] bg-white px-2 py-3 text-[11px] font-semibold text-[#6777a7]">
										<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3f6fb] text-[#90a0c3]">
											<FiImage className="text-[13px]" />
										</span>
										Generate Ad
									</button>
									<button className="flex min-h-22 flex-col items-center justify-center gap-2 rounded-xl border border-[#e6ebf5] bg-white px-2 py-3 text-[11px] font-semibold text-[#6777a7]">
										<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3f6fb] text-[#90a0c3]">
											<FiFileText className="text-[13px]" />
										</span>
										Generate Script
									</button>
								</div>

								<div className="mt-7">
									<p className="flex items-center gap-1.5 text-[11px] font-semibold text-[#4360b1]">
										<FiMapPin className="text-[11px]" />
										Specific Topic or Instructions
									</p>
									<textarea
										rows={4}
										defaultValue="e.g. Focus on our new 'Sustainability' feature mentioned by competitors, but keep the tone playful..."
										className="mt-2 w-full rounded-xl border border-[#e5eaf4] bg-[#f3f6fb] px-3 py-3 text-sm text-slate-500 outline-none placeholder:text-slate-400"
									/>
									<p className="mt-2 text-[11px] text-slate-400">Targeting 4 active competitors</p>
								</div>

								<button
									type="button"
									className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-[linear-gradient(90deg,#4657c5_0%,#d65ca6_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(64,84,190,0.25)]"
								>
									Generate
									<FiZap className="text-[14px]" />
								</button>
							</section>

							<section className="rounded-2xl border border-[#e7ecf6] bg-white p-3 shadow-[0_14px_35px_rgba(24,39,86,0.14)] sm:p-4">
								<div className="rounded-xl bg-[linear-gradient(90deg,#3f5bc8_0%,#d95aa6_100%)] p-px">
									<div className="rounded-[11px] bg-white p-2.5">
										<div className="mb-2 flex items-center justify-between">
											<p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#4f63b9]">Generated Concept</p>
											<div className="flex items-center gap-1">
												<span className="h-1.5 w-1.5 rounded-full bg-[#f2d8e7]" />
												<span className="h-1.5 w-1.5 rounded-full bg-[#d8e8c9]" />
												<span className="h-1.5 w-1.5 rounded-full bg-[#fdeac0]" />
											</div>
										</div>
										<div className="mt-2 overflow-hidden rounded-xl bg-[#121d3c]">
											<Image src="/assets/ai-sample-1.svg" alt="Generated creative preview" width={640} height={520} className="h-44 w-full object-cover sm:h-48" />
										</div>
										<p className="mt-2 inline-flex rounded-full bg-[#eef2ff] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#5466b2]">Instagram 1080x1080</p>
										<p className="mt-2 text-[11px] leading-5 text-slate-500">
											&quot;Experience the intersection of ethics and innovation. While others focus on speed, we focus on sustainable momentum.&quot;
										</p>
										<button
											type="button"
											className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[linear-gradient(90deg,#4b57c8_0%,#d95aa6_100%)] px-4 py-2.5 text-sm font-semibold text-white"
										>
											Use This Content
											<FiArrowRight className="text-[14px]" />
										</button>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
