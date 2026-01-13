"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

const navigationItems = [
    { id: "speaker-bio", label: "Speaker Bio" },
    { id: "brand-logos", label: "Brand Logos" },
    { id: "approved-images", label: "Headshots" },
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "usage-guidelines", label: "Usage Guidelines" },
    { id: "specs", label: "Tech Specs" },
    { id: "download", label: "Download Kit" },
]

const brandColors = [
    { name: "Dark Background", hex: "#1a1a1a", usage: "Primary backgrounds" },
    { name: "Light Text", hex: "#f5f5f5", usage: "Primary text" },
    { name: "Purple Accent", hex: "#9b59b6", usage: "Accent colors" },
    { name: "Purple Primary", hex: "#7b3fbf", usage: "Buttons, actions" },
    { name: "Gray Accent", hex: "#939393", usage: "Secondary text" },
]

const speakerBios = [
    { title: "Short Bio (100 Words)", content: "Glenn Lundy is a renowned leadership coach, keynote speaker, and automotive expert who transformed a small-town dealership into the second-largest used car franchise in America with 800% growth. As the host of the popular daily show #RiseAndGrind and creator of the 800% Elite Automotive Club, Glenn has inspired thousands to unlock their potential. His unique approach combines proven business strategies with personal development principles, helping leaders create cultures of excellence. A father of eight, Glenn proves that success in business doesn't have to come at the expense of family." },
    { title: "Medium Bio (200 Words)", content: "Glenn Lundy is a dynamic leadership coach, keynote speaker, and growth strategist who has made national headlines for his extraordinary business achievements. He grew a small-town dealership by 800% in just five years, turning it into the second-largest used car franchise in the United States. This success became the foundation for his 800% Elite Automotive Club, where he now trains dealership owners and general managers on how to build scalable, people-first cultures.\n\nBeyond the automotive world, Glenn is the host of #RiseAndGrind, a morning show that motivates thousands of daily viewers to start their day with purpose. He is also the author of The Legacy Titles, a transformative book on leadership and identity. Glenn's philosophy is simple: when you change the way you start your day, you change your life. With a background that spans from homelessness to high-level executive success, Glenn brings an authentic, high-energy perspective that resonates with audiences everywhere. He currently resides in Kentucky with his wife and eight children." },
    { title: "Long Bio (300+ Words)", content: "Glenn Lundy is a transformational leadership coach, dynamic keynote speaker, and proven growth strategist whose extraordinary journey from struggling dealership to national success story has captivated the automotive industry. Glenn first made waves by taking a small, local dealership in Kentucky and growing it by 800% in five years, eventually establishing it as the second-largest used car franchise in the country. This unprecedented growth wasn't just about sales tactics; it was about culture, people, and process.\n\nToday, Glenn is the founder of the 800% Elite Automotive Club, a premier training organization that helps dealerships nationwide implement his proven methodologies. He challenges leaders to rethink their approach to management, emphasizing 'The Morning 5' routine and the power of human connection. His strategies have helped countless organizations reduce turnover, increase profitability, and create work environments where employees thrive.\n\nIn addition to his consulting work, Glenn is a media personality and content creator. He hosts #RiseAndGrind, the most popular daily morning show on Facebook, where he delivers high-octane motivation and actionable advice to a global audience. He is also the author of The Legacy Titles, a parable about leadership and the roles we play in life.\n\nWhat sets Glenn apart is his authenticity. He speaks openly about his past struggles, including homelessness and personal setbacks, using his story to demonstrate that anyone can rewrite their future. Glenn's energy is infectious, and his message is clear: true success starts with how you lead yourself. A devoted husband and father of eight, Glenn is living proof that you can build a massive business empire without sacrificing what matters most at home." },
]

const officialLogos = [
    { id: 1, title: "800% Logo, Black", url: "https://imgur.com/b8Q4KGM.png", description: "Primary logo for light backgrounds." },
    { id: 2, title: "800% Elite Auto Club Logo, Black", url: "https://imgur.com/Dui4uZe.png", description: "Full club logo for light backgrounds." },
    { id: 3, title: "800% Logo, White", url: "https://imgur.com/WeTEWbX.png", description: "Primary logo for dark backgrounds." },
    { id: 4, title: "800% Elite Auto Club Logo, White", url: "https://imgur.com/kHxjNwH.png", description: "Full club logo for dark backgrounds." },
]

