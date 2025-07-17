import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$0 / month",
    features: [
      "1 Project",
      "10,000 API Calls/mo",
      "Basic Analytics",
      "Community Support",
    ],
    button: "Start for Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49 / month",
    features: [
      "10 Projects",
      "1 Million API Calls/mo",
      "AI-Powered Analytics",
      "Advanced Security",
      "Email Support",
    ],
    button: "Choose Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Let’s Talk",
    features: [
      "Unlimited Projects",
      "Custom API Call Volume",
      "On-Premise Deployment",
      "Security Audits",
      "Dedicated 24/7 Support",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 12,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 30px rgba(102, 51, 153, 0.4)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function PricingCards() {
  return (
    <section className="py-12 px-4 max-w-7xl w-[90vw] bg-transparent mx-auto">
      {/* Optional heading */}
      {/* <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Pricing Plans</h2> */}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover="hover"
            className={`relative p-6 w-[100%] rounded-3xl shadow-xl border transition-transform duration-300 focus-within:scale-[1.03] 
              ${
                plan.highlight
                  ? "bg-gradient-to-b from-purple-600 to-purple-800 text-white border-none"
                  : "bg-[#004e92] text-white border border-blue-700"
              }`}
            tabIndex={0} // Make div focusable for keyboard users
            aria-label={`${plan.name} pricing plan`}
          >
            {plan.highlight && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 text-sm font-semibold rounded-full shadow-md select-none">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-extrabold mb-4 text-center">{plan.name}</h3>

            <p className="text-center text-xl font-semibold mb-6">{plan.price}</p>

            <ul className="mb-8 space-y-3 text-base leading-relaxed">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span aria-hidden="true" className="text-green-400 text-xl">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`w-full py-3 cursor-pointer rounded-xl font-semibold transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-purple-400 ${
                plan.highlight
                  ? "bg-black text-purple-400 hover:bg-gray-900"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
              aria-label={`Select the ${plan.name} plan`}
            >
              {plan.button}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
