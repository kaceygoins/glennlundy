"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

// --- MAIN LOGIN PAGE ---
export default function LoginPage() {
    const [hoveredButton, setHoveredButton] = useState(null)

    const styles = {
        pageContainer: {
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Pushes footer to bottom
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        },
        mainContent: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            minHeight: "60vh", // Ensures content is centered visually
        },
        headerTitle: {
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "60px",
            textAlign: "center",
            color: "#1a1a1a",
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "column", // Stacked vertically for simplicity
            gap: "30px",
            width: "100%",
            maxWidth: "400px",
        },
        pathButton: {
            display: "block",
            padding: "25px 40px",
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "1.1rem",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            border: "1px solid #1a1a1a",
            borderRadius: "0", // Square edges for quiet luxury
            transition: "all 0.3s ease",
            cursor: "pointer",
        },
        pathButtonHover: {
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            transform: "translateY(-2px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        },
        accent: {
            color: "#7B3FBF",
            fontStyle: "italic",
        },
    }

    return (
        <div style={styles.pageContainer}>
            <main style={styles.mainContent}>
                <h1 style={styles.headerTitle}>
                    Choose Your <span style={styles.accent}>Path</span>
                </h1>

                <div style={styles.buttonContainer}>
                    <a
                        href="https://app.glennlundy.com"
                        style={{
                            ...styles.pathButton,
                            ...(hoveredButton === "auto"
                                ? styles.pathButtonHover
                                : {}),
                        }}
                        onMouseEnter={() => setHoveredButton("auto")}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        800% Elite Auto
                    </a>

                    <a
                        href="https://m5.800percent.life"
                        style={{
                            ...styles.pathButton,
                            ...(hoveredButton === "life"
                                ? styles.pathButtonHover
                                : {}),
                        }}
                        onMouseEnter={() => setHoveredButton("life")}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        The Morning Five
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    )
}
