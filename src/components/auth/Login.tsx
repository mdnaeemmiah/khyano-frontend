/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8fbff]">
      <div className="w-full max-w-md p-10 bg-white rounded-2xl shadow-sm border-t-4 border-t-indigo-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0a1b49] mb-3">Welcome back</h1>
          <p className="text-gray-500 text-sm">Please enter your details to sign in.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 bg-[#f5f6f8] border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-gray-800 transition-colors"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-12 py-3 bg-[#f5f6f8] border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-gray-800 transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
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

          <Link href="/brand" className="w-full flex">
            <button
              type="button"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#444bbd] to-[#d65fbc] text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md mt-6"
            >
              Log in
            </button>
          </Link>
        </form>

        <div className="mt-8 text-center">
          <Link href="/auth/forgetPass" className="text-sm font-medium text-[#c0438c] hover:underline">
            Forgot password?
          </Link>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="font-semibold text-[#1c3672] hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-600">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        System operational
      </div>
    </div>
  )
}
