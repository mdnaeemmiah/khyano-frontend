"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-md text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#051d4d] leading-tight mb-4 tracking-tight">
          Start creating in<br />minutes
        </h2>
        <p className="text-gray-500 text-[15px]">
          Join our community of innovators and builders today.
        </p>
      </div>
      
      <div className="bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.03)] w-full max-w-[480px] p-8 sm:p-12">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2 text-left">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none block w-full px-4 py-3.5 border-0 bg-[#f4f7fa] text-gray-900 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#051d4d] sm:text-sm transition-colors"
              placeholder="Alex Rivera"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2 text-left">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-4 py-3.5 border-0 bg-[#f4f7fa] text-gray-900 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#051d4d] sm:text-sm transition-colors"
              placeholder="alex@aether.ai"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2 text-left">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="appearance-none block w-full px-4 py-3.5 pr-12 border-0 bg-[#f4f7fa] text-gray-900 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#051d4d] sm:text-sm text-lg tracking-[0.1em] transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="h-5 w-5" />
                ) : (
                  <FiEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-[12px] shadow-[0_8px_20px_-8px_rgba(102,51,153,0.6)] text-sm font-medium text-white bg-gradient-to-r from-[#3b439c] to-[#c858a7] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b439c] transition-all"
            >
              Create account
            </button>
          </div>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400 font-medium text-xs tracking-wider">
                OR
              </span>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="w-full flex items-center justify-center py-3.5 px-4 border border-gray-200 rounded-xl bg-white text-sm font-semibold text-[#051d4d] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#051d4d] transition-colors"
            >
              <FcGoogle className="h-5 w-5 mr-3" />
              Continue with Google
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-[15px] text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/signIn" className="font-medium text-[#0b3891] hover:text-[#051d4d]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
