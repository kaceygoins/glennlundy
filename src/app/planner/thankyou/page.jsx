"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

// --- MAIN PAGE ---
export default function ThankYouPage() {
    const [hoveredButton, setHoveredButton] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const socialLinks = [
        {
            name: "TikTok",
            href: "https://www.tiktok.com/@glennlundy",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.5a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.8-.26z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/@glennlundy",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/Glenn_Lundy",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/OfficialGlennLundy",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
    ]

    const nextSteps = [
        {
            icon: "📧",
            title: "Check Your Email",
            description:
                "Your order confirmation and receipt have been sent to your email address.",
        },
        {
            icon: "📦",
            title: "Track Your Order",
            description:
                "You'll receive a shipping notification with tracking once your planner ships.",
        },
        {
            icon: "🚀",
            title: "Start Your Journey",
            description:
                "Join our Morning 5 community to connect with others transforming their lives.",
        },
    ]

    const styles = {
        container: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        },
        hero: {
            position: "relative",
            padding: "120px 24px 80px",
            textAlign: "center",
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9f9f9",
        },
        heroContent: {
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
        },
        checkmarkContainer: {
            width: "100px",
            height: "100px",
            margin: "0 auto 40px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #7B3FBF",
            color: "#7B3FBF",
            fontSize: "3rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        },
        heroTitle: {
            fontSize: "clamp(3rem, 5vw, 4.5rem)",
            fontWeight: "400",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            lineHeight: "1.1",
            marginBottom: "24px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        heroSubtext: {
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            fontWeight: "400",
            lineHeight: "1.6",
            marginBottom: "30px",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto 30px",
        },
        orderNumber: {
            fontSize: "1rem",
            color: "#7B3FBF",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
        },
        section: {
            padding: "100px 24px",
            maxWidth: "1400px",
            margin: "0 auto",
        },
        sectionTitle: {
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: "400",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            textAlign: "center",
            marginBottom: "60px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        stepsGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginTop: "40px",
        },
        stepCard: {
            backgroundColor: "#fff",
            border: "1px solid #eee",
            padding: "50px 30px",
            textAlign: "center",
            transition: "all 0.3s ease",
        },
        stepCardHover: {
            transform: "translateY(-5px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
        },
        stepIcon: {
            fontSize: "3rem",
            marginBottom: "20px",
            display: "block",
        },
        stepTitle: {
            fontSize: "1.2rem",
            fontWeight: "700",
            marginBottom: "15px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        stepDescription: {
            color: "#666",
            fontSize: "1rem",
            lineHeight: "1.6",
        },
        ctaSection: {
            padding: "100px 24px",
            textAlign: "center",
            backgroundColor: "#fff",
            borderTop: "1px solid #eee",
        },
        ctaContent: {
            maxWidth: "800px",
            margin: "0 auto",
        },
        ctaTitle: {
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "400",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            marginBottom: "30px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        ctaText: {
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "50px",
        },
        socialLinksLarge: {
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "40px",
            marginBottom: "60px",
        },
        socialLinkLarge: {
            color: "#1a1a1a",
            textDecoration: "none",
            transition: "all 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
        },
        socialIconLarge: {
            width: "70px",
            height: "70px",
            backgroundColor: "#f9f9f9",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #eee",
            transition: "all 0.3s ease",
            fontSize: "1.5rem",
        },
        socialIconLargeHover: {
            backgroundColor: "#1a1a1a",
            borderColor: "#1a1a1a",
            color: "#fff",
            transform: "translateY(-5px)",
        },
        socialName: {
            fontSize: "0.85rem",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
        },
        button: {
            display: "inline-block",
            padding: "20px 40px",
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            borderRadius: "0",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            transition: "all 0.3s ease",
            border: "1px solid #1a1a1a",
            cursor: "pointer",
        },
        buttonHover: {
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
        },
        purpleAccent: {
            color: "#7B3FBF",
            fontStyle: "italic",
        },
    }

    return (
        <>
            <div style={styles.container}>
                <section style={styles.hero}>
                    <div style={styles.heroContent}>
                        <div style={styles.checkmarkContainer}>✓</div>
                        <h1 style={styles.heroTitle}>
                            Thank You for Your{" "}
                            <span style={styles.purpleAccent}>Order</span>
                        </h1>
                        <p style={styles.heroSubtext}>
                            Your transformation begins now. We're excited to be
                            part of your journey to create powerful mornings and
                            an unstoppable life.
                        </p>
                        <p style={styles.orderNumber}>
                            Order Confirmation Sent to Your Email
                        </p>
                    </div>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        What Happens{" "}
                        <span style={styles.purpleAccent}>Next</span>?
                    </h2>
                    <div style={styles.stepsGrid}>
                        {nextSteps.map((step, index) => (
                            <div
                                key={index}
                                style={styles.stepCard}
                                onMouseEnter={(e) => {
                                    Object.assign(
                                        e.currentTarget.style,
                                        styles.stepCardHover
                                    )
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)"
                                    e.currentTarget.style.boxShadow = "none"
                                }}
                            >
                                <span style={styles.stepIcon}>{step.icon}</span>
                                <h3 style={styles.stepTitle}>{step.title}</h3>
                                <p style={styles.stepDescription}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={styles.ctaSection}>
                    <div style={styles.ctaContent}>
                        <h2 style={styles.ctaTitle}>
                            Join The{" "}
                            <span style={styles.purpleAccent}>Movement</span>
                        </h2>
                        <p style={styles.ctaText}>
                            Connect with thousands of people who are
                            transforming their lives one morning at a time.
                            Follow Glenn Lundy on social media for daily
                            inspiration.
                        </p>
                        <div style={styles.socialLinksLarge}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.socialLinkLarge}
                                    onMouseEnter={(e) => {
                                        const iconDiv =
                                            e.currentTarget.querySelector("div")
                                        if (iconDiv) {
                                            Object.assign(
                                                iconDiv.style,
                                                styles.socialIconLargeHover
                                            )
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        const iconDiv =
                                            e.currentTarget.querySelector("div")
                                        if (iconDiv) {
                                            iconDiv.style.backgroundColor =
                                                "#f9f9f9"
                                            iconDiv.style.borderColor = "#eee"
                                            iconDiv.style.color = "#1a1a1a"
                                            iconDiv.style.transform =
                                                "translateY(0)"
                                        }
                                    }}
                                >
                                    <div style={styles.socialIconLarge}>
                                        {social.icon}
                                    </div>
                                    <span style={styles.socialName}>
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                        <a
                            href="/"
                            style={{
                                ...styles.button,
                                ...(hoveredButton === "home"
                                    ? styles.buttonHover
                                    : {}),
                            }}
                            onMouseEnter={() => setHoveredButton("home")}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            Return to Homepage
                        </a>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