const approvedImages = [
    { title: "Keynote Speaker Headshot", description: "High-resolution headshot for event programs.", src: "https://i.imgur.com/txU6J2n.jpg", downloadUrl: "#" },
    { title: "Action Shot - Speaking", description: "Dynamic shot of Glenn Lundy presenting on stage.", src: "https://i.imgur.com/MC9C4Ta.jpg", downloadUrl: "#" },
    { title: "Casual Portrait", description: "Warm, approachable portrait for bio pages.", src: "https://i.imgur.com/aqM8o3S.jpg", downloadUrl: "#" },
]

const usageGuidelines = [
    { title: "Brand Logos", dos: ["Use official logos provided", "Maintain proper clear space", "Respect minimum size requirements"], donts: ["Recreate or modify the logo", "Distort or stretch the logo", "Place logo on busy backgrounds"] },
    { title: "Color Guidelines", dos: ["Use primary colors for main elements", "Ensure sufficient contrast", "Follow accessibility standards"], donts: ["Create new tints or shades", "Combine vibrating colors", "Use colors on unapproved backgrounds"] },
]

const techSpecs = [
    { title: "Logo Formats", value: "PNG, SVG, JPG", description: "High-resolution formats for all applications" },
    { title: "Minimum Size", value: "120px", description: "Minimum width for logo legibility" },
    { title: "Clear Space", value: "2x Height", description: "Minimum clear space around logo" },
    { title: "Print Resolution", value: "300 DPI", description: "Minimum resolution for print materials" },
]

