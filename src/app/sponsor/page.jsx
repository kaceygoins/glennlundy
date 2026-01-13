"use client"
import React, { useState, useEffect, useRef } from "react"
import Footer from "@/components/Footer"

// --- MAIN PAGE ---
export default function Sponsorships() {
    const [hoveredButton, setHoveredButton] = useState(null)
    const [hoveredCard, setHoveredCard] = useState(null)
    const [visibleStats, setVisibleStats] = useState([])
    const [isMobile, setIsMobile] = useState(false)
    const statsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setVisibleStats([0]), 50)
                        setTimeout(() => setVisibleStats([0, 1]), 150)
                        setTimeout(() => setVisibleStats([0, 1, 2]), 250)
                        setTimeout(() => setVisibleStats([0, 1, 2, 3]), 350)
                        setTimeout(() => setVisibleStats([0, 1, 2, 3, 4]), 450)
                    }
                })
            },
            { threshold: 0.3 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current)
            }
        }
    }, [])

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 992)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const sponsorshipPlans = [
        {
            name: "Bronze Sponsorship",
            price: "$5,000",
            description: "Perfect for Enhanced Visibility and Engagement",
            features: [
                "Branded Contribution to Goody Bag",
                "Logos and Promotional Material Throughout The Event",
                "Direct Endorsement from 800% Club Representative",
                "Participation in Live Event",
            ],
            popular: false,
            color: "#CD7F32",
        },
        {
            name: "Gold Sponsorship",
            price: "$12,500",
            description: "Ideal for High-Impact Exposure and Interaction",
            features: [
                "All Bronze Features",
                "Participation in all Dealer Events",
                "15 Minutes Zoom Interview Pre-Recorded for Club training",
                "30 Minute Presentation To All Dealers Live at Event",
            ],
            popular: true,
            color: "#D4AF37", // Gold
        },
        {
            name: "Title Sponsorship",
            price: "$20,000",
            description: "Tailored for Maximum Branding and Influence",
            features: [
                "All Gold Features",
                "45 Minutes Zoom Interview Pre-Recorded for Club training",
                "45 Min Presentation To All Dealers Live",
                "Exclusive Dinner with Key Leadership",
            ],
            popular: false,
            color: "#7B3FBF", // Purple
        },
    ]

    const eventPhotos = [
        {
            url: "https://i.imgur.com/eNGwSkO.jpg",
            alt: "Retreat networking session",
        },
        {
            url: "https://i.imgur.com/dSCxgNV.jpg",
            alt: "Team building activities",
        },
        {
            url: "https://i.imgur.com/5Fp7j3W.jpg",
            alt: "Leadership presentation",
        },
        {
            url: "https://i.imgur.com/WAPPsxv.jpg",
            alt: "Group adventure excursion",
        },
        {
            url: "https://i.imgur.com/s7zjB83.jpg",
            alt: "Evening networking event",
        },
        { url: "https://i.imgur.com/11nhE80.jpg", alt: "Elite club gathering" },
    ]

    const sponsorLogos = [
        { url: "https://i.imgur.com/EJXAQ43.jpg", alt: "DriveCentric" },
        { url: "https://i.imgur.com/LXNwgjZ.jpg", alt: "Auto Hauler Exchange" },
        { url: "https://imgur.com/6MP2T2w.jpg", alt: "FLX" },
        { url: "https://i.imgur.com/GzRtJDh.jpg", alt: "VinCue" },
        { url: "https://i.imgur.com/nis6pdr.jpg", alt: "Social Grenade" },
        { url: "https://i.imgur.com/PXXZEVA.jpg", alt: "LotPop" },
    ]

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
            maxWidth: "1400px",
            margin: "0 auto",
            backgroundColor: "#f9f9f9",
        },
        heroTitle: {
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "700",
            lineHeight: "1.1",
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            color: "#1a1a1a",
        },
        heroSubtitle: {
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "#666",
            marginBottom: "40px",
            maxWidth: "800px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
        },
        ctaButton: {
            display: "inline-block",
            padding: "18px 40px",
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            borderRadius: "0",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            transition: "all 0.3s ease",
            border: "1px solid #1a1a1a",
            cursor: "pointer",
        },
        section: {
            padding: isMobile ? "60px 20px" : "100px 40px",
            maxWidth: "1400px",
            margin: "0 auto",
        },
        sectionTitle: {
            fontSize: "2.5rem",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
            textAlign: "center",
        },
        sectionDescription: {
            fontSize: "1.1rem",
            color: "#666",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 60px",
            lineHeight: "1.6",
        },
        // SPONSORS GRID - One line on Desktop
        sponsorsGrid: {
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(6, 1fr)",
            gap: isMobile ? "30px" : "40px",
            alignItems: "center",
            justifyItems: "center",
            marginTop: "60px",
        },
        sponsorLogo: {
            maxWidth: "100%",
            height: "auto",
            maxHeight: isMobile ? "40px" : "50px",
            objectFit: "contain",
            filter: "grayscale(100%) opacity(0.7)",
            transition: "all 0.3s ease",
            cursor: "pointer",
        },
        // PLANS GRID
        plansGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginTop: "40px",
        },
        planCard: {
            backgroundColor: "#ffffff",
            border: "1px solid #eee",
            padding: "40px",
            textAlign: "center",
            position: "relative",
            transition: "all 0.3s ease",
            boxShadow: "0 5px 15px rgba(0,0,0,0.03)",
        },
        // GOLD PLAN WRAPPER - RESTORED
        planCardPopular: {
            border: "2px solid #D4AF37", // Gold Border
            transform: "scale(1.02)",
            boxShadow: "0 20px 40px rgba(212, 175, 55, 0.15)", // Gold-ish shadow
            zIndex: 2,
        },
        popularBadge: {
            position: "absolute",
            top: "0",
            right: "0",
            backgroundColor: "#D4AF37",
            color: "#ffffff",
            padding: "8px 20px",
            fontSize: "0.75rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
        },
        planTitle: {
            fontSize: "1.5rem",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            marginBottom: "10px",
            color: "#1a1a1a",
        },
        planPrice: {
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#7B3FBF",
            marginBottom: "20px",
        },
        featureList: {
            listStyle: "none",
            padding: 0,
            marginTop: "20px",
            textAlign: "left",
        },
        featureItem: {
            marginBottom: "15px",
            fontSize: "0.95rem",
            color: "#555",
            display: "flex",
            alignItems: "start",
        },
        // WHY PARTNER (STATS) - RESTORED
        statsContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            maxWidth: "900px",
            margin: "0 auto",
        },
        statBubble: {
            backgroundColor: "#fff",
            border: "1px solid #eee",
            padding: "30px",
            borderRadius: "0",
            boxShadow: "0 5px 15px rgba(0,0,0,0.03)",
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
        },
        statBubbleVisible: {
            opacity: 1,
            transform: "translateY(0)",
        },
        statText: {
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#555",
        },
        statHighlight: {
            color: "#7B3FBF",
            fontWeight: "700",
        },
        // VIDEO & PHOTOS
        videoContainer: {
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            backgroundColor: "#000",
            marginBottom: "40px",
        },
        videoIframe: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
        },
        photosGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
        },
        photoCard: {
            height: "250px",
            overflow: "hidden",
        },
        photoImg: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
        },
    }

    const responsiveCSS = `
        .sponsor-logo:hover { filter: grayscale(0%) opacity(1) !important; transform: scale(1.05); }
        .plan-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; }
        .photo-img:hover { transform: scale(1.1); }
        .cta-btn:hover { background-color: #7B3FBF !important; color: #fff !important; border-color: #7B3FBF !important; }
        @media (max-width: 768px) {
            .hero-title { font-size: 2.2rem !important; }
            .section { padding: 60px 20px !important; }
            .photos-grid { grid-template-columns: 1fr !important; }
        }
    `

    return (
        <div style={styles.container}>
            <style>{responsiveCSS}</style>

            {/* HERO */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>
                    Elite <span style={{ color: "#7B3FBF" }}>Sponsorships</span>
                </h1>
                <p style={styles.heroSubtitle}>
                    Partner with 800% Elite Auto Club and gain unprecedented
                    access to North America's most influential dealership
                    decision makers.
                </p>
                <a href="#plans" style={styles.ctaButton} className="cta-btn">
                    View Opportunities
                </a>
            </section>

            {/* TRUSTED PARTNERS (One line desktop, 2-col mobile) */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Trusted Partners</h2>
                <p style={styles.sectionDescription}>
                    We partner with industry leaders who value excellence and
                    innovation.
                </p>
                <div style={styles.sponsorsGrid}>
                    {sponsorLogos.map((sponsor, index) => (
                        <img
                            key={index}
                            src={sponsor.url}
                            alt={sponsor.alt}
                            style={styles.sponsorLogo}
                            className="sponsor-logo"
                        />
                    ))}
                </div>
            </section>

            {/* WHY PARTNER WITH US (RESTORED) */}
            <section style={{ ...styles.section, backgroundColor: "#f9f9f9" }}>
                <h2 style={styles.sectionTitle}>Why Partner With Us?</h2>
                <p style={styles.sectionDescription}>
                    Gain exclusive access to automotive industry decision makers
                    in an intimate, high-value environment.
                </p>
                <div style={styles.statsContainer} ref={statsRef}>
                    <div
                        style={{
                            ...styles.statBubble,
                            ...(visibleStats.includes(0)
                                ? styles.statBubbleVisible
                                : {}),
                        }}
                    >
                        <p style={styles.statText}>
                            <span style={styles.statHighlight}>
                                Direct Target Audience:
                            </span>{" "}
                            Get in front of decision makers in an intimate
                            setting with full undivided attention—no competing
                            booths, no distractions.
                        </p>
                    </div>
                    <div
                        style={{
                            ...styles.statBubble,
                            ...(visibleStats.includes(1)
                                ? styles.statBubbleVisible
                                : {}),
                        }}
                    >
                        <p style={styles.statText}>
                            <span style={styles.statHighlight}>
                                Genuine Relationships:
                            </span>{" "}
                            Bond through team building activities and surprise
                            excursions, creating partnerships that last for
                            years.
                        </p>
                    </div>
                    <div
                        style={{
                            ...styles.statBubble,
                            ...(visibleStats.includes(2)
                                ? styles.statBubbleVisible
                                : {}),
                        }}
                    >
                        <p style={styles.statText}>
                            <span style={styles.statHighlight}>
                                Brand Positioning:
                            </span>{" "}
                            Gain exclusive positioning as a preferred vendor
                            with ongoing endorsement from 800% Elite leadership.
                        </p>
                    </div>
                    <div
                        style={{
                            ...styles.statBubble,
                            ...(visibleStats.includes(3)
                                ? styles.statBubbleVisible
                                : {}),
                        }}
                    >
                        <p style={styles.statText}>
                            <span style={styles.statHighlight}>
                                Pre-Qualified Leads:
                            </span>{" "}
                            Access a group of dealers averaging 50-250 cars per
                            month who are actively investing in growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* INVESTMENT PLANS (GOLD WRAP RESTORED) */}
            <section id="plans" style={styles.section}>
                <h2 style={styles.sectionTitle}>Investment Plans</h2>
                <p style={styles.sectionDescription}>
                    Choose the level of impact that suits your brand.
                </p>
                <div style={styles.plansGrid}>
                    {sponsorshipPlans.map((plan, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.planCard,
                                ...(plan.popular ? styles.planCardPopular : {}),
                            }}
                            className="plan-card"
                        >
                            {plan.popular && (
                                <div style={styles.popularBadge}>
                                    Most Popular
                                </div>
                            )}
                            <h3 style={styles.planTitle}>{plan.name}</h3>
                            <div style={styles.planPrice}>{plan.price}</div>
                            <p style={{ color: "#666", fontSize: "0.9rem" }}>
                                {plan.description}
                            </p>
                            <hr
                                style={{
                                    border: "none",
                                    borderTop: "1px solid #eee",
                                    margin: "20px 0",
                                }}
                            />
                            <ul style={styles.featureList}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={styles.featureItem}>
                                        <span
                                            style={{
                                                color: "#7B3FBF",
                                                marginRight: "10px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            ✓
                                        </span>{" "}
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* RETREAT EXPERIENCE (RESTORED) */}
            <section style={{ ...styles.section, backgroundColor: "#f9f9f9" }}>
                <h2 style={styles.sectionTitle}>Retreat Experience</h2>
                <p style={styles.sectionDescription}>
                    See the energy and connection firsthand.
                </p>

                {/* Video */}
                <div style={styles.videoContainer}>
                    <iframe
                        style={styles.videoIframe}
                        src="https://www.youtube.com/embed/p0S8G9R1h_4?si=aJEBJY7hfNaMVvKq"
                        title="Retreat Highlights"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Photo Gallery */}
                <div style={styles.photosGrid}>
                    {eventPhotos.map((photo, index) => (
                        <div key={index} style={styles.photoCard}>
                            <img
                                src={photo.url}
                                alt={photo.alt}
                                style={styles.photoImg}
                                className="photo-img"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section
                style={{
                    ...styles.section,
                    textAlign: "center",
                    backgroundColor: "#1a1a1a",
                    color: "#fff",
                }}
            >
                <h2 style={{ ...styles.sectionTitle, color: "#fff" }}>
                    Ready to Partner?
                </h2>
                <p style={{ ...styles.sectionDescription, color: "#ccc" }}>
                    Let's discuss how we can create a custom sponsorship package
                    that delivers results.
                </p>
                <a
                    href="mailto:jessica@glennlundy.com"
                    style={{
                        ...styles.ctaButton,
                        backgroundColor: "#fff",
                        color: "#1a1a1a",
                        borderColor: "#fff",
                    }}
                    className="cta-btn"
                >
                    Contact Us Today
                </a>
            </section>

            <Footer />
        </div>
    )
}
