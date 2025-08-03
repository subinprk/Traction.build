import React from "react";
import { Zap, Target, LineChart, Rocket } from "lucide-react";
import styles from "./HowItWorksSection.module.css";
import { Section } from "./Section";

const steps = [
  {
    icon: <Zap size={24} />,
    title: "Step 1: Submit Your Idea",
    description:
      "Provide a simple description of your startup concept. Our platform takes it from there.",
  },
  {
    icon: <Target size={24} />,
    title: "Step 2: AI-Powered Generation",
    description:
      "Our AI scores your idea's potential and automatically generates compelling ad creatives and a high-converting landing page.",
  },
  {
    icon: <LineChart size={24} />,
    title: "Step 3: Live Market Testing",
    description:
      "We run real, targeted ad campaigns for you, driving actual potential customers to your new landing page to collect live data.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Step 4: Get Validated Feedback",
    description:
      "Receive a clear report on market interest, user engagement, and a simple sales funnel, giving you the confidence to build or pivot.",
  },
];

export const HowItWorksSection = () => {
  return (
    <Section id="how-it-works" className={styles.howItWorksSection}>
      <div className={styles.heading}>
        <h2 className={styles.headline}>How It Works</h2>
        <p className={styles.subheadline}>
          A simple, four-step process to data-driven validation.
        </p>
      </div>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.stepIcon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
      <p className={styles.disclaimer}>
        <strong>Note:</strong> Ad campaigns are optional and ad spend is billed
        separately. You are always in full control of your budget.
      </p>
    </Section>
  );
};