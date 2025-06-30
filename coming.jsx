"use client"

import { useEffect, useRef, useState } from "react"

export default function ComingSoonSection({ showContent }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen text-white py-16 px-6 flex items-center justify-center">
      {/* Glass Box Container */}
      <div
        className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 max-w-5xl mx-auto text-center shadow-2xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
        }`}
      >
        {/* Coming Soon Badge */}
        <div
          className={`inline-block mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#029791] bg-[#029791]/20 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase border border-[#029791]/30">
            Coming Soon
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          Task sharing made easier
        </h1>

        {/* Description */}
        <p
          className={`text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-15"
          }`}
        >
          Connect with trusted local helpers who can take care of your everyday tasks. Be among the first to experience
          PickMyTask™ in your area.
        </p>

        {/* CTA Button */}
        <div
          className={`mb-12 transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <button className="group relative inline-flex items-center bg-[#029791] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#027368] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#029791]/30">
            <svg
              className="w-5 h-5 mr-3 group-hover:rotate-90 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <span>Join Waiting List</span>
          </button>
        </div>

        {/* Logo in Card Container */}
        <div
          className={`transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90"
          }`}
        >
          <LogoCard />
        </div>
      </div>
    </div>
  )
}

function LogoCard() {
  const [isSquareHovered, setIsSquareHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const logoRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!logoRef.current) return

    const rect = logoRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) / 30
    const deltaY = (e.clientY - centerY) / 30

    setMousePosition({ x: deltaX, y: deltaY })
  }

  const handleCardMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const handleSquareMouseEnter = () => {
    setIsSquareHovered(true)
  }

  const handleSquareMouseLeave = () => {
    setIsSquareHovered(false)
  }

  return (
    <>
      <style jsx>{`
        @keyframes orbit-clockwise {
          from {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        @keyframes orbit-counterclockwise {
          from {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          to {
            transform: rotate(-360deg) translateX(50px) rotate(360deg);
          }
        }

        @keyframes square-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .orbit-clockwise {
          animation: orbit-clockwise 4s ease-in-out infinite;
        }

        .orbit-counterclockwise {
          animation: orbit-counterclockwise 4s ease-in-out infinite;
        }

        .square-spinning {
          animation: square-spin 2s ease-in-out infinite;
        }
      `}</style>

      <div className="flex justify-center">
        {/* Card Container for Logo */}
        <div
          ref={logoRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleCardMouseLeave}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12 shadow-lg cursor-pointer transition-all duration-500 hover:shadow-xl hover:bg-white/10 hover:border-[#029791]/30"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {/* Logo Container */}
          <div className="relative w-32 h-32 mx-auto">
            {/* Blue Circle - Orbiting */}
            <div
              className={`absolute w-8 h-8 bg-blue-500 rounded-full transition-all duration-700 ease-in-out ${
                isSquareHovered ? "orbit-clockwise" : ""
              }`}
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-16px",
                marginLeft: "-16px",
                transformOrigin: "16px 16px",
                boxShadow: isSquareHovered
                  ? "0 8px 20px rgba(59, 130, 246, 0.4)"
                  : "0 4px 10px rgba(59, 130, 246, 0.2)",
                transform: !isSquareHovered ? "translateX(-50px) translateY(-20px)" : "",
              }}
            />

            {/* Blue Square - Center */}
            <div
              className={`absolute w-6 h-6 bg-blue-600 transition-all duration-500 cursor-pointer z-10 ${
                isSquareHovered ? "square-spinning" : ""
              }`}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "3px",
                boxShadow: isSquareHovered ? "0 6px 15px rgba(37, 99, 235, 0.4)" : "0 3px 8px rgba(37, 99, 235, 0.2)",
              }}
              onMouseEnter={handleSquareMouseEnter}
              onMouseLeave={handleSquareMouseLeave}
            />

            {/* Green Circle - Orbiting */}
            <div
              className={`absolute w-8 h-8 rounded-full transition-all duration-700 ease-in-out ${
                isSquareHovered ? "orbit-counterclockwise" : ""
              }`}
              style={{
                backgroundColor: "#029791",
                top: "50%",
                left: "50%",
                marginTop: "-16px",
                marginLeft: "-16px",
                transformOrigin: "16px 16px",
                boxShadow: isSquareHovered ? "0 8px 20px rgba(2, 151, 145, 0.4)" : "0 4px 10px rgba(2, 151, 145, 0.2)",
                transform: !isSquareHovered ? "translateX(50px) translateY(20px)" : "",
              }}
            />

            {/* Center Glow Effect */}
            {isSquareHovered && (
              <div
                className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full opacity-30 blur-md transition-all duration-700"
                style={{
                  backgroundColor: "#029791",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
