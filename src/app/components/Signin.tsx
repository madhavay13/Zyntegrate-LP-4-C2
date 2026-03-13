import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import logo from '../assets/logo4.jpg'

export default function SignIn() {

  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();

  const element = document.querySelector(href);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    // navigate to homepage and scroll there
    navigate("/" + href);
  }

  setMobileMenuOpen(false);
};
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white via-blue-50 to-white px-6 flex items-center justify-center overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
  <a
    href="#hero"
    onClick={(e) => handleNavClick(e, "#hero")}
    className="flex items-center gap-3 cursor-pointer"
  >
    <img
      className="w-10 h-10 object-contain"
      src={logo}
      alt="Zyntegrate logo"
    />
    <span className="font-semibold text-xl text-gray-900">
      Zyntegrate
    </span>
  </a>
</div>
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Form with pulsating neon border */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md z-10"
      >
        {/* Neon animated border */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:400%_400%] animate-gradient-xy blur-xl opacity-30 pointer-events-none transition-all duration-300 form-active:border-glow"></div>

        <div className="relative bg-white rounded-2xl p-10 shadow-lg border border-gray-200">
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Sign in to your account
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Welcome back. Please enter your details.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 form-focus"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 form-focus"
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <Button
              className="w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transition-all"
            >
              Sign In
            </Button>
          </form>

          {/* Sign up */}
          <p className="text-sm text-gray-500 text-center mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
              Contact Us
            </a>
          </p>
        </div>
      </motion.div>

      {/* Tailwind CSS for gradient animation + neon effect */}
      <style>{`
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 10s linear infinite;
        }
        @keyframes gradient-xy {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }

        /* Pulsating neon effect */
        .form-focus:focus {
          outline: none;
        }
        .form-focus:focus ~ .form-active\\:border-glow,
        .form-active\\:border-glow {
          animation: neon-pulse 3s ease-in-out infinite, gradient-xy 10s linear infinite;
        }
        @keyframes neon-pulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.01); }
        }
      `}</style>
    </div>
  );
}