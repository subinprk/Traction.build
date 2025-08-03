import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section id={id} className={`${styles.section} ${className || ""}`}>
      {children}
    </section>
  );
};