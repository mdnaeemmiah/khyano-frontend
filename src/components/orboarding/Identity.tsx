/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useRef } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { MdOutlineRecordVoiceOver } from 'react-icons/md';
import { FiBriefcase, FiEdit2 } from 'react-icons/fi';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { BiGridAlt } from 'react-icons/bi';
import { PiConfettiLight } from 'react-icons/pi';
import Link from 'next/link';

export default function Identity() {
  const [primaryColor, setPrimaryColor] = useState('#1d3b91');
  const [secondaryColor, setSecondaryColor] = useState('#e35aac');
  const [selectedTone, setSelectedTone] = useState('professional');
  
  const primaryInputRef = useRef<HTMLInputElement>(null);
  const secondaryInputRef = useRef<HTMLInputElement>(null);

  const tones = [
    { 
      id: 'professional', 
      label: 'Professional', 
      desc: 'Expert, authoritative, and reliable communication style.', 
      icon: <FiBriefcase /> 
    },
    { 
      id: 'fun', 
      label: 'Fun', 
      desc: 'Playful, engaging, and lighthearted personality.', 
      icon: <span className="text-xl">🎉</span> // Fallback if icon is missing, or can use another icon 
    },
    { 
      id: 'bold', 
      label: 'Bold', 
      desc: 'Daring, disruptive, and highly energetic impact.', 
      icon: <HiOutlineLightningBolt /> 
    },
    { 
      id: 'minimal', 
      label: 'Minimal', 
      desc: 'Clean, sophisticated, and essentialist approach.', 
      icon: <BiGridAlt /> 
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f8fc] flex justify-center px-4 py-8 font-sans">
      <div className="w-full max-w-[620px] rounded-[28px] bg-white shadow-[0_10px_40px_rgba(32,58,126,0.08)] px-10 py-8 flex flex-col">
        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.22em] mb-2">
          <span className="text-[#1a2b56]">Step 2 of 3</span>
          <span className="text-gray-400">Brand Definition</span>
        </div>

        <div className="h-1.5 w-full rounded-full bg-[#e8edf7] overflow-hidden mb-10">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#1a2b56] via-[#6d4aa8] to-[#cf459d]" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-[28px] leading-tight font-extrabold text-[#0a1b44] tracking-tight">
            Define your brand&apos;s visual identity
          </h1>
          <p className="mx-auto mt-3 max-w-[420px] text-[14px] leading-6 text-gray-500">
            Choose colors and tones that resonate with your audience and reflect your brand's core values.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white shadow-[0_1px_0_rgba(26,43,86,0.04)] border border-white px-6 py-6">
            <div className="flex items-center gap-2 mb-5 text-[#1a2b56]">
              <IoColorPaletteOutline className="text-xl" />
              <h2 className="text-[15px] font-medium">Color Palette</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">
                  Primary Color
                </label>
                <div
                  onClick={() => primaryInputRef.current?.click()}
                  className="flex items-center justify-between rounded-lg border border-[#dfe5f0] bg-[#f7f9fc] px-3 py-3 cursor-pointer transition-colors hover:border-gray-300"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="h-9 w-9 rounded-md shadow-inner shrink-0"
                      style={{ background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)` }}
                    />
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-[#1a2b56] uppercase truncate">{primaryColor}</div>
                      <div className="text-[9px] text-gray-500 truncate">Luminous Deep Navy</div>
                    </div>
                  </div>
                  <FiEdit2 className="text-gray-400 shrink-0 ml-2 text-[13px]" />
                  <input
                    type="color"
                    ref={primaryInputRef}
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="opacity-0 absolute w-0 h-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">
                  Secondary Color
                </label>
                <div
                  onClick={() => secondaryInputRef.current?.click()}
                  className="flex items-center justify-between rounded-lg border border-[#dfe5f0] bg-[#f7f9fc] px-3 py-3 cursor-pointer transition-colors hover:border-gray-300"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="h-9 w-9 rounded-md shadow-inner shrink-0"
                      style={{ background: `linear-gradient(135deg, ${secondaryColor}, ${secondaryColor}dd)` }}
                    />
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-[#cf459d] uppercase truncate">{secondaryColor}</div>
                      <div className="text-[9px] text-gray-500 truncate">Luminous Magenta</div>
                    </div>
                  </div>
                  <FiEdit2 className="text-gray-400 shrink-0 ml-2 text-[13px]" />
                  <input
                    type="color"
                    ref={secondaryInputRef}
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="opacity-0 absolute w-0 h-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white shadow-[0_1px_0_rgba(26,43,86,0.04)] border border-white px-6 py-6">
            <div className="flex items-center gap-2 mb-5 text-[#1a2b56]">
              <MdOutlineRecordVoiceOver className="text-xl" />
              <h2 className="text-[15px] font-medium">Brand Tone</h2>
            </div>

            <div className="space-y-3">
              {tones.map((tone) => (
                <div
                  key={tone.id}
                  onClick={() => setSelectedTone(tone.id)}
                  className={`flex items-start gap-4 rounded-xl border p-4 cursor-pointer transition-all ${
                    selectedTone === tone.id
                      ? 'border-[#1a2b56] bg-[#f8fbff]'
                      : 'border-[#dfe5f0] bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`h-10 w-10 rounded-md flex items-center justify-center text-lg shrink-0 ${
                    selectedTone === tone.id ? 'bg-[#1a2b56] text-white' : 'bg-[#f4f7fb] text-[#1a2b56]'
                  }`}>
                    {tone.icon}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-[13px] font-bold text-[#1a2b56] mb-0.5">{tone.label}</h3>
                    <p className="text-[11px] leading-5 text-gray-500 max-w-[290px]">{tone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <Link href="/brand" className="shrink-0 rounded-lg border border-[#dfe5f0] bg-white px-7 py-3 text-sm font-semibold text-[#1a2b56] shadow-[0_1px_0_rgba(26,43,86,0.04)] hover:bg-gray-50">
            Back
          </Link>

          <Link
            href="/audience"
            className="flex-1 rounded-lg bg-gradient-to-r from-[#1f3d9a] via-[#7a49a9] to-[#cf459d] px-7 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_20px_rgba(76,58,142,0.24)] hover:opacity-95"
          >
            Continue <BsArrowRight className="ml-2 inline-block" />
          </Link>
        </div>
      </div>
    </div>
  );
}
