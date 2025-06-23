"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import LoginImg from "@/assets/images/loginPgImg.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (email === "admin" && password === "admin") {
            router.push("/dashboard");
        } else {
            setError("Invalid credentials. Use 'admin' for both email and password.");
        }
    };

    return (
        <div className="min-h-screen flex bg-gradient-to-br  from-cyan-400 to-purple-300 via-white ">
            {/* Left side - Welcome section with background */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br
                from-cyan-400 to-purple-300 via-white 
                bg-cover bg-center 

             relative overflow-hidden">
                <div className="absolute inset-0 "></div>
                <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>
                
                <div className="relative z-10 flex  justify-center items-center px-12 text-white">
                    {/* <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-4">
                            Welcome to AvenPing
                        </h1>
                        <p className="text-xl text-cyan-100 leading-relaxed">
                            Transform your WhatsApp business communications with powerful automation, 
                            analytics, and customer management tools.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">Boost Productivity</h3>
                                <p className="text-cyan-100">Automate responses and manage conversations efficiently</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">📊</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">Smart Analytics</h3>
                                <p className="text-cyan-100">Track performance and customer engagement</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">👥</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">Team Collaboration</h3>
                                <p className="text-cyan-100">Work together seamlessly on customer conversations</p>
                            </div>
                        </div>
                    </div> */}
                    <Image
                        src={LoginImg}
                        alt="WhatsApp Business Illustration"
                        width={800}
                        height={600}
                        className="mt-8 rounded-lg shadow-lg
                        transition-transform transform hover:scale-105

                        "
                        style={{ maxWidth: "100%", height: "auto" }}
                        draggable={false}
                    />
                </div>
            </div>

            {/* Right side - Login form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8  rounded-lg bg-gradient-to-br  to-cyan-400 from-purple-300 via-white backdrop-opacity-20">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <Link href="/" className="text-3xl font-bold text-cyan-600">
                            AvenPing
                        </Link>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">
                            Sign in to your account
                        </h2>
                        <p className="text-gray-600">Welcome back! Please enter your details.</p>
                    </div>

                    <div className="bg-[#b4496d07] backdrop:blur-lg rounded-2xl shadow-lg p-8 border-4 border-white/30">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email or Username
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                                    placeholder="Enter your email or username"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-white/30 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors pr-12"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500" />
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-cyan-600 hover:text-cyan-700">
                                    Forgot password?
                                </a>
                            </div>

                            <Button type="submit" variant="primary" className="w-full h-12 text-lg">
                                Sign In
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Don't have an account?{" "}
                                <Link href="/signup" className="text-cyan-600 hover:text-cyan-700 font-medium">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>Demo credentials: admin / admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
}