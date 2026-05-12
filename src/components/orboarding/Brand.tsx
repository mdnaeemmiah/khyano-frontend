"use client";

import React, { useState, useRef } from 'react';
import { FiGlobe, FiX } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaTiktok, FaPaintBrush, FaCamera } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

export default function Brand() {
  const [images, setImages] = useState<string[]>([]);
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeLogo = () => {
    setLogo(null);
    if (logoInputRef.current) logoInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] flex flex-col items-center py-10 font-sans">
      {/* Header */}
      <div className="w-full max-w-[600px] px-4 mb-6">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider mb-2">
          <span className="text-[#1a2b56]">Step 1 of 3</span>
          <span className="text-gray-400">Brand Definition</span>
        </div>
        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden flex">
          <div className="w-1/3 bg-gradient-to-r from-[#1a2b56] to-[#cf459d] h-full rounded-full"></div>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[600px] bg-white rounded-[32px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
        {/* Top gradient border */}
        <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-[#e3eeff] via-[#f7d6e6] to-[#e3eeff]"></div>

        <h1 className="text-4xl font-extrabold text-[#0a1b44] mb-4 tracking-tight">
          Add your brand source
        </h1>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          Tell us where your brand lives so we can start building your unique style and voice.
        </p>

        <div className="space-y-6">
          {/* Website URL */}
          <div>
            <label className="block text-[11px] font-bold text-[#1a2b56] uppercase mb-2">
              Website URL
            </label>
            <div className="flex items-center bg-[#f4f7fb] rounded-xl px-4 py-3.5 border border-transparent focus-within:border-gray-300 transition-colors">
              <FiGlobe className="text-gray-400 text-xl mr-3" />
              <input
                type="text"
                placeholder="https://yourwebsite.com"
                className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Social Media Link */}
          <div>
            <label className="block text-[11px] font-bold text-[#1a2b56] uppercase mb-2">
              Social Media Link
            </label>
            <div className="space-y-3">
              <div className="flex items-center bg-[#f4f7fb] rounded-xl px-4 py-3.5 border border-transparent focus-within:border-gray-300 transition-colors">
                <FaInstagram className="text-pink-500 text-xl mr-3" />
                <input
                  type="text"
                  placeholder="https://instagram.com/yourbrand"
                  className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="flex items-center bg-[#f4f7fb] rounded-xl px-4 py-3.5 border border-transparent focus-within:border-gray-300 transition-colors">
                <FaFacebook className="text-blue-500 text-xl mr-3" />
                <input
                  type="text"
                  placeholder="https://facebook.com/yourbrand"
                  className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="flex items-center bg-[#f4f7fb] rounded-xl px-4 py-3.5 border border-transparent focus-within:border-gray-300 transition-colors">
                <FaTiktok className="text-black text-xl mr-3" />
                <input
                  type="text"
                  placeholder="https://tiktok.com/yourbrand"
                  className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Business Name */}
          <div className="pt-2">
            <div className="flex justify-between items-center mb-2">
              <label className="text-[11px] font-bold text-[#1a2b56] uppercase">
                Business Name
              </label>
              <span className="text-[9px] font-bold text-pink-400 bg-pink-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Optional
              </span>
            </div>
            <div className="flex items-center bg-[#f4f7fb] rounded-xl px-4 py-3.5 border border-transparent focus-within:border-gray-300 transition-colors">
              <input
                type="text"
                placeholder="e.g. Lumina Creative"
                className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Logo Upload */}
          <div className="pt-2">
            <div className="flex justify-between items-center mb-2">
              <label className="text-[11px] font-bold text-[#1a2b56] uppercase">
                Logo Upload
              </label>
              <span className="text-[9px] font-bold text-pink-400 bg-pink-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Optional
              </span>
            </div>
            {!logo ? (
              <div 
                onClick={() => logoInputRef.current?.click()}
                className="h-32 rounded-xl border border-dashed border-gray-300 bg-white flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input 
                  type="file" 
                  accept="image/png, image/jpeg, image/svg+xml" 
                  className="hidden" 
                  ref={logoInputRef} 
                  onChange={handleLogoUpload} 
                />
                <div className="w-10 h-10 bg-[#f4f7fb] rounded-full flex items-center justify-center mb-3">
                  <FaPaintBrush className="text-[#1a2b56] text-lg" />
                </div>
                <p className="text-sm font-semibold text-[#1a2b56] mb-1">Drag and drop your logo here</p>
                <p className="text-[10px] text-gray-400">PNG, SVG or JPEG (Max. 5MB)</p>
              </div>
            ) : (
              <div className="h-32 relative rounded-xl overflow-hidden border border-gray-200 group bg-gray-50 flex items-center justify-center">
                <img src={logo} alt="Logo Preview" className="h-full object-contain p-2" />
                <button 
                  onClick={removeLogo}
                  className="absolute top-2 right-2 bg-black/60 hover:bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  <FiX size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Product Images */}
          <div className="pt-2">
            <div className="flex justify-between items-center mb-2">
              <label className="text-[11px] font-bold text-[#1a2b56] uppercase">
                Product Images
              </label>
              <span className="text-[9px] font-bold text-pink-400 bg-pink-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Optional
              </span>
            </div>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="h-32 rounded-xl border border-dashed border-gray-300 bg-white flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
              />
              <FaCamera className="text-gray-400 text-3xl mb-2" />
              <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">Upload</p>
            </div>

            {/* Image Previews */}
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 group">
                    <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(idx);
                      }}
                      className="absolute top-1.5 right-1.5 bg-black/60 hover:bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    >
                      <FiX size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Area */}
        <div className="mt-10">
<Link href="/identity" className="w-full flex">
          <button className="w-full flex items-center justify-center py-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-[#4d3a8e] via-[#92479f] to-[#cf459d] hover:opacity-90 transition-opacity shadow-lg mb-6">
            Continue <BsArrowRight className="ml-2 font-bold" />
          </button>
</Link>
          
          <div className="text-center text-sm font-medium text-gray-500">
            Not ready? <Link href="/identity" className="text-[#cf459d] font-bold underline underline-offset-4 decoration-2 decoration-[#cf459d]/50 hover:decoration-[#cf459d]">Skip for now</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center space-x-6 mt-8 text-gray-400 text-xs font-semibold">
        <div className="flex items-center">
          <MdOutlineSecurity className="mr-1.5 text-lg" />
          GDPR Compliant
        </div>
        <div className="flex items-center">
          <HiOutlineLightningBolt className="mr-1.5 text-lg" />
          AI Analysis Enabled
        </div>
      </div>
    </div>
  );
}
