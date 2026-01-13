"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

const mantras = [
    { number: "1", title: "No Snooze Button", description: "Wake up immediately when your alarm goes off." },
    { number: "2", title: "No Phone First Thing", description: "Start your day without distractions by avoiding your phone." },
    { number: "3", title: "Gratitude & Goals", description: "Write down 10 things you're grateful for and set goals." },
    { number: "4", title: "Physical Activity", description: "Engage in exercise or movement to boost energy." },
    { number: "5", title: "Encouraging Message", description: "Send a motivational message to someone to start the day." },
]

const pillars = [
    { title: "Faith", description: "Connecting to something greater than yourself." },
    { title: "Family", description: "Prioritizing the bonds at home to build a legacy." },
    { title: "Friends", description: "Curating a circle of influence that uplifts you." },
    { title: "Fitness", description: "Optimizing your physical health and energy levels." },
    { title: "Career", description: "Pursuing professional excellence and impact." },
    { title: "Finance", description: "Mastering stewardship and financial freedom." },
    { title: "Education", description: "Committing to lifelong learning and development." },
    { title: "Mental Health", description: "Cultivating emotional intelligence and peace." },
]

const testimonials = [
    { quote: "I love the five rules about not snoozing and exercising. This planner is a reminder to do it every day.", author: "Jessica M., Daily User", rating: 5 },
    { quote: "This planner forces you to take a breather and ask yourself 'what is my why'. It puts you in check.", author: "David R., Business Owner", rating: 5 },
    { quote: "I was in depression. Once I got into a routine, I pulled myself out and opened my own practice.", author: "Dr. Sarah P., Audiologist", rating: 5 },
]

