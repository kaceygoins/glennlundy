"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

const writtenTestimonials = [
    { id: "written-1", type: "written", name: "Bob Kain", title: "General Manager and Vice President", company: "Jack Kain Ford", image: "https://imgur.com/JlBnEcs.jpg", headlineQuote: "Increased sales over 136% in 90 days.", bodyQuote: "In fact, in January, we set a company record by selling more vehicles in the month of January than we have ever done in 61 years of business. I'd highly recommend Glenn Lundy and the 800% Club to anybody." },
    { id: "written-2", type: "written", name: "Jean Paul Guidry", title: "Owner", company: "Motor City LA", image: "https://imgur.com/FKZIDEK.jpg", headlineQuote: "Three massive increases: 156%, 106%, and 112%.", bodyQuote: "I've been part of the 800% Club now for 90 days and I've experienced three pretty massive increases over the last three months. It's an unbelievable program and I'm so proud to be a part of it." },
    { id: "written-3", type: "written", name: "Kevin Strosnider", title: "General Manager", company: "Strosnider Chevrolet", image: "https://imgur.com/Ss0hlY8.jpg", headlineQuote: "After 90 days with Glenn, we saw an increase of 50%.", bodyQuote: "I cannot thank Glenn and the 800% Club enough. Not only is it about Glenn, but it's about the camaraderie that you get from being with the other members of the 800% Club." },
]

const videoTestimonials = [
    { id: "video-1", type: "video", embedUrl: "https://www.youtube.com/embed/EpSxXb3-uT0?si=6nxBSw2tLSbsSXbA", title: "Aaron Lange", description: "Aaron shares his experience with 800% and how it has transformed his dealership" },
    { id: "video-2", type: "video", embedUrl: "https://www.youtube.com/embed/NxzBIv1coIY?si=gt4oQySYV7NnQ_2s", title: "Alex Flores", description: "One word from Alex? Life changing! Watch his full story" },
    { id: "video-3", type: "video", embedUrl: "https://www.youtube.com/embed/_Msei9Zm-6Y?si=F6J17uEkUu8wCJ7f", title: "Carla Cosenzi", description: "Carla walks through the results she experienced after joining 800% Club" },
    { id: "video-4", type: "video", embedUrl: "https://www.youtube.com/embed/kDim4FEg0YY?si=AnYOgogYHbaBeze1", title: "Jamaal McCoy", description: "Jamaal couldn't believe the impact! Watch his testimonial" },
    { id: "video-5", type: "video", embedUrl: "https://www.youtube.com/embed/g31CUUGbLtU?si=3_XMlG5RMJtWdbDb", title: "Kevin Strosnider", description: "Kevin gets real about how 800% Club helped him level up" },
    { id: "video-6", type: "video", embedUrl: "https://www.youtube.com/embed/neqOE0U_ApY?si=mFBMCGe7CqrKHgrz", title: "Michele & Melissa", description: "The Rainbow Sisters have nothing but positive things to share about their 800% experience!" },
    { id: "video-7", type: "video", embedUrl: "https://www.youtube.com/embed/73V5vTNI9Vg?si=NM2dxp4LyATbOujs", title: "Kelly Alston", description: "Real results, real story - Kelly shares his experience" },
    { id: "video-8", type: "video", embedUrl: "https://www.youtube.com/embed/V3OxcRBcDVg?si=uH5KbsQWNU5E-LI7", title: "Rahim Bhimani", description: "Rahim talks about the powerful changes he has seen since joining 800% Club" },
    { id: "video-9", type: "video", embedUrl: "https://www.youtube.com/embed/DcNdErG5S_E?si=-r1F3mQL7Bor32s9", title: "Brock Tuffs", description: "Brock opens up about his journey with Glenn & the 800% team" },
]

const allTestimonials = [...writtenTestimonials, ...videoTestimonials]

