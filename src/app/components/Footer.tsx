import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/logo2.png";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/ZNinth09" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/z-ninth/" },
  { icon: Instagram, href: "https://www.instagram.com/zninth09/" },
  { icon: Facebook, href: "https://www.facebook.com/zninth09" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white via-blue-50 to-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-14">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-5 max-w-md">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Zyntegrate Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-astral-700">
              Zyntegrate
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed">
            Zyntegrate connects fragmented enterprise systems and automates
            complex workflows using intelligent agents — from legacy databases
            to modern APIs.
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-3 mt-2">

            <span className="text-sm font-semibold text-astral-700">
              Get Early Access
            </span>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border border-blue-200 rounded-lg w-full text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-xs text-slate-500">
              Or ask our chatbot for instant help →
            </span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs mt-4">
            © 2026 Z-Ninth Inc. All rights reserved.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

          {/* Offices */}
          <div className="flex flex-col gap-3 text-slate-600">
            <span className="font-semibold text-astral-700">Offices</span>

            <span className="leading-snug">
              <strong>USA:</strong> Dallas, 702 S Denton Tap Rd, Suite #110,
              Coppell, TX 75019
            </span>

            <span className="leading-snug">
              <strong>India:</strong> Hyderabad, T-Hub Phase 2, Inorbit Mall Rd,
              Madhapur, 500081
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 text-slate-600">
            <span className="font-semibold text-astral-700">Quick Links</span>

            <a href="#why-it-matters" className="hover:text-blue-600 transition">
              Why Zyntegrate
            </a>

            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>

            <a href="#agents" className="hover:text-blue-600 transition">
              AI Agents
            </a>

            <a href="#use-cases" className="hover:text-blue-600 transition">
              Use Cases
            </a>

            <a href="#cta" className="hover:text-blue-600 transition">
              Contact
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 text-slate-600">
            <span className="font-semibold text-astral-700">Contact</span>

            <a
              href="mailto:info@z-ninth.com"
              className="hover:text-blue-600 transition"
            >
              info@z-ninth.com
            </a>

            <a
              href="tel:+19729925082"
              className="hover:text-blue-600 transition"
            >
              +1 (972) 992-5082
            </a>

            <a
              href="tel:+918885257422"
              className="hover:text-blue-600 transition"
            >
              +91 88852 57422
            </a>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-blue-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}