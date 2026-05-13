"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FiCamera, FiChevronDown, FiLock, FiUpload } from 'react-icons/fi'

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [platformNotifications, setPlatformNotifications] = useState(true)
  const [profileImage, setProfileImage] = useState(
    '/assets/AB6AXuAWnOWFz5Lg4NUD-itraNbTAozryVCn5bVX6k1upSukmecB7GQGvYtNy-4kfkobDcfBO5VRZ33XSaszudApcll9crgUYOKOjFbFguPBlt4rfH3b3awRGspnFzMgnWtBZLRNODkYleBYdSAdB1mTZeqj7ltlkCp_3B34fQyXGmkzAVd6v6PRsIyfdmrDz88OHcOwDNN.png',
  )
  const [imageHint, setImageHint] = useState('JPG or PNG. Max 2MB.')
  const [isUploadedImage, setIsUploadedImage] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      if (isUploadedImage && profileImage.startsWith('blob:')) {
        URL.revokeObjectURL(profileImage)
      }
    }
  }, [isUploadedImage, profileImage])

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setImageHint('Only JPG or PNG is allowed.')
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      setImageHint('Image must be under 2MB.')
      return
    }

    if (isUploadedImage && profileImage.startsWith('blob:')) {
      URL.revokeObjectURL(profileImage)
    }

    const nextPreview = URL.createObjectURL(file)
    setProfileImage(nextPreview)
    setIsUploadedImage(true)
    setImageHint(file.name)

    // Allows selecting the same file again if needed.
    event.target.value = ''
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#f8fbff_0%,#eef2f8_45%,#e9edf5_100%)] px-4 py-8 text-slate-900 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#d9e6ff] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-44 h-72 w-72 rounded-full bg-[#f0d8ec] opacity-70 blur-3xl" />

      <div className="mx-auto w-full ">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-[-0.02em] text-[#23479e] sm:text-[34px]">Settings</h1>
            <p className="mt-2 text-sm text-slate-600">
              Manage your personal preferences and workspace configuration.
            </p>
          </div>
          <Link
            href="/adAccounts"
            className="inline-flex min-h-11 items-center rounded-xl border border-[#d7def0] bg-white/90 px-4 py-2 text-sm font-semibold text-[#2f4ea2] shadow-[0_8px_20px_rgba(35,71,158,0.12)] transition hover:-translate-y-0.5 hover:border-[#c4d0eb]"
          >
            Manage Ad Accounts
          </Link>
        </header>

        <section className="mt-7 rounded-2xl border border-[#e7ebf3] bg-white/95 px-5 py-6 shadow-[0_14px_35px_rgba(35,71,158,0.08)] backdrop-blur sm:px-7">
          <h2 className="text-[32px] font-semibold tracking-[-0.02em] text-[#2448a2]">Profile</h2>
          <p className="mt-1 text-sm text-slate-500">Personal information and your public profile.</p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[170px_1fr]">
            <div className="flex flex-col items-center lg:items-start">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png"
                onChange={handleImageUpload}
                className="hidden"
                aria-label="Upload profile image"
              />

              <div className="relative h-27 w-27 rounded-full border-2 border-white shadow-[0_10px_24px_rgba(35,71,158,0.25)] ring-4 ring-[#eff3ff]">
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute -bottom-1 right-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white bg-[linear-gradient(135deg,#5a44b0,#d75ca4)] text-white shadow-md"
                  aria-label="Update profile image"
                >
                  <FiCamera className="text-[13px]" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-[#eef3ff] px-3 py-1.5 text-xs font-semibold text-[#2e4ea2] transition hover:bg-[#e4ecff]"
              >
                <FiUpload className="text-[12px]" />
                Change Image
              </button>
              <p className="mt-2 text-xs text-slate-500">{imageHint}</p>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-[#2f4fa4]">Full Name</span>
                <input
                  type="text"
                  value="Elena Rodriguez"
                  readOnly
                  className="h-11 w-full rounded-lg border border-[#edf0f4] bg-[#f2f5fa] px-4 text-sm text-slate-700 outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-[#2f4fa4]">Email Address</span>
                <input
                  type="email"
                  value="elena@luminos-ai.com"
                  readOnly
                  className="h-11 w-full rounded-lg border border-[#edf0f4] bg-[#f2f5fa] px-4 text-sm text-slate-700 outline-none"
                />
              </label>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-[#e7ebf3] bg-white/95 px-5 py-6 shadow-[0_14px_35px_rgba(35,71,158,0.08)] backdrop-blur sm:px-7">
          <h2 className="text-[32px] font-semibold tracking-[-0.02em] text-[#2448a2]">Account</h2>
          <p className="mt-1 text-sm text-slate-500">Manage your security settings and preferences.</p>

          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#edf0f5] bg-[linear-gradient(180deg,#fbfcff_0%,#f8faff_100%)] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#f1f4fb] text-[#3352a6]">
                  <FiLock className="text-sm" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#2d4a9e]">Password</p>
                  <p className="text-xs text-slate-500">Last changed 3 months ago</p>
                </div>
              </div>
              <button
                type="button"
                className="rounded-md border border-[#d9dfef] bg-white px-4 py-1.5 text-xs font-semibold text-[#2f4ea2] transition hover:border-[#c8d0e7]"
              >
                Change
              </button>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-[#2f4fa4]">Language Preference</span>
              <div className="relative">
                <select
                  defaultValue="English (United States)"
                  className="h-11 w-full appearance-none rounded-lg border border-[#edf0f4] bg-[#f2f5fa] px-4 pr-10 text-sm text-slate-700 outline-none"
                >
                  <option>English (United States)</option>
                  <option>English (United Kingdom)</option>
                  <option>Spanish</option>
                  <option>German</option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
              </div>
            </label>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-[#e7ebf3] bg-white/95 px-5 py-6 shadow-[0_14px_35px_rgba(35,71,158,0.08)] backdrop-blur sm:px-7">
          <h2 className="text-[32px] font-semibold tracking-[-0.02em] text-[#2448a2]">Notifications</h2>
          <p className="mt-1 text-sm text-slate-500">Control how you want to be notified about activity.</p>

          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#2f4ea2]">Email Notifications</p>
                <p className="mt-0.5 text-xs text-slate-500">Receive weekly summaries and workspace updates.</p>
              </div>
              <button
                type="button"
                onClick={() => setEmailNotifications((current) => !current)}
                className={`relative h-6 w-11 rounded-full transition ${
                  emailNotifications
                    ? 'bg-[linear-gradient(135deg,#3947af,#cf4ca0)]'
                    : 'bg-slate-300'
                }`}
                aria-pressed={emailNotifications}
                aria-label="Toggle email notifications"
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                    emailNotifications ? 'left-5.5' : 'left-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#2f4ea2]">Platform Notifications</p>
                <p className="mt-0.5 text-xs text-slate-500">Real-time alerts for shared files and comments.</p>
              </div>
              <button
                type="button"
                onClick={() => setPlatformNotifications((current) => !current)}
                className={`relative h-6 w-11 rounded-full transition ${
                  platformNotifications
                    ? 'bg-[linear-gradient(135deg,#3947af,#cf4ca0)]'
                    : 'bg-slate-300'
                }`}
                aria-pressed={platformNotifications}
                aria-label="Toggle platform notifications"
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                    platformNotifications ? 'left-5.5' : 'left-0.5'
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        <div className="mt-7 flex flex-wrap items-center justify-end gap-3 pb-6">
          <button
            type="button"
            className="min-w-28 rounded-xl border border-[#d8deee] bg-white px-6 py-3 text-sm font-semibold text-[#304fa1] transition hover:-translate-y-0.5 hover:border-[#cbd3e8]"
          >
            Cancel
          </button>
          <button
            type="button"
            className="min-w-36 rounded-xl bg-[linear-gradient(135deg,#2f4299,#d35ca6)] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(67,66,155,0.35)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
