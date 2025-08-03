import React from "react";
import { Helmet } from "react-helmet";
import { PricingSection } from "../components/PricingSection";
import { FaqSection } from "../components/FaqSection";
import { EarlyAccessForm } from "../components/EarlyAccessForm";
import { Section } from "../components/Section";
import styles from "./pricing.module.css";

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - IdeaSpark</title>
        <meta
          name="description"
          content="Explore IdeaSpark's simple and transparent pricing. Choose a plan to start validating your startup ideas with AI and real-world data."
        />
      </Helmet>
      <div className={styles.pageContainer}>
        <Section className={styles.heroSection}>
          <h1 className={styles.headline}>Find the plan that’s right for you</h1>
          <p className={styles.subheadline}>
            Start for free, and upgrade when you're ready for full automation.
            All plans are flexible—cancel anytime.
          </p>
        </Section>

        <PricingSection />

        <Section id="early-access" className={styles.earlyAccessSection}>
          <div className={styles.earlyAccessContent}>
            <h2 className={styles.earlyAccessHeadline}>
              Join Early Access for Free
            </h2>
            <p className={styles.earlyAccessSubheadline}>
              Sign up now to get the <strong>Pro Plan for free</strong> during our launch phase. Be the first to validate your ideas with the full power of IdeaSpark.
            </p>
            <div className={styles.formContainer}>
              <EarlyAccessForm />
            </div>
          </div>
        </Section>

        <FaqSection />
      </div>
    </>
  );
};

export default PricingPage;