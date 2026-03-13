import { motion } from "motion/react";
import { Globe2, Clock, ShieldCheck, Layers } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Fragmented Tech Stacks Are Growing",
    stat: "1,000+",
    statLabel: "Avg. SaaS tools per enterprise",
    description:
      "Modern enterprises juggle hundreds of disconnected applications. Zyntegrate turns chaos into a unified data ecosystem without rip-and-replace migrations.",
  },
  {
    icon: Clock,
    title: "Speed Is the New Competitive Edge",
    stat: "10×",
    statLabel: "Faster time to integration",
    description:
      "Manual data pipelines take months. Agent powered automation shrinks deployment from quarters to minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Can't Be an Afterthought",
    stat: "99.9%",
    statLabel: "Uptime SLA",
    description:
      "With regulations tightening globally, every data flow needs audit trails and encryption. Zyntegrate bakes security and compliance into every integration.",
  },
  {
    icon: Globe2,
    title: "AI Demands Connected Data",
    stat: "3×",
    statLabel: "Better AI model accuracy",
    description:
      "AI models are only as good as the data they consume. Unified, clean, real-time data pipelines power every successful AI initiative.",
  },
];

const WhyItMatters = () => {
  return (
    <section
      id="why-it-matters"
      className="relative py-28 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute " />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-astral-600 font-semibold tracking-widest uppercase text-sm">
            Why It Matters
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-astral-700">
            Built for
            <span className="block text-blue-400">
              today's reality
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground text-lg max-w-lg">
            The world runs on data. Seamless integration is no longer optional
            it’s the backbone of every modern enterprise infrastructure.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-6 rounded-2xl border bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all"
            >
              {/* stat */}
              <div className="absolute top-5 right-5 text-right">
                <div className="text-2xl font-bold text-blue-400">
                  {reason.stat}
                </div>
                <div className="text-xs text-muted-foreground">
                  {reason.statLabel}
                </div>
              </div>

              {/* icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-blue-400" />
              </div>

              {/* title */}
              <h3 className="font-semibold text-lg mb-2">
                {reason.title}
              </h3>

              {/* description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;