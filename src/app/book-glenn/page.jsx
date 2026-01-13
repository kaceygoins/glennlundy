"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

const topics = [
    { id: "leadership", title: "Leadership Excellence", image: "https://i.imgur.com/aqM8o3S.jpg" },
    { id: "culture", title: "Company Culture", image: "https://i.imgur.com/EbDDQ7B.jpg" },
    { id: "teambuilding", title: "Team Building", image: "https://i.imgur.com/JJWE3f7.jpg" },
    { id: "routines", title: "Morning Routines", image: "https://i.imgur.com/WYzUEBO.jpg" },
    { id: "growth", title: "Dealership Growth", image: "https://i.imgur.com/wOIoXxX.jpg" },
    { id: "purpose", title: "Purpose-Driven Life", image: "https://i.imgur.com/RgTvWUQ.jpg" },
]

const videos = [
    { id: "video1", title: "Leadership & Growth Mindset", description: "Glenn shares powerful insights on developing a growth mindset and leading with authenticity.", embedUrl: "https://www.youtube.com/embed/ttz-yTEoZQk?si=FYRm_H-Ei-hXeAE5" },
    { id: "video2", title: "Building High-Performance Teams", description: "Strategies for creating unstoppable teams that drive exceptional results.", embedUrl: "https://www.youtube.com/embed/_IPDM31dVwU?si=FGgwz2fD0EJ2aWzl" },
    { id: "video3", title: "Transformational Leadership", description: "How authentic leadership transforms organizations from the inside out.", embedUrl: "https://www.youtube.com/embed/xQMskBi02vs?si=o4vS8dd_O_ZrZuqz" },
    { id: "video4", title: "Breakthrough Performance", description: "High-energy approach to unlocking breakthrough performance in any setting.", embedUrl: "https://www.youtube.com/embed/ju1_XVOo4DY?si=c_SMyDkTSYGeczAn" },
]

const services = [
    { id: "keynote", title: "Keynote Speaking", description: "High-energy presentations that captivate audiences and deliver transformational insights. Perfect for conferences, conventions, and major corporate events." },
    { id: "workshops", title: "Interactive Workshops", description: "Deep-dive sessions that combine Glenn's expertise with hands-on learning. Your team will leave with actionable strategies and tools." },
    { id: "leadership", title: "In-Store Leadership Events", description: "Customized on-site programs designed specifically for your organization's unique challenges and goals. Personal, powerful, and tailored." },
]

