"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiGrid, FiMoreVertical, FiUploadCloud } from "react-icons/fi";
import { FiList } from "react-icons/fi";
import Link from "next/link";

type Asset = {
  title: string;
  type: "Images" | "Videos" | string;
  date: string;
  src: string;
};

const tabs = ["All Assets", "Images", "Videos"];

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
  },
  {
    title: "Product Demo Walkthrough",
    type: "Videos",
    date: "Edited Oct 22, 2023",
    src: "/assets/ai-sample-3.svg",
  },
  {
    title: "Product Marketing",
    type: "Images",
    date: "Edited Oct 18, 2023",
    src: "/assets/ai-sample-1.svg",
  },
];

export default function Library() {
  const [assets, setAssets] = useState<Asset[]>(initialAssets);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const uploadedUrlsRef = useRef<string[]>([]);

  useEffect(() => {
    return () => {
      uploadedUrlsRef.current.forEach((u) => URL.revokeObjectURL(u));
      uploadedUrlsRef.current = [];
    };
  }, []);

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const incoming: Asset[] = [];
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      uploadedUrlsRef.current.push(url);
      incoming.push({
        title: file.name,
        type: file.type.startsWith("image") ? "Images" : "Videos",
        date: `Uploaded ${new Date().toLocaleDateString()}`,
        src: url,
      });
    });
    setAssets((prev) => [...incoming, ...prev]);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    if (e.dataTransfer?.files) handleFiles(e.dataTransfer.files);
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function openFilePicker() {
    inputRef.current?.click();
  }

  return (
    <section className="min-h-screen bg-[#f6f9fc] px-6 py-6 text-[#0f172a]">
      <div className="mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#0b2a6f]">Asset Library</h1>
            <div className="mt-4 flex gap-6 text-sm text-[#5e6b86]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={
                    tab === "All Assets"
                      ? "border-b-2 border-[#2049c9] pb-2 text-[#0b2a6f]"
                      : "pb-2 hover:text-[#0b2a6f]"
                  }
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-md border border-[#e6ebf4] bg-white p-2 text-[#0b2a6f] shadow-sm">
              <FiGrid className="h-4 w-4" />
            </button>
            <button className="rounded-md border border-[#e6ebf4] bg-white p-2 text-[#6b7b99]">
              <FiList className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {assets.map((asset, index) => (
            <Link
              href={`/library/${index}`}
              key={`${asset.title}-${asset.date}`}
              className="overflow-hidden rounded-2xl bg-[#121820] text-white shadow-[0_16px_30px_rgba(15,23,42,0.15)]"
            >
              <div className="relative h-48 w-full">
                {asset.src.startsWith("/assets/") ? (
                  <Image
                    src={asset.src}
                    alt={asset.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  // use next/image with unoptimized for blob/object URLs
                  <Image
                    src={asset.src}
                    alt={asset.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                )}
              </div>
              <div className="px-4 py-4">
                <div className="text-sm font-semibold">{asset.title}</div>
                <div className="mt-2 flex items-center justify-between text-xs text-[#9aa6bf]">
                  <span className="rounded-full bg-[#0f2d1f] px-2 py-0.5 text-[10px] font-semibold text-[#7ef2a6]">
                    {asset.type.toUpperCase()}
                  </span>
                  <span>{asset.date}</span>
                  <FiMoreVertical className="h-4 w-4 text-[#9aa6bf]" />
                </div>
              </div>
            </Link>
          ))}

          <div
            onClick={openFilePicker}
            onDrop={onDrop}
            onDragOver={onDragOver}
            className="flex h-full min-h-65 cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-[#d6deea] bg-white"
          >
            <input
              ref={inputRef}
              type="file"
              multiple
              onChange={(e) => handleFiles(e.target.files)}
              className="hidden"
            />

            <div className="text-center text-sm text-[#6b7b99]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef3fb] text-[#6b7b99]">
                <FiUploadCloud className="h-5 w-5" />
              </div>
              <div className="mt-3 font-semibold text-[#4a5b7b]">Drop files to upload</div>
              <div className="text-xs">or click to browse library</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
