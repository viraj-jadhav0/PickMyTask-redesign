"use client"

import { useState, useRef } from "react"

// SVG Icons as components
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
)

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

const DollarSignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
)

export default function FeatureCards({ showContent }) {
  return (
    <div className="w-full py-16" style={{ backgroundColor: "#001413" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className={`inline-block px-4 py-1.5 bg-[#029791]/20 rounded-full text-sm font-medium text-[#029791] mb-4 entrance-bounce-in stagger-1 ${showContent ? "animate" : ""}`}
          >
            KEY FEATURES
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 entrance-fade-up stagger-2 ${showContent ? "animate" : ""}`}
          >
            <span className="text-white">What Makes </span>
            <span className="text-[#029791]">PickMyTask™</span>
            <span className="text-white"> Different</span>
          </h2>
          <p className={`text-gray-300 max-w-2xl mx-auto entrance-fade-up stagger-3 ${showContent ? "animate" : ""}`}>
            Our app is designed to make local task-sharing simple, secure, and efficient.
          </p>
          <div
            className={`w-24 h-0.5 bg-white mx-auto mt-8 entrance-scale-up stagger-4 ${showContent ? "animate" : ""}`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className={`entrance-scale-up stagger-5 ${showContent ? "animate" : ""}`}>
            <TiltCard icon={<ClockIcon />} title="On-demand Assistance" description="For everyday chores and tasks" />
          </div>
          <div className={`entrance-scale-up stagger-6 ${showContent ? "animate" : ""}`}>
            <TiltCard icon={<ShieldIcon />} title="Trustworthy Helpers" description="Background-checked and verified" />
          </div>
          <div className={`entrance-scale-up stagger-7 ${showContent ? "animate" : ""}`}>
            <TiltCard icon={<ArrowRightIcon />} title="Simple Booking" description="Easy process through mobile app" />
          </div>
          <div className={`entrance-scale-up stagger-8 ${showContent ? "animate" : ""}`}>
            <TiltCard icon={<DollarSignIcon />} title="Free for Posters" description="No cost to post your tasks" />
          </div>
        </div>
      </div>
    </div>
  )
}

function TiltCard({ icon, title, description }) {
  const cardRef = useRef(null)
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "all 0.1s ease",
    backgroundColor: "#121212",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(8px)",
    borderRadius: "0.75rem",
    padding: "2rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 10px 30px -15px rgba(2, 151, 145, 0.2)",
  })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setTiltStyle({
      ...tiltStyle,
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "all 0.1s ease",
      boxShadow: "0 15px 35px -15px rgba(2, 151, 145, 0.3)",
    })
  }

  const handleMouseLeave = () => {
    setTiltStyle({
      ...tiltStyle,
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s ease",
      boxShadow: "0 10px 30px -15px rgba(2, 151, 145, 0.2)",
    })
  }

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={tiltStyle}>
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: "rgba(0, 26, 25, 0.7)" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
