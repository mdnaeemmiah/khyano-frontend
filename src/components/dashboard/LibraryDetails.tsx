"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconPlayerPlayFilled,
  IconCalendar,
  IconEdit,
  IconDownload,
  IconTrash,
  IconX,
} from "@tabler/icons-react";

type Asset = {
  id: number;
  title: string;
  date: string;
  src: string;
  type: "image" | "video";
  resolution: string;
};

const generatedAssets: Asset[] = [
  {
    id: 1,
    title: "Cyberpunk_Lumines...",
    date: "May 24, 2024",
    src: "/assets/AB6AXuAWnOWFz5Lg4NUD-itraNbTAozryVCn5bVX6k1upSukmecB7GQGvYtNy-4kfkobDcfBO5VRZ33XSaszudApcll9crgUYOKOjFbFguPBlt4rfH3b3awRGspnFzMgnWtBZLRNODkYleBYdSAdB1mTZeqj7ltlkCp_3B34fQyXGmkzAVd6v6PRsIyfdmrDz88OHcOwDNN.png",
    type: "image",
    resolution: "4K PNG",
  },
  {
    id: 2,
    title: "Minimalist_Structu",
    date: "May 23, 2024",
    src: "/assets/AB6AXuCRdQh-YIne0iaza8vyVlWYXfN8HJMXXHHTLu23xlh9jg5nwmcJCeWUE1ZjPWe4jAloHLY_PtuY3D8Z844l6-q9WiFBI5E03dpyErTGLDiXeaQCkpjla_BO1EltRDBC3Bpy0_Q351kyoztU6FVA2mvmm8ZIxjUJ20VK6pNPULzjZ4rUvYoc3VWQFh3vSMOTD4V6Jn8.png",
    type: "image",
    resolution: "HQ JPG",
  },
  {
    id: 3,
    title: "Fluid_Motion_Vibra",
    date: "May 23, 2024",
    src: "/assets/ai-sample-1.svg",
    type: "image",
    resolution: "4K PNG",
  },
  {
    id: 4,
    title: "Pastel_Nebula_Soft",
    date: "May 22, 2024",
    src: "/assets/ai-sample-2.svg",
    type: "video",
    resolution: "HQ JPG",
  },
  {
    id: 5,
    title: "Golden_Abstract_C",
    date: "May 21, 2024",
    src: "/assets/ai-sample-3.svg",
    type: "image",
    resolution: "4K PNG",
  },
  {
    id: 6,
    title: "Deep_Tech_Interfac",
    date: "May 21, 2024",
    src: "/assets/Border.png",
    type: "image",
    resolution: "4K PNG",
  },
  {
    id: 7,
    title: "Organic_Bubbles_S",
    date: "May 20, 2024",
    src: "/assets/Visual Asset.svg",
    type: "image",
    resolution: "HQ JPG",
  },
  {
    id: 8,
    title: "Geometric_Polygor",
    date: "May 19, 2024",
    src: "/assets/ai-sample-1.svg",
    type: "image",
    resolution: "4K PNG",
  },
];

const LibraryDetails = () => {
  const [selectedAssets, setSelectedAssets] = useState<number[]>([]);

  const toggleAssetSelection = (id: number) => {
    setSelectedAssets((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((assetId) => assetId !== id)
        : [...prevSelected, id],
    );
  };

  return (
    <div className="bg-[#f6f9fc] p-8 font-sans">
      <div className="">
        <div className="text-sm text-gray-500 mb-4">
          <Link href="/library" className="hover:underline">
            LIBRARY
          </Link>{" "}
          &gt; <span className="font-semibold">GENERATED ASSETS</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Generated Images
            </h1>
            <p className="text-gray-600 mt-2">
              Browse and manage your high-fidelity AI visuals. Use these assets
              for your upcoming ad campaigns or product galleries.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L13 10.414V15a1 1 0 01-.293.707l-2 2A1 1 0 019 17v-6.586L4.293 6.707A1 1 0 014 6V3z"
                  clipRule="evenodd"
                />
              </svg>
              Filter
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 5a1 1 0 000 2h14a1 1 0 100-2H3zM3 10a1 1 0 000 2h14a1 1 0 100-2H3zM3 15a1 1 0 000 2h14a1 1 0 100-2H3z" />
              </svg>
              Latest First
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {generatedAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => toggleAssetSelection(asset.id)}
            >
              <div className="relative">
                <Image
                  src={asset.src}
                  alt={asset.title}
                  width={300}
                  height={225}
                  className="w-full h-auto object-cover"
                />
                {asset.type === "video" && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <IconPlayerPlayFilled className="text-white h-12 w-12" />
                  </div>
                )}
                <div
                  className={`absolute top-3 left-3 h-5 w-5 rounded border-2 ${
                    selectedAssets.includes(asset.id)
                      ? "bg-blue-600 border-blue-600"
                      : "bg-white bg-opacity-50 border-gray-300"
                  } flex items-center justify-center`}
                >
                  {selectedAssets.includes(asset.id) && (
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 truncate">
                  {asset.title}
                </h3>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>{asset.date}</span>
                  <span className="font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded">
                    {asset.resolution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-white border border-gray-300 rounded-full px-6 py-3 text-sm font-semibold hover:bg-gray-50">
            Load More Assets
          </button>
        </div>
      </div>

      {selectedAssets.length > 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-auto max-w-4xl">
          <div className="bg-white rounded-full shadow-lg p-3 flex items-center gap-6">
            <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">
              {selectedAssets.length}
            </div>
            <div className="text-sm font-medium text-gray-700">
              Image Selected
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <Link href="/schedule">
                <button className="flex items-center gap-2 hover:text-gray-900">
                  <IconCalendar className="h-5 w-5" /> Schedule
                </button>
              </Link>
              <button className="flex items-center gap-2 hover:text-gray-900">
                <IconEdit className="h-5 w-5" /> Edit
              </button>
              <button className="flex items-center gap-2 hover:text-gray-900">
                <IconDownload className="h-5 w-5" /> Download
              </button>
              <button className="flex items-center gap-2 text-red-500 hover:text-red-700">
                <IconTrash className="h-5 w-5" /> Delete
              </button>
            </div>
            <button
              onClick={() => setSelectedAssets([])}
              className="ml-4 text-gray-400 hover:text-gray-600"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryDetails;