export default function TestimonialsPage() {
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
        hero: { padding: isMobile ? "80px 20px" : "120px 40px", textAlign: "center", position: "relative", backgroundColor: "#f9f9f9" },
        title: { fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px", color: "#1a1a1a" },
        subtitle: { fontSize: "1.1rem", color: "#666", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" },
        content: { maxWidth: "1400px", margin: "0 auto", padding: isMobile ? "60px 20px" : "80px 40px" },
        testimonialsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "80px" },
        testimonialCard: { backgroundColor: "#ffffff", border: "1px solid #eee", padding: "40px", display: "flex", flexDirection: "column", transition: "all 0.3s ease", position: "relative", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" },
        testimonialCardHover: { transform: "translateY(-5px)", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", borderColor: "transparent" },
        videoContainer: { width: "100%", marginBottom: "20px", position: "relative", paddingTop: "56.25%", backgroundColor: "#000" },
        videoFrame: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" },
        videoTitle: { fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        videoDesc: { fontSize: "0.9rem", color: "#666", lineHeight: "1.5" },
        quoteIcon: { fontSize: "2rem", color: "#9B59B6", fontFamily: "Georgia, serif", lineHeight: "1", display: "block", marginBottom: "15px", fontStyle: "italic" },
        headlineQuote: { fontSize: "1.25rem", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', fontStyle: "italic", lineHeight: "1.4", color: "#1a1a1a", marginBottom: "20px" },
        bodyQuote: { fontSize: "0.95rem", lineHeight: "1.7", color: "#666", marginBottom: "30px", flex: 1 },
        divider: { height: "1px", backgroundColor: "#eee", width: "100%", marginBottom: "20px" },
        authorSection: { display: "flex", alignItems: "center" },
        authorImage: { width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px", objectFit: "cover" },
        authorName: { fontSize: "0.9rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px", color: "#1a1a1a" },
        authorTitle: { fontSize: "0.8rem", color: "#9B59B6" },
        ctaSection: { textAlign: "center", padding: "80px 20px", backgroundColor: "#111", color: "#fff", marginBottom: "-1px" },
        ctaTitle: { fontSize: "2.5rem", fontWeight: "700", textTransform: "uppercase", marginBottom: "20px", fontFamily: 'Georgia, "Times New Roman", Times, serif' },
        ctaButton: { display: "inline-block", padding: "20px 50px", backgroundColor: "#fff", color: "#000", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", marginTop: "30px", transition: "all 0.3s ease" },
    }

    return (
        <>
            <div style={styles.container}>
                <div style={styles.hero}>
                    <h1 style={styles.title}>Client <span style={{ color: "#9B59B6" }}>Testimonials</span></h1>
                    <p style={styles.subtitle}>Hear from dealership leaders who've transformed their businesses and teams with Glenn Lundy's proven methodology. Real stories, real results.</p>
                </div>

                <div style={styles.content}>
                    <div style={styles.testimonialsGrid}>
                        {allTestimonials.map((testimonial) => (
                            <div key={testimonial.id} style={{ ...styles.testimonialCard, ...(hoveredCard === testimonial.id ? styles.testimonialCardHover : {}) }} onMouseEnter={() => setHoveredCard(testimonial.id)} onMouseLeave={() => setHoveredCard(null)}>
                                {testimonial.type === "video" ? (
                                    <><div style={styles.videoContainer}><iframe style={styles.videoFrame} src={testimonial.embedUrl} title={testimonial.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div><h3 style={styles.videoTitle}>{testimonial.title}</h3><p style={styles.videoDesc}>{testimonial.description}</p></div></>
                                ) : (
                                    <><span style={styles.quoteIcon}>"</span><div style={styles.headlineQuote}>{testimonial.headlineQuote}</div><p style={styles.bodyQuote}>"{testimonial.bodyQuote}"</p><div style={styles.divider}></div><div style={styles.authorSection}><img src={testimonial.image} alt={testimonial.name} style={styles.authorImage} /><div><div style={styles.authorName}>{testimonial.name}</div><div style={styles.authorTitle}>{testimonial.company}</div></div></div></>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={styles.ctaSection}>
                    <h2 style={styles.ctaTitle}>Ready to Transform?</h2>
                    <p style={{ color: "#999", maxWidth: "600px", margin: "0 auto" }}>Join hundreds of dealership leaders who have unlocked their full potential.</p>
                    <a href="/800" style={styles.ctaButton} onMouseEnter={(e) => { e.target.style.backgroundColor = "#9B59B6"; e.target.style.color = "#fff" }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#fff"; e.target.style.color = "#000" }}>Start Your Journey</a>
                </div>

                <Footer />
            </div>
        </>
    )
}