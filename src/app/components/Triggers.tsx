import React from "react";
import { motion } from "framer-motion";

import http from "../assets/http.png";
import webhook from "../assets/webhook.png";
import hubspot from "../assets/hubspot.png";
import salesforce from "../assets/salesforce.jpg";
import aws_sns from "../assets/aws_sns.png";
import aws_sqs from "../assets/aws_sqs.png";
import azure_service_bus from "../assets/azure-service-bus.png";
import websocket from "../assets/websocket.png";
import timer from "../assets/timer.png";

interface Trigger {
  name: string;
  icon: string;
}

const triggers: Trigger[] = [
  { name: "HTTP Trigger", icon: http },
  { name: "Webhook Trigger", icon: webhook },
  { name: "Hubspot Trigger", icon: hubspot },
  { name: "Salesforce Event", icon: salesforce },
  { name: "AWS SNS Trigger", icon: aws_sns },
  { name: "AWS SQS Trigger", icon: aws_sqs },
  { name: "Azure Service Bus", icon: azure_service_bus },
  { name: "Websocket Trigger", icon: websocket },
  { name: "Timer Trigger", icon: timer },
];

const Triggers: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden relative">

      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12 px-6">
        <h2 className="text-4xl font-bold">
          Triggers We Currently Support
        </h2>

        <p className="text-muted-foreground mt-4 max-w-4xl mx-auto">
          Start workflows instantly with event-driven triggers from APIs,
          cloud platforms, messaging queues, and enterprise tools.
        </p>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10"/>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10"/>

      {/* Infinite Scroll */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...triggers, ...triggers].map((trigger, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-4 px-6 py-3 rounded-full 
              bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm"
            >
              <img
                src={trigger.icon}
                alt={trigger.name}
                className="w-8 h-8 object-contain"
              />

              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {trigger.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Triggers;