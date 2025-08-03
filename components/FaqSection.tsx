import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import styles from "./FaqSection.module.css";
import { Section } from "./Section";

const faqs = [
  {
    question: "Do I need to pay for ads?",
    answer:
      "Yes, the cost of running ad campaigns on platforms like Google or Facebook is separate from your IdeaSpark subscription. We automate the setup and management, but you control the ad budget and are billed directly by the ad platform for the ad spend.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your Pro plan at any time, no questions asked. You'll retain access to Pro features until the end of your current billing period.",
  },
  {
    question: "What’s included in the free plan?",
    answer:
      "The Free plan gives you access to our core AI idea scoring and allows you to generate ad creatives and landing page content. You can then manually export these assets to use as you wish.",
  },
  {
    question: "What’s included in the Pro plan?",
    answer:
      "The Pro plan includes everything in the Free plan plus full automation. We handle the ad campaign setup, landing page deployment, and continuous optimization for you. You also get a dashboard with live data and insights.",
  },
  {
    question: "What happens after the early access period?",
    answer:
      "As an early access member, you'll get the Pro plan for free during our launch phase. We will notify you well in advance before this period ends and offer a special discount if you choose to continue with a paid plan.",
  },
];

export const FaqSection = () => {
  return (
    <Section id="faq" className={styles.faqSection}>
      <div className={styles.heading}>
        <h2 className={styles.headline}>Frequently Asked Questions</h2>
        <p className={styles.subheadline}>
          Have questions? We've got answers.
        </p>
      </div>
      <div className={styles.accordionContainer}>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className={styles.trigger}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={styles.content}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};