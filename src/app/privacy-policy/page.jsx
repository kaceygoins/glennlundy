"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

// --- MAIN PAGE ---
export default function PrivacyPolicy() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const styles = {
        container: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#ffffff", // Light Theme
            color: "#1a1a1a",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            overflowX: "hidden",
        },
        hero: {
            padding: isMobile ? "80px 20px" : "120px 24px 80px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            position: "relative",
        },
        heroTitle: {
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: "700",
            lineHeight: "1.1",
            marginBottom: "24px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            color: "#1a1a1a",
        },
        heroSubtext: {
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "#666",
            maxWidth: "800px",
            margin: "0 auto",
            fontWeight: "400",
            lineHeight: "1.6",
        },
        contentSection: {
            padding: "60px 24px 120px",
            maxWidth: "900px",
            margin: "0 auto",
        },
        lastUpdated: {
            fontSize: "0.9rem",
            color: "#9B59B6",
            fontWeight: "600",
            marginBottom: "40px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
        },
        sectionTitle: {
            fontSize: "1.8rem",
            fontWeight: "700",
            color: "#1a1a1a",
            marginBottom: "20px",
            marginTop: "50px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
        },
        sectionSubtitle: {
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#444",
            marginBottom: "16px",
            marginTop: "30px",
        },
        paragraph: {
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "24px",
        },
        list: {
            paddingLeft: "24px",
            marginBottom: "24px",
        },
        listItem: {
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "12px",
        },
        highlight: {
            color: "#7B3FBF",
            fontWeight: "600",
        },
        contactInfo: {
            backgroundColor: "#f9f9f9",
            border: "1px solid #eee",
            borderRadius: "0",
            padding: "40px",
            marginTop: "60px",
            textAlign: "center",
        },
        contactTitle: {
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#1a1a1a",
            marginBottom: "20px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
        },
        contactText: {
            fontSize: "1.1rem",
            color: "#555",
            lineHeight: "1.6",
        },
        contactLink: {
            color: "#7B3FBF",
            textDecoration: "none",
            fontWeight: "600",
            transition: "all 0.3s ease",
            borderBottom: "1px solid #7B3FBF",
        },
    }

    const responsiveCSS = `
        .contact-link:hover { color: #9B59B6 !important; border-color: #9B59B6 !important; }
        @media (max-width: 480px) {
            .contact-info { padding: 30px 20px !important; }
        }
    `

    return (
        <div style={styles.container}>
            <style>{responsiveCSS}</style>

            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>
                        Privacy <span style={{ color: "#7B3FBF" }}>Policy</span>
                    </h1>
                    <p style={styles.heroSubtext}>
                        Your privacy and data protection are important to us.
                        This policy explains how we collect, use, and protect
                        your personal information.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section style={styles.contentSection}>
                <div style={styles.lastUpdated}>
                    Last Updated: January 15, 2025
                </div>

                <p style={styles.paragraph}>
                    Welcome to Glenn Lundy's website and services. This Privacy
                    Policy describes how Glenn Lundy and related companies
                    ("we," "us," or "our") collect, use, and protect your
                    personal information when you visit our website, use our
                    services, or engage with our training programs and
                    consulting services.
                </p>

                <h2 style={styles.sectionTitle}>Information We Collect</h2>

                <h3 style={styles.sectionSubtitle}>Personal Information</h3>
                <p style={styles.paragraph}>
                    We may collect the following types of personal information:
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>
                            Contact Information:
                        </span>{" "}
                        Name, email address, phone number, mailing address
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>
                            Business Information:
                        </span>{" "}
                        Company name, job title, industry, dealership
                        information
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>
                            Program Information:
                        </span>{" "}
                        Training preferences, program enrollment details,
                        progress tracking
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>
                            Payment Information:
                        </span>{" "}
                        Billing address, payment method details (processed
                        securely through third-party providers)
                    </li>
                </ul>

                <h3 style={styles.sectionSubtitle}>
                    Automatically Collected Information
                </h3>
                <p style={styles.paragraph}>
                    When you visit our website, we may automatically collect:
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        IP address and device information
                    </li>
                    <li style={styles.listItem}>Browser type and version</li>
                    <li style={styles.listItem}>
                        Pages visited and time spent on our site
                    </li>
                    <li style={styles.listItem}>
                        Referring website information
                    </li>
                    <li style={styles.listItem}>
                        Cookies and similar tracking technologies
                    </li>
                </ul>

                <h2 style={styles.sectionTitle}>How We Use Your Information</h2>
                <p style={styles.paragraph}>
                    We use your personal information for the following purposes:
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>Service Delivery:</span>{" "}
                        Providing training programs, coaching services, and
                        consulting
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>Communication:</span>{" "}
                        Sending program updates, newsletters, and important
                        announcements
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>Customer Support:</span>{" "}
                        Responding to inquiries and providing assistance
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>
                            Payment Processing:
                        </span>{" "}
                        Processing payments and managing billing
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>Improvement:</span>{" "}
                        Analyzing usage patterns to improve our services and
                        website
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>Marketing:</span> Sending
                        promotional materials and updates about our services
                        (with your consent)
                    </li>
                </ul>

                <h2 style={styles.sectionTitle}>
                    Information Sharing and Disclosure
                </h2>
                <p style={styles.paragraph}>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information in the
                    following limited circumstances:
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>Service Providers:</span>{" "}
                        With trusted third-party vendors who assist us in
                        operating our website and delivering services
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>
                            Legal Requirements:
                        </span>{" "}
                        When required by law or to protect our rights and safety
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>
                            Business Transfers:
                        </span>{" "}
                        In connection with a merger, acquisition, or sale of
                        business assets
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlight}>Consent:</span> With your
                        explicit consent for specific purposes
                    </li>
                </ul>

                <h2 style={styles.sectionTitle}>Data Security</h2>
                <p style={styles.paragraph}>
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction. These measures include encryption of sensitive
                    data, secure server infrastructure, and regular security
                    assessments.
                </p>

                <h2 style={styles.sectionTitle}>Your Rights</h2>
                <p style={styles.paragraph}>
                    You have the right to access, correct, delete, or transfer
                    your personal information. You can also opt-out of marketing
                    communications at any time.
                </p>

                <h2 style={styles.sectionTitle}>Cookies and Tracking</h2>
                <p style={styles.paragraph}>
                    Our website uses cookies and similar technologies to enhance
                    your browsing experience, analyze site traffic, and
                    personalize content. You can control cookie settings through
                    your browser preferences.
                </p>

                <h2 style={styles.sectionTitle}>Updates to This Policy</h2>
                <p style={styles.paragraph}>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal requirements. We
                    will notify you of any material changes by posting the
                    updated policy on our website.
                </p>

                <div style={styles.contactInfo} className="contact-info">
                    <h3 style={styles.contactTitle}>Contact Us</h3>
                    <p style={styles.contactText}>
                        If you have any questions about this Privacy Policy or
                        our data practices, please contact us at:
                        <br />
                        <br />
                        Email:{" "}
                        <a
                            href="mailto:privacy@glennlundy.com"
                            style={styles.contactLink}
                            className="contact-link"
                        >
                            privacy@glennlundy.com
                        </a>
                        <br />
                        <br />
                        We are committed to addressing your privacy concerns and
                        will respond to your inquiry as quickly as possible.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}
