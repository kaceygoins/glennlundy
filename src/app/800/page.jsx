"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

// --- DATA ---
const TEAM_DATA = [
    {
        name: "Glenn Lundy",
        title: "Founder & President",
        image: "https://imgur.com/yvGNIzM.png",
        accolades:
            "With over 25 years in the industry, Glenn is the former GM of America's second-largest dealership and a 2-time Chevrolet Dealer of the Year. He famously grew a small-town dealership by 800% in under five years.",
    },
    {
        name: "Evan Walters",
        title: "800% Elite Auto GM",
        image: "https://imgur.com/iQUdwJC.png",
        accolades:
            "A powerhouse in F&I, Evan structured and closed over 8,000 deals in just 67 months, generating $25M in backend revenue. He now directly coaches hundreds of F&I Managers, Directors, and GMs.",
    },
    {
        name: "Sam Cox",
        title: "VP of Sales",
        image: "https://imgur.com/eNFWFyv.png",
        accolades:
            "A nationally respected strategist with 20 years of experience. Sam has driven 800% sales growth at multiple dealerships and played a key role in developing over 60 industry leaders.",
    },
]

const TIER_DATA = [
    {
        id: "virtual",
        title: "Virtual<br/>Success<br/>Package",
        price: "$4,000",
        subtitle: "Start Strong • Cost-Effective • High-Impact",
        description:
            "Dealerships looking to start strong with cost-effective, high-impact virtual solutions.",
        benefit:
            "Empower your team with proven strategies and tools—from anywhere, anytime.",
        purchaseUrl: "https://join.800eliteautoclub.com/virtual-success",
        includes: [
            "Full virtual training suite for all departments",
            "Access to two annual in-person events",
            "Weekly Live Q&A for Owners",
            "Direct access to Glenn Lundy",
            "Access to the full 800% dealer network",
            "ALAINA — our Automotive Learning AI Assistant",
        ],
    },
    {
        id: "expert",
        title: "Expert<br/>Collaboration<br/>Package",
        price: "$6,000",
        subtitle: "Elevate • Expert Support • Full Team",
        description:
            "Dealerships ready to elevate their entire operation with expert support for every team member.",
        benefit: "Personalized coaching for your full team.",
        purchaseUrl: "https://join.800eliteautoclub.com/expert-collab",
        includes: [
            { text: "Everything in Tier 1, plus:", noCheckmark: true },
            "Weekly live Q&A for your entire team",
            "One-on-one coaching with our experts",
            "Personalized strategies by department",
        ],
        isPopular: true,
    },
    {
        id: "instore",
        title: "In-Store<br/>Excellence<br/>Package",
        price: "$12,000",
        subtitle: "Premium • On-Site • Full Transformation",
        description:
            "Dealerships seeking hands-on, in-person expertise to accelerate growth.",
        benefit: "On-site support for full transformation.",
        purchaseUrl: "https://join.800eliteautoclub.com/in-store-excellence",
        includes: [
            { text: "Everything in Tier 1 & Tier 2, plus:", noCheckmark: true },
            "One full day per month with an expert on-site*",
            "In-person coaching, implementation, and team alignment",
            "Limited to 10 dealerships per year",
        ],
        disclaimer: "*Travel costs are additional",
    },
]

const sponsorLogos = [
    { url: "https://i.imgur.com/EJXAQ43.jpg", alt: "DriveCentric" },
    { url: "https://i.imgur.com/LXNwgjZ.jpg", alt: "Auto Hauler Exchange" },
    { url: "https://imgur.com/6MP2T2w.jpg", alt: "FLX" },
    { url: "https://i.imgur.com/GzRtJDh.jpg", alt: "VinCue" },
    { url: "https://i.imgur.com/nis6pdr.jpg", alt: "Social Grenade" },
    { url: "https://i.imgur.com/PXXZEVA.jpg", alt: "LotPop" },
]

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
}

