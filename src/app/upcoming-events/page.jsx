"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

export default function EventsPage() {
    const [hoveredButton, setHoveredButton] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const scrollToEvents = () => {
        const element = document.getElementById("upcoming-events")
        if (element) element.scrollIntoView({ behavior: "smooth" })
    }

    const styles = {
        container: { width: "100%", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", overflowX: "hidden" },
        hero: { position: "relative", width: "100%", minHeight: "100vh", backgroundImage: "url('https://i.imgur.com/nhlE7sn.jpg')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "flex-end", padding: "0 0 100px 0" },
        heroOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 },
        heroContent: { position: "relative", zIndex: 2, width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 40px", color: "#ffffff" },
        heroTitle: { fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: "1.1", marginBottom: "24px" },
        purpleAccent: { color: "#9B59B6", fontStyle: "italic" },
        heroSubtext: { fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: "400", lineHeight: "1.6", marginBottom: "48px", color: "#f5f5f5", maxWidth: "800px", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        ctaButton: { display: "inline-block", padding: "18px 40px", backgroundColor: "transparent", color: "#ffffff", borderRadius: "0", textDecoration: "none", fontWeight: "600", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", border: "1px solid #ffffff", cursor: "pointer", transition: "all 0.3s ease" },
        eventsSection: { padding: "120px 40px", maxWidth: "1400px", margin: "0 auto" },
        sectionTitle: { fontSize: "2.5rem", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", color: "#1a1a1a", textAlign: "center", marginBottom: "60px" },
        eventCard: { backgroundColor: "#ffffff", border: "1px solid #eee", padding: "60px 40px", marginBottom: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" },
        eventHeader: { borderBottom: "1px solid #eee", paddingBottom: "30px", marginBottom: "30px" },
        eventBadge: { display: "inline-block", padding: "8px 16px", backgroundColor: "#f0f0f0", color: "#1a1a1a", fontSize: "0.8rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" },
        eventTitle: { fontSize: "2rem", fontWeight: "700", color: "#1a1a1a", fontFamily: 'Georgia, "Times New Roman", Times, serif', marginBottom: "15px", textTransform: "uppercase", letterSpacing: "0.05em" },
        eventDescription: { fontSize: "1.1rem", color: "#555", lineHeight: "1.8", maxWidth: "900px" },
        eventDetails: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "40px" },
        detailItem: { display: "flex", alignItems: "center", gap: "15px", padding: "20px", backgroundColor: "#f9f9f9", border: "1px solid #eee" },
        detailText: { fontSize: "0.9rem", fontWeight: "600", color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.05em" },
        itinerarySection: { marginTop: "60px", backgroundColor: "#f9f9f9", padding: "40px" },
        dayTitle: { fontSize: "1.2rem", fontWeight: "700", color: "#7B3FBF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" },
        scheduleRow: { display: "flex", justifyContent: "space-between", padding: "15px 0", borderBottom: "1px solid #eee", fontSize: "1rem", color: "#444" },
        recGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginTop: "60px" },
        recCard: { border: "1px solid #eee", padding: "40px" },
        recTitle: { fontSize: "1.1rem", fontWeight: "700", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "10px" },
        recList: { listStyle: "none", padding: 0 },
        recItem: { marginBottom: "15px", paddingBottom: "15px", borderBottom: "1px solid #f5f5f5" },
        speakersSection: { backgroundColor: "#111", color: "#fff", padding: "100px 40px" },
        speakerGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginTop: "60px" },
        speakerCard: { border: "1px solid #333", padding: "40px", textAlign: "center" },
        speakerName: { fontSize: "1.2rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", color: "#fff" },
        speakerRole: { color: "#7B3FBF", fontSize: "0.9rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px" },
        speakerPoints: { listStyle: "none", padding: 0, textAlign: "left", fontSize: "0.9rem", color: "#ccc", lineHeight: "1.6" },
        aboutSection: { padding: "100px 40px", textAlign: "center", maxWidth: "1000px", margin: "0 auto" },
    }

    return (
        <>
            <div style={styles.container}>
                <div style={styles.hero}>
                    <div style={styles.heroOverlay}></div>
                    <div style={styles.heroContent}>
                        <h1 style={styles.heroTitle}>Life-Changing <br /><span style={styles.purpleAccent}>Events</span></h1>
                        <p style={styles.heroSubtext}>These aren't just conferences. Our events are transformational experiences that rewire your mindset and ignite your potential.</p>
                        <button style={{ ...styles.ctaButton, ...(hoveredButton === "hero" ? { backgroundColor: "#fff", color: "#000" } : {}) }} onMouseEnter={() => setHoveredButton("hero")} onMouseLeave={() => setHoveredButton(null)} onClick={scrollToEvents}>Upcoming Events</button>
                    </div>
                </div>

                <section id="upcoming-events" style={styles.eventsSection}>
                    <h2 style={styles.sectionTitle}>Upcoming <span style={styles.purpleAccent}>Events</span></h2>
                    <div style={styles.eventCard}>
                        <div style={styles.eventHeader}>
                            <span style={styles.eventBadge}>Free Event</span>
                            <h3 style={styles.eventTitle}>2026 Sales Accelerator</h3>
                            <p style={styles.eventDescription}>Join us for an intensive two-day workshop focused on preparing your sales team for unprecedented success. This exclusive event brings together forward-thinking executives to explore cutting-edge strategies.</p>
                        </div>
                        <div style={styles.eventDetails}>
                            <div style={styles.detailItem}><span>📅</span><span style={styles.detailText}>January 20-21, 2026</span></div>
                            <div style={styles.detailItem}><span>📍</span><span style={styles.detailText}>Lexington, KY</span></div>
                            <div style={styles.detailItem}><span>💎</span><span style={styles.detailText}>100% Free Admission</span></div>
                        </div>
                        <div style={styles.itinerarySection}>
                            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "60px" }}>
                                <div><h4 style={styles.dayTitle}>Tuesday, Jan 20</h4><div style={styles.scheduleRow}><strong>9AM - 12PM</strong><span>Training Session I</span></div><div style={styles.scheduleRow}><strong>1PM - 3PM</strong><span>Training Session II</span></div></div>
                                <div><h4 style={styles.dayTitle}>Wednesday, Jan 21</h4><div style={styles.scheduleRow}><strong>9AM - 12PM</strong><span>Training Session III</span></div><div style={styles.scheduleRow}><strong>1PM - 3PM</strong><span>Closing Session</span></div></div>
                            </div>
                        </div>
                        <div style={styles.recGrid}>
                            <div style={styles.recCard}><h4 style={styles.recTitle}>Where to Stay</h4><ul style={styles.recList}><li style={styles.recItem}>Home2 Suites by Hilton</li><li style={styles.recItem}>Tru by Hilton</li><li style={styles.recItem}>Hyatt Place</li></ul></div>
                            <div style={styles.recCard}><h4 style={styles.recTitle}>Where to Eat</h4><ul style={styles.recList}><li style={styles.recItem}>Malone's Hamburg</li><li style={styles.recItem}>Bonefish Grill</li><li style={styles.recItem}>Harry's American Bar & Grill</li></ul></div>
                        </div>
                    </div>
                </section>

                <div style={styles.speakersSection}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <h2 style={{ ...styles.sectionTitle, color: "#fff" }}>What To Expect</h2>
                        <p style={{ color: "#999", textAlign: "center", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>Tactical sessions led by industry leaders to accelerate your sales performance.</p>
                        <div style={styles.speakerGrid}>
                            <div style={styles.speakerCard}><h5 style={styles.speakerName}>Evan Walters</h5><p style={styles.speakerRole}>Revenue Acceleration</p><ul style={styles.speakerPoints}><li>• Increasing deal size strategies</li><li>• Shortening sales cycles</li></ul></div>
                            <div style={styles.speakerCard}><h5 style={styles.speakerName}>Sam Cox</h5><p style={styles.speakerRole}>High-Performance Teams</p><ul style={styles.speakerPoints}><li>• Building & coaching sales teams</li><li>• Next-level customer experiences</li></ul></div>
                            <div style={styles.speakerCard}><h5 style={styles.speakerName}>Glenn Lundy</h5><p style={styles.speakerRole}>Leadership & Vision</p><ul style={styles.speakerPoints}><li>• Leading with vision</li><li>• Scaling without losing connection</li></ul></div>
                        </div>
                        <div style={{ marginTop: "80px", borderTop: "1px solid #333", paddingTop: "60px" }}>
                            <h2 style={{ ...styles.sectionTitle, color: "#fff", fontSize: "1.8rem" }}>Register Now</h2>
                            <div style={{ backgroundColor: "#fff", maxWidth: "800px", margin: "0 auto", height: "600px" }}><iframe src="https://api.leadconnectorhq.com/widget/form/cXQ37wnQ131Cb8wBpTzJ" style={{ width: "100%", height: "100%", border: "none" }} title="Registration Form" scrolling="no" /></div>
                        </div>
                    </div>
                </div>

                <div style={styles.aboutSection}>
                    <h2 style={styles.sectionTitle}>Why Our Events Are <span style={styles.purpleAccent}>Different</span></h2>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>We don't just talk about transformation, we create the environment for it to happen naturally. Every event is designed to break you out of your comfort zone, challenge your assumptions, and connect you with like-minded leaders.</p>
                </div>

                <Footer />
            </div>
        </>
    )
}