"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"
import ScrollIndicator from "@/components/ScrollIndicator"

export default function Homepage() {
    const [hoveredButton, setHoveredButton] = useState(null)
    const [hoveredPath, setHoveredPath] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const scrollToPath = () => {
        const element = document.getElementById("choose-path")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const videoUrls = [
        "https://www.youtube.com/embed/_Msei9Zm-6Y?si=BRgMLXBMQJVXy-77",
        "https://www.youtube.com/embed/EpSxXb3-uT0?si=n2BBV1E0phLqY7lz",
        "https://www.youtube.com/embed/CStBsa-dTkA?si=ZkhUQ2yV5sp1vo09",
    ]

    const backgroundImage = isMobile
        ? "url('https://imgur.com/Qu62LY9.jpg')"
        : "url('https://imgur.com/iWOcDnz.jpg')"

    const styles = {
        container: {
            width: "100%",
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            overflowX: "hidden",
        },
        heroSection: {
            position: "relative",
            width: "100%",
            height: "100vh",
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
            paddingBottom: isMobile ? "120px" : "180px",
            transition: "background-image 0.3s ease-in-out",
        },
        heroOverlay: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)",
            zIndex: 1,
        },
        heroContent: {
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: isMobile ? "0 20px" : "0 40px",
            color: "#ffffff",
        },
        heroTagline: {
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            lineHeight: "1.1",
            marginBottom: "40px",
            maxWidth: "1200px",
            textShadow: "0 4px 40px rgba(0,0,0,0.9)",
        },
        heroButton: {
            display: "inline-block",
            padding: "20px 50px",
            backgroundColor: "#7B3FBF",
            color: "#fff",
            border: "none",
            borderRadius: "0",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "1rem",
            fontWeight: "700",
            textDecoration: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        },
        pathsSectionWrapper: {
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        pathsContainer: {
            maxWidth: "1400px",
            margin: "0 auto",
            padding: isMobile ? "80px 20px" : "100px 40px",
            width: "100%",
        },
        sectionHeader: {
            textAlign: "center",
            marginBottom: "80px",
        },
        sectionTitle: {
            fontSize: "2rem",
            textTransform: "uppercase",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            letterSpacing: "0.1em",
            fontWeight: "700",
            color: "#1a1a1a",
            marginBottom: "20px",
        },
        pathsGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #f0f0f0",
        },
        pathCard: {
            position: "relative",
            backgroundColor: "#ffffff",
            padding: isMobile ? "60px 20px" : "80px 40px",
            textAlign: "center",
            transition: "all 0.4s ease",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "400px",
        },
        pathTitle: {
            fontSize: "1.5rem",
            fontWeight: "600",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "20px",
            color: "#1a1a1a",
        },
        pathDescription: {
            color: "#666",
            marginBottom: "40px",
            lineHeight: "1.8",
            maxWidth: "300px",
            fontSize: "0.95rem",
        },
        textButton: {
            color: "#7B3FBF",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "0.85rem",
            fontWeight: "700",
            textDecoration: "none",
            borderBottom: "1px solid transparent",
            paddingBottom: "4px",
            transition: "all 0.3s ease",
        },
        communitySection: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            width: "100%",
            minHeight: "100vh",
            position: "relative",
        },
        communityContent: {
            padding: isMobile ? "60px 20px" : "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#f9f9f9",
        },
        communityImageContainer: {
            width: "100%",
            height: "100%",
            backgroundColor: "#f9f9f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "40px" : "80px",
        },
        communityImage: {
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://imgur.com/67t2rKT.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: isMobile ? "300px" : "400px",
        },
        testimonialsSection: {
            padding: isMobile ? "80px 20px" : "120px 40px",
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            textAlign: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        testimonialDesc: {
            color: "#555",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "1.2rem",
            marginBottom: "60px",
        },
        videoGrid: {
            display: isMobile ? "flex" : "grid",
            flexDirection: "column",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            maxWidth: "1400px",
            margin: "0 auto 60px",
            width: "100%",
        },
        videoContainer: {
            position: "relative",
            paddingTop: "56.25%",
            backgroundColor: "#000",
            overflow: "hidden",
            borderRadius: "4px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            width: "100%",
        },
        videoIframe: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
        },
        ctaButton: {
            display: "inline-block",
            padding: "18px 40px",
            backgroundColor: "transparent",
            color: "#1a1a1a",
            border: "1px solid #1a1a1a",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "0.9rem",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.3s ease",
            marginTop: "20px",
            cursor: "pointer",
        },
    }

    const responsiveCSS = `
        @media (max-width: 1024px) {
            .video-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
            .community-grid { grid-template-columns: 1fr !important; }
            .paths-grid { grid-template-columns: 1fr !important; }
            .hero-tagline { font-size: 2.2rem !important; }
            .scroll-indicator {
                right: auto !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                bottom: 20px !important;
            }
        }
        .path-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); z-index: 2; }
    `

    return (
        <>
            <style>{responsiveCSS}</style>
            <div style={styles.container}>
                {/* Hero Section */}
                <section style={styles.heroSection}>
                    <div style={styles.heroOverlay}></div>
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTagline} className="hero-tagline">
                            <span style={{ color: "white", WebkitTextStroke: "0.5px white" }}>
                                Elevate Your Life.
                            </span>
                            <br />
                            <span
                                style={{
                                    background: "linear-gradient(to right, #7B3FBF, #FF4500, #FFD700)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    WebkitTextStroke: "0.5px white",
                                    whiteSpace: "normal",
                                    fontSize: isMobile ? "1.8rem" : "inherit",
                                    display: "inline-block",
                                    lineHeight: "1.3",
                                }}
                            >
                                One Morning At A Time.
                            </span>
                        </h1>
                        <button
                            onClick={scrollToPath}
                            style={{
                                ...styles.heroButton,
                                ...(hoveredButton === "hero"
                                    ? {
                                          backgroundColor: "#9B59B6",
                                          transform: "translateY(-4px)",
                                          boxShadow: "0 15px 40px rgba(155, 89, 182, 0.4)",
                                      }
                                    : {}),
                            }}
                            onMouseEnter={() => setHoveredButton("hero")}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            Start Your Journey
                        </button>
                    </div>
                    <ScrollIndicator targetId="choose-path" style={{ bottom: "60px" }} isMobile={isMobile} />
                </section>

                {/* Paths Section */}
                <section id="choose-path" style={styles.pathsSectionWrapper}>
                    <div style={styles.pathsContainer}>
                        <div style={styles.sectionHeader}>
                            <h2 style={styles.sectionTitle}>Choose Your Path</h2>
                            <div style={{ width: "60px", height: "2px", background: "#7B3FBF", margin: "0 auto" }}></div>
                        </div>
                        <div style={styles.pathsGrid} className="paths-grid">
                            <div
                                style={styles.pathCard}
                                className="path-card"
                                onMouseEnter={() => setHoveredPath("life")}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                <h3 style={styles.pathTitle}>Life</h3>
                                <p style={styles.pathDescription}>
                                    Unlock your personal potential. Shift your mindset and create a legacy that lasts forever.
                                </p>
                                <a
                                    href="/life"
                                    style={{
                                        ...styles.textButton,
                                        borderBottomColor: hoveredPath === "life" ? "#7B3FBF" : "transparent",
                                    }}
                                >
                                    Discover More
                                </a>
                            </div>
                            <div
                                style={styles.pathCard}
                                className="path-card"
                                onMouseEnter={() => setHoveredPath("business")}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                <h3 style={styles.pathTitle}>Business</h3>
                                <p style={styles.pathDescription}>
                                    Scale your operations and train your team. Achieve massive growth in your dealership.
                                </p>
                                <a
                                    href="/800"
                                    style={{
                                        ...styles.textButton,
                                        borderBottomColor: hoveredPath === "business" ? "#7B3FBF" : "transparent",
                                    }}
                                >
                                    Discover More
                                </a>
                            </div>
                        </div>
                    </div>
                    <ScrollIndicator targetId="community-section" isMobile={isMobile} />
                </section>

                {/* Community Section */}
                <section id="community-section" style={styles.communitySection} className="community-grid">
                    <div style={styles.communityContent} className="community-content">
                        <h2 style={{ ...styles.sectionTitle, textAlign: "left" }}>The Community</h2>
                        <p style={{ ...styles.pathDescription, maxWidth: "100%", fontSize: "1.1rem" }}>
                            Our mobile app brings daily motivation and a thriving ecosystem of growth-minded individuals right to your pocket.
                        </p>
                        <a
                            href="https://m5.800percent.life"
                            style={{
                                ...styles.ctaButton,
                                color: "#1a1a1a",
                                borderColor: "#1a1a1a",
                                marginTop: "30px",
                                alignSelf: "flex-start",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#1a1a1a"
                                e.target.style.color = "#fff"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent"
                                e.target.style.color = "#1a1a1a"
                            }}
                        >
                            Join Now
                        </a>
                    </div>
                    <div style={styles.communityImageContainer}>
                        <div style={styles.communityImage}></div>
                    </div>
                    <ScrollIndicator targetId="testimonials-section" isMobile={isMobile} />
                </section>

                {/* Testimonials Section */}
                <section id="testimonials-section" style={styles.testimonialsSection}>
                    <h2 style={{ ...styles.sectionTitle, color: "#1a1a1a" }}>Real Growth</h2>
                    <p style={styles.testimonialDesc}>
                        Glenn's message doesn't just inspire, it delivers results. Hear directly from leaders who've experienced transformation.
                    </p>
                    <div style={styles.videoGrid} className="video-grid">
                        {videoUrls.map((url, i) => (
                            <div key={i} style={styles.videoContainer}>
                                <iframe
                                    style={styles.videoIframe}
                                    src={url}
                                    title={`Testimonial Video ${i + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        ))}
                    </div>
                    <a
                        href="/testimonials"
                        style={styles.ctaButton}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#1a1a1a"
                            e.target.style.color = "#ffffff"
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent"
                            e.target.style.color = "#1a1a1a"
                        }}
                    >
                        Witness Transformation
                    </a>
                </section>

                <Footer />
            </div>
        </>
    )
}