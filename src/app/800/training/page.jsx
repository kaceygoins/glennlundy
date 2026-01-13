"use client"
import React, { useState, useEffect, useRef } from "react"
import Footer from "@/components/Footer"

export default function TrainingMaterials() {
    const [isMobile, setIsMobile] = useState(false)
    const [visibleStats, setVisibleStats] = useState([])
    const statsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisibleStats([0]), 200)
                    setTimeout(() => setVisibleStats([0, 1]), 800)
                    setTimeout(() => setVisibleStats([0, 1, 2]), 1400)
                }
            })
        }, { threshold: 0.2 })
        if (statsRef.current) observer.observe(statsRef.current)
        return () => { if (statsRef.current) observer.unobserve(statsRef.current) }
    }, [])

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const stats = [
        { text: "Saginaw Valley Ford organized a successful campaign that raised over $75,000 for cancer with a lottery giveaway of a car. This event not only broke sales records but also had a significant positive impact on the community.", highlight: "$75,000 for cancer" },
        { text: "Hyundai of St. Augustine hit multiple milestones by achieving their new and used car objectives, meeting their CSI goals, and selling 207 cars, marking their best July performance ever.", highlight: "207 cars" },
        { text: "Gosch Ford Temecula celebrated a record-breaking month, adding to the list of dealerships that achieved outstanding sales figures in July.", highlight: "record-breaking month" },
    ]

    const styles = {
        container: { width: "100%", minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", overflowX: "hidden" },
        hero: { position: "relative", padding: isMobile ? "80px 20px" : "120px 40px", textAlign: "center", backgroundColor: "#f9f9f9", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" },
        heroContent: { maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 2 },
        heroTitle: { fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', lineHeight: "1.1", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a" },
        heroSubtext: { fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: "400", lineHeight: "1.6", marginBottom: "48px", color: "#666", maxWidth: "800px", margin: "0 auto 48px" },
        ctaButton: { display: "inline-block", padding: "20px 40px", backgroundColor: "#1a1a1a", color: "#ffffff", borderRadius: "0", textDecoration: "none", fontWeight: "700", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.3s ease", border: "1px solid #1a1a1a", cursor: "pointer", margin: "10px" },
        ctaButtonSecondary: { display: "inline-block", padding: "20px 40px", backgroundColor: "transparent", color: "#1a1a1a", borderRadius: "0", textDecoration: "none", fontWeight: "700", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.3s ease", border: "1px solid #1a1a1a", cursor: "pointer", margin: "10px" },
        section: { padding: isMobile ? "60px 20px" : "100px 40px", maxWidth: "1400px", margin: "0 auto" },
        sectionTitle: { fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textAlign: "center", marginBottom: "60px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a" },
        sectionDescription: { fontSize: "1.2rem", lineHeight: "1.7", color: "#555", marginBottom: "80px", textAlign: "center", maxWidth: "800px", margin: "0 auto 80px" },
        card: { backgroundColor: "#ffffff", border: "1px solid #eee", borderRadius: "0", padding: "30px", transition: "all 0.3s ease", cursor: "pointer", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" },
        videoWrapper: { position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" },
        videoIframe: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" },
        categoryGrid: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "30px", marginTop: "60px" },
        quickHitsGrid: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "30px", marginTop: "60px" },
        categoryTitle: { fontSize: "1.2rem", fontWeight: "700", marginBottom: "10px", color: "#1a1a1a", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        categoryDesc: { fontSize: "0.95rem", color: "#666", lineHeight: "1.5" },
        qnaGrid: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "60px", alignItems: "start" },
        qnaText: { fontSize: "1.1rem", lineHeight: "1.8", color: "#444", marginBottom: "20px" },
        winsSection: { backgroundColor: "#f9f9f9", padding: isMobile ? "60px 20px" : "100px 40px", textAlign: "center" },
        statsContainer: { display: "flex", flexDirection: "column", gap: "30px", marginBottom: "60px", maxWidth: "900px", margin: "0 auto 60px" },
        statBubble: { backgroundColor: "#ffffff", border: "1px solid #eee", padding: "40px", transition: "all 0.5s ease", opacity: 0, transform: "translateY(20px)", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" },
        statBubbleVisible: { opacity: 1, transform: "translateY(0)" },
        statText: { fontSize: "1.1rem", lineHeight: "1.8", color: "#555" },
        statHighlight: { color: "#7B3FBF", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        formContainer: { height: "794px", backgroundColor: "#fff", border: "1px solid #eee", overflow: "hidden" },
    }

    const responsiveCSS = `
        .cta-primary:hover { background-color: #fff !important; color: #1a1a1a !important; border-color: #1a1a1a !important; }
        .cta-secondary:hover { background-color: #1a1a1a !important; color: #fff !important; }
        .hover-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; }
    `

    return (
        <div style={styles.container}>
            <style>{responsiveCSS}</style>
            <section style={styles.hero}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Training <span style={{ color: "#7B3FBF" }}>Materials</span></h1>
                    <p style={styles.heroSubtext}>Master every aspect of elite performance with our comprehensive training system. From leadership development to cutting-edge AI implementation, transform your business and your life.</p>
                    <div><a href="#weekly-training" style={styles.ctaButton} className="cta-primary">View Training</a><a href="#qna-calls" style={styles.ctaButtonSecondary} className="cta-secondary">Q&A Calls</a></div>
                </div>
            </section>

            <section style={styles.section} id="weekly-training">
                <h2 style={styles.sectionTitle}>Weekly Training</h2>
                <p style={styles.sectionDescription}>Tired of outdated, rinse-and-repeat training? At 800% Elite, our weekly sessions are recorded fresh each week, built around what's happening right now in the market.</p>
                <div style={{ maxWidth: "900px", margin: "0 auto 80px" }}>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "30px", textAlign: "center", fontFamily: 'Georgia, serif' }}>Watch A Complete Training</h3>
                    <div style={styles.videoWrapper}><iframe style={styles.videoIframe} src="https://www.youtube.com/embed/04ZMDH6pzXU?si=0ftIRr2Vz8LvON3c" title="Featured Training" allowFullScreen></iframe></div>
                </div>
                <h3 style={{ fontSize: "1.8rem", textAlign: "center", fontFamily: 'Georgia, serif' }}>Explore Our Training Specialties</h3>
                <div style={styles.categoryGrid}>
                    <div style={styles.card} className="hover-card"><div style={{ ...styles.videoWrapper, marginBottom: "20px" }}><iframe style={styles.videoIframe} src="https://www.youtube.com/embed/fu4ts_EjIDo?si=tdiIY8Z11d6ZWOto" title="Sales Training" allowFullScreen></iframe></div><h3 style={styles.categoryTitle}>Weekly Sales Training</h3><p style={styles.categoryDesc}>Sam Cox shares proven sales strategies that convert leads into loyal customers.</p></div>
                    <div style={styles.card} className="hover-card"><div style={{ ...styles.videoWrapper, marginBottom: "20px" }}><iframe style={styles.videoIframe} src="https://www.youtube.com/embed/HxMwea-LE9g?si=N6QDZ4caHfH22lTk" title="Marketing Training" allowFullScreen></iframe></div><h3 style={styles.categoryTitle}>Weekly Marketing Training</h3><p style={styles.categoryDesc}>Kacey Goins dives into advanced marketing techniques to dominate your local market.</p></div>
                    <div style={styles.card} className="hover-card"><div style={{ ...styles.videoWrapper, marginBottom: "20px" }}><iframe style={styles.videoIframe} src="https://www.youtube.com/embed/_EPjNCkzNuA?si=7keIukbPqI_qUGQa" title="F&I Training" allowFullScreen></iframe></div><h3 style={styles.categoryTitle}>Weekly F&I Training</h3><p style={styles.categoryDesc}>Evan Walters educates on strategic financial management to maximize profitability and growth.</p></div>
                </div>
            </section>

            <section style={{ ...styles.section, backgroundColor: "#f9f9f9" }} id="qna-calls">
                <h2 style={styles.sectionTitle}>Weekly Q&A Calls</h2>
                <div style={styles.qnaGrid}>
                    <div><div style={{ ...styles.videoWrapper, marginBottom: "30px" }}><iframe style={styles.videoIframe} src="https://www.youtube.com/embed/VqyNtiDcP54?si=xUQryidH0ATNgdev" title="Q&A 1" allowFullScreen></iframe></div><div style={styles.videoWrapper}><iframe style={styles.videoIframe} src="https://www.youtube.com/embed/Jn95smkYWiw?si=DKApp33QRM-XgdN-" title="Q&A 2" allowFullScreen></iframe></div></div>
                    <div><p style={styles.qnaText}>Weekly 800% hosts live Q&A calls that bring our community together to discuss current challenges, wins and to collaborate and learn from one another.</p><p style={styles.qnaText}>These interactive sessions provide real-time solutions, foster meaningful connections, and create an environment where breakthrough thinking thrives.</p><p style={styles.qnaText}>Join industry leaders as they share insights, overcome obstacles, and celebrate victories together. Every call is an opportunity to accelerate your growth.</p></div>
                </div>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>800% Quick Hits</h2>
                <p style={styles.sectionDescription}>The 800% Quick Hit videos cut through the noise with laser-focused, 5-15 minute sessions that tackle your biggest challenges head-on.</p>
                <div style={styles.quickHitsGrid}>
                    {["OXIn467PvWU?si=vilN6GmNa-D0Spte", "rcT0YFtq0Pw?si=yYy9_HnVgZhnIeuF", "JorInYnQiNk?si=3JCMAWLtGpxE_EJP", "bhMUZtSLem8?si=E3TH9HE-0hJarPHZ"].map((id, index) => (<div key={index} style={styles.card} className="hover-card"><div style={styles.videoWrapper}><iframe style={styles.videoIframe} src={`https://www.youtube.com/embed/${id}`} title={`Quick Hit ${index + 1}`} allowFullScreen></iframe></div></div>))}
                </div>
            </section>

            <section style={styles.winsSection} ref={statsRef}>
                <h2 style={styles.sectionTitle}>Celebrating Elite Wins</h2>
                <p style={styles.sectionDescription}>When you join the 800% Elite community, you become part of a network of achievers who consistently break records and exceed expectations.</p>
                <div style={styles.statsContainer}>
                    {stats.map((stat, index) => (<div key={index} style={{ ...styles.statBubble, ...(visibleStats.includes(index) ? styles.statBubbleVisible : {}) }}><p style={styles.statText}>{stat.text.split(stat.highlight).map((part, i) => (<span key={i}>{part}{i < stat.text.split(stat.highlight).length - 1 && <span style={styles.statHighlight}>{stat.highlight}</span>}</span>))}</p></div>))}
                </div>
                <a href="/testimonials" style={styles.ctaButton} className="cta-primary">See More Client Wins</a>
            </section>

            <section style={styles.section}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "60px", alignItems: "center", backgroundColor: "rgba(123, 63, 191, 0.05)", padding: "60px", borderRadius: "32px", border: "1px solid rgba(123, 63, 191, 0.2)" }}>
                    <div><h2 style={{ ...styles.sectionTitle, textAlign: "left" }}>Ready To <span style={{ color: "#7B3FBF" }}>Join</span> Our Mission?</h2><p style={{ ...styles.sectionDescription, textAlign: "left", marginBottom: 0 }}>We're always looking for passionate, growth-minded individuals who want to make a real impact.</p></div>
                    <div style={styles.formContainer}><iframe src="https://api.leadconnectorhq.com/widget/form/x8cPZ2Qd030TN6MUjb92?source_details=training" style={{ width: "100%", height: "100%", border: "none" }} id="inline-x8cPZ2Qd030TN6MUjb92" title="WDS 800 Inquiry" /></div>
                </div>
            </section>
            <Footer />
        </div>
    )
}