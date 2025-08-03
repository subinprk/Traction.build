import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import { Button } from "./Button";
import { EarlyAccessForm } from "./EarlyAccessForm";
import { Section } from "./Section";

export const HeroSection = () => {
  return (
    <Section id="early-access" className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Validate Your Startup Idea — Before You Build It
        </h1>
        <p className={styles.subheadline}>
          IdeaSpark lets you test your startup idea with AI, real ads, and live
          feedback — all before writing a single line of code.
        </p>
        <div className={styles.ctaContainer}>
          <EarlyAccessForm />
          <Button asChild variant="outline" size="lg">
            <Link to="/#how-it-works">See How It Works</Link>
          </Button>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Team collaborating on a project"
          className={styles.heroImage}
        />
        <div className={styles.heroGradientOverlay}></div>
      </div>
    </Section>
  );
};