"use client"
import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer"

// --- MAIN PAGE ---
export default function FAQ() {
    const [activeItems, setActiveItems] = useState({})
    const [searchTerm, setSearchTerm] = useState("")
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const toggleItem = (category, index) => {
        const key = `${category}-${index}`
        setActiveItems((prev) => ({
            ...prev,
            [key]: !prev[key],
        }))
    }

    const faqData = {
        "About Glenn": [
            {
                question: "Who is Glenn Lundy?",
                answer: "Glenn Lundy is a husband, father of 9, motivational speaker, and former GM of the second-largest used car franchise in the country. He's best known for his high-energy leadership style and for helping dealerships grow by over 800%.",
            },
            {
                question: "What is Glenn Lundy known for?",
                answer: "Glenn is the founder of the 800% Elite Auto Club and the creator of the wildly successful morning show #RiseAndGrind and the author of 'The Legacy Titles'.",
            },
            {
                question: "Can I book Glenn to speak at my event?",
                answer: "Yes! Glenn is available for keynote presentations, workshops, and in-store leadership events. Click here for more info and to submit a booking request.",
            },
            {
                question: "What topics does Glenn typically speak on?",
                answer: "Glenn's repertoire covers transformational leadership, building unstoppable company culture, high-performance team-building, and exponential dealership growth strategies.",
            },
            {
                question:
                    "What's Glenn's background in the automotive industry?",
                answer: "Glenn took a dealership in Paris, Kentucky from 120 to over 1,000 cars per month. With 20+ years of hands-on experience, his strategies come from real-world success.",
            },
            {
                question: "How can I follow Glenn on social media?",
                answer: "Follow @glennlundy on Facebook, Instagram, YouTube, LinkedIn, and X. Join the daily #RiseAndGrind show and access exclusive content at GlennLundy.com.",
            },
        ],
        "About 800% Elite Auto Club": [
            {
                question: "What is the 800% Elite Auto Club?",
                answer: "800% Elite Auto Club is a high-performance dealership consulting and training company that delivers a true whole dealership solution.",
            },
            {
                question: "What makes 800% different?",
                answer: "We deliver 1000+ hours of video content, virtual live weekly training, monthly expert interviews, and access to an exclusive network of elite dealers.",
            },
            {
                question: "Who is the program for?",
                answer: "Our program is built for growth-minded dealership owners, general managers, sales managers, and fixed ops leaders who are serious about leveling up.",
            },
            {
                question: "What's included in membership?",
                answer: "800% Club offers a full suite of services including on-site coaching, virtual training, tailored team development plans, and marketing audits.",
            },
            {
                question: "How do I become a member?",
                answer: "Getting started is easy. Just head to the Apply Now section on GlennLundy.com to schedule a discovery call with our team.",
            },
            {
                question: "What results can I expect?",
                answer: "Our dealers don't just grow, they scale. Many have doubled, tripled, or even 10X'd their monthly volume.",
            },
            {
                question: "Do you have testimonials?",
                answer: "Yes! Check out our testimonial page or follow us on social for real stories from dealers who have grown 800% and beyond.",
            },
        ],
        "Getting Started": [
            {
                question: "Is there a free trial?",
                answer: "Yes! Glenn offers a FREE 6 Day Auto Course jam-packed with content, plus the Morning 5 E-Book. Visit GlennLundy.com to access.",
            },
            {
                question: "What's the investment?",
                answer: "We offer three different membership levels. Each membership is designed to pay for itself through increased performance and profitability.",
            },
            {
                question: "How do I contact the team?",
                answer: "Visit GlennLundy.com to book directly with our team or text 859-251-2988. We respond within 24 hours.",
            },
        ],
    }

    const filteredFAQs = Object.entries(faqData).reduce(
        (acc, [category, items]) => {
            const filtered = items.filter(
                (item) =>
                    item.question
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
            )
            if (filtered.length > 0) {
                acc[category] = filtered
            }
            return acc
        },
        {}
    )

    const styles = {
        container: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#ffffff", // Light Theme
            color: "#1a1a1a",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            overflowX: "hidden",
        },
        hero: {
            padding: isMobile ? "100px 24px 80px" : "120px 40px 100px",
            textAlign: "center",
            position: "relative",
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9f9f9",
        },
        title: {
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "700",
            marginBottom: "24px",
            letterSpacing: "0.05em",
            lineHeight: "1.1",
            textTransform: "uppercase",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            color: "#1a1a1a",
        },
        subtitle: {
            fontSize: "clamp(1rem, 3vw, 1.3rem)",
            color: "#666",
            maxWidth: "800px",
            margin: "0 auto",
            fontWeight: "400",
            lineHeight: "1.6",
        },
        purpleAccent: {
            color: "#7B3FBF",
        },
        content: {
            maxWidth: "1000px",
            margin: "0 auto",
            padding: isMobile ? "40px 20px" : "80px 40px",
        },
        searchContainer: {
            position: "relative",
            marginBottom: "60px",
            maxWidth: "600px",
            margin: "0 auto 80px",
        },
        searchBar: {
            width: "100%",
            padding: "20px 50px 20px 24px",
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: "0", // Sharp corners
            color: "#1a1a1a",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 5px 15px rgba(0,0,0,0.03)",
        },
        searchIcon: {
            position: "absolute",
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#999",
            pointerEvents: "none",
        },
        category: {
            marginBottom: "60px",
        },
        categoryTitle: {
            fontSize: "1.8rem",
            fontWeight: "700",
            marginBottom: "30px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            borderBottom: "1px solid #eee",
            paddingBottom: "10px",
            color: "#1a1a1a",
        },
        faqGrid: {
            display: "grid",
            gap: "10px",
        },
        faqItem: {
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #eee",
            overflow: "hidden",
            cursor: "pointer",
            transition: "all 0.3s ease",
        },
        question: {
            padding: "20px 0",
            fontWeight: "600",
            fontSize: "1.1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#333",
        },
        icon: {
            fontSize: "1.5rem",
            color: "#7B3FBF",
            transition: "transform 0.3s ease",
            display: "inline-block",
            fontWeight: "300",
            marginLeft: "20px",
        },
        iconActive: {
            transform: "rotate(45deg)",
        },
        answer: {
            padding: "0 0 20px 0",
            color: "#666",
            lineHeight: "1.8",
            fontSize: "1rem",
            overflow: "hidden",
            transition: "all 0.3s ease",
            maxHeight: "0",
            opacity: "0",
        },
        answerActive: {
            maxHeight: "500px",
            opacity: "1",
        },
        cta: {
            marginTop: "80px",
            padding: "80px 40px",
            backgroundColor: "#1a1a1a",
            textAlign: "center",
            color: "#ffffff",
        },
        ctaTitle: {
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "20px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
        },
        ctaSubtitle: {
            color: "#ccc",
            marginBottom: "40px",
            fontSize: "1.1rem",
        },
        ctaButton: {
            display: "inline-block",
            padding: "18px 40px",
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            borderRadius: "0",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            transition: "all 0.3s ease",
            border: "1px solid #ffffff",
        },
        // SCROLL INDICATOR ANIMATION
        scrollIndicator: {
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "-5px",
            animation: "bounce 2s infinite",
            cursor: "pointer",
        },
    }

    // Interactive Styles
    const [hoveredItem, setHoveredItem] = useState(null)
    const [hoveredCta, setHoveredCta] = useState(false)

    return (
        <div style={styles.container}>
            <style>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateX(-50%) translateY(0);}
                    40% {transform: translateX(-50%) translateY(-10px);}
                    60% {transform: translateX(-50%) translateY(-5px);}
                }
                .faq-item:hover .question-text { color: #7B3FBF; }
            `}</style>

            <div style={styles.hero}>
                <h1 style={styles.title}>
                    Frequently Asked{" "}
                    <span style={styles.purpleAccent}>Questions</span>
                </h1>
                <p style={styles.subtitle}>
                    Because we're the only complete dealership solution of our
                    kind, we get a lot of questions. From leadership and
                    marketing to service drive and sales training, we cover it
                    all right here.
                </p>

                {/* DOUBLE DOWN PURPLE SCROLL INDICATOR */}
                <div
                    style={styles.scrollIndicator}
                    onClick={() =>
                        window.scrollTo({
                            top: window.innerHeight * 0.8,
                            behavior: "smooth",
                        })
                    }
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#7B3FBF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginBottom: "-15px" }}
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#7B3FBF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>
            </div>

            <div style={styles.content}>
                <div style={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={styles.searchBar}
                        onFocus={(e) =>
                            (e.target.style.borderColor = "#7B3FBF")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                    />
                    <svg
                        style={styles.searchIcon}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </div>

                {Object.entries(filteredFAQs).map(([category, items]) => (
                    <div key={category} style={styles.category}>
                        <h2 style={styles.categoryTitle}>{category}</h2>
                        <div style={styles.faqGrid}>
                            {items.map((item, index) => {
                                const itemKey = `${category}-${index}`
                                const isActive = activeItems[itemKey]
                                const isHovered = hoveredItem === itemKey

                                return (
                                    <div
                                        key={index}
                                        style={styles.faqItem}
                                        className="faq-item"
                                        onMouseEnter={() =>
                                            setHoveredItem(itemKey)
                                        }
                                        onMouseLeave={() =>
                                            setHoveredItem(null)
                                        }
                                        onClick={() =>
                                            toggleItem(category, index)
                                        }
                                    >
                                        <div style={styles.question}>
                                            <span
                                                className="question-text"
                                                style={{
                                                    transition: "color 0.3s",
                                                }}
                                            >
                                                {item.question}
                                            </span>
                                            <span
                                                style={{
                                                    ...styles.icon,
                                                    ...(isActive
                                                        ? styles.iconActive
                                                        : {}),
                                                }}
                                            >
                                                +
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                ...styles.answer,
                                                ...(isActive
                                                    ? styles.answerActive
                                                    : {}),
                                            }}
                                        >
                                            {item.answer}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}

                <div style={styles.cta}>
                    <h3 style={styles.ctaTitle}>
                        Ready to Unlock Your Potential?
                    </h3>
                    <p style={styles.ctaSubtitle}>
                        Join the 800% Elite Auto Club and transform your
                        dealership today.
                    </p>
                    <a
                        href="/800#get-started-today"
                        style={{
                            ...styles.ctaButton,
                            backgroundColor: hoveredCta ? "#7B3FBF" : "#ffffff",
                            color: hoveredCta ? "#ffffff" : "#1a1a1a",
                            borderColor: hoveredCta ? "#7B3FBF" : "#ffffff",
                        }}
                        onMouseEnter={() => setHoveredCta(true)}
                        onMouseLeave={() => setHoveredCta(false)}
                    >
                        Schedule Discovery Call
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}
