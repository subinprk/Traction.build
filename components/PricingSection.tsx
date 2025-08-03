import React from "react";
import { Check } from "lucide-react";
import styles from "./PricingSection.module.css";
import { Section } from "./Section";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "/ forever",
    description: "For getting started with idea validation.",
    features: [
      "AI Idea Scoring",
      "Ad Creative Generation",
      "Landing Page Generation",
      "Manual Asset Export",
    ],
    cta: "Start for Free",
    variant: "outline",
  },
  {
    name: "Pro",
    price: "€80",
    period: "/ month",
    description: "For serious founders who want full automation.",
    features: [
      "Everything in Free, plus:",
      "Automated Ad Campaign Setup",
      "Automated Landing Page Deployment",
      "Live Data Collection & Dashboard",
      "Campaign Optimization",
    ],
    cta: "Join Early Access",
    variant: "primary",
    isFeatured: true,
  },
];

export const PricingSection = () => {
  return (
    <Section id="pricing" className={styles.pricingSection}>
      <div className={styles.heading}>
        <h2 className={styles.headline}>Simple, Transparent Pricing</h2>
        <p className={styles.subheadline}>
          Choose the plan that's right for you. Cancel anytime.
        </p>
      </div>
      <div className={styles.plansContainer}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${styles.planCard} ${plan.isFeatured ? styles.featured : ""}`}
          >
            <div className={styles.planHeader}>
              <div className={styles.planNameWrapper}>
                <h3 className={styles.planName}>{plan.name}</h3>
                {plan.isFeatured && (
                  <Badge variant="default">Early Access</Badge>
                )}
              </div>
              <p className={styles.planDescription}>{plan.description}</p>
              <div className={styles.price}>
                <span className={styles.priceAmount}>{plan.price}</span>
                <span className={styles.pricePeriod}>{plan.period}</span>
              </div>
            </div>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <Check size={16} className={styles.featureIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              variant={plan.variant as "primary" | "outline"}
              className={styles.ctaButton}
            >
              <Link to="/#early-access">{plan.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
      <div className={styles.pricingNote}>
        <p>
          <strong>Early Access Offer:</strong> All early access users get the{" "}
          <strong>Pro Plan for free</strong> during our launch phase.
        </p>
        <p>
          <strong>Ad Spend:</strong> Please note that advertising costs are
          billed separately and depend on your ad spend. You control your
          budget.
        </p>
      </div>
    </Section>
  );
};