"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FiUsers, FiMapPin } from 'react-icons/fi';
import { MdOutlineBusinessCenter, MdLocationCity, MdPublic } from 'react-icons/md';

export default function Audience() {
  const router = useRouter();
  const [targetingType, setTargetingType] = useState<'b2c' | 'b2b'>('b2c');
  const [location, setLocation] = useState<'local' | 'national' | 'global'>('national');
  const [businessType, setBusinessType] = useState('');
  const [interests, setInterests] = useState('');
  const [gender, setGender] = useState('All genders');
  const [language, setLanguage] = useState('English');
  const [ageRange, setAgeRange] = useState('Any age');

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center py-8 font-sans">
      
      {/* Main Card */}
      <div className="w-full max-w-[620px] bg-white rounded-3xl p-10 shadow-[0_2px_20px_rgb(0,0,0,0.06)]">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider mb-3">
            <span className="text-[#1a2b56]">Step 3 of 3</span>
            <span className="text-[#cf459d] font-bold">100% Complete</span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden flex">
            <div className="w-full bg-gradient-to-r from-[#4d3a8e] to-[#cf459d] h-full rounded-full"></div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-[#0a1b44] mb-3 tracking-tight">
            Define your target audience
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Help our AI understand who you want to reach to create the perfect strategy.
          </p>
        </div>

        {/* Who are you targeting? */}
        <div className="mb-8">
          <h3 className="text-xs font-bold text-[#1a2b56] uppercase mb-3 tracking-wider">
            Who are you targeting?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTargetingType('b2c')}
              className={`flex flex-col items-center justify-center py-5 rounded-xl border-2 transition-all font-semibold ${
                targetingType === 'b2c'
                  ? 'border-[#4d3a8e] bg-white text-[#0a1b44]'
                  : 'border-gray-300 bg-[#f7f9fc] text-gray-500 hover:border-gray-400'
              }`}
            >
              <FiUsers className="text-2xl mb-2" />
              <span className="text-xs">People (B2C)</span>
            </button>
            <button
              onClick={() => setTargetingType('b2b')}
              className={`flex flex-col items-center justify-center py-5 rounded-xl border-2 transition-all font-semibold ${
                targetingType === 'b2b'
                  ? 'border-[#4d3a8e] bg-white text-[#0a1b44]'
                  : 'border-gray-300 bg-[#f7f9fc] text-gray-500 hover:border-gray-400'
              }`}
            >
              <MdOutlineBusinessCenter className="text-2xl mb-2" />
              <span className="text-xs">Businesses (B2B)</span>
            </button>
          </div>
        </div>

        {/* Where is your audience located? */}
        <div className="mb-8">
          <h3 className="text-xs font-bold text-[#1a2b56] uppercase mb-3 tracking-wider">
            Where is your audience located?
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setLocation('local')}
              className={`flex flex-col items-center justify-center py-4 rounded-xl border-2 transition-all font-semibold ${
                location === 'local'
                  ? 'border-[#4d3a8e] bg-white text-[#0a1b44]'
                  : 'border-gray-300 bg-[#f7f9fc] text-gray-500 hover:border-gray-400'
              }`}
            >
              <FiMapPin className="text-xl mb-1" />
              <span className="text-xs">Local</span>
            </button>
            <button
              onClick={() => setLocation('national')}
              className={`flex flex-col items-center justify-center py-4 rounded-xl border-2 transition-all font-semibold ${
                location === 'national'
                  ? 'border-[#4d3a8e] bg-white text-[#0a1b44]'
                  : 'border-gray-300 bg-[#f7f9fc] text-gray-500 hover:border-gray-400'
              }`}
            >
              <MdLocationCity className="text-xl mb-1" />
              <span className="text-xs">National</span>
            </button>
            <button
              onClick={() => setLocation('global')}
              className={`flex flex-col items-center justify-center py-4 rounded-xl border-2 transition-all font-semibold ${
                location === 'global'
                  ? 'border-[#4d3a8e] bg-white text-[#0a1b44]'
                  : 'border-gray-300 bg-[#f7f9fc] text-gray-500 hover:border-gray-400'
              }`}
            >
              <MdPublic className="text-xl mb-1" />
              <span className="text-xs">Global</span>
            </button>
          </div>
        </div>

        {/* Audience details (optional) */}
        <div className="mb-10">
          <h3 className="text-xs font-bold text-[#1a2b56] uppercase mb-4 tracking-wider">
            Audience details (optional)
          </h3>

          <div className="space-y-4">
            {/* Business Type & Gender */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-2 tracking-wide">
                  Business Type
                </label>
                <input
                  type="text"
                  placeholder="e.g. E-commerce, Real Estate..."
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#f7f9fc] border border-gray-300 focus:border-gray-400 focus:outline-none transition-colors text-xs text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-2 tracking-wide">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#f7f9fc] border border-gray-300 focus:border-gray-400 focus:outline-none transition-colors text-xs text-gray-700"
                >
                  <option>All genders</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary</option>
                </select>
              </div>
            </div>

            {/* Interests & Language */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-2 tracking-wide">
                  Interests
                </label>
                <input
                  type="text"
                  placeholder="e.g. Fitness, Tech, Design"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#f7f9fc] border border-gray-300 focus:border-gray-400 focus:outline-none transition-colors text-xs text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-2 tracking-wide">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#f7f9fc] border border-gray-300 focus:border-gray-400 focus:outline-none transition-colors text-xs text-gray-700"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Italian</option>
                  <option>Portuguese</option>
                  <option>Russian</option>
                  <option>Chinese</option>
                  <option>Japanese</option>
                  <option>Korean</option>
                  <option>Arabic</option>
                  <option>Hindi</option>
                  <option>Thai</option>
                  <option>Turkish</option>
                  <option>Vietnamese</option>
                  <option>Indonesian</option>
                  <option>Tagalog</option>
                  <option>Polish</option>
                  <option>Dutch</option>
                  <option>Swedish</option>
                  <option>Norwegian</option>
                  <option>Danish</option>
                  <option>Finnish</option>
                  <option>Greek</option>
                  <option>Hebrew</option>
                  <option>Urdu</option>
                  <option>Bengali</option>
                  <option>Myanmar</option>
                  <option>Khmer</option>
                  <option>Laos</option>
                  <option>Caribbean Creole</option>
                  <option>Haitian Creole</option>
                </select>
              </div>
            </div>

            {/* Age Range */}
            <div>
              <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-2 tracking-wide">
                Age Range
              </label>
              <select
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-[#f7f9fc] border border-gray-300 focus:border-gray-400 focus:outline-none transition-colors text-xs text-gray-700"
              >
                <option>Any age</option>
                <option>13-17</option>
                <option>18-24</option>
                <option>25-34</option>
                <option>35-44</option>
                <option>45-54</option>
                <option>55-64</option>
                <option>65+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer Nav */}
        <div className="flex justify-between items-center w-full gap-3">
<Link href="/identity" >
          <button className="flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-[#1a2b56] font-semibold text-sm hover:bg-gray-50 transition-colors">
            <BsArrowLeft className="mr-2" strokeWidth={0.5} /> Back
          </button>
</Link>
          
          <button
            onClick={() => router.push('/loading')}
            className="flex items-center justify-center flex-1 px-6 py-3 rounded-lg text-white font-semibold text-sm bg-gradient-to-r from-[#4d3a8e] via-[#92479f] to-[#cf459d] hover:opacity-90 transition-opacity shadow-md"
          >
            Generate My Marketing System <BsArrowRight className="ml-2 font-bold" />
          </button>
        </div>

      </div>
    </div>
  );
}
