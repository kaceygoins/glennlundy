"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

export default function EliteAutoClubWelcome() {
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

    const styles = {
        container: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#ffffff", // Changed to White
            color: "#1a1a1a", // Dark Text
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        mainContent: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "1",
            padding: isMobile ? "60px 20px" : "80px 24px",
        },
        contentWrapper: {
            textAlign: "center",
            maxWidth: "900px",
            width: "100%",
            margin: "0 auto",
        },
        headline: {
            fontSize: isMobile ? "2.2rem" : "clamp(3rem, 5vw, 4.5rem)",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif', // Serif Font
            lineHeight: "1.1",
            marginBottom: "30px",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            color: "#1a1a1a",
        },
        purpleAccent: {
            color: "#7B3FBF", // Solid Purple
        },
        subheader: {
            fontSize: isMobile ? "1rem" : "1.2rem",
            lineHeight: "1.7",
            color: "#666",
            marginBottom: "50px",
            maxWidth: "700px",
            margin: "0 auto 50px",
        },
        videoContainer: {
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "0px", // Clean corners
            overflow: "hidden",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)", // Softer shadow
            marginBottom: "60px",
        },
        videoIframe: {
            width: "100%",
            height: "100%",
            border: "none",
        },
        loginButton: {
            display: "inline-block",
            padding: "20px 50px",
            backgroundColor: "#1a1a1a", // Dark Button
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            transition: "all 0.3s ease",
            border: "1px solid #1a1a1a",
            cursor: "pointer",
        },
        loginButtonHover: {
            backgroundColor: "transparent",
            color: "#1a1a1a",
        },
    }

    return (
        <div style={styles.container}>
            <div style={styles.mainContent}>
                <div style={styles.contentWrapper}>
                    <h1 style={styles.headline}>
                        Welcome to the{" "}
                        <span style={styles.purpleAccent}>
                            800% Elite Auto Club
                        </span>
                    </h1>
                    <p style={styles.subheader}>
                        Please watch the video below for a quick message from
                        800% Elite Auto founder and president Glenn Lundy.
                    </p>
                    <div style={styles.videoContainer}>
                        <iframe
                            style={styles.videoIframe}
                            src="https://www.youtube.com/embed/IzHXw-WFRYE"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <a
                        href="https://app.glennlundy.com"
                        style={{
                            ...styles.loginButton,
                            ...(hoveredButton === "login"
                                ? styles.loginButtonHover
                                : {}),
                        }}
                        onMouseEnter={() => setHoveredButton("login")}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Login to Your Account
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}
