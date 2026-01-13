"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

// --- MAIN PAGE ---
export default function Contact() {
    const [hoveredLink, setHoveredLink] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 992)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const styles = {
        container: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            overflowX: "hidden",
        },
        hero: {
            padding: isMobile ? "80px 20px" : "120px 40px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            position: "relative",
        },
        heroTitle: {
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            lineHeight: "1.1",
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        heroTagline: {
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            fontStyle: "italic",
            fontWeight: "400",
            lineHeight: "1.6",
            color: "#666",
            maxWidth: "700px",
            margin: "0 auto",
        },
        infoSection: {
            padding: isMobile ? "60px 20px" : "100px 40px",
            maxWidth: "1200px",
            margin: "0 auto",
        },
        infoTitle: {
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: "700",
            marginBottom: "60px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
            textAlign: "center",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
        },
        // CONTACT GRID
        contactInfo: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "30px",
        },
        infoCard: {
            backgroundColor: "#ffffff",
            border: "1px solid #eee",
            borderRadius: "0", // Sharp corners
            padding: "40px",
            textAlign: "center",
            transition: "all 0.3s ease",
            boxShadow: "0 5px 15px rgba(0,0,0,0.03)",
        },
        infoCardTitle: {
            fontSize: "1.2rem",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#1a1a1a",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
        },
        infoText: {
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#555",
            marginBottom: "8px",
        },
        contactLink: {
            color: "#7B3FBF",
            textDecoration: "none",
            transition: "all 0.3s ease",
            fontWeight: "600",
            display: "inline-block",
            marginTop: "10px",
            fontSize: "1.1rem",
        },
        purpleAccent: {
            color: "#7B3FBF",
        },
        note: {
            color: "#888",
            fontSize: "0.9rem",
            marginTop: "60px",
            textAlign: "center",
            fontStyle: "italic",
            maxWidth: "600px",
            margin: "60px auto 0",
        },
    }

    const responsiveCSS = `
        .info-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; border-color: #7B3FBF !important; }
        .contact-link:hover { color: #1a1a1a !important; }
        @media (max-width: 768px) {
            .contact-info { grid-template-columns: 1fr !important; }
            .hero-title { font-size: 2.5rem !important; }
        }
    `

    return (
        <div style={styles.container}>
            <style>{responsiveCSS}</style>

            {/* HERO */}
            <section style={styles.hero}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>
                        <span style={styles.purpleAccent}>Contact</span> Us
                    </h1>
                    <p style={styles.heroTagline}>
                        Have a question, want to connect, or ready to unlock
                        your next level of growth? Reach out to the 800%
                        team—we're here to help you lead, grow, and transform.
                    </p>
                </div>
            </section>

            {/* INFO SECTION */}
            <section style={styles.infoSection}>
                <h2 style={styles.infoTitle}>800% Office Headquarters</h2>

                <div style={styles.contactInfo} className="contact-info">
                    {/* Address */}
                    <div style={styles.infoCard} className="info-card">
                        <h3 style={styles.infoCardTitle}>Main Office</h3>
                        <div style={styles.infoText}>
                            2443 Sir Barton Way, Suite 425
                        </div>
                        <div style={styles.infoText}>Lexington, KY 40509</div>
                    </div>

                    {/* Phone */}
                    <div style={styles.infoCard} className="info-card">
                        <h3 style={styles.infoCardTitle}>Phone</h3>
                        <div style={styles.infoText}>
                            Call us directly to speak with our team:
                        </div>
                        <a
                            href="tel:1-859-800-8004"
                            style={styles.contactLink}
                            className="contact-link"
                        >
                            1-859-800-8004
                        </a>
                    </div>

                    {/* Email */}
                    <div style={styles.infoCard} className="info-card">
                        <h3 style={styles.infoCardTitle}>Email</h3>
                        <div style={styles.infoText}>
                            For general inquiries and support:
                        </div>
                        <a
                            href="mailto:jessica@glennlundy.com"
                            style={styles.contactLink}
                            className="contact-link"
                        >
                            jessica@glennlundy.com
                        </a>
                    </div>

                    {/* Hours */}
                    <div style={styles.infoCard} className="info-card">
                        <h3 style={styles.infoCardTitle}>Office Hours</h3>
                        <div style={styles.infoText}>
                            Monday – Friday: 8:00 AM – 6:00 PM EST
                        </div>
                        <div style={styles.infoText}>
                            Saturday & Sunday: Closed
                        </div>
                    </div>
                </div>

                <div style={styles.note}>
                    For booking Glenn to speak, consulting requests, or media
                    inquiries, please call or email and our team will respond
                    within one business day.
                </div>
            </section>

            <Footer />
        </div>
    )
}
