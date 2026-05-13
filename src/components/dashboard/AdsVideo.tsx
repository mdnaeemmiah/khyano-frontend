/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiFileText,
  FiFilm,
  FiImage,
  FiGlobe,
  FiLink2,
  FiMinus,
  FiPlus,
  FiUploadCloud,
} from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

type Asset = {
  title: string;
  type: "Images" | "Videos" | string;
  date: string;
  src: string;
  duration?: string;
};

// VideoAsset type for uploaded videos
type VideoAsset = {
  url: string;
  duration: string;
};

const initialAssets: Asset[] = [
  {
    title: "Instagram Ad - Summer",
    type: "Images",
    date: "Edited Oct 24, 2023",
    src: "/assets/AB6AXuAWnOWFz5Lg4NUD-itraNbTAozryVCn5bVX6k1upSukmecB7GQGvYtNy-4kfkobDcfBO5VRZ33XSaszudApcll9crgUYOKOjFbFguPBlt4rfH3b3awRGspnFzMgnWtBZLRNODkYleBYdSAdB1mTZeqj7ltlkCp_3B34fQyXGmkzAVd6v6PRsIyfdmrDz88OHcOwDNN.png",
  },
  {
    title: "Product Demo Walkthrough",
    type: "Videos",
    date: "Edited Oct 22, 2023",
    src: "/assets/AB6AXuCRdQh-YIne0iaza8vyVlWYXfN8HJMXXHHTLu23xlh9jg5nwmcJCeWUE1ZjPWe4jAloHLY_PtuY3D8Z844l6-q9WiFBI5E03dpyErTGLDiXeaQCkpjla_BO1EltRDBC3Bpy0_Q351kyoztU6FVA2mvmm8ZIxjUJ20VK6pNPULzjZ4rUvYoc3VWQFh3vSMOTD4V6Jn8.png",
    duration: "0:15",
  },
  {
    title: "Product Marketing",
    type: "Images",
    date: "Edited Oct 18, 2023",
    src: "/assets/ai-sample-1.svg",
  },
  {
    title: "TikTok Script v1 - AI G",
    type: "Videos",
    date: "Edited Oct 15, 2023",
    src: "/assets/ai-sample-2.svg",
    duration: "0:30",
  },
  {
    title: "Product Demo Walkthrough",
    type: "Videos",
    date: "Edited Oct 22, 2023",
    src: "/assets/ai-sample-3.svg",
    duration: "0:12",
  },
  {
    title: "Product Marketing",
    type: "Images",
    date: "Edited Oct 18, 2023",
    src: "/assets/ai-sample-1.svg",
  },
];


