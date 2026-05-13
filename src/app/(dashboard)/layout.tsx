"use client"

import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { BsGraphUp, BsCalendarEvent } from "react-icons/bs";
import { FiAperture, FiFileText, FiFolder, FiVideo, FiBell, FiMenu, FiX } from "react-icons/fi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiLogOut, FiSettings, FiCheckCircle } from "react-icons/fi";

const navItems = [
    { name: "Dashboard", href: "/dashboard", Icon: MdOutlineDashboard },
    { name: "Business Identity", href: "/businessIdentity", Icon: HiOutlineIdentification },
    { name: "Competitors", href: "/competitors", Icon: BsGraphUp },
    { name: "Kit Generator", href: "/kitGenerator", Icon: FiAperture },
    { name: "Content", href: "/Content", Icon: FiFileText },
    { name: "AI Avatar Video", href: "/aiAvatar", Icon: FiVideo },
    { name: "Calender", href: "/calender", Icon: BsCalendarEvent },
    { name: "Library", href: "/library", Icon: FiFolder },
    { name: "Analytics", href: "/analytics", Icon: IoAnalyticsOutline },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (!profileMenuRef.current) return;
            if (!profileMenuRef.current.contains(event.target as Node)) {
                setProfileMenuOpen(false);
            }
        }

        function handleEscapeKey(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setProfileMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    return (
        <>
            {/* Fixed sidebar (styled to match design perfectly) - Hidden on mobile */}
            <aside className="fixed top-0 left-0 h-screen w-[260px] bg-[#f8fbff] border-r border-[#eef2f6] flex flex-col z-30 hidden lg:flex">
                {/* Logo Area */}
                <div className="px-6 py-8">
                    <div className="flex items-center gap-3">
                        <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#7131e3] to-[#cf479f] flex items-center justify-center shadow-md">
                        </div>
                        <div className="text-[20px] font-bold text-[#1f2937] tracking-tight">Icreate.AI</div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 py-2">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (pathname === '/' && item.href === '/dashboard');
                            
                            return (
                                <li key={item.name}>
                                    <Link 
                                        href={item.href} 
                                        className={`flex items-center gap-3 px-4 py-[10px] rounded-[8px] transition-all duration-200 group ${
                                            isActive 
                                                ? "bg-gradient-to-r from-[#8b4ca3] to-[#be4498] text-white shadow-sm font-medium" 
                                                : "text-[#5b6b7c] font-medium hover:bg-gradient-to-r hover:from-[#8b4ca3] hover:to-[#be4498] hover:text-white hover:shadow-sm"
                                        }`}
                                    >
                                        <item.Icon className={`w-[18px] h-[18px] transition-colors ${
                                            isActive ? "text-white" : "text-[#5b6b7c] group-hover:text-white"
                                        }`} />
                                        <span className="text-[14px]">{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Upgrade Pro Card */}
                <div className="px-5 pb-8">
                    <div className="bg-[#eef1f6] p-4 rounded-[12px]">
                        <h4 className="text-[13px] font-bold text-[#1f2937]">Upgrade Pro</h4>
                        <p className="text-[11px] text-[#6b7280] mt-1.5 leading-snug">
                            Get advanced AI features & unlimited exports.
                        </p>
                        <Link
                            href="/pricing"
                            className="mt-4 inline-flex w-full items-center justify-center text-[12px] font-semibold bg-gradient-to-r from-[#7a3db1] to-[#ca499c] text-white py-2.5 rounded-[6px] hover:opacity-90 transition-opacity drop-shadow-sm"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Fixed top bar */}
            <header className="fixed top-0 left-0 right-0 lg:left-[260px] h-[80px] bg-white border-b border-[#eef2f6] flex items-center px-6 lg:px-10 z-20 justify-between lg:justify-end">
                {/* Mobile hamburger menu button - Visible only on mobile */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden text-[#8E95A2] hover:text-[#2d3779] transition-colors z-40"
                >
                    <FiMenu className="w-6 h-6" />
                </button>

                {/* Logo text - Visible only on mobile */}
                <div className="flex-1 flex justify-center lg:hidden">
                    <div className="text-[18px] font-bold text-[#1f2937]">Icreate.AI</div>
                </div>

                {/* Right side icons & profile */}
                <div className="flex items-center gap-6">
                    <button className="text-[#8E95A2] hover:text-[#2d3779] relative transition-colors">
                        <FiBell className="w-5 h-5" />
                        {/* Notification dot */}
                        <span className="absolute top-0 right-0 w-[6px] h-[6px] bg-[#e4337b] rounded-full border border-white"></span>
                    </button>
                    
                    <div className="w-px h-[24px] bg-[#eef2f6]"></div>
                    
                    <div className="relative flex items-center gap-3" ref={profileMenuRef}>
                        <div className="text-right">
                            <div className="text-[14px] font-bold text-[#2d3779] leading-tight">Alex Morgan</div>
                            <div className="text-[11px] text-[#8E95A2] font-semibold mt-[2px]">Growth Lead</div>
                        </div>

                        <button
                            type="button"
                            aria-label="Open profile menu"
                            onClick={() => setProfileMenuOpen((open) => !open)}
                            className="w-10 h-10 rounded-full overflow-hidden bg-[#1e3a5f] shadow-sm flex-shrink-0 ring-2 ring-transparent transition hover:ring-[#d8e2f2]"
                        >
                            <span className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#2f4aa7] to-[#b43f97] text-sm font-bold text-white">
                                AM
                            </span>
                        </button>

                        {profileMenuOpen && (
                            <div className="absolute right-0 top-[calc(100%+16px)] w-[310px] overflow-hidden rounded-[18px] border border-[#e7ebf2] bg-white shadow-[0_20px_48px_rgba(28,39,82,0.18)]">
                                <div className="border-b border-[#eef2f7] px-7 py-6">
                                    <p className="text-[14px] font-extrabold leading-none text-[#23408a]">alex&apos;s Studio</p>

                                    <div className="mt-5 flex items-center justify-between">
                                        <span className="inline-flex rounded-full bg-[#f8ebf8] px-4 py-1 text-lg font-extrabold tracking-wide text-[#ad2f8c]">
                                            FREE PLAN
                                        </span>

                                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-[14px] bg-[#edf1f7] text-[#2a4da5]">
                                            <FiCheckCircle className="h-8 w-8" />
                                        </span>
                                    </div>

                                    <Link
                                        href="/settings"
                                        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-[16px] border border-[#d8dfeb] px-6 py-4 text-[18px] font-bold text-[#24459d] hover:bg-[#f7f9fd]"
                                    >
                                        <FiSettings className="h-5 w-5" />
                                        Settings
                                    </Link>
                                </div>

                                <div className="border-b border-[#eef2f7] px-7 py-6">
                                    <p className="text-[18px] font-extrabold tracking-[0.14em] text-[#6f7380]">SIGNED IN AS</p>

                                    <div className="mt-5 flex items-center gap-4">
                                        <div className="relative h-16 w-16 rounded-full bg-linear-to-br from-[#2f4aa7] to-[#b43f97] text-center text-4xl font-bold leading-[64px] text-white">
                                            a
                                            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#22c55e]" />
                                        </div>

                                        <div>
                                            <p className="text-[14px] font-extrabold leading-none text-[#24459d]">alex hales</p>
                                            <p className="mt-1 text-[13px] text-[#6e7380]">alexhales@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-7 py-5">
                                    <Link
                                        href="/auth/signIn"
                                        className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#ef4444] hover:text-[#dc2626]"
                                    >
                                        <FiLogOut className="h-5 w-5" />
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Main content (account for fixed sidebar and topbar) */}
            <div className="min-h-screen pt-[80px] lg:pl-[260px] bg-white">
                <Toaster position="top-center" reverseOrder={false} />
                <main className=" ">
                    {children}
                </main>
            </div>

            {/* Mobile menu overlay - Visible only on mobile when open */}
            {mobileMenuOpen && (
                <div 
                    className="fixed inset-0 z-40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}

            {/* Mobile sidebar menu - Visible only on mobile */}
            <aside className={`fixed top-0 left-0 h-screen w-[260px] bg-[#f8fbff] border-r border-[#eef2f6] flex flex-col z-50 lg:hidden transition-transform duration-300 ${
                mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                {/* Logo Area */}
                <div className="px-6 py-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#7131e3] to-[#cf479f] flex items-center justify-center shadow-md">
                        </div>
                        <div className="text-[20px] font-bold text-[#1f2937] tracking-tight">Icreate.AI</div>
                    </div>
                    {/* Close button */}
                    <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[#8E95A2] hover:text-[#2d3779] transition-colors"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 py-2">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (pathname === '/' && item.href === '/dashboard');
                            
                            return (
                                <li key={item.name}>
                                    <Link 
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-[10px] rounded-[8px] transition-all duration-200 group ${
                                            isActive 
                                                ? "bg-gradient-to-r from-[#8b4ca3] to-[#be4498] text-white shadow-sm font-medium" 
                                                : "text-[#5b6b7c] font-medium hover:bg-gradient-to-r hover:from-[#8b4ca3] hover:to-[#be4498] hover:text-white hover:shadow-sm"
                                        }`}
                                    >
                                        <item.Icon className={`w-[18px] h-[18px] transition-colors ${
                                            isActive ? "text-white" : "text-[#5b6b7c] group-hover:text-white"
                                        }`} />
                                        <span className="text-[14px]">{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Upgrade Pro Card */}
                <div className="px-5 pb-8">
                    <div className="bg-[#eef1f6] p-4 rounded-[12px]">
                        <h4 className="text-[13px] font-bold text-[#1f2937]">Upgrade Pro</h4>
                        <p className="text-[11px] text-[#6b7280] mt-1.5 leading-snug">
                            Get advanced AI features & unlimited exports.
                        </p>
                        <Link
                            href="/pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 inline-flex w-full items-center justify-center text-[12px] font-semibold bg-gradient-to-r from-[#7a3db1] to-[#ca499c] text-white py-2.5 rounded-[6px] hover:opacity-90 transition-opacity drop-shadow-sm"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}
