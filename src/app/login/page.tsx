"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Triangle } from "lucide-react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (email === "admin" && password === "admin") {
      router.push("/dashboard")
    } else {
      setError("Invalid credentials. Use 'admin' for both email and password.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* So this is the bg I have added, ig you can change this with themes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DFFFF9] via-white to-[#FDCEFF]" />

     
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      
      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-8 flex flex-col items-center justify-center space-y-2">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Triangle className="w-6 h-6 text-[#43A2C9] fill-current" />
            <span className="text-2xl md:text-3xl  font-semibold text-gray-800">
              <span className="text-[#43A2C9]">Aven</span>Ping
            </span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl
        
         shadow-2xl border-4 border-black/10 p-8 md:min-w-max">
    
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Sign in to your account</h1>
            <p className="text-gray-600 text-xs md:text-sm">Welcome back! Please enter your details.</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}


          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                email or username
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#43A2C9] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                placeholder="enter you email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#43A2C9] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 pr-12"
                  placeholder="enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="text-left">
              <Link href="#" className="text-sm text-[#43A2C9] hover:text-blue-600 transition-colors">
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#43A2C9] hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-[#43A2C9] focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <p className="text-xs text-gray-500">
              By proceeding, you agree to our{" "}
              <Link href="#" className="text-[#43A2C9] hover:text-blue-600">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#43A2C9] hover:text-blue-600">
                Privacy Policy
              </Link>
            </p>

            <p className="text-sm text-gray-600">
              {"Don't have an account? "}
              <Link href="/signup" className="text-[#43A2C9] hover:text-blue-600 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">Demo credentials: admin / admin</p>
        </div>
      </div>
    </div>
  )
}
