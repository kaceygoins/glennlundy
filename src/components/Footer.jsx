"use client"
import React, { useState, useEffect } from "react"

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const footerLinks = [
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
        { label: "Events", href: "/upcoming-events" },
        { label: "Media Kit", href: "/media-kit" },
        { label: "About", href: "/about" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Contact", href: "/contact" },
    ]

    const socialLinks = [
        {
            name: "TikTok",
            href: "https://www.tiktok.com/@glennlundy",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.5a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.8-.26z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/@glennlundy",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/glennlundy/",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: "Twitter",
            href: "https://x.com/GlennBLundy800",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/OfficialGlennLundy",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
    ]

    const styles = {
        footer: {
            backgroundColor: "#000000",
            borderTop: "1px solid #333",
            padding: isMobile ? "60px 20px" : "100px 0 60px",
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            position: "relative",
            overflow: "hidden",
            color: "#f5f5f5",
        },
        container: {
            maxWidth: "1400px",
            margin: "0 auto",
            padding: isMobile ? "0 20px" : "0 40px",
            position: "relative",
            zIndex: 2,
        },
        footerContent: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
            gap: isMobile ? "40px" : "60px",
        },
        logo: {
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#ffffff",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            display: "block",
            marginBottom: "20px",
        },
        linksSection: {
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "flex-end",
            flexWrap: "wrap",
            gap: "40px",
        },
        footerLink: {
            color: "#888",
            textDecoration: "none",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            transition: "color 0.3s ease",
        },
        copyright: {
            marginTop: "80px",
            paddingTop: "40px",
            borderTop: "1px solid #222",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
            gap: "20px",
            color: "#666",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
        },
    }

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.footerContent}>
                    <div>
                        <a href="/" style={styles.logo}>
                            800% Life
                        </a>
                        <p style={{ color: "#666", lineHeight: "1.6", fontSize: "0.9rem" }}>
                            Elevate your life one morning at a time.
                        </p>
                    </div>
                    <div style={styles.linksSection}>
                        {footerLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                style={styles.footerLink}
                                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                                onMouseLeave={(e) => (e.target.style.color = "#888")}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div style={styles.copyright}>
                    <div>© 2026 GLENN LUNDY</div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                style={{ color: "#666", transition: "color 0.3s" }}
                                onMouseEnter={(e) => (e.target.style.color = "#7B3FBF")}
                                onMouseLeave={(e) => (e.target.style.color = "#666")}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}