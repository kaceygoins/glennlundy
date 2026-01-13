"use client"
import React from "react"

export default function ScrollIndicator({ targetId, style, isMobile }) {
    const handleClick = () => {
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const defaultStyle = {
        position: "absolute",
        bottom: "40px",
        right: isMobile ? "auto" : "40px",
        left: isMobile ? "50%" : "auto",
        transform: isMobile ? "translateX(-50%)" : "none",
        zIndex: 100,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#9B59B6",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
        ...style,
    }

    const chevronStyle = {
        width: "40px",
        height: "40px",
        marginTop: "-20px",
        animation: "bounce 2s infinite",
    }

    return (
        <div className="scroll-indicator" style={defaultStyle} onClick={handleClick}>
            <svg
                style={chevronStyle}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <svg
                style={{ ...chevronStyle, opacity: 0.7, animationDelay: "0.1s" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>
    )
}