import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  return (
    <section
      id="cta"
      className="py-28 px-6 lg:px-8 bg-white"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >

        {/* WRAPPER */}
        <div className="relative">

          {/* Glow Border */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:400%_400%] animate-gradient-xy blur-xl opacity-70 pointer-events-none"></div>

          {/* CTA CARD */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative p-16 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative text-center">

              {/* badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm mb-8"
              >
                <Sparkles className="size-4 text-blue-600" />
                <span className="font-medium text-gray-700">
                  Start Your Integration Journey
                </span>
              </motion.div>

              {/* headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-astral-700 mb-6 leading-tight"
              >
                Stop Managing Integrations.
                <br />
                Start Orchestrating Systems.
              </motion.h2>

              {/* description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-4xl mx-auto mb-12"
              >
                Bring clarity to your infrastructure. Automate intelligently.
                Move at the speed of business.
              </motion.p>

              {/* button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button
                  onClick={() => navigate("/contact")}
                  size="lg"
                  className="group px-10 py-6 text-lg font-semibold rounded-xl bg-blue-400 text-white shadow-md hover:cursor-pointer hover:shadow-xl transition-all"
                >
                  Contact Us
                  <ArrowRight className="ml-3 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* gradient animation */}
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
      `}</style>
    </section>
  );
}