// --- BUTTON COMPONENT ---
const Button = ({ variant = "primary", children, onClick, href, style = {} }) => {
    const [isHovered, setIsHovered] = useState(false)

    const baseStyle = {
        padding: "18px 40px",
        borderRadius: "0",
        fontWeight: "600",
        fontSize: "0.9rem",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        transition: "all 0.3s ease",
        border: variant === "primary" ? "1px solid #7B3FBF" : "1px solid #1a1a1a",
        cursor: "pointer",
        textDecoration: "none",
        display: "inline-block",
        textAlign: "center",
        background: variant === "primary" ? "#7B3FBF" : "transparent",
        color: variant === "primary" ? "#ffffff" : "#1a1a1a",
        ...style,
    }

    const hoverStyle =
        variant === "primary"
            ? { background: "#ffffff", color: "#7B3FBF" }
            : { background: "#1a1a1a", color: "#ffffff" }

    if (href) {
        return (
            <a
                href={href}
                style={isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        )
    }

    return (
        <button
            onClick={onClick}
            style={isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    )
}

// --- TIER CARD COMPONENT ---
const TierCard = ({ tier, isExpanded, onToggleExpanded }) => {
    const [isHovered, setIsHovered] = useState(false)

    const cardStyle = {
        backgroundColor: "#ffffff",
        border: tier.isPopular ? "3px solid #7B3FBF" : "1px solid #eee",
        padding: "50px 30px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: "450px",
        transform: isHovered && !isExpanded ? "translateY(-5px)" : "none",
        boxShadow: isHovered || tier.isPopular ? "0 20px 50px rgba(0,0,0,0.08)" : "none",
        zIndex: tier.isPopular ? 2 : 1,
    }

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {tier.isPopular && (
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#7B3FBF",
                        color: "#fff",
                        padding: "8px 24px",
                        fontSize: "0.8rem",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        boxShadow: "0 4px 15px rgba(123, 63, 191, 0.4)",
                    }}
                >
                    Most Popular
                </div>
            )}

            <div style={{ textAlign: "center", marginBottom: "30px", marginTop: tier.isPopular ? "10px" : "0" }}>
                <h3
                    style={{
                        fontSize: "1.4rem",
                        fontWeight: "700",
                        marginBottom: "15px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        lineHeight: "1.3",
                        fontFamily: 'Georgia, "Times New Roman", Times, serif',
                        color: "#1a1a1a",
                    }}
                    dangerouslySetInnerHTML={{ __html: tier.title }}
                />
                <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#7B3FBF", marginBottom: "15px" }}>
                    {tier.price}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#7B3FBF", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {tier.subtitle}
                </p>
            </div>

            <p style={{ textAlign: "center", color: "#666", lineHeight: "1.6", fontSize: "0.95rem", marginBottom: "30px" }}>
                {tier.description}
            </p>

            {!isExpanded && (
                <Button variant="secondary" onClick={onToggleExpanded} style={{ marginTop: "auto", width: "100%" }}>
                    Learn More
                </Button>
            )}

            {isExpanded && (
                <div style={{ borderTop: "1px solid #eee", paddingTop: "30px", marginTop: "10px" }}>
                    <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#444", marginBottom: "30px", textAlign: "center" }}>
                        {tier.benefit}
                    </p>

                    <ul style={{ listStyle: "none", padding: 0, marginBottom: "40px" }}>
                        {tier.includes.map((item, index) => {
                            const isString = typeof item === "string"
                            const text = isString ? item : item.text
                            const noCheck = !isString && item.noCheckmark

                            return (
                                <li key={index} style={{ marginBottom: "15px", fontSize: "0.95rem", color: "#555", display: "flex", gap: "10px", lineHeight: "1.5" }}>
                                    {!noCheck && <span style={{ color: "#7B3FBF", fontWeight: "bold" }}>✓</span>}
                                    {text}
                                </li>
                            )
                        })}
                    </ul>

                    {tier.disclaimer && (
                        <p style={{ fontSize: "0.8rem", color: "#999", fontStyle: "italic", textAlign: "center", marginBottom: "20px" }}>
                            {tier.disclaimer}
                        </p>
                    )}

                    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <Button href={tier.purchaseUrl} style={{ width: "100%" }}>
                            Purchase Plan
                        </Button>
                        <Button variant="secondary" onClick={onToggleExpanded} style={{ width: "100%", border: "1px solid #ddd", color: "#666" }}>
                            Show Less
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

// --- MAIN PAGE ---
export default function ChooseYourPath() {
    const [allCardsExpanded, setAllCardsExpanded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 992)
        checkMobile()
        window.addEventListener("resize", checkMobile)

        const script = document.createElement("script")
        script.src = "https://link.msgsndr.com/js/form_embed.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            window.removeEventListener("resize", checkMobile)
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    const styles = {
        container: { width: "100%", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" },
        hero: { position: "relative", padding: "100px 40px", textAlign: "center", minHeight: "85vh", display: "flex", alignItems: "flex-end", justifyContent: "center", backgroundImage: "url('https://i.imgur.com/RTAXPkN.webp')", backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" },
        heroOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 },
        heroContent: { position: "relative", zIndex: 2, maxWidth: "1000px", color: "#fff", marginBottom: "60px" },
        heroTitle: { fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px", lineHeight: "1.1" },
        heroSubtitle: { fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: "400", color: "#e0e0e0", marginBottom: "40px", fontFamily: 'Georgia, "Times New Roman", Times, serif', fontStyle: "italic" },
        heroDesc: { fontSize: "1.1rem", lineHeight: "1.6", color: "#ccc", maxWidth: "800px", margin: "0 auto 50px" },
        section: { padding: "120px 40px", maxWidth: "1400px", margin: "0 auto" },
        sectionTitle: { fontSize: "2.5rem", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textAlign: "center", marginBottom: "80px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a" },
        sectionDescription: { fontSize: "1.1rem", color: "#666", textAlign: "center", maxWidth: "800px", margin: "0 auto 60px", lineHeight: "1.6" },
        purpleAccent: { color: "#7B3FBF", fontStyle: "italic" },
        textBlock: { fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" },
        tiersGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", padding: "40px 0" },
        videoContainer: { position: "relative", paddingBottom: "56.25%", height: 0, backgroundColor: "#f0f0f0" },
        iframe: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" },
        formWrapper: { backgroundColor: "#fff", padding: "20px", border: "1px solid #eee", borderRadius: "10px", overflow: "hidden", minHeight: "565px" },
        teamGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginTop: "60px" },
        teamMember: { textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" },
        teamImage: { width: "250px", height: "250px", objectFit: "cover", borderRadius: "50%", marginBottom: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
        teamName: { fontSize: "1.5rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        teamTitle: { fontSize: "0.9rem", color: "#7B3FBF", fontWeight: "600", textTransform: "uppercase", marginBottom: "20px", letterSpacing: "0.1em" },
        teamBio: { fontSize: "1rem", color: "#666", lineHeight: "1.6", maxWidth: "350px" },
        sponsorsGrid: { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(6, 1fr)", gap: isMobile ? "30px" : "40px", alignItems: "center", justifyItems: "center", marginTop: "60px" },
        sponsorLogo: { maxWidth: "100%", height: "auto", maxHeight: isMobile ? "40px" : "50px", objectFit: "contain", filter: "grayscale(100%) opacity(0.7)", transition: "all 0.3s ease", cursor: "pointer" },
    }

    const responsiveStyles = `
        .sponsor-logo:hover { filter: grayscale(0%) opacity(1) !important; transform: scale(1.05); }
        @media (max-width: 992px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
            .get-started-grid { grid-template-columns: 1fr !important; }
            .hero-title { font-size: 2.5rem !important; }
            .team-grid { grid-template-columns: 1fr !important; }
        }
    `

    return (
        <>
            <style>{responsiveStyles}</style>
            <div style={styles.container}>
                {/* HERO */}
                <section style={styles.hero}>
                    <div style={styles.heroOverlay}></div>
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTitle}>
                            800% Elite <br />
                            <span style={{ color: "#9B59B6", fontStyle: "normal" }}>Automotive Club</span>
                        </h1>
                        <h2 style={styles.heroSubtitle}>Your Path to 800% Growth</h2>
                        <p style={styles.heroDesc}>
                            800% Elite is the world's first Whole Dealer Solution. We combine expertise in every department, advanced technology, and real-world accountability.
                        </p>
                        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                            <Button onClick={() => scrollToSection("growth-plans")} style={{ backgroundColor: "#fff", color: "#000", border: "none" }}>
                                Explore Plans
                            </Button>
                            <Button variant="secondary" onClick={() => scrollToSection("about-800")} style={{ color: "#fff", borderColor: "#fff" }}>
                                What is 800%?
                            </Button>
                        </div>
                    </div>
                </section>

                {/* ABOUT 800% */}
                <section style={styles.section} id="about-800">
                    <h2 style={styles.sectionTitle}>
                        What Is <span style={styles.purpleAccent}>800% Elite</span>?
                    </h2>
                    <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                        <div>
                            <p style={styles.textBlock}>
                                800% Elite is the world's first Whole Dealer Solution—offering expert support for every department: Finance, Marketing, Sales, BDC, and beyond.
                            </p>
                            <p style={styles.textBlock}>
                                Our team of proven retail experts, trainers, and coaches work directly with dealer owners and general managers to provide personalized coaching, live training, and 1-on-1 consulting.
                            </p>
                            <p style={{ ...styles.textBlock, fontWeight: "700", color: "#1a1a1a" }}>
                                Our members don't just join a program, they join a movement that delivers real results.
                            </p>
                            {!isMobile && (
                                <div style={{ marginTop: "30px" }}>
                                    <Button href="/800/training">View Our Training</Button>
                                </div>
                            )}
                        </div>
                        <div style={styles.videoContainer}>
                            <iframe
                                src="https://www.youtube.com/embed/tAU7IkbHqZg?si=z_rX8TVhy3MpgiqC"
                                title="800% Elite Overview"
                                style={styles.iframe}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    {isMobile && (
                        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
                            <Button href="/800/training">View Our Training</Button>
                        </div>
                    )}
                </section>

                {/* WHO WE ARE */}
                <section style={styles.section} id="who-we-are">
                    <h2 style={styles.sectionTitle}>
                        Who We <span style={styles.purpleAccent}>Are</span>
                    </h2>
                    <div style={styles.teamGrid}>
                        {TEAM_DATA.map((member, index) => (
                            <div key={index} style={styles.teamMember}>
                                <img src={member.image} alt={member.name} style={styles.teamImage} />
                                <h3 style={styles.teamName}>{member.name}</h3>
                                <div style={styles.teamTitle}>{member.title}</div>
                                <p style={styles.teamBio}>{member.accolades}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: "60px" }}>
                        <Button variant="secondary" href="/meet-the-team">
                            Meet The Rest Of The Team
                        </Button>
                    </div>
                </section>

                {/* TRUSTED PARTNERS */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Trusted Partners</h2>
                    <p style={styles.sectionDescription}>We partner with industry leaders who value excellence and innovation.</p>
                    <div style={styles.sponsorsGrid}>
                        {sponsorLogos.map((sponsor, index) => (
                            <img key={index} src={sponsor.url} alt={sponsor.alt} style={styles.sponsorLogo} className="sponsor-logo" />
                        ))}
                    </div>
                </section>

                {/* GROWTH PLANS (TIERS) */}
                <section style={{ ...styles.section, backgroundColor: "#f9f9f9" }} id="growth-plans">
                    <h2 style={styles.sectionTitle}>
                        Choose Your <span style={styles.purpleAccent}>Path</span>
                    </h2>
                    <div style={styles.tiersGrid}>
                        {TIER_DATA.map((tier) => (
                            <TierCard key={tier.id} tier={tier} isExpanded={allCardsExpanded} onToggleExpanded={() => setAllCardsExpanded(!allCardsExpanded)} />
                        ))}
                    </div>
                </section>

                {/* GET STARTED (FORM) */}
                <section style={styles.section} id="get-started-today">
                    <h2 style={styles.sectionTitle}>
                        Get Started <span style={styles.purpleAccent}>Today</span>
                    </h2>
                    <div className="get-started-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
                        <div>
                            <p style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "30px", fontFamily: "Georgia, serif" }}>
                                Ready to transform your dealership?
                            </p>
                            <p style={styles.textBlock}>
                                Fill out the form to learn more about our programs. Our team will review your information and reach out to discuss which growth plan is the perfect fit.
                            </p>
                            <p style={{ ...styles.textBlock, color: "#7B3FBF", fontStyle: "italic", borderLeft: "2px solid #7B3FBF", paddingLeft: "20px" }}>
                                Not sure which package is right for you? Don't worry, we can help you decide on the call.
                            </p>
                        </div>
                        <div style={styles.formWrapper}>
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/form/cXQ37wnQ131Cb8wBpTzJ"
                                style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }}
                                id="inline-cXQ37wnQ131Cb8wBpTzJ"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Free General Event Form "
                                data-height="565"
                                data-layout-iframe-id="inline-cXQ37wnQ131Cb8wBpTzJ"
                                data-form-id="cXQ37wnQ131Cb8wBpTzJ"
                                title="Free General Event Form "
                            />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
