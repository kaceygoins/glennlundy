"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

// --- MAIN PAGE ---
export default function Morning5Page() {
    const [hoveredButton, setHoveredButton] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [iframeHeight, setIframeHeight] = useState("2000px")
    const [showDigitalSpecs, setShowDigitalSpecs] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        const handleIframeMessage = (event) => {
            if (
                event.origin.includes("leadconnectorhq.com") &&
                event.data.height
            ) {
                setIframeHeight(`${event.data.height + 100}px`)
            }
        }

        window.addEventListener("message", handleIframeMessage)
        window.addEventListener("resize", checkMobile)
        checkMobile()

        const script = document.createElement("script")
        script.src = "https://link.msgsndr.com/js/form_embed.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            window.removeEventListener("resize", checkMobile)
            window.removeEventListener("message", handleIframeMessage)
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    const scrollToOrderForm = () => {
        const orderSection = document.getElementById("order-form-section")
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    const toggleDigitalSpecs = () => {
        setShowDigitalSpecs(!showDigitalSpecs)
    }

    // MANTRAS - REORDERED as requested
    const mantras = [
        {
            number: "1",
            title: "No Snooze Button",
            description:
                "Wake up immediately when your alarm goes off to maintain consistent energy levels.",
        },
        {
            number: "2",
            title: "No Phone First Thing",
            description:
                "Start your day without distractions by avoiding your phone first thing in the morning.",
        },
        {
            number: "3",
            title: "Physical Activity",
            description:
                "Engage in exercise or movement to boost your energy and positive mindset.",
        },
        {
            number: "4",
            title: "Gratitude & Goals",
            description:
                "Write down 10 things you're grateful for and set 5-10 goals for the day.",
        },
        {
            number: "5",
            title: "Encouraging Message",
            description:
                "Send a motivational message to someone to start your day with connection.",
        },
    ]

    const testimonials = [
        {
            quote: "I love the five rules about not snoozing and exercising in the morning. This planner is a reminder for me to do it every day. It helps me plan my life better.",
            author: "Jessica M., Daily User",
            rating: 5,
        },
        {
            quote: "This planner forces you to take a breather, reflect, and ask yourself 'what is my why' and 'where am I heading?' It stops you and puts you in a deep check with yourself.",
            author: "David R., Business Owner",
            rating: 5,
        },
        {
            quote: "I was going through a divorce and was in depression, not getting up early or doing the morning things. Once I got into a routine, I pulled myself out of depression and even opened my own audiology practice.",
            author: "Dr. Sarah P., Audiologist",
            rating: 5,
        },
    ]

    const styles = {
        container: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#ffffff", // CLEAN WHITE
            color: "#1a1a1a", // DARK TEXT
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "16px",
        },
        hero: {
            position: "relative",
            padding: "120px 24px 80px",
            textAlign: "center",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9f9f9", // Subtle grey background for Hero
        },
        heroContent: {
            maxWidth: "1000px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
        },
        heroTitle: {
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            lineHeight: "1.1",
            marginBottom: "24px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        heroSubtext: {
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            fontWeight: "400",
            lineHeight: "1.6",
            marginBottom: "48px",
            color: "#555",
            maxWidth: "800px",
            margin: "0 auto 48px",
        },
        ctaButton: {
            display: "inline-block",
            padding: "20px 48px",
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            borderRadius: "0", // Boxy for quiet luxury
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            transition: "all 0.3s ease",
            border: "1px solid #1a1a1a",
            cursor: "pointer",
        },
        ctaButtonHover: {
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
        },
        // MANTRA SECTION
        section: {
            padding: "100px 24px",
            maxWidth: "1400px",
            margin: "0 auto",
        },
        sectionTitle: {
            fontSize: "2.5rem",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            textAlign: "center",
            marginBottom: "60px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        aboutText: {
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "60px",
            maxWidth: "900px",
            margin: "0 auto 60px",
            textAlign: "center",
        },
        mantrasGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2px", // Tight gap for grid lines
            backgroundColor: "#eee", // Grid line color
            border: "1px solid #eee",
        },
        mantraCard: {
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "background-color 0.3s ease",
        },
        mantraNumber: {
            fontSize: "3rem",
            fontWeight: "700",
            color: "#7B3FBF",
            marginBottom: "15px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
        },
        mantraTitle: {
            fontSize: "0.9rem",
            fontWeight: "700",
            marginBottom: "15px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            minHeight: "40px",
            display: "flex",
            alignItems: "center",
            color: "#1a1a1a",
        },
        mantraDescription: {
            color: "#666",
            fontSize: "0.95rem",
            lineHeight: "1.6",
        },
        // FEATURE LIST
        featureSection: {
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "80px",
            alignItems: "center",
            padding: "100px 24px",
            maxWidth: "1400px",
            margin: "0 auto",
            backgroundColor: "#fff",
        },
        featureImage: {
            width: "100%",
            display: "block",
        },
        featureList: {
            listStyle: "none",
            padding: 0,
        },
        featureItem: {
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "25px",
            paddingLeft: "30px",
            position: "relative",
        },
        featureCheck: {
            position: "absolute",
            left: "0",
            top: "0",
            color: "#7B3FBF",
            fontWeight: "bold",
            fontSize: "1.2rem",
        },
        // INSIDE LOOK
        insideSection: {
            padding: "100px 24px",
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "#f9f9f9", // Light grey break
        },
        insideContent: {
            marginBottom: "60px",
        },
        insideTitle: {
            fontSize: "1.8rem",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        insideText: {
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#666",
            maxWidth: "700px",
            margin: "0 auto",
        },
        insideImageContainer: {
            margin: "40px 0 80px",
        },
        insideImage: {
            maxWidth: "100%",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        },
        // DIGITAL PLANNER
        digitalPlannerSection: {
            padding: "100px 24px",
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
        },
        digitalPlannerContent: {
            order: 2,
        },
        digitalPlannerImage: {
            order: 1,
            width: "100%",
        },
        digitalPlannerTitle: {
            fontSize: "2.5rem",
            fontWeight: "700",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            marginBottom: "30px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
        },
        digitalPlannerDescription: {
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "30px",
        },
        specsLink: {
            color: "#7B3FBF",
            textDecoration: "none",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "30px",
            display: "inline-block",
            borderBottom: "1px solid #7B3FBF",
            paddingBottom: "4px",
        },
        specsContent: {
            backgroundColor: "#f5f5f5",
            padding: "30px",
            borderLeft: "2px solid #7B3FBF",
            fontSize: "0.95rem",
            lineHeight: "1.7",
            color: "#555",
            marginBottom: "30px",
        },
        specsList: {
            paddingLeft: "20px",
            marginTop: "16px",
            marginBottom: "16px",
        },
        // TESTIMONIALS
        testimonialSection: {
            padding: "100px 24px",
            backgroundColor: "#fff",
        },
        testimonialGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            maxWidth: "1400px",
            margin: "0 auto",
        },
        testimonialCard: {
            padding: "40px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #eee",
        },
        testimonialQuote: {
            fontSize: "1.1rem",
            fontStyle: "italic",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "20px",
        },
        testimonialRating: {
            color: "#7B3FBF",
            fontSize: "1.2rem",
            marginBottom: "15px",
        },
        testimonialAuthor: {
            fontSize: "0.9rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#1a1a1a",
        },
        // ORDER SECTION
        orderSection: {
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 24px",
        },
        purpleAccent: {
            color: "#7B3FBF",
            fontStyle: "italic",
        },
    }

    const responsiveStyles = `
        @media (max-width: 992px) {
            .feature-section, .digital-planner-section {
                grid-template-columns: 1fr !important;
                text-align: center;
            }
            .digital-planner-content { order: 1; }
            .digital-planner-image { order: 2; margin-top: 40px; }
            .feature-list { text-align: left; display: inline-block; }
        }
    `

    return (
        <>
            <style>{responsiveStyles}</style>
            <div style={styles.container}>
                {/* HERO */}
                <section style={styles.hero}>
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTitle}>
                            The 2026{" "}
                            <span style={styles.purpleAccent}>Morning 5</span>{" "}
                            Planner
                        </h1>
                        <p style={styles.heroSubtext}>
                            Your daily system for clarity, energy, and
                            unstoppable momentum. A powerful year starts with a
                            powerful morning. This is more than a planner. It is
                            a movement.
                        </p>
                        <button
                            onClick={scrollToOrderForm}
                            style={{
                                ...styles.ctaButton,
                                ...(hoveredButton === "hero"
                                    ? styles.ctaButtonHover
                                    : {}),
                            }}
                            onMouseEnter={() => setHoveredButton("hero")}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            Order Your Planner
                        </button>
                    </div>
                </section>

                {/* THE SYSTEM (MANTRAS) - REORDERED */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        The <span style={styles.purpleAccent}>System</span>
                    </h2>
                    <p style={styles.aboutText}>
                        The Morning 5 is a transformational daily routine
                        designed to spark lasting change from the inside out.
                        Through five simple, powerful habits, thousands have
                        unlocked the secret to energizing their mornings.
                    </p>
                    <div style={styles.mantrasGrid}>
                        {mantras.map((mantra, index) => (
                            <div key={index} style={styles.mantraCard}>
                                <div style={styles.mantraNumber}>
                                    {mantra.number}
                                </div>
                                <h3 style={styles.mantraTitle}>
                                    {mantra.title}
                                </h3>
                                <p style={styles.mantraDescription}>
                                    {mantra.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FEATURES */}
                <section
                    style={styles.featureSection}
                    className="feature-section"
                >
                    <div className="feature-image">
                        <img
                            src="https://imgur.com/FuZC7Nn.png"
                            alt="Morning 5 Planner"
                            style={styles.featureImage}
                        />
                    </div>
                    <div>
                        <h2
                            style={{
                                ...styles.sectionTitle,
                                textAlign: "left",
                                marginBottom: "40px",
                            }}
                        >
                            The Ultimate{" "}
                            <span style={styles.purpleAccent}>Tool</span>
                        </h2>
                        <ul style={styles.featureList} className="feature-list">
                            <li style={styles.featureItem}>
                                <span style={styles.featureCheck}>✓</span> Start
                                each day with clarity and focus using daily
                                reflection pages.
                            </li>
                            <li style={styles.featureItem}>
                                <span style={styles.featureCheck}>✓</span> Build
                                unstoppable momentum with a built-in
                                goal-setting and tracking system.
                            </li>
                            <li style={styles.featureItem}>
                                <span style={styles.featureCheck}>✓</span> Stay
                                on track with structured weekly planning and
                                review sections.
                            </li>
                            <li style={styles.featureItem}>
                                <span style={styles.featureCheck}>✓</span> Fuel
                                your drive with motivational quotes and insights
                                from Glenn Lundy.
                            </li>
                            <li style={styles.featureItem}>
                                <span style={styles.featureCheck}>✓</span> Enjoy
                                a premium experience with high-quality design
                                and materials.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* INSIDE LOOK */}
                <section style={styles.insideSection}>
                    <h2 style={styles.sectionTitle}>
                        Take A Look{" "}
                        <span style={styles.purpleAccent}>Inside</span>
                    </h2>

                    <div style={styles.insideContent}>
                        <h3 style={styles.insideTitle}>
                            Your Month At a Glance
                        </h3>
                        <p style={styles.insideText}>
                            Each month begins with a full calendar view, giving
                            you a high-level strategic overview of the weeks
                            ahead. Map out your key appointments, deadlines, and
                            priorities with ample space to write, plan, and
                            prepare to conquer your goals.
                        </p>
                        <div style={styles.insideImageContainer}>
                            <img
                                src="https://imgur.com/t8IdTKh.png"
                                alt="Monthly Calendar View"
                                style={styles.insideImage}
                            />
                        </div>
                    </div>

                    <div style={styles.insideContent}>
                        <h3 style={styles.insideTitle}>
                            Daily Execution Pages
                        </h3>
                        <p style={styles.insideText}>
                            Go beyond the calendar with structured daily pages
                            (Mon-Fri) designed for action. Crush your Morning 5
                            checklist, lock in your top goals, practice
                            gratitude, and manage your schedule all on one
                            powerful page built for winning the day.
                        </p>
                        <div style={styles.insideImageContainer}>
                            <img
                                src="https://imgur.com/mGVCUXo.png"
                                alt="Daily Planner Page"
                                style={styles.insideImage}
                            />
                        </div>
                    </div>
                </section>

                {/* DIGITAL PLANNER - RESTORED CONTENT */}
                <section
                    style={styles.digitalPlannerSection}
                    className="digital-planner-section"
                >
                    <div
                        style={styles.digitalPlannerImage}
                        className="digital-planner-image"
                    >
                        <img
                            src="https://imgur.com/Aj0ntJo.png"
                            alt="Digital Planner on Tablet"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div
                        style={styles.digitalPlannerContent}
                        className="digital-planner-content"
                    >
                        <h2 style={styles.digitalPlannerTitle}>
                            Now Available in{" "}
                            <span style={styles.purpleAccent}>Digital</span>!
                        </h2>
                        <p style={styles.digitalPlannerDescription}>
                            Take the Morning 5 Planner with you anywhere. Our
                            new digital version is a tablet-optimized PDF that
                            you can download and write on directly with your
                            favorite note-taking app like GoodNotes or
                            Notability.
                        </p>

                        <div
                            onClick={toggleDigitalSpecs}
                            style={styles.specsLink}
                        >
                            See digital planner specifications{" "}
                            {showDigitalSpecs ? "▲" : "▼"}
                        </div>

                        {showDigitalSpecs && (
                            <div style={styles.specsContent}>
                                <p>
                                    The Digital Morning Five Planner is designed
                                    specifically for tablet devices that support
                                    PDF file import and stylus annotation. For
                                    the best experience, please use this planner
                                    on a tablet such as an iPad, Samsung Galaxy
                                    Tab, Microsoft Surface, or any other device
                                    with a stylus and PDF annotation
                                    capabilities.
                                </p>
                                <p
                                    style={{
                                        fontWeight: "bold",
                                        marginTop: "16px",
                                    }}
                                >
                                    Important:
                                </p>
                                <ul style={styles.specsList}>
                                    <li>
                                        This planner is not optimized for
                                        smartphones (including iPhones and
                                        Android phones) or e-readers without
                                        full PDF annotation support.
                                    </li>
                                    <li>
                                        For full functionality, you will need to
                                        use a compatible app such as GoodNotes,
                                        Notability, OneNote, or other PDF
                                        annotation apps available on tablets.
                                    </li>
                                    <li>
                                        Devices that cannot import and annotate
                                        PDFs with a stylus (like Kindle Fire
                                        tablets without specific annotation
                                        apps) will not provide a good user
                                        experience.
                                    </li>
                                </ul>
                                <p>
                                    Please ensure your device supports PDF
                                    annotation with a stylus before purchase to
                                    enjoy the planner as intended.
                                </p>
                            </div>
                        )}

                        <button
                            onClick={scrollToOrderForm}
                            style={{
                                ...styles.ctaButton,
                                ...(hoveredButton === "digital"
                                    ? styles.ctaButtonHover
                                    : {}),
                            }}
                            onMouseEnter={() => setHoveredButton("digital")}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            Get The Digital Edition
                        </button>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section style={styles.testimonialSection}>
                    <h2 style={styles.sectionTitle}>Results</h2>
                    <div style={styles.testimonialGrid}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} style={styles.testimonialCard}>
                                <div style={styles.testimonialRating}>
                                    {"★".repeat(testimonial.rating)}
                                </div>
                                <p style={styles.testimonialQuote}>
                                    "{testimonial.quote}"
                                </p>
                                <p style={styles.testimonialAuthor}>
                                    – {testimonial.author}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ORDER FORM */}
                <main style={styles.orderSection} id="order-form-section">
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h2 style={styles.sectionTitle}>
                            Secure Your{" "}
                            <span style={styles.purpleAccent}>Planner</span>
                        </h2>
                        <p style={styles.aboutText}>
                            Your transformation starts now. Fill out the form
                            below.
                        </p>
                    </div>
                    <div style={{ minHeight: iframeHeight }}>
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/form/HPrabmyqRcP6SVFhVxLg"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: iframeHeight,
                                border: "none",
                                display: "block",
                            }}
                            id="inline-HPrabmyqRcP6SVFhVxLg"
                            title="Purchase Order"
                            scrolling="no"
                        ></iframe>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}
