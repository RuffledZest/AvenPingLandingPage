"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
  onClick?: () => void;
}

function Button({ children, variant = "default", className, onClick }: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    default: "bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </button>
  );
}

interface AnimatedNavbarProps {
  brand?: string;
  navLinks?: NavLink[];
  loginHref?: string;
  signupHref?: string;
  className?: string;
}

const defaultNavLinks: NavLink[] = [
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Insights", href: "#insights" },
];

export default function AnimatedNavbar({
  brand = "ArDacity",
  navLinks = defaultNavLinks,
  loginHref = "#login",
  signupHref = "#signup",
  className,
}: AnimatedNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.section
        className={cn("pb-4 lg:pb-8 fixed w-full top-0 z-50", className)}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`container mx-auto transition-all duration-300 p-[1rem] sm:p-[0rem] ${
            isScrolled ? "max-w-5xl" : "max-w-full px-0"
          }`}
        >
          <motion.div
            className={`transition-all duration-300 ${
              isScrolled
                ? "border border-gray-200 rounded-[27px] lg:rounded-full bg-white/70 backdrop-blur shadow-sm"
                : "bg-white/90 backdrop-blur "
            }`}
            animate={{
              borderRadius: isScrolled ? "50px" : "0px",
              marginTop: isScrolled ? "16px" : "0",
              backgroundColor: isScrolled
                ? "rgba(255, 255, 255, 0.7)"
                : "transparent",
              boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <figure
              className={`grid grid-cols-2 lg:grid-cols-3 py-2 items-center ${
                isScrolled ? "lg:px-2 px-4" : "px-4 lg:px-8"
              }`}
            >
              <div>
                <Link href="/" className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-cyan-600 px-5">
                    {brand}
                  </div>
                </Link>
              </div>
              <div className="hidden lg:flex justify-center items-center">
                <nav className="flex gap-6 font-medium text-gray-700">
                  {navLinks.map((each) => (
                    <Link
                      href={each.href}
                      key={each.href}
                      className="hover:text-cyan-600 transition-colors"
                    >
                      {each.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden"
                >
                  {!isOpen ? (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: isOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="text-gray-700" size={25} />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="text-gray-700" size={30} />
                    </motion.div>
                  )}
                </button>
                <Link href={loginHref}>
                  <Button
                    variant="secondary"
                    className="hidden lg:inline-flex items-center"
                  >
                    Login
                  </Button>
                </Link>
                <Link href={signupHref}>
                  <Button
                    variant="default"
                    className="hidden lg:inline-flex items-center"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </figure>
            <AnimatePresence>
              {isOpen && (
                <motion.figure
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-700 hover:text-cyan-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link href={loginHref} className="w-3/4">
                      <Button className="w-full" variant="secondary">
                        Log In
                      </Button>
                    </Link>
                    <Link href={signupHref} className="w-3/4">
                      <Button className="w-full" variant="default">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </motion.figure>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
      <div className="pb-[86px] md:pb-[98px]"></div>
    </>
  );
}