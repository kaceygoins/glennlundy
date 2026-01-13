"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

const quotes = [
    "You woke up today. That means you still have purpose.",
    "Don't let one detour distract you from your destination.",
    "You've made it through 100% of your worst days—today's no different.",
    "The mission doesn't stop just because it gets hard.",
    "God didn't bring you this far to only bring you this far.",
    "Comfort zones are beautiful places—where nothing ever grows.",
    "Messed up? Good. That means you're moving.",
    "You were born to lead, not to linger in doubt.",
    "The comeback is always stronger than the setback.",
    "If you're breathing, you're still building.",
    "Progress > Perfection. Every time.",
    "You don't need a new path—you need new belief.",
    "You can't outrun your calling. It's already in you.",
    "Leadership isn't a title. It's an example.",
    "Today's challenge is tomorrow's testimony.",
    "Don't confuse delay with denial. Keep pushing.",
    "Grind with grace. Hustle with heart.",
    "Stop waiting for the green light—you are the signal.",
    "Rise. Respond. Repeat.",
    "Every storm has an expiration date.",
    "Discipline doesn't feel good—but regret never does.",
    "You're not here to blend in—you're here to break through.",
    "You're not stuck. You're being shaped.",
    "There's gold in the grind. Keep digging.",
    "Don't quit in the valley. The mountaintop is waiting.",
    "Who you become matters more than what you achieve.",
    "Show up. Speak life. Serve others. Repeat.",
    "Faith moves mountains—but you still have to climb.",
    "Growth isn't a feeling. It's a choice.",
    "Run your race like souls depend on it—because they do.",
    "Nothing worth building comes without resistance.",
    "Start where you are. Use what you have. Trust who you serve.",
    "Elevation requires separation. Don't fear the quiet.",
    "Every morning is a new invitation to lead with purpose.",
    "Your story isn't over. It's just getting good.",
    "Stop scrolling. Start becoming.",
    "Life doesn't happen to you—it happens for you.",
    "What you feed will grow. Starve the doubt. Fuel the dream.",
    "Don't chase success. Become it.",
    "You were created by greatness—for greatness.",
    "Someone's waiting on the version of you that doesn't quit.",
    "Your ceiling is someone else's floor. Build high.",
    "Keep the vision. Trust the process.",
    "Lead your life—before someone else does.",
    "You can have excuses or results. Never both.",
    "Action breeds clarity. Take the next step.",
    "Today is a gift. Use it like one.",
    "The world needs your light. Don't dim it for anyone.",
    "Ordinary won't take you to extraordinary.",
    "You don't need a perfect plan. You need a committed heart.",
]

export default function NotFound() {
    const [hoveredButton, setHoveredButton] = useState(null)
    const [currentQuote, setCurrentQuote] = useState("")

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setCurrentQuote(quotes[randomIndex])
    }, [])

    const styles = {
        container: { width: "100%", minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", overflowX: "hidden" },
        hero: { position: "relative", padding: "100px 24px 80px", textAlign: "center", minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff" },
        heroContent: { maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 2 },
        errorCode: { fontSize: "clamp(8rem, 15vw, 15rem)", fontWeight: "700", lineHeight: "1", marginBottom: "20px", fontFamily: 'Georgia, "Times New Roman", Times, serif', color: "#e0e0e0", letterSpacing: "-0.05em" },
        errorTitle: { fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "700", lineHeight: "1.3", marginBottom: "20px", fontFamily: 'Georgia, "Times New Roman", Times, serif', color: "#1a1a1a", maxWidth: "800px", margin: "0 auto 30px" },
        quoteContainer: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "50px", padding: "0 20px", maxWidth: "900px", margin: "0 auto 50px" },
        quote: { fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontStyle: "italic", fontWeight: "400", lineHeight: "1.5", color: "#555", fontFamily: 'Georgia, "Times New Roman", Times, serif', textAlign: "center" },
        ctaButtonContainer: { display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flexWrap: "wrap" },
        ctaButton: { display: "inline-block", padding: "18px 40px", backgroundColor: "#1a1a1a", color: "#ffffff", borderRadius: "0", textDecoration: "none", fontWeight: "600", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.3s ease", border: "1px solid #1a1a1a", cursor: "pointer" },
        ctaButtonSecondary: { display: "inline-block", padding: "18px 40px", backgroundColor: "transparent", color: "#1a1a1a", borderRadius: "0", textDecoration: "none", fontWeight: "600", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.3s ease", border: "1px solid #1a1a1a", cursor: "pointer" },
    }

    const buttonHoverStyle = { backgroundColor: "#ffffff", color: "#1a1a1a" }
    const secondaryButtonHoverStyle = { backgroundColor: "#1a1a1a", color: "#ffffff" }

    return (
        <div style={styles.container}>
            <section style={styles.hero}>
                <div style={styles.heroContent}>
                    <div style={styles.errorCode}>404</div>
                    <h1 style={styles.errorTitle}>
                        We couldn't find that page.
                        <br />
                        <span style={{ fontSize: "0.6em", fontWeight: "400", color: "#999", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "15px", display: "block" }}>But while you're here...</span>
                    </h1>

                    <div style={styles.quoteContainer}>
                        <p style={styles.quote}>"{currentQuote}"</p>
                    </div>

                    <div style={styles.ctaButtonContainer}>
                        <a href="/" style={hoveredButton === "home" ? { ...styles.ctaButton, ...buttonHoverStyle } : styles.ctaButton} onMouseEnter={() => setHoveredButton("home")} onMouseLeave={() => setHoveredButton(null)}>Return Home</a>
                        <a href="/800" style={hoveredButton === "path" ? { ...styles.ctaButtonSecondary, ...secondaryButtonHoverStyle } : styles.ctaButtonSecondary} onMouseEnter={() => setHoveredButton("path")} onMouseLeave={() => setHoveredButton(null)}>Explore 800%</a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
