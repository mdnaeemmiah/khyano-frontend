"use client";
import React from "react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  IconActivity,
  IconHeart,
  IconUsers,
  IconBolt,
  IconCalendar,
  IconBrandTiktok,
  IconBrandInstagram,
  IconArrowRight,
  IconSparkles,
} from "@tabler/icons-react";

const viewsData = [
  { name: "WEEK 1", views: 4000 },
  { name: "WEEK 2", views: 3000 },
  { name: "WEEK 3", views: 2000 },
  { name: "WEEK 4", views: 2780 },
];

const clicksData = [
  { name: "MON", clicks: 400, conv: 240 },
  { name: "TUE", clicks: 300, conv: 139 },
  { name: "WED", clicks: 200, conv: 980 },
  { name: "THU", clicks: 278, conv: 390 },
  { name: "FRI", clicks: 189, conv: 480 },
  { name: "SAT", clicks: 239, conv: 380 },
  { name: "SUN", clicks: 349, conv: 430 },
];

const bestPerformingContent = [
  {
    platform: "TikTok",
    image: "/assets/ai-sample-1.svg",
    title: "Viral Post",
    description: "Safe work",
    reach: "420K",
    likes: "12.5K",
    shares: "3.2K",
    bgColor: "bg-cyan-400",
  },
  {
    platform: "Instagram",
    image: "/assets/ai-sample-2.svg",
    title: "Top Engagement",
    reach: "280K",
    likes: "18.2K",
    shares: "1.1K",
    bgColor: "bg-black",
  },
  {
    platform: "TikTok",
    image: "/assets/ai-sample-3.svg",
    title: "Most Shared",
    reach: "195K",
    likes: "9.4K",
    shares: "5.8K",
    bgColor: "bg-black",
  },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f9] px-4 py-6 text-gray-800 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto ">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Performance Overview
            </h1>
            <p className="mt-1 text-sm text-gray-500 sm:text-base">
              Holistic view of your brand&apos;s digital resonance.
            </p>
          </div>
          <div className="flex items-center self-start rounded-lg border border-gray-200 bg-white px-4 py-2 sm:self-auto">
            <IconCalendar className="h-5 w-5 text-gray-500" />
            <select className="bg-transparent ml-2 outline-none text-sm font-medium">
              <option>Last 30 Days</option>
              <option>Last 60 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6">
          <StatCard
            icon={<IconActivity className="text-blue-500" />}
            label="Total Reach"
            value="1.2M"
            change="+12%"
            changeColor="text-green-500"
          />
          <StatCard
            icon={<IconHeart className="text-pink-500" />}
            label="Avg. Engagement"
            value="5.4%"
            change="+0.8%"
            changeColor="text-green-500"
          />
          <StatCard
            icon={<IconUsers className="text-purple-500" />}
            label="New Followers"
            value="12,400"
            change="+15%"
            changeColor="text-green-500"
          />
          <StatCard
            icon={<IconBolt className="text-yellow-500" />}
            label="Content Efficiency"
            value="92%"
            change="High"
            changeColor="text-blue-500"
          />
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-6">
          <ChartCard title="Views Trend" legend="Total Views">
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={viewsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="url(#colorUv)"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title="Clicks & Conversions" legend={<div className="flex items-center gap-4"><span>CLICKS</span><span>CONV.</span></div>}>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={clicksData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} hide />
                <Tooltip />
                <Bar dataKey="clicks" fill="#e0e7ff" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="conv" stroke="#f472b6" strokeWidth={2} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
        
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8}/>
          </linearGradient>
        </defs>

        <div className="mb-8">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold sm:text-2xl">Best Performing Content</h2>
            <a href="#" className="flex items-center text-sm font-semibold text-blue-600">
              View Full Content Library <IconArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:gap-6">
            {bestPerformingContent.map((content, index) => (
              <ContentCard key={index} {...content} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 sm:p-6 lg:flex-row lg:items-center lg:p-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 lg:mr-2">
            <IconSparkles className="h-8 w-8 text-purple-600" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="mb-2 text-lg font-bold">AI Strategic Summary</h3>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              Your video content is driving <span className="font-bold text-pink-500">3x more engagement</span> than photos this month. To maximize impact, focus on posting between <span className="font-bold text-gray-900">6 PM and 8 PM</span> for maximum reach. Consider a deeper dive into TikTok reels for your next campaign.
            </p>
          </div>
          <button className="w-full rounded-lg bg-linear-to-r from-purple-600 to-pink-500 px-6 py-3 font-bold text-white whitespace-nowrap lg:ml-auto lg:w-auto">
            Generate New Strategy
          </button>
        </div>
      </div>
    </div>
  );
};

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  changeColor: string;
};

const StatCard = ({ icon, label, value, change, changeColor }: StatCardProps) => (
  <div className="flex items-start justify-between rounded-2xl bg-white p-5 shadow-sm sm:p-6">
    <div>
      <div className="mb-4 flex items-center text-sm text-gray-500">
        {icon}
        <span className="ml-2">{label}</span>
      </div>
      <div className="text-2xl font-bold sm:text-3xl">{value}</div>
    </div>
    <div className={`text-sm font-bold ${changeColor}`}>{change}</div>
  </div>
);

type ChartCardProps = {
  title: string;
  legend: React.ReactNode;
  children: React.ReactNode;
};

const ChartCard = ({ title, legend, children }: ChartCardProps) => (
  <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-6">
    <div className="mb-4 flex items-center justify-between gap-4">
      <h3 className="text-base font-bold sm:text-lg">{title}</h3>
      <div className="flex items-center text-xs text-gray-500 sm:text-sm">{legend}</div>
    </div>
    {children}
  </div>
);

type ContentCardProps = {
  platform: string;
  image: string;
  title: string;
  description?: string;
  reach: string;
  likes: string;
  shares: string;
  bgColor: string;
};

const ContentCard = ({ platform, image, title, description, reach, likes, shares, bgColor }: ContentCardProps) => (
  <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
    <div className={`${bgColor} relative flex h-48 flex-col justify-between p-4 text-white`}>
      <div className="flex items-center bg-black bg-opacity-20 rounded-full px-2 py-1 text-xs self-start">
        {platform === 'TikTok' ? <IconBrandTiktok className="h-4 w-4 mr-1" /> : <IconBrandInstagram className="h-4 w-4 mr-1" />}
        {platform}
      </div>
      <div className="relative">
        <Image src={image} alt={title} fill className="object-contain opacity-50" />
        <div className="relative z-10">
          <h4 className="font-bold text-xl">{title}</h4>
          {description && <p className="text-sm">{description}</p>}
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 p-4 text-center">
      <div>
        <div className="font-bold text-lg">{reach}</div>
        <div className="text-xs text-gray-500">REACH</div>
      </div>
      <div>
        <div className="font-bold text-lg">{likes}</div>
        <div className="text-xs text-gray-500">LIKES</div>
      </div>
      <div>
        <div className="font-bold text-lg">{shares}</div>
        <div className="text-xs text-gray-500">SHARES</div>
      </div>
    </div>
  </div>
);


export default Analytics;