export default function BookGlenn() {
    const [hoveredButton, setHoveredButton] = useState(null)
    const [hoveredTopic, setHoveredTopic] = useState(null)
    const [hoveredService, setHoveredService] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        window.scrollTo(0, 0)

        const script = document.createElement("script")
        script.src = "https://link.msgsndr.com/js/form_embed.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            window.removeEventListener("resize", checkMobile)
            if (document.body.contains(script)) document.body.removeChild(script)
        }
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offsetPosition = element.offsetTop - 80
            window.scrollTo({ top: offsetPosition, behavior: "smooth" })
        }
    }

    const styles = {
        container: { width: "100%", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", overflowX: "hidden" },
        hero: { position: "relative", width: "100%", minHeight: isMobile ? "80vh" : "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: isMobile ? "20px" : "40px" },
        heroImage: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 10%", filter: "brightness(0.6) contrast(1.1)", zIndex: "1" },
        heroOverlay: { position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(123, 63, 191, 0.4) 100%)", zIndex: "2" },
        heroContent: { position: "relative", zIndex: "3", textAlign: "center", maxWidth: "1000px", padding: isMobile ? "0 20px" : "0 24px" },
        heroTitle: { fontSize: isMobile ? "2.5rem" : "clamp(3.5rem, 8vw, 6rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', lineHeight: "1", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#ffffff", textShadow: "0 6px 30px rgba(0, 0, 0, 0.7)" },
        heroSubtitle: { fontSize: isMobile ? "1rem" : "clamp(1.2rem, 3vw, 1.8rem)", color: "#f5f5f5", marginBottom: "48px", lineHeight: "1.5", fontWeight: "400", textShadow: "0 4px 20px rgba(0, 0, 0, 0.7)", maxWidth: "800px", margin: "0 auto 48px" },
        ctaButton: { display: "inline-block", padding: isMobile ? "20px 36px" : "24px 48px", backgroundColor: "#7B3FBF", color: "#ffffff", border: "none", textDecoration: "none", fontWeight: "700", fontSize: isMobile ? "1rem" : "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", transition: "all 0.3s ease", cursor: "pointer", margin: "0 10px 20px", width: isMobile ? "100%" : "auto", maxWidth: isMobile ? "280px" : "none" },
        section: { padding: isMobile ? "60px 20px 40px" : "100px 40px", maxWidth: "1400px", margin: "0 auto" },
        sectionTitle: { fontSize: isMobile ? "2rem" : "clamp(2.5rem, 5vw, 4rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textAlign: "center", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#1a1a1a" },
        achievementText: { fontSize: "1.1rem", fontWeight: "700", fontStyle: "italic", color: "#7B3FBF", textAlign: "center", marginBottom: "40px", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        glennInActionSection: { padding: isMobile ? "60px 20px 40px" : "80px 24px 60px", maxWidth: "1400px", margin: "0 auto", backgroundColor: "#f9f9f9", textAlign: "center" },
        videosGrid: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? "30px" : "40px", marginTop: "40px", maxWidth: isMobile ? "100%" : "1000px", margin: "40px auto 0" },
        videoTestimonialCard: { backgroundColor: "#ffffff", border: "1px solid #eee", padding: "0", transition: "all 0.3s ease", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer", width: "100%" },
        videoTestimonialCardHover: { transform: "translateY(-8px)", boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)" },
        videoIframe: { width: "100%", height: isMobile ? "220px" : "280px", border: "none", display: "block" },
        videoDescriptionContainer: { padding: isMobile ? "20px" : "30px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: isMobile ? "120px" : "140px", flex: 1 },
        videoTitle: { fontSize: isMobile ? "1.1rem" : "1.3rem", fontWeight: "700", marginBottom: "12px", color: "#1a1a1a", textAlign: "center", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        videoDescriptionText: { fontSize: isMobile ? "0.9rem" : "1rem", lineHeight: "1.6", color: "#666", fontWeight: "400", margin: 0, textAlign: "center" },
        topicsGrid: { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: isMobile ? "20px" : "2px", marginTop: "40px", margin: "40px auto 0", backgroundColor: "#f0f0f0", border: "1px solid #f0f0f0" },
        topicTile: { position: "relative", height: "250px", overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease", backgroundColor: "#ffffff" },
        topicTileHover: { transform: "translateY(-4px)", zIndex: 2, boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)" },
        topicTileImage: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) contrast(1.1)", zIndex: 1 },
        topicTileOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(123, 63, 191, 0.6) 100%)", zIndex: 2, opacity: 0.8 },
        topicTileContent: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px", zIndex: 3 },
        topicTileTitle: { fontSize: isMobile ? "0.9rem" : "1.1rem", fontWeight: "700", color: "#ffffff", textAlign: "center", margin: 0, textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        servicesGrid: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", marginTop: "40px" },
        serviceCard: { backgroundColor: "#ffffff", border: "1px solid #eee", padding: "40px", textAlign: "center", transition: "all 0.3s ease", cursor: "pointer", display: "flex", flexDirection: "column", height: "100%", minHeight: "350px", alignItems: "center", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" },
        serviceCardHover: { transform: "translateY(-8px)", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" },
        serviceTitle: { fontSize: "1.5rem", fontWeight: "700", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", textAlign: "center", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        serviceDescription: { color: "#666", marginBottom: "32px", fontSize: "1rem", lineHeight: "1.6", flex: "1", display: "flex", alignItems: "center", textAlign: "center" },
        serviceButton: { padding: "16px 32px", backgroundColor: "#7B3FBF", color: "#ffffff", textDecoration: "none", fontWeight: "600", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.3s ease", border: "none", cursor: "pointer", width: "100%", maxWidth: "280px", minHeight: "50px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "auto", alignSelf: "center" },
        whyGlennSection: { position: "relative", width: "100%", minHeight: isMobile ? "60vh" : "80vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "60px" },
        whyGlennImage: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: "1" },
        whyGlennOverlay: { position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(123, 63, 191, 0.5) 100%)", zIndex: "2" },
        whyGlennContent: { position: "relative", zIndex: "3", textAlign: "center", maxWidth: "1000px", padding: isMobile ? "40px 20px" : "60px 24px" },
        whyGlennTitle: { fontSize: isMobile ? "2rem" : "clamp(2.5rem, 5vw, 4rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', marginBottom: "40px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#ffffff", textShadow: "0 4px 20px rgba(0, 0, 0, 0.7)" },
        whyGlennText: { fontSize: isMobile ? "1.1rem" : "1.2rem", lineHeight: "1.7", color: "#f5f5f5", marginBottom: "24px", textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)", textAlign: isMobile ? "center" : "left", maxWidth: "800px", margin: "0 auto 24px" },
        formSection: { padding: isMobile ? "60px 20px 40px" : "80px 24px 40px", maxWidth: "1400px", margin: "0 auto" },
        formContent: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "40px" : "60px", alignItems: "flex-start", marginTop: "40px" },
        formTextContainer: { paddingRight: isMobile ? "0" : "40px", textAlign: isMobile ? "center" : "left" },
        formText: { fontSize: "1.1rem", lineHeight: "1.7", color: "#666", marginBottom: "24px" },
        formTextStrong: { fontSize: "1.2rem", lineHeight: "1.7", color: "#1a1a1a", marginBottom: "24px", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        formTextHighlight: { fontSize: "1.2rem", lineHeight: "1.7", color: "#9B59B6", marginBottom: "24px", fontWeight: "600", fontStyle: "italic", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        finalCTASection: { padding: isMobile ? "60px 20px" : "100px 40px", textAlign: "center", backgroundColor: "#111", color: "#fff" },
        finalCTATitle: { fontSize: isMobile ? "2rem" : "clamp(2.5rem, 5vw, 4rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#ffffff" },
        finalCTAText: { fontSize: "1.2rem", lineHeight: "1.7", color: "#999", marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px" },
    }

    return (
        <div style={styles.container}>
            <style>{`* { box-sizing: border-box; }`}</style>

            <section style={styles.hero} id="top">
                <img src="https://i.imgur.com/MC9C4Ta.jpg" alt="Glenn Lundy Speaking" style={styles.heroImage} />
                <div style={styles.heroOverlay}></div>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Book Glenn to <span style={{ color: "#9B59B6" }}>Speak</span></h1>
                    <p style={styles.heroSubtitle}>Transform your audience with captivating presentations that ignite lasting change and drive real results.</p>
                    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row" }}>
                        <button onClick={() => scrollToSection("booking-info")} style={{ ...styles.ctaButton, boxShadow: "0 10px 30px rgba(123, 63, 191, 0.5)" }}>Book Glenn Now</button>
                        <a href="#glenn-in-action" style={{ ...styles.ctaButton, backgroundColor: "transparent", border: "2px solid #fff", boxShadow: "none" }}>See Glenn in Action</a>
                    </div>
                </div>
            </section>

            <section id="glenn-in-action" style={styles.glennInActionSection}>
                <h2 style={styles.sectionTitle}>Glenn in <span style={{ color: "#7B3FBF" }}>Action</span></h2>
                <p style={styles.achievementText}>Winner of the Great American Speak Off 2023</p>
                <div style={styles.videosGrid}>
                    {videos.map((video, index) => (
                        <div key={video.id} style={{ ...styles.videoTestimonialCard, ...(hoveredButton === `video-${index}` ? styles.videoTestimonialCardHover : {}) }} onMouseEnter={() => setHoveredButton(`video-${index}`)} onMouseLeave={() => setHoveredButton(null)}>
                            <div><iframe src={video.embedUrl} title={video.title} style={styles.videoIframe} allowFullScreen /></div>
                            <div style={styles.videoDescriptionContainer}><h3 style={styles.videoTitle}>{video.title}</h3><p style={styles.videoDescriptionText}>{video.description}</p></div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Speaking <span style={{ color: "#7B3FBF" }}>Topics</span></h2>
                <div style={styles.topicsGrid}>
                    {topics.map((topic) => (
                        <div key={topic.id} style={{ ...styles.topicTile, ...(hoveredTopic === topic.id ? styles.topicTileHover : {}) }} onMouseEnter={() => setHoveredTopic(topic.id)} onMouseLeave={() => setHoveredTopic(null)}>
                            <img src={topic.image} alt={topic.title} style={styles.topicTileImage} />
                            <div style={styles.topicTileOverlay}></div>
                            <div style={styles.topicTileContent}><h3 style={styles.topicTileTitle}>{topic.title}</h3></div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="speaking-services" style={styles.section}>
                <h2 style={styles.sectionTitle}>Speaking <span style={{ color: "#7B3FBF" }}>Services</span></h2>
                <div style={styles.servicesGrid}>
                    {services.map((service) => (
                        <div key={service.id} style={{ ...styles.serviceCard, ...(hoveredService === service.id ? styles.serviceCardHover : {}) }} onMouseEnter={() => setHoveredService(service.id)} onMouseLeave={() => setHoveredService(null)}>
                            <h3 style={styles.serviceTitle}>{service.title}</h3>
                            <p style={styles.serviceDescription}>{service.description}</p>
                            <button onClick={() => scrollToSection("booking-info")} style={styles.serviceButton}>Learn More</button>
                        </div>
                    ))}
                </div>
            </section>

            <section style={styles.whyGlennSection}>
                <img src="https://i.imgur.com/txU6J2n.jpg" alt="Glenn Lundy" style={styles.whyGlennImage} />
                <div style={styles.whyGlennOverlay}></div>
                <div style={styles.whyGlennContent}>
                    <h2 style={styles.whyGlennTitle}>Why <span style={{ color: "#9B59B6" }}>Glenn</span>?</h2>
                    <p style={styles.whyGlennText}>Glenn Lundy isn't just another motivational speaker—he's a proven performer who walks the walk. As the 2023 Great American Speak Off Champion, Glenn has demonstrated his ability to captivate audiences.</p>
                    <p style={styles.whyGlennText}>His authentic approach combines real-world business success with genuine passion. Glenn brings credibility that resonates with audiences across industries.</p>
                </div>
            </section>

            <section style={styles.formSection} id="booking-info">
                <h2 style={styles.sectionTitle}>Begin Your <span style={{ color: "#7B3FBF" }}>Booking</span></h2>
                <div style={styles.formContent}>
                    <div style={styles.formTextContainer}>
                        <p style={styles.formTextStrong}>Ready to transform your event?</p>
                        <p style={styles.formText}>Fill out the form to begin the booking process. Our team will review your event details and reach out to discuss how Glenn can create an unforgettable experience.</p>
                        <p style={styles.formTextHighlight}>Not sure which service is right? We'll help you decide.</p>
                    </div>
                    <div style={{ minHeight: "661px" }}>
                        <iframe src="https://api.leadconnectorhq.com/widget/form/lEsywb7SsyI1iXMZrJW7" style={{ width: "100%", height: "100%", border: "none", borderRadius: "4px" }} id="inline-lEsywb7SsyI1iXMZrJW7" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-form-name="Book Glenn to Speak" data-height="661" title="Book Glenn to Speak" />
                    </div>
                </div>
            </section>

            <section style={styles.finalCTASection}>
                <h2 style={styles.finalCTATitle}>Ready to Transform Your Event?</h2>
                <p style={styles.finalCTAText}>Don't settle for ordinary. Glenn Lundy brings the energy, expertise, and authenticity that will make your event unforgettable.</p>
                <button onClick={() => scrollToSection("booking-info")} style={{ ...styles.ctaButton, backgroundColor: "#fff", color: "#000" }} onMouseEnter={(e) => { e.target.style.backgroundColor = "#9B59B6"; e.target.style.color = "#fff" }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#fff"; e.target.style.color = "#000" }}>Schedule Consultation</button>
            </section>

            <Footer />
        </div>
    )
}