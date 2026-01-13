"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

const teamMembers = [
    { name: "Glenn Lundy", role: "Owner & President", image: "https://i.imgur.com/yvGNIzM.png", email: "glenn@glennlundy.com", description: "Visionary leader, motivator, and architect of 800% growth." },
    { name: "Evan Walters", role: "General Manager", image: "https://i.imgur.com/iQUdwJC.png", email: "evan@glennlundy.com", description: "Strategy expert dedicated to operational excellence." },
    { name: "Jessica Bailey", role: "Director of Operations", image: "https://i.imgur.com/di65ruu.png", email: "jessica@glennlundy.com", description: "Master of logistics and the engine behind seamless execution." },
    { name: "Brandon Randolph", role: "Chief Production Officer", image: "https://i.imgur.com/jk4NBkP.png", email: "brandon@glennlundy.com", description: "Creative powerhouse leading all things production and media." },
    { name: "Sam Cox", role: "VP of Sales", image: "https://i.imgur.com/eNFWFyv.png", email: "sam@glennlundy.com", description: "Relationship builder who drives results with heart and hustle." },
    { name: "Kacey Goins", role: "VP of Marketing", image: "https://i.imgur.com/6cRoRUD.png", email: "kacey@glennlundy.com", description: "Brand storyteller amplifying our message to the world." },
    { name: "Nick Gillis", role: "Lead Architect", image: "https://i.imgur.com/EeAbxqg.png", email: "nick@glennlundy.com", description: "Tech innovator, builder, and systems mastermind." },
    { name: "James Brady", role: "Project and Content Manager", image: "https://i.imgur.com/WMdsx0u.png", email: "james@glennlundy.com", description: "Organizational glue and creative content curator." },
]

