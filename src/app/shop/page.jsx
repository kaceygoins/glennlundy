"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

// --- STORE PAGE ---
export default function Store() {
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
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
        },
        mainContent: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            background:
                "radial-gradient(circle at 50% 50%, rgba(123, 63, 191, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
            minHeight: "80vh",
        },
        brandName: {
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            color: "#1a1a1a",
            letterSpacing: "0.02em",
            marginBottom: "10px",
            textAlign: "center",
            textTransform: "uppercase",
        },
        subtitle: {
            fontSize: "clamp(1rem, 3vw, 1.2rem)",
            fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            color: "#666",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "60px",
            textAlign: "center",
        },
        line: {
            width: "1px",
            height: "60px",
            backgroundColor: "#7B3FBF",
            margin: "0 auto 30px",
            opacity: 0.5,
        },
        shopLink: {
            display: "inline-block",
            padding: "20px 50px",
            backgroundColor: "transparent",
            border: "1px solid #1a1a1a",
            fontSize: "1.2rem", // Large font for impact
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#1a1a1a",
            textDecoration: "none",
            transition: "all 0.3s ease",
            marginTop: "40px",
            cursor: "pointer",
        },
    }

    return (
        <div style={styles.container}>
            <div style={styles.mainContent}>
                <h1 style={styles.brandName}>800% LIFE</h1>
                <p style={styles.subtitle}>Books • Apparel • Lifestyle</p>

                <div style={styles.line}></div>

                <a
                    href="https://wearyourspiritwarehouse.com/800Percent/shop/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.shopLink}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#1a1a1a"
                        e.target.style.color = "#ffffff"
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.color = "#1a1a1a"
                    }}
                >
                    View All 800% Apparel
                </a>
            </div>
            <Footer />
        </div>
    )
}
