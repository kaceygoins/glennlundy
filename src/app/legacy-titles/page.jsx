"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

const principles = [
    { number: "01", title: "The Morning 5", description: "Start your day early with purpose to set yourself up for success." },
    { number: "02", title: "Focus on Your Goals", description: "Stay true to your own business path and don't be sidetracked by others." },
    { number: "03", title: "Promote from Within", description: "Recognize and elevate the talent already within your organization." },
    { number: "04", title: "The 8-5-3-1 Formula", description: "Optimize leads and maximize sales through a structured approach." },
    { number: "05", title: "Make People Feel Special", description: "Foster personal connections by valuing each individual uniquely." },
    { number: "06", title: "Build a Family", description: "Create a supportive environment where everyone feels valued." },
    { number: "07", title: "Be A Servant Leader", description: "Lead by example and prioritize the needs of your team." },
    { number: "08", title: "Attitude of Gratitude", description: "Cultivate thankfulness in both business and life." },
    { number: "09", title: "Character, Not Credentials", description: "Focus on integrity and character over resumes." },
    { number: "10", title: "Read Together", description: "Encourage team learning to foster growth and unity." },
    { number: "11", title: "Walk the Walk", description: "Live out your promises and values in tangible ways." },
    { number: "12", title: "Don't Forget Life Skills", description: "Develop your team's life skills for holistic growth." },
]