export default function MeetTheTeam() {
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
        container: { width: "100%", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", overflowX: "hidden" },
        hero: { position: "relative", width: "100%", minHeight: "100vh", backgroundImage: "url('https://i.imgur.com/RT7hy5J.jpg')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "flex-end", padding: "0 0 100px 0" },
        heroOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 },
        heroContent: { position: "relative", zIndex: 2, width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 40px", color: "#ffffff" },
        heroTitle: { fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: "1.1", marginBottom: "24px" },
        heroSubtext: { fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: "400", lineHeight: "1.6", marginBottom: "48px", color: "#f0f0f0", maxWidth: "800px", fontFamily: 'Georgia, "Times New Roman", Times, serif', fontStyle: "italic" },
        heroButtons: { display: "flex", gap: "20px", flexWrap: "wrap" },
        ctaButton: { display: "inline-block", padding: "18px 40px", backgroundColor: "#7B3FBF", color: "#ffffff", borderRadius: "0", textDecoration: "none", fontWeight: "600", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", border: "none", cursor: "pointer", transition: "all 0.3s ease" },
        ctaButtonSecondary: { display: "inline-block", padding: "18px 40px", backgroundColor: "transparent", color: "#ffffff", borderRadius: "0", textDecoration: "none", fontWeight: "600", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", border: "1px solid #ffffff", cursor: "pointer", transition: "all 0.3s ease" },
        section: { padding: "120px 40px", maxWidth: "1400px", margin: "0 auto" },
        sectionTitle: { fontSize: "2.5rem", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", color: "#1a1a1a", textAlign: "center", marginBottom: "60px" },
        purpleAccent: { color: "#7B3FBF", fontStyle: "italic" },
        storySection: { padding: "100px 40px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" },
        storyText: { fontSize: "1.1rem", lineHeight: "1.8", color: "#444", marginBottom: "30px", textAlign: "justify" },
        teamGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px", backgroundColor: "#eee", border: "1px solid #eee" },
        teamCard: { backgroundColor: "#ffffff", padding: "40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", transition: "all 0.3s ease", cursor: "pointer" },
        teamImage: { width: "150px", height: "150px", borderRadius: "0", objectFit: "cover", marginBottom: "24px" },
        teamName: { fontSize: "1.3rem", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', color: "#1a1a1a", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" },
        teamRole: { color: "#7B3FBF", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", marginBottom: "16px", letterSpacing: "0.1em" },
        teamDescription: { color: "#666", fontSize: "0.95rem", lineHeight: "1.6", fontStyle: "italic", marginBottom: "24px" },
        sendMessageBtn: { padding: "10px 20px", border: "1px solid #1a1a1a", backgroundColor: "transparent", color: "#1a1a1a", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", fontWeight: "600", transition: "all 0.3s ease", marginTop: "auto" },
        valuesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" },
        valueCard: { backgroundColor: "#f9f9f9", padding: "40px", textAlign: "center", border: "1px solid #eee", borderRadius: "0" },
        valueTitle: { fontSize: "1.1rem", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", marginBottom: "15px", letterSpacing: "0.05em", color: "#1a1a1a" },
        valueDescription: { color: "#666", fontSize: "0.95rem", lineHeight: "1.6" },
        ctaSection: { padding: "120px 40px", backgroundColor: "#111", color: "#fff", textAlign: "center" },
    }

    return (
        <>
            <div style={styles.container}>
                <section style={styles.hero}>
                    <div style={styles.heroOverlay}></div>
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTitle}>Meet The <span style={styles.purpleAccent}>Team</span></h1>
                        <p style={styles.heroSubtext}>Discover the dynamic team behind 800% Elite Auto. Passion meets purpose to drive unparalleled growth.</p>
                        <div style={styles.heroButtons}><a href="#our-story" style={styles.ctaButton}>Our Story</a><a href="#our-values" style={styles.ctaButtonSecondary}>Our Values</a></div>
                    </div>
                </section>

                <section style={styles.storySection} id="our-story">
                    <h2 style={styles.sectionTitle}>Our <span style={styles.purpleAccent}>Story</span></h2>
                    <p style={styles.storyText}>Behind every breakthrough lies a team that believes in the power of achieving the impossible. We are more than just colleagues; we are a group of growth catalysts united by a shared vision. From our early days in a small-town dealership to becoming a nationally recognized leader, our journey has been defined by transformation.</p>
                    <p style={styles.storyText}>At 800% Elite Auto, every team member contributes a unique perspective. We have built an environment where innovation thrives, collaboration is key, and every challenge is met with determination. We believe that when we lift others, we all rise together.</p>
                </section>

                <section style={styles.section} id="the-team">
                    <h2 style={styles.sectionTitle}>The <span style={styles.purpleAccent}>800%</span> Team</h2>
                    <div style={styles.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <div key={index} style={{ ...styles.teamCard, backgroundColor: hoveredCard === index ? "#fafafa" : "#ffffff" }} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
                                <img src={member.image} alt={member.name} style={styles.teamImage} />
                                <h3 style={styles.teamName}>{member.name}</h3>
                                <p style={styles.teamRole}>{member.role}</p>
                                <p style={styles.teamDescription}>{member.description}</p>
                                <a href={`mailto:${member.email}`} style={{ ...styles.sendMessageBtn, backgroundColor: hoveredButton === index ? "#1a1a1a" : "transparent", color: hoveredButton === index ? "#fff" : "#1a1a1a" }} onMouseEnter={() => setHoveredButton(index)} onMouseLeave={() => setHoveredButton(null)}>Send Message</a>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={styles.section} id="our-values">
                    <h2 style={styles.sectionTitle}>Our <span style={styles.purpleAccent}>Values</span></h2>
                    <div style={styles.valuesGrid}>
                        <div style={styles.valueCard}><h3 style={styles.valueTitle}>Relentless Growth</h3><p style={styles.valueDescription}>We believe growth is not optional—it's essential. We push beyond comfort zones.</p></div>
                        <div style={styles.valueCard}><h3 style={styles.valueTitle}>Authentic Leadership</h3><p style={styles.valueDescription}>Real leadership comes from within. We lead by example and speak our truth.</p></div>
                        <div style={styles.valueCard}><h3 style={styles.valueTitle}>Massive Impact</h3><p style={styles.valueDescription}>We aim to create transformation that ripples through industries and lives.</p></div>
                        <div style={styles.valueCard}><h3 style={styles.valueTitle}>Uncompromising Excellence</h3><p style={styles.valueDescription}>Good enough isn't good enough. We deliver results that exceed expectations.</p></div>
                        <div style={styles.valueCard}><h3 style={styles.valueTitle}>Powerful Community</h3><p style={styles.valueDescription}>Success is a team sport. We build networks that support and thrive.</p></div>
                        <div style={styles.valueCard}><h3 style={styles.valueTitle}>Bold Innovation</h3><p style={styles.valueDescription}>We aren't afraid to disrupt. We pioneer new approaches that drive breakthroughs.</p></div>
                    </div>
                </section>

                <div style={styles.ctaSection}>
                    <h2 style={{ ...styles.sectionTitle, color: "#fff" }}>Join Our Mission</h2>
                    <p style={{ color: "#ccc", maxWidth: "700px", margin: "0 auto 40px", fontSize: "1.1rem", lineHeight: "1.7" }}>We're always looking for passionate, growth-minded individuals. Whether you're interested in partnership or career growth, let's connect.</p>
                    <a href="/800#get-started-today" style={{ ...styles.ctaButton, border: "1px solid #fff" }}>Let's Connect</a>
                </div>
                <Footer />
            </div>
        </>
    )
}