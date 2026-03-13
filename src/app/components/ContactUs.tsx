import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Mail, Phone, User } from "lucide-react";
import { Header } from './Header'

export default function ContactUs() {
  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      <Header />

      <section className="px-6 py-16 relative z-10 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header Text */}
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Move at the <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent animate-gradient-x">Speed</span> of Modern Business
            </h1>
            <p className="text-blue-800 mt-4 max-w-3xl mx-auto leading-relaxed">
              Talk to our team and discover how <span className="font-semibold text-blue-900">Zyntegrate</span> helps automate workflows and integrations faster than ever.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid mt-16 md:grid-cols-2 gap-16 items-start">

            {/* Form - LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Pulsating neon border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:400%_400%] animate-gradient-xy blur-lg opacity-30 pointer-events-none transition-all duration-300 form-active:border-glow"></div>

              <div className="relative bg-white rounded-3xl p-10 shadow-lg border border-blue-200">
                <form className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="text-sm font-medium text-blue-900 mb-2 block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-blue-400" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-200 bg-white text-blue-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 form-focus"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm font-medium text-blue-900 mb-2 block">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-4 h-4 text-blue-400" />
                      <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-200 bg-white text-blue-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 form-focus"
                      />
                    </div>
                  </div>

                  {/* Company Email */}
                  <div>
                    <label className="text-sm font-medium text-blue-900 mb-2 block">Company Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-4 h-4 text-blue-400" />
                      <input
                        type="email"
                        placeholder="company@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-200 bg-white text-blue-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 form-focus"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full py-5 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:cursor-pointer hover:from-blue-700 hover:to-blue-600 shadow-lg transition-all"
                  >
                    Submit
                  </Button>

                </form>
              </div>
            </motion.div>

            {/* Contact Info - RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12 flex flex-col ml-32 justify-center"
            >
              <div>
                <h2 className="text-xl font-semibold text-blue-900">Get in Touch</h2>
                <p className="text-blue-800 mt-2">Prefer reaching out directly? Our team is available to help.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium text-blue-900">Email</p>
                    <a href="mailto:info@z-ninth.com" className="text-blue-700 hover:text-blue-500">
                      info@z-ninth.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium text-blue-900">USA</p>
                    <a href="tel:+19729925082" className="text-blue-700 hover:text-blue-500">
                      +1 (972) 992-5082
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium text-blue-900">India</p>
                    <a href="tel:+918885257422" className="text-blue-700 hover:text-blue-500">
                      +91 88852 57422
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Tailwind CSS for gradient animation + soft neon border */}
      <style>{`
        .animate-gradient-x { background-size: 200% auto; animation: gradient-x 3s linear infinite; }
        .animate-gradient-xy { background-size: 400% 400%; animation: gradient-xy 10s linear infinite; }
        @keyframes gradient-x { 0% { background-position: 0% center; } 50% { background-position: 100% center; } 100% { background-position: 0% center; } }
        @keyframes gradient-xy { 0% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } 100% { background-position: 0% 0%; } }

        .form-focus:focus { outline: none; }
        .form-focus:focus ~ .form-active\\:border-glow,
        .form-active\\:border-glow {
          animation: neon-pulse 3s ease-in-out infinite, gradient-xy 10s linear infinite;
        }
        @keyframes neon-pulse { 0%, 100% { opacity: 0.25; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.01); } }
      `}</style>
    </div>
  );
}