export default function BuildLifePage() {
    const [hoveredButton, setHoveredButton] = useState(null)
    const [hoveredMantra, setHoveredMantra] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [showDownloadForm, setShowDownloadForm] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 992)
        window.addEventListener("resize", checkMobile)
        checkMobile()

        const script = document.createElement("script")
        script.src = "https://link.msgsndr.com/js/form_embed.js"
        document.body.appendChild(script)

        return () => {
            window.removeEventListener("resize", checkMobile)
            if (script.parentNode) script.parentNode.removeChild(script)
        }
    }, [])

    const scrollToExecute = () => {
        const executeSection = document.getElementById("execute-section")
        if (executeSection) executeSection.scrollIntoView({ behavior: "smooth" })
    }

    const toggleDownloadForm = (e) => {
        e.preventDefault()
        setShowDownloadForm(!showDownloadForm)
    }

    const styles = {
        container: { width: "100%", minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", overflowX: "hidden" },
        hero: { position: "relative", width: "100%", minHeight: "100vh", backgroundImage: isMobile ? "url('https://imgur.com/66xI2e8.jpg')" : "url('https://imgur.com/viD4W1y.jpg')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "0 0 120px 0" : "0 0 180px 0" },
        heroOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.95) 100%)", zIndex: 1 },
        heroContent: { position: "relative", zIndex: 2, width: "100%", maxWidth: "1400px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 40px", color: "#ffffff", marginTop: "15vh" },
        heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: "1.1", marginBottom: "20px", maxWidth: "900px", textShadow: "0 4px 30px rgba(0,0,0,0.9)" },
        heroSubtext: { fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: "400", lineHeight: "1.6", marginBottom: "40px", color: "#f5f5f5", maxWidth: "700px", textShadow: "0 2px 10px rgba(0,0,0,0.8)" },
        section: { padding: isMobile ? "80px 20px" : "100px 40px", maxWidth: "1400px", margin: "0 auto" },
        sectionHeader: { textAlign: "center", marginBottom: "80px" },
        sectionTitle: { fontSize: "2rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', color: "#1a1a1a", marginBottom: "20px" },
        introText: { fontSize: "1.1rem", lineHeight: "1.8", color: "#666", maxWidth: "800px", margin: "0 auto 60px", textAlign: "center" },
        mantrasGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px", backgroundColor: "#eee", border: "1px solid #eee" },
        mantraCard: { backgroundColor: "#ffffff", padding: isMobile ? "40px 20px" : "50px 30px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", transition: "all 0.3s ease", cursor: "pointer" },
        mantraNumber: { fontSize: "3rem", fontWeight: "800", color: "#7B3FBF", marginBottom: "10px" },
        mantraTitle: { fontSize: "0.85rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", marginBottom: "15px", minHeight: "45px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" },
        ebookLink: { color: "#7B3FBF", fontSize: "1rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", cursor: "pointer", borderBottom: "1px solid transparent", paddingBottom: "4px", transition: "border-bottom-color 0.3s" },
        ebookFormContainer: { marginTop: "40px", maxWidth: "600px", margin: "40px auto 0", padding: "0", backgroundColor: "transparent", borderRadius: "0", boxShadow: "none", animation: "fadeIn 0.5s ease-in-out", minHeight: "600px" },
        pillarsSection: { padding: isMobile ? "80px 20px" : "100px 40px", backgroundColor: "#f9f9f9" },
        pillarsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginTop: "60px" },
        pillarItem: { borderLeft: "2px solid #7B3FBF", paddingLeft: "20px" },
        pillarTitle: { display: "block", fontSize: "1rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", color: "#1a1a1a", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        ctaButton: { display: "inline-block", padding: "18px 40px", backgroundColor: "#7B3FBF", color: "#ffffff", borderRadius: "0", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none", border: "none", cursor: "pointer", transition: "all 0.3s ease" },
        executeButton: { display: "inline-block", padding: "15px 30px", backgroundColor: "#ffffff", color: "#000000", textDecoration: "none", fontSize: "0.9rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", border: "none", cursor: "pointer", transition: "all 0.3s ease", textAlign: "center" },
        toolsSection: { backgroundColor: "#111", color: "#fff", padding: isMobile ? "80px 20px" : "100px 40px" },
        toolsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", maxWidth: "1400px", margin: "0 auto", alignItems: "center" },
        toolsButtonsContainer: { display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "30px" },
        testimonialCard: { padding: "40px", backgroundColor: "#f9f9f9", border: "1px solid #eee" },
    }

    return (
        <div style={styles.container}>
            <style>{`
                * { box-sizing: border-box; }
                @media (max-width: 992px) { .tools-grid-mobile { grid-template-columns: 1fr !important; gap: 40px !important; } }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>

            <section style={styles.hero}>
                <div style={styles.heroOverlay}></div>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Building Your <br /><span style={{ color: "#9B59B6" }}>800% Life</span></h1>
                    <p style={styles.heroSubtext}>A holistic system for massive growth. Start with the foundation of your morning, then build the framework of your legacy.</p>
                    <button onClick={scrollToExecute} style={{ ...styles.ctaButton, backgroundColor: hoveredButton === "hero" ? "#9B59B6" : "transparent", border: "1px solid #fff", color: "#fff" }} onMouseEnter={() => setHoveredButton("hero")} onMouseLeave={() => setHoveredButton(null)}>Start Building</button>
                </div>
            </section>

            <section style={styles.section}>
                <div style={styles.sectionHeader}><h2 style={styles.sectionTitle}>The Morning 5</h2><div style={{ width: "60px", height: "2px", background: "#7B3FBF", margin: "0 auto" }}></div></div>
                <p style={styles.introText}>Before you can build an 800% life, you must own your start. The Morning 5 is the daily discipline that creates clarity.</p>
                <div style={styles.mantrasGrid}>
                    {mantras.map((mantra, index) => (
                        <div key={index} style={{ ...styles.mantraCard, backgroundColor: hoveredMantra === index ? "#7B3FBF" : "#ffffff" }} onMouseEnter={() => setHoveredMantra(index)} onMouseLeave={() => setHoveredMantra(null)}>
                            <div style={{ ...styles.mantraNumber, color: hoveredMantra === index ? "#ffffff" : "#7B3FBF" }}>{mantra.number}</div>
                            <div style={{ ...styles.mantraTitle, color: hoveredMantra === index ? "#ffffff" : "#1a1a1a" }}>{mantra.title}</div>
                            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: hoveredMantra === index ? "#eee" : "#666" }}>{mantra.description}</p>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "40px" }}><a href="#" onClick={toggleDownloadForm} style={styles.ebookLink} onMouseEnter={(e) => (e.target.style.opacity = "0.7")} onMouseLeave={(e) => (e.target.style.opacity = "1")}>{showDownloadForm ? "Close Form" : "Download Free Morning 5 Ebook"}</a></div>
                {showDownloadForm && (<div style={styles.ebookFormContainer}><iframe src="https://api.leadconnectorhq.com/widget/form/vXNPQT5kIDHSIp0ullcY" style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }} id="inline-vXNPQT5kIDHSIp0ullcY" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-form-name="Morning 5 eBook Form" data-height="614" title="Morning 5 eBook Form"></iframe></div>)}
            </section>

            <section style={styles.pillarsSection}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={styles.sectionTitle}>8 Pillars</h2>
                    <p style={styles.introText}>True success isn't just about money or career—it's about balance. Elevating these areas holistically is the key.</p>
                    <div style={{ marginBottom: "60px", display: "flex", justifyContent: "center" }}><img src="https://imgur.com/DRtC14L.png" alt="Pillars" style={{ width: "100%", maxWidth: "900px", height: "auto", objectFit: "contain" }} /></div>
                    <div style={{ ...styles.pillarsGrid, textAlign: "left" }}>
                        {pillars.map((pillar, index) => (<div key={index} style={styles.pillarItem}><span style={styles.pillarTitle}>{pillar.title}</span><p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.6" }}>{pillar.description}</p></div>))}
                    </div>
                </div>
            </section>

            <div style={styles.toolsSection} id="execute-section">
                <div style={styles.toolsGrid} className="tools-grid-mobile">
                    <div>
                        <h2 style={{ ...styles.sectionTitle, color: "#fff", textAlign: "left" }}>Execute</h2>
                        <p style={{ color: "#ccc", lineHeight: "1.8", marginBottom: "40px", fontSize: "1.2rem" }}>Vision without execution is just a dream. The Morning 5 Planner is your daily tactical guide.</p>
                        <div style={styles.toolsButtonsContainer}>
                            <a href="https://www.facebook.com/groups/800life/" style={styles.executeButton} onMouseEnter={(e) => { e.target.style.backgroundColor = "#ddd" }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#fff" }}>Join the Facebook Group</a>
                            <a href="/planner" style={styles.executeButton} onMouseEnter={(e) => { e.target.style.backgroundColor = "#ddd" }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#fff" }}>Get the Morning 5 Planner</a>
                        </div>
                    </div>
                    <div><img src="https://imgur.com/FdwkFVX.png" alt="Planner" style={{ width: "100%" }} /></div>
                </div>
            </div>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Results</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
                    {testimonials.map((t, i) => (<div key={i} style={styles.testimonialCard}><div style={{ color: "#7B3FBF", fontSize: "1.2rem", marginBottom: "15px" }}>{"★".repeat(t.rating)}</div><p style={{ fontStyle: "italic", color: "#555", marginBottom: "20px", lineHeight: "1.6" }}>"{t.quote}"</p><p style={{ fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", color: "#1a1a1a" }}>{t.author}</p></div>))}
                </div>
            </section>

            <Footer />
        </div>
    )
}
