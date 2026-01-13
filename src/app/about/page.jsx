"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

// --- MAIN PAGE ---
export default function About() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => {
            window.removeEventListener("resize", checkMobile)
        }
    }, [])

    const styles = {
        container: {
            width: "100%",
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        },
        hero: {
            position: "relative",
            padding: isMobile ? "80px 20px 60px" : "120px 24px 80px",
            textAlign: "center",
            overflow: "hidden",
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
        heroTitle: {
            fontSize: isMobile ? "2.5rem" : "clamp(3rem, 6vw, 5rem)",
            fontWeight: "400",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            lineHeight: "1.1",
            marginBottom: "32px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        heroTagline: {
            fontSize: isMobile ? "1rem" : "clamp(1.1rem, 2.5vw, 1.3rem)",
            fontStyle: "italic",
            fontWeight: "300",
            lineHeight: "1.6",
            marginBottom: "0",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto",
            fontFamily: "Georgia, serif",
        },
        section: {
            padding: isMobile ? "80px 20px" : "120px 24px",
            maxWidth: "1400px",
            margin: "0 auto",
        },
        sectionTitle: {
            fontSize: isMobile ? "2rem" : "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: "400",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            textAlign: "center",
            marginBottom: isMobile ? "60px" : "80px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        familySection: {
            padding: isMobile ? "80px 20px" : "120px 24px",
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
            alignItems: "center",
        },
        familyContent: {
            order: 1,
        },
        familyImage: {
            order: 2,
        },
        contentTitle: {
            fontSize: "2rem",
            fontWeight: "400",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            marginBottom: "30px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        textBlock: {
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "24px",
        },
        imageContainer: {
            width: "100%",
            height: isMobile ? "400px" : "600px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
        },
        photo: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
        },
        journeySection: {
            padding: isMobile ? "80px 20px" : "120px 24px",
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
            alignItems: "center",
            backgroundColor: "#f9f9f9",
        },
        journeyContent: {
            order: 2,
        },
        journeyImage: {
            order: 1,
        },
        achievementsSection: {
            padding: isMobile ? "80px 20px" : "120px 24px",
            maxWidth: "1400px",
            margin: "0 auto",
            textAlign: "center",
        },
        achievementsGrid: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", // FIXED: 3 columns on desktop
            gap: isMobile ? "30px" : "40px",
            marginTop: "60px",
        },
        achievementCard: {
            backgroundColor: "#ffffff",
            border: "1px solid #eee",
            padding: isMobile ? "30px 20px" : "40px",
            textAlign: "center",
            minHeight: isMobile ? "180px" : "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "all 0.3s ease",
        },
        achievementTitle: {
            fontSize: "1.2rem",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            marginBottom: "16px",
            color: "#1a1a1a",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
        },
        achievementDescription: {
            color: "#666",
            fontSize: "1rem",
            lineHeight: "1.6",
        },
        // NEW 800% LIFESTYLE SECTION
        lifestyleSection: {
            padding: isMobile ? "80px 20px" : "120px 24px",
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "#fff",
        },
        purpleAccent: {
            color: "#7B3FBF",
            fontStyle: "italic",
        },
    }

    const responsiveStyles = `
        @media (max-width: 768px) {
            .family-content { order: 2 !important; }
            .family-image { order: 1 !important; margin-bottom: 20px; }
            .journey-content { order: 2 !important; }
            .journey-image { order: 1 !important; margin-bottom: 20px; }
        }
    `

    return (
        <>
            <style>{responsiveStyles}</style>
            <title>
                About Glenn Lundy | From Rock Bottom to National Success
            </title>
            <div style={styles.container}>
                {/* Hero Section */}
                <section style={styles.hero}>
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTitle}>
                            About <span style={styles.purpleAccent}>Glenn</span>
                        </h1>
                        <p style={styles.heroTagline}>
                            From homelessness to national headlines. A story of
                            turning pain into purpose and struggle into
                            strength.
                        </p>
                    </div>
                </section>

                {/* Family Section */}
                <section style={styles.familySection}>
                    <div
                        style={styles.familyContent}
                        className="family-content"
                    >
                        <h2 style={styles.contentTitle}>
                            Family{" "}
                            <span style={styles.purpleAccent}>First</span>
                        </h2>
                        <p style={styles.textBlock}>
                            Above all else, Glenn Lundy is a devoted husband and
                            father. Together with his wife, he's raising nine
                            incredible children in their home in Lexington,
                            Kentucky.
                        </p>
                        <p style={styles.textBlock}>
                            Despite his demanding schedule as a keynote speaker,
                            business consultant, and author, Glenn's family
                            remains his top priority. He believes that true
                            success isn't measured by business achievements
                            alone, but by the legacy we leave with those we love
                            most.
                        </p>
                    </div>
                    <div style={styles.familyImage} className="family-image">
                        <div style={styles.imageContainer}>
                            <img
                                src="https://imgur.com/ElWZqtk.jpg"
                                alt="Glenn Lundy Family"
                                style={styles.photo}
                            />
                        </div>
                    </div>
                </section>

                {/* Journey Section */}
                <section style={styles.journeySection}>
                    <div style={styles.journeyImage} className="journey-image">
                        <div style={styles.imageContainer}>
                            <img
                                src="https://imgur.com/AV58QVz.jpg"
                                alt="Glenn Lundy Journey"
                                style={styles.photo}
                            />
                        </div>
                    </div>
                    <div
                        style={styles.journeyContent}
                        className="journey-content"
                    >
                        <h2 style={styles.contentTitle}>
                            The <span style={styles.purpleAccent}>Journey</span>
                        </h2>
                        <p style={styles.textBlock}>
                            Glenn's story didn't start with success. It started
                            with struggle. There was a time when he found
                            himself homeless, battling depression, and wondering
                            if he'd ever find his way out.
                        </p>
                        <p style={styles.textBlock}>
                            But in those lowest moments, Glenn discovered
                            something powerful: the ability to choose his
                            response. He learned that circumstances don't define
                            us—our decisions do.
                        </p>
                        <p style={styles.textBlock}>
                            Through grit and an unwavering commitment to growth,
                            Glenn transformed his life completely. Today, he
                            uses his story not as a badge of honor, but as a
                            bridge to connect with others fighting their own
                            battles.
                        </p>
                    </div>
                </section>

                {/* Achievements Section */}
                <section style={styles.achievementsSection}>
                    <h2 style={styles.sectionTitle}>
                        Proven <span style={styles.purpleAccent}>Results</span>
                    </h2>

                    <div style={styles.achievementsGrid}>
                        <div style={styles.achievementCard}>
                            <h3 style={styles.achievementTitle}>800% Growth</h3>
                            <p style={styles.achievementDescription}>
                                Transformed a small-town dealership into the
                                second-largest used car franchise in the country
                                in just five years.
                            </p>
                        </div>

                        <div style={styles.achievementCard}>
                            <h3 style={styles.achievementTitle}>
                                2x Dealer of the Year
                            </h3>
                            <p style={styles.achievementDescription}>
                                Recognized twice for exceptional leadership and
                                performance in the automotive industry.
                            </p>
                        </div>

                        <div style={styles.achievementCard}>
                            <h3 style={styles.achievementTitle}>
                                Best-Selling Author
                            </h3>
                            <p style={styles.achievementDescription}>
                                Written multiple books that have impacted
                                thousands of leaders and entrepreneurs
                                worldwide.
                            </p>
                        </div>

                        <div style={styles.achievementCard}>
                            <h3 style={styles.achievementTitle}>
                                National Recognition
                            </h3>
                            <p style={styles.achievementDescription}>
                                Featured in major publications, podcasts, and
                                television broadcasts across the country.
                            </p>
                        </div>

                        <div style={styles.achievementCard}>
                            <h3 style={styles.achievementTitle}>
                                Impactful Speaker
                            </h3>
                            <p style={styles.achievementDescription}>
                                Delivers high-energy keynotes that shift
                                mindsets and drive real results.
                            </p>
                        </div>

                        <div style={styles.achievementCard}>
                            <h3 style={styles.achievementTitle}>
                                Business Consultant
                            </h3>
                            <p style={styles.achievementDescription}>
                                Consulted with and transformed hundreds of
                                businesses across the United States.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 800% LIFESTYLE SECTION (New Addition) */}
                <section style={styles.lifestyleSection}>
                    <h2 style={styles.sectionTitle}>
                        The 800%{" "}
                        <span style={styles.purpleAccent}>Lifestyle</span>
                    </h2>
                    <p style={styles.textBlock}>
                        800% is more than just a business metric—it is a way of
                        life. It is about maximizing your potential in every
                        single area: Faith, Family, Friends, Fitness, Finance,
                        Career, Education, and Mental Health.
                    </p>
                    <p style={styles.textBlock}>
                        Glenn believes that true success is not
                        compartmentalized. You cannot be a success in the
                        boardroom and a failure at home. The 800% Life is about
                        holistic growth, intentional living, and making every
                        moment count. It starts with how you wake up in the
                        morning and extends to the legacy you leave behind.
                    </p>
                </section>

                <Footer />
            </div>
        </>
    )
}
