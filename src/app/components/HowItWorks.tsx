import { motion } from "motion/react";
import { MessageCircle, Brain, Zap, Activity, Check } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const steps = [
  {
    icon: MessageCircle,
    title: "User Request",
    description: "Users describe what they want in natural language.",
    example:
      "“When a new customer signs up, add them to Salesforce and notify my team.”",
  },
  {
    icon: Brain,
    title: "Agent Understands",
    description:
      "The AI agent detects triggers, systems, and workflow logic.",
    example:
      "Trigger → New signup • Actions → Salesforce + Team Notification",
  },
  {
    icon: Zap,
    title: "Workflow Execution",
    description:
      "Zyntegrate connects to your tools and executes the workflow automatically.",
    example: "Salesforce record created • HubSpot contact added",
  },
  {
    icon: Activity,
    title: "Monitoring",
    description:
      "Agents monitor workflows, retry failures, and handle new events.",
    example: "Automatically detects and handles new events",
  },
];

export default function HowAgentsWork() {
  const [activeStep, setActiveStep] = useState(-1);
  const [dotLeft, setDotLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const animateSteps = async () => {
      while (true) {
        if (!containerRef.current) return;

        for (let i = 0; i < steps.length; i++) {
          // get exact icon center
          const iconEl = iconRefs.current[i];
          if (!iconEl) continue;
          const rect = iconEl.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const leftPos = rect.left + rect.width / 2 - containerRect.left;
          setDotLeft(leftPos);
          setActiveStep(i);

          // pause at this step
          await new Promise((r) => setTimeout(r, 1800)); // slower pause
        }

        // Pause at the end
        await new Promise((r) => setTimeout(r, 2000));

        // Reset steps and move dot to start
        setActiveStep(-1);
        setDotLeft(0);

        // pause before restarting
        await new Promise((r) => setTimeout(r, 2000));
      }
    };

    animateSteps();
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900">
            How Zyntegrate Agents Work
          </h2>
          <p className="mt-4 text-lg text-blue-800">
            Turn natural language into automated workflows across your systems.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Base line */}
          <div className="hidden lg:block absolute top-[34px] left-0 w-full h-[4px] bg-blue-200 rounded-full" />

          {/* Moving Dot */}
          <motion.div
            className="hidden lg:block absolute top-[30px] w-4 h-4 rounded-full bg-blue-500 shadow-lg z-0"
            animate={{ left: dotLeft }}
            transition={{ duration: 1.2, ease: "easeInOut" }} // slower
          />

          {/* Steps */}
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;

              return (
                <div
                  key={index}
                  className="text-center relative"
                  ref={(el) => {
                    if (el) iconRefs.current[index] = el;
                  }}
                >
                  {/* Step Node */}
                  <motion.div
                    animate={{
                      boxShadow: isActive
                        ? "0 0 0 6px rgba(59,130,246,0.2)"
                        : "0 0 0 0px rgba(0,0,0,0)",
                      scale: isActive ? [1, 1.08, 1] : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto mb-6 w-14 h-14 rounded-full bg-white border border-blue-200 shadow-md flex items-center justify-center relative z-10"
                  >
                    {isActive ? (
                      <Check className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Icon className="w-6 h-6 text-blue-600" />
                    )}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-blue-800 mb-2">{step.description}</p>

                  {/* Example */}
                  <div className="text-xs bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-900 inline-block">
                    {step.example}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}