export default function AdsVideo() {
  const aspectRatioOptions = ["Portrait (9:16)", "Landscape (16:9)", "Square (1:1)"];
  const languageOptions = [
    "English (US)",
    "Spanish (ES)",
    "Bangla (BD)",
    "Hindi (IN)",
    "Arabic (SA)",
  ];

  const [productLink, setProductLink] = useState("https://yourstore.com/product/awesome-gadget");
  const [brandColor, setBrandColor] = useState("#1f3b91");
  const [logoName, setLogoName] = useState<string | null>(null);
  const [variationCount, setVariationCount] = useState(10);
  const [aspectRatio, setAspectRatio] = useState("Portrait (9:16)");
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [selectedAssets, setSelectedAssets] = useState<number[]>([0]);
  const [durationPreset, setDurationPreset] = useState("30 Seconds");
  const [targetAudience, setTargetAudience] = useState("");

  const uploadedAssetUrlsRef = useRef<string[]>([]);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setLogoName(file.name);
  }

  function toggleAsset(index: number) {
    setSelectedAssets((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  }

  function selectAllAssets() {
    if (selectedAssets.length === initialAssets.filter(a => a.type === 'Videos').length) {
      setSelectedAssets([]);
      return;
    }
    setSelectedAssets(initialAssets.map((_, index) => index));
  }

  async function getVideoDuration(file: File) {
    return new Promise<string>((resolve) => {
      const url = URL.createObjectURL(file);
      const v = document.createElement("video");
      v.preload = "metadata";
      v.src = url;
      v.onloadedmetadata = () => {
        const dur = Math.round(v.duration || 0);
        const mm = Math.floor(dur / 60);
        const ss = dur % 60;
        URL.revokeObjectURL(url);
        resolve(`${mm}:${ss.toString().padStart(2, "0")}`);
      };
      v.onerror = () => {
        URL.revokeObjectURL(url);
        resolve("0:00");
      };
    });
  }

  async function handleAddMoreVideos(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files?.length) return;

    const fileArr = Array.from(files);
    const newAssets: VideoAsset[] = [];

    for (const file of fileArr) {
      const objectUrl = URL.createObjectURL(file);
      uploadedAssetUrlsRef.current.push(objectUrl);
      try {
        const dur = await getVideoDuration(file);
        newAssets.push({ url: objectUrl, duration: dur });
      } catch {
        newAssets.push({ url: objectUrl, duration: "0:00" });
      }
    }

    setAssets((prev) => {
      const startIndex = prev.length;
      const newIndexes = newAssets.map((_, i) => startIndex + i);
      setSelectedAssets((prevSelected) => [...prevSelected, ...newIndexes]);
      return [...prev, ...newAssets];
    });

    e.target.value = "";
  }

  useEffect(() => {
    const uploadedUrls = uploadedAssetUrlsRef.current;
    return () => {
      uploadedUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#eff3f8] px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto">
        <div className="rounded-2xl bg-[#f3f6fb] px-6 py-5 md:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/Content">
              <button className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-[#4e5f78] transition-all duration-200 hover:bg-white hover:text-[#1f3678] hover:shadow-[0_6px_14px_rgba(31,54,120,0.12)]">
                <FiFileText className="h-4 w-4" />
                Posts
              </button>
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full bg-[#2e458f] px-4 py-1.5 text-sm font-medium text-white shadow-[0_8px_16px_rgba(37,56,123,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#243b82] hover:shadow-[0_12px_22px_rgba(37,56,123,0.35)]">
              <span className="text-base leading-none">✣</span>
              Ads
            </button>
          </div>
        </div>

        <div className="mt-7 flex justify-center">
          <div className="inline-flex rounded-full bg-[#e8edf5] p-1 shadow-[inset_0_0_0_1px_rgba(49,70,129,0.08)]">
            <Link href="/Content/adsPhoto">
              <button className="inline-flex items-center gap-2 rounded-full px-7 py-2 text-sm font-semibold text-[#62708a] transition-all duration-200 hover:bg-white hover:text-[#264289] hover:shadow-[0_6px_14px_rgba(55,76,132,0.14)]">
                <FiImage className="h-4 w-4" />
                Photo
              </button>
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-2 text-sm font-semibold text-[#264289] shadow-[0_4px_12px_rgba(55,76,132,0.16)]">
              <FiFilm className="h-4 w-4" />
              Video
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold tracking-[-0.02em] text-[#13327a] md:text-5xl">Create New Ad Campaign</h1>
          <p className="mx-auto mt-3 max-w-162.5 text-lg text-[#697d9a]">Let Nebula AI transform your product link into high-converting ad assets.</p>
        </div>

        <div className="mt-10 rounded-3xl bg-white/90 p-6 shadow-[0_14px_35px_rgba(35,58,107,0.08)] md:p-9">
          <div>
            <label className="mb-3 block text-2xl font-semibold text-[#163887] md:text-[30px]">Product Link</label>
            <div className="flex items-center gap-3 rounded-2xl bg-[#eef2f7] px-4 py-4">
              <FiLink2 className="h-5 w-5 text-[#8190a9]" />
              <input value={productLink} onChange={(e) => setProductLink(e.target.value)} className="w-full bg-transparent text-[17px] text-[#5f6f87] outline-none placeholder:text-[#8b99ae]" placeholder="https://yourstore.com/product/awesome-gadget" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 items-center">
            <div>
              <div className="text-xs font-bold text-[#8696af]">ASPECT RATIO</div>
              <div className="mt-2 inline-flex rounded-xl bg-[#eef2f7] p-1">
                {aspectRatioOptions.map((option) => {
                  const isActive = aspectRatio === option;
                  return (
                    <button key={option} onClick={() => setAspectRatio(option)} className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${isActive ? "bg-white text-[#2f4d97] shadow-sm" : "text-[#7888a2] hover:text-[#5e7090]"}`}>
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-[#8696af]">DURATION</div>
              <select value={durationPreset} onChange={(e) => setDurationPreset(e.target.value)} className="mt-2 h-10 rounded-xl bg-[#eef2f7] px-3 text-sm font-semibold text-[#4f5f79]">
                <option>15 Seconds</option>
                <option>30 Seconds</option>
                <option>60 Seconds</option>
              </select>
            </div>

            <div>
              <div className="text-xs font-bold text-[#8696af]">TARGET AUDIENCE</div>
              <input value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} placeholder="e.g. Skincare enthusiasts, busy professionals 25-45" className="mt-2 h-10 w-full rounded-xl bg-[#eef2f7] px-3 text-sm text-[#4f5f79]" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            <div>
              <label className="mb-3 block text-[28px] font-semibold text-[#163887]">Upload Logo <span className="text-lg font-medium text-[#a6b1c4]">(Optional)</span></label>
              <label className="flex h-32.5 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#d4dcea] bg-[#fbfcfe] px-4 text-center">
                <input type="file" className="hidden" onChange={handleFile} />
                <FiUploadCloud className="h-7 w-7 text-[#96a5c0]" />
                <div className="mt-2 text-base text-[#7a879d]">Drop your logo here or <span className="font-semibold text-[#2c4995]">browse</span></div>
                {logoName && <span className="mt-2 text-xs font-medium text-[#5670ae]">{logoName}</span>}
              </label>
            </div>

            <div>
              <label className="mb-3 block text-[28px] font-semibold text-[#163887]">Brand Color <span className="text-lg font-medium text-[#a6b1c4]">(Optional)</span></label>
              <div className="flex flex-wrap items-center gap-4">
                <label className="h-16 w-16 cursor-pointer overflow-hidden rounded-sm border border-[#d8e0ef] shadow-[0_6px_18px_rgba(19,50,122,0.12)]" style={{ backgroundColor: brandColor }}>
                  <input type="color" value={brandColor} onChange={(e) => setBrandColor(e.target.value)} className="h-full w-full cursor-pointer opacity-0" aria-label="Pick brand color" />
                </label>

                <input value={brandColor} onChange={(e) => setBrandColor(e.target.value)} className="h-14 flex-1 rounded-xl bg-[#eef2f7] px-5 text-lg text-[#586984] outline-none placeholder:text-[#9ba8be]" placeholder="e ex Code: #1D3B91" />
              </div>
            </div>
          </div>

          <div className="mt-11 flex justify-center">
            <button className="rounded-full bg-linear-to-r from-[#323aa7] via-[#4f4bc2] to-[#d2529a] px-10 py-4 text-lg font-semibold text-white shadow-[0_14px_30px_rgba(75,57,165,0.35)] transition-transform hover:scale-[1.02]">Analyze Product</button>
          </div>
        </div>

        <div className="mt-9 flex items-center gap-4 text-center">
          <div className="h-px flex-1 bg-[#d9e0ea]" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#90a0b8]">Analysis Results</span>
          <div className="h-px flex-1 bg-[#d9e0ea]" />
        </div>

        <div className="mt-6 rounded-3xl bg-white/90 p-6 shadow-[0_12px_28px_rgba(36,57,104,0.07)] md:p-8">
          <div className="space-y-5">
            <div>
              <h3 className="text-[30px] font-semibold text-[#173a8a]">Product Name</h3>
              <div className="mt-2 rounded-2xl bg-[#eef2f7] px-4 py-3 text-[24px] font-semibold text-[#153a89]">Lumina Wireless Headphones</div>
            </div>

            <div>
              <h3 className="text-[30px] font-semibold text-[#173a8a]">Product Description</h3>
              <div className="mt-2 rounded-2xl bg-[#eef2f7] px-4 py-4 text-xl leading-relaxed text-[#54667f]">Experience pure sound with Lumina. Featuring active noise cancellation, 40-hour battery life, and ultra-soft memory foam ear cups for all-day comfort. Engineered for those who appreciate every detail in their music.</div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex items-end justify-between">
          <div>
            <h3 className="text-[34px] font-semibold text-[#1c2f53]">Visual Assets</h3>
            <p className="text-lg text-[#6b7b94]">We found these on your page. Add more to spice up the video ads.</p>
          </div>
          <button onClick={selectAllAssets} className="text-lg font-semibold text-[#2f57a3]">Select All</button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {initialAssets
            .filter((asset) => asset.type === "Videos")
            .map((asset, index) => {
              const selected = selectedAssets.includes(index);
              return (
                <button
                  key={asset.src}
                  onClick={() => toggleAsset(index)}
                  className={`relative h-31.5 overflow-hidden rounded-2xl border bg-white transition-all ${
                    selected
                      ? "border-[#3058a5] shadow-[inset_0_0_0_1px_#3058a5]"
                      : "border-[#e1e7f0]"
                  }`}
                >
                  <Image
                    src={asset.src}
                    alt={asset.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                    {asset.duration ?? "0:00"}
                  </div>
                  <span
                    className={`absolute right-2 top-2 h-4 w-4 rounded-full border ${
                      selected
                        ? "border-[#1f4a9b] bg-[#1f4a9b]"
                        : "border-[#d0d8e7] bg-white"
                    }`}
                  />
                </button>
              );
            })}

          <label className="flex h-31.5 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#d5ddeb] bg-[#f7f9fd] text-center">
            <input type="file" multiple accept="video/*" className="hidden" onChange={handleAddMoreVideos} />
            <div className="text-[22px] leading-none text-[#9ca8bc]">+</div>
            <div className="mt-2 text-sm font-semibold tracking-[0.12em] text-[#9ca8bc]">Add Video</div>
          </label>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-[34px] font-semibold text-[#425577]">Ready to see the magic?</h3>
          <p className="text-base text-[#94a1b5]">I-create will generate variations including Social, Search, and Display ads.</p>
        </div>

        <div className="mt-7 rounded-3xl bg-white/90 p-5 shadow-[0_10px_24px_rgba(35,58,107,0.08)] md:p-7">
          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            <div>
              <div className="text-xs font-bold tracking-[0.16em] text-[#8696af]">LANGUAGE</div>
              <div className="relative mt-2">
                <FiGlobe className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6f809c]" />
                <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="h-10 min-w-44 rounded-xl bg-[#eef2f7] pl-9 pr-8 text-sm font-semibold text-[#4f5f79] outline-none">
                  {languageOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.16em] text-[#8696af]">VARIATIONS</div>
              <div className="mt-2 flex items-center gap-3">
                <button onClick={() => setVariationCount((prev) => Math.max(1, prev - 1))} className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef2f7] text-[#65758f]"><FiMinus className="h-4 w-4" /></button>
                <span className="min-w-6 text-center text-lg font-semibold text-[#2f4d97]">{variationCount}</span>
                <button onClick={() => setVariationCount((prev) => prev + 1)} className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef2f7] text-[#65758f]"><FiPlus className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#323aa7] via-[#4f4bc2] to-[#d2529a] px-11 py-4 text-2xl font-semibold text-white shadow-[0_14px_30px_rgba(75,57,165,0.35)] transition-transform hover:scale-[1.02]"><BsStars className="h-6 w-6" />Generate Ad<FiArrowRight className="h-6 w-6" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function setAssets(arg0: (prev: any) => any[]) {
  throw new Error("Function not implemented.");
}