export default function MediaKit() {
    const [copiedColor, setCopiedColor] = useState(null)
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [expandedSections, setExpandedSections] = useState({})

    const copyToClipboard = (text, colorName) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedColor(colorName)
            setTimeout(() => setCopiedColor(null), 2000)
        })
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 100
            window.scrollTo({ top: y, behavior: "smooth" })
        }
    }

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    const toggleSection = (sectionId) => setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }))

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 300)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://link.msgsndr.com/js/form_embed.js"
        script.async = true
        document.body.appendChild(script)
        return () => { if (document.body.contains(script)) document.body.removeChild(script) }
    }, [])

    const styles = {
        container: { width: "100%", minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", overflowX: "hidden" },
        hero: { padding: isMobile ? "80px 20px 40px" : "120px 40px", textAlign: "center", maxWidth: "1400px", margin: "0 auto", backgroundColor: "#f9f9f9" },
        heroTitle: { fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', lineHeight: "1.1", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a" },
        heroSubtitle: { fontSize: "clamp(1rem, 2.5vw, 1.3rem)", color: "#666", marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px", lineHeight: "1.6" },
        quickNavSection: { backgroundColor: "#ffffff", border: "1px solid #eee", borderRadius: "0", padding: "40px", margin: "0 auto 60px", maxWidth: "1400px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" },
        quickNavGrid: { display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" },
        quickNavButton: { padding: "15px 30px", background: "transparent", border: "1px solid #1a1a1a", borderRadius: "0", color: "#1a1a1a", textDecoration: "none", textAlign: "center", fontWeight: "600", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.3s ease", cursor: "pointer" },
        section: { padding: isMobile ? "40px 20px" : "80px 40px", maxWidth: "1400px", margin: "0 auto" },
        sectionTitle: { fontSize: "2.5rem", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', marginBottom: "40px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", borderBottom: "2px solid #7B3FBF", display: "inline-block", paddingBottom: "10px" },
        card: { backgroundColor: "#ffffff", border: "1px solid #eee", borderRadius: "0", padding: "40px", marginBottom: "30px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", transition: "all 0.3s ease" },
        logoPreviewBox: { height: "200px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e0e0e0", backgroundImage: `linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)`, backgroundSize: "20px 20px", backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px", padding: "20px", border: "1px solid #ddd" },
        logoImage: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" },
        colorsGrid: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)", gap: "20px" },
        colorCard: { backgroundColor: "#fff", border: "1px solid #eee", padding: "20px", textAlign: "center", cursor: "pointer", transition: "all 0.3s ease" },
        colorSwatch: { height: "80px", width: "100%", marginBottom: "15px", border: "1px solid #eee" },
        downloadButton: { display: "inline-block", marginTop: "10px", color: "#7B3FBF", fontWeight: "700", fontSize: "0.9rem", textTransform: "uppercase", textDecoration: "none" },
        accordionHeader: { backgroundColor: "#f9f9f9", padding: "20px 30px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" },
        accordionContent: { padding: "30px", lineHeight: "1.8", color: "#555" },
        downloadSection: { backgroundColor: "#1a1a1a", color: "#ffffff", padding: "80px 40px", textAlign: "center", marginTop: "60px" },
        downloadTitle: { fontSize: "2.5rem", fontWeight: "700", fontFamily: 'Georgia, "Times New Roman", Times, serif', marginBottom: "20px", color: "#fff" },
        scrollToTop: { position: "fixed", bottom: "30px", right: "30px", width: "50px", height: "50px", backgroundColor: "#7B3FBF", color: "#fff", border: "none", borderRadius: "50%", cursor: "pointer", display: showScrollTop ? "flex" : "none", alignItems: "center", justifyContent: "center", zIndex: 1000, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
    }

    return (
        <div style={styles.container}>
            <style>{`
                @media (max-width: 768px) { .quick-nav-grid { flex-direction: column; } .quick-nav-button { width: 100%; } .image-grid { grid-template-columns: 1fr; } .colors-grid { grid-template-columns: 1fr; } }
                .image-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
                .color-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
                .quick-nav-button:hover { background-color: #1a1a1a; color: #fff; }
            `}</style>

            <header style={styles.hero}>
                <h1 style={styles.heroTitle}>Media <span style={{ color: "#9B59B6" }}>Kit</span></h1>
                <p style={styles.heroSubtitle}>Official resources, bios, and brand assets for Glenn Lundy. Everything you need to feature Glenn in your publication or event.</p>
            </header>

            <div style={styles.quickNavSection}>
                <div style={styles.quickNavGrid}>
                    {navigationItems.map((item) => (<button key={item.id} onClick={() => scrollToSection(item.id)} style={styles.quickNavButton} className="quick-nav-button">{item.label}</button>))}
                </div>
            </div>

            <section id="speaker-bio" style={styles.section}>
                <h2 style={styles.sectionTitle}>Speaker Bios</h2>
                {speakerBios.map((bio, index) => (
                    <div key={index} style={{ marginBottom: "20px", border: "1px solid #eee" }}>
                        <div style={styles.accordionHeader} onClick={() => toggleSection(`bio-${index}`)}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: "700", margin: 0 }}>{bio.title}</h3>
                            <span>{expandedSections[`bio-${index}`] ? "−" : "+"}</span>
                        </div>
                        {expandedSections[`bio-${index}`] && (
                            <div style={styles.accordionContent}>
                                <p style={{ margin: 0, whiteSpace: "pre-line" }}>{bio.content}</p>
                                <button onClick={() => copyToClipboard(bio.content, `Bio ${index}`)} style={{ marginTop: "20px", background: "none", border: "none", color: "#7B3FBF", cursor: "pointer", fontWeight: "600" }}>{copiedColor === `Bio ${index}` ? "Copied!" : "Copy to Clipboard"}</button>
                            </div>
                        )}
                    </div>
                ))}
            </section>

            <section id="brand-logos" style={styles.section}>
                <h2 style={styles.sectionTitle}>Brand Logos</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                    {officialLogos.map((logo) => (
                        <div key={logo.id} style={styles.card} className="image-card">
                            <div style={styles.logoPreviewBox}><img src={logo.url} alt={logo.title} style={styles.logoImage} /></div>
                            <div style={{ padding: "0 20px 20px" }}>
                                <h3 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "10px", color: "#1a1a1a" }}>{logo.title}</h3>
                                <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "15px" }}>{logo.description}</p>
                                <a href={logo.url} target="_blank" rel="noopener noreferrer" style={styles.downloadButton}>Download High-Res PNG ↓</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="approved-images" style={styles.section}>
                <h2 style={styles.sectionTitle}>Approved Headshots</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                    {approvedImages.map((img, index) => (
                        <div key={index} style={{ ...styles.card, padding: 0, overflow: "hidden" }} className="image-card">
                            <img src={img.src} alt={img.title} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                            <div style={{ padding: "20px" }}>
                                <h3 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "5px" }}>{img.title}</h3>
                                <p style={{ fontSize: "0.9rem", color: "#666" }}>{img.description}</p>
                                <a href={img.downloadUrl} style={styles.downloadButton}>Download High-Res ↓</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="colors" style={styles.section}>
                <h2 style={styles.sectionTitle}>Brand Colors</h2>
                <div style={styles.colorsGrid} className="colors-grid">
                    {brandColors.map((color, index) => (
                        <div key={index} style={styles.colorCard} className="color-card" onClick={() => copyToClipboard(color.hex, color.name)}>
                            <div style={{ ...styles.colorSwatch, backgroundColor: color.hex }}></div>
                            <h3 style={{ fontSize: "0.9rem", fontWeight: "700", marginBottom: "5px" }}>{color.name}</h3>
                            <p style={{ fontFamily: "monospace", color: "#666", fontSize: "0.85rem" }}>{color.hex}</p>
                            {copiedColor === color.name && <span style={{ color: "#7B3FBF", fontSize: "0.75rem", fontWeight: "bold" }}>Copied!</span>}
                        </div>
                    ))}
                </div>
            </section>

            <section id="specs" style={styles.section}>
                <h2 style={styles.sectionTitle}>Tech Specs</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                    {techSpecs.map((spec, index) => (
                        <div key={index} style={{ padding: "30px", border: "1px solid #eee", backgroundColor: "#fff", textAlign: "center", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                            <h4 style={{ fontSize: "0.9rem", color: "#7B3FBF", fontWeight: "700", marginBottom: "10px" }}>{spec.title}</h4>
                            <p style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px" }}>{spec.value}</p>
                            <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.4" }}>{spec.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="usage-guidelines" style={styles.section}>
                <h2 style={styles.sectionTitle}>Usage Guidelines</h2>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "30px" }}>
                    {usageGuidelines.map((guide, index) => (
                        <div key={index} style={{ ...styles.card, padding: "30px" }}>
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "20px" }}>{guide.title}</h3>
                            <div style={{ marginBottom: "20px" }}>
                                <strong style={{ color: "#2ecc71", display: "block", marginBottom: "10px" }}>DO:</strong>
                                <ul style={{ paddingLeft: "20px", color: "#666", fontSize: "0.9rem", lineHeight: "1.6" }}>{guide.dos.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>
                            <div>
                                <strong style={{ color: "#e74c3c", display: "block", marginBottom: "10px" }}>DON'T:</strong>
                                <ul style={{ paddingLeft: "20px", color: "#666", fontSize: "0.9rem", lineHeight: "1.6" }}>{guide.donts.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="download" style={styles.downloadSection}>
                <h2 style={styles.downloadTitle}>Download Full Media Kit</h2>
                <p style={{ maxWidth: "600px", margin: "0 auto 40px", fontSize: "1.1rem", color: "#ccc" }}>Get access to the complete ZIP file containing all high-resolution logos, images, and brand guidelines.</p>
                <div style={{ maxWidth: "600px", margin: "0 auto", height: "500px", background: "#fff", borderRadius: "10px", overflow: "hidden" }}>
                    <iframe src="https://api.leadconnectorhq.com/widget/form/lEsywb7SsyI1iXMZrJW7" style={{ width: "100%", height: "100%", border: "none" }} title="Download Media Kit Form" />
                </div>
            </section>

            <button style={styles.scrollToTop} onClick={scrollToTop}>↑</button>

            <Footer />
        </div>
    )
}
