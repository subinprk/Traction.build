import React from "react";
import styles from "./AboutSection.module.css";
import { Section } from "./Section";

export const AboutSection = () => {
  return (
    <Section id="about" className={styles.aboutSection}>
      <h2 className={styles.headline}>
        90% of startups fail — most because nobody needs their product.
      </h2>
      <p className={styles.body}>
        IdeaSpark helps you avoid this fate by combining smart AI research with
        real user demand. We simulate launches, generate ads, run campaigns, and
        give you clear signals before you invest time or money building
        anything.
      </p>
    </Section>
  );
};