export default function LegacyTitlesPage() {
    const [hoveredButton, setHoveredButton] = useState(null)
    const [hoveredCard, setHoveredCard] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const styles = {
        container: { width: "100%", minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", overflowX: "hidden" },
        hero: { padding: isMobile ? "80px 20px" : "120px 40px", maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "60px", alignItems: "center", minHeight: "80vh" },
        heroContent: { textAlign: isMobile ? "center" : "left" },
        heroTitle: { fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', lineHeight: "1.1", marginBottom: "30px", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#1a1a1a" },
        heroSubtitle: { fontSize: "1.2rem", fontWeight: "700", color: "#9B59B6", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em" },
        heroDescription: { fontSize: "1.2rem", lineHeight: "1.7", color: "#666", marginBottom: "50px" },
        heroImageContainer: { display: "flex", justifyContent: "center", alignItems: "center" },
        heroImage: { width: "100%", maxWidth: "450px", height: "auto", transition: "transform 0.3s ease", boxShadow: "0 30px 60px rgba(0,0,0,0.15)" },
        section: { padding: "80px 24px", maxWidth: "1400px", margin: "0 auto" },
        sectionTitle: { fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textAlign: "center", marginBottom: "50px", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#1a1a1a" },
        principlesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", marginTop: "40px" },
        principleCard: { backgroundColor: "#ffffff", border: "1px solid #eee", borderRadius: "0", padding: "40px", textAlign: "center", transition: "all 0.3s ease", cursor: "pointer", minHeight: "250px", display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" },
        principleCardHover: { transform: "translateY(-5px)", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", borderColor: "transparent" },
        principleNumber: { fontSize: "2.5rem", fontWeight: "700", color: "#7B3FBF", marginBottom: "15px", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        principleTitle: { fontSize: "1.1rem", fontWeight: "700", marginBottom: "15px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a" },
        principleDescription: { color: "#666", fontSize: "0.95rem", lineHeight: "1.6" },
        storySection: { padding: "100px 24px", maxWidth: "100%", backgroundColor: "#f9f9f9", textAlign: "center" },
        storyContent: { maxWidth: "1000px", margin: "0 auto" },
        storyText: { fontSize: "1.2rem", lineHeight: "1.8", color: "#444", marginBottom: "30px", textAlign: "left" },
        ctaSection: { padding: "100px 24px", maxWidth: "100%", margin: "0 auto", textAlign: "center", backgroundColor: "#111", color: "#fff" },
        ctaTitle: { fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', marginBottom: "30px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#fff" },
        ctaDescription: { fontSize: "1.2rem", lineHeight: "1.6", color: "#999", marginBottom: "50px", maxWidth: "800px", margin: "0 auto 50px" },
        ctaButton: { display: "inline-block", padding: "18px 40px", backgroundColor: "#7B3FBF", color: "#ffffff", borderRadius: "0", textDecoration: "none", fontWeight: "700", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.15em", transition: "all 0.3s ease", border: "1px solid #7B3FBF", cursor: "pointer", margin: "10px" },
    }

    return (
        <>
            <style>{`
                @media (max-width: 768px) {
                    .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center !important; }
                    .hero-content { text-align: center !important; }
                    .cta-buttons { flex-direction: column !important; align-items: center !important; }
                    .story-text { text-align: center !important; }
                }
            `}</style>
            <div style={styles.container}>
                <section style={styles.hero} className="hero-grid">
                    <div style={styles.heroContent} className="hero-content">
                        <h2 style={styles.heroSubtitle}>Glenn Lundy Presents</h2>
                        <h1 style={styles.heroTitle}>The <span style={{ color: "#9B59B6" }}>Legacy</span> Titles</h1>
                        <p style={styles.heroDescription}>12 Proven Principles to Scale Your Business 800%. A powerful parable that will transform how you think about leadership, growth, and leaving a lasting impact.</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: isMobile ? "center" : "flex-start" }} className="cta-buttons">
                            <a href="https://shop.ingramspark.com/b/084?CJZZLYLMctPiIAnJVyy9SRLqiOvISedxmOwIEZX0R7O" target="_blank" rel="noopener noreferrer" style={{ ...styles.ctaButton, backgroundColor: hoveredButton === "buy" ? "#9B59B6" : "#7B3FBF", transform: hoveredButton === "buy" ? "translateY(-2px)" : "translateY(0)" }} onMouseEnter={() => setHoveredButton("buy")} onMouseLeave={() => setHoveredButton(null)}>Buy Book</a>
                            <a href="https://www.audible.com/pd/The-Legacy-Titles-Audiobook/B0CVR1XZ37" target="_blank" rel="noopener noreferrer" style={{ ...styles.ctaButton, backgroundColor: "transparent", border: "1px solid #7B3FBF", color: "#7B3FBF", transform: hoveredButton === "audiobook" ? "translateY(-2px)" : "translateY(0)" }} onMouseEnter={() => setHoveredButton("audiobook")} onMouseLeave={() => setHoveredButton(null)}>Buy Audiobook</a>
                        </div>
                    </div>
                    <div style={styles.heroImageContainer}>
                        <img src="https://i.imgur.com/A9Z5hoh.webp" alt="The Legacy Titles Book Cover" style={{ ...styles.heroImage, transform: hoveredCard === "book" ? "scale(1.05)" : "scale(1)" }} onMouseEnter={() => setHoveredCard("book")} onMouseLeave={() => setHoveredCard(null)} />
                    </div>
                </section>

                <section style={styles.storySection}>
                    <div style={styles.storyContent}>
                        <h2 style={styles.sectionTitle}>About The <span style={{ color: "#9B59B6" }}>Book</span></h2>
                        <p style={styles.storyText}>"The Legacy Titles" is a transformative guide designed to inspire and equip leaders in the automotive industry and beyond. This book presents twelve core principles that drive personal and professional growth, emphasizing the importance of early rising, setting personal business goals, and fostering a supportive team environment. With a focus on servant leadership, gratitude, and character over credentials, "The Legacy Titles" encourages readers to build meaningful connections and cultivate a culture of continuous learning and life skill development.</p>
                    </div>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>The 12 <span style={{ color: "#9B59B6" }}>Principles</span></h2>
                    <div style={styles.principlesGrid}>
                        {principles.map((principle, index) => (
                            <div key={index} style={{ ...styles.principleCard, ...(hoveredCard === `principle-${index}` ? styles.principleCardHover : {}) }} onMouseEnter={() => setHoveredCard(`principle-${index}`)} onMouseLeave={() => setHoveredCard(null)}>
                                <div style={styles.principleNumber}>{principle.number}</div>
                                <h3 style={styles.principleTitle}>{principle.title}</h3>
                                <p style={styles.principleDescription}>{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div style={styles.ctaSection}>
                    <h2 style={styles.ctaTitle}>Unlock Your <span style={{ color: "#9B59B6" }}>Legacy</span></h2>
                    <p style={styles.ctaDescription}>Your legacy isn't built in a day, but it starts with a single decision. The decision to think bigger, lead better, and create something that matters.</p>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }} className="cta-buttons">
                        <a href="https://shop.ingramspark.com/b/084?CJZZLYLMctPiIAnJVyy9SRLqiOvISedxmOwIEZX0R7O" target="_blank" rel="noopener noreferrer" style={{ ...styles.ctaButton, backgroundColor: "#fff", color: "#000", border: "1px solid #fff" }} onMouseEnter={(e) => { e.target.style.backgroundColor = "#9B59B6"; e.target.style.color = "#fff"; e.target.style.borderColor = "#9B59B6" }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#fff"; e.target.style.color = "#000"; e.target.style.borderColor = "#fff" }}>Buy Book</a>
                        <a href="https://www.audible.com/pd/The-Legacy-Titles-Audiobook/B0CVR1XZ37" target="_blank" rel="noopener noreferrer" style={{ ...styles.ctaButton, backgroundColor: "transparent", color: "#fff", border: "1px solid #fff" }} onMouseEnter={(e) => { e.target.style.backgroundColor = "#fff"; e.target.style.color = "#000" }} onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#fff" }}>Buy Audiobook</a>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}
