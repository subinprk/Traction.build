import React from "react";
import { Helmet } from "react-helmet";
import styles from "./_index.module.css";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { PricingSection } from "../components/PricingSection";
import { FaqSection } from "../components/FaqSection";
import { Separator } from "../components/Separator";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>IdeaSpark | Validate Your Startup Idea Before You Build It</title>
        <meta
          name="description"
          content="IdeaSpark lets you test your startup idea with AI, real ads, and live feedback — all before writing a single line of code."
        />
      </Helmet>
      <div className={styles.pageContainer}>
        <HeroSection />
        <AboutSection />
        <Separator className={styles.separator} />
        <HowItWorksSection />
        <Separator className={styles.separator} />
        <PricingSection />
        <Separator className={styles.separator} />
        <FaqSection />
      </div>
    </>
  );
};

export default IndexPage;