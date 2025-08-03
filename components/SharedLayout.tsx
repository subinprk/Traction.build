import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Sparkles } from "lucide-react";
import styles from "./SharedLayout.module.css";
import { Button } from "./Button";

interface SharedLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const SharedLayout = ({ children, className }: SharedLayoutProps) => {
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQs", href: "/#faq" },
  ];

  return (
    <div className={`${styles.layout} ${className || ""}`}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <Sparkles size={24} className={styles.logoIcon} />
            IdeaSpark
          </Link>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className={styles.headerActions}>
            <Button asChild variant="ghost" size="md">
              <Link to="/#early-access">Join Early Access</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <Link to="/" className={styles.logo}>
                <Sparkles size={20} className={styles.logoIcon} />
                IdeaSpark
              </Link>
              <p className={styles.footerSlogan}>
                Validate ideas, build futures.
              </p>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.linkColumn}>
                <h4>Product</h4>
                <Link to="/#about">About</Link>
                <Link to="/#how-it-works">How It Works</Link>
                <Link to="/#pricing">Pricing</Link>
                <Link to="/#faq">FAQs</Link>
              </div>
              <div className={styles.linkColumn}>
                <h4>Legal</h4>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-use">Terms of Use</Link>
              </div>
              <div className={styles.linkColumn}>
                <h4>Contact</h4>
                <a href="mailto:contact@ideaspark.ai">contact@ideaspark.ai</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} IdeaSpark. All rights reserved.</p>
            <div className={styles.socialIcons}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};