"use client"

import { useEffect, useRef, useState } from "react"

export default function InvestmentContactSection({ showContent }) {
  const [isVisible, setIsVisible] = useState({
    investment: false,
    contact: false,
  })
  const investmentRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "investment-section" && entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, investment: true }))
          }
          if (entry.target.id === "contact-section" && entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, contact: true }))
          }
        })
      },
      { threshold: 0.2 },
    )

    if (investmentRef.current) observer.observe(investmentRef.current)
    if (contactRef.current) observer.observe(contactRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="text-white">
      {/* Investment Opportunity Section */}
      <div
        ref={investmentRef}
        id="investment-section"
        className="min-h-screen flex items-center justify-center py-16 px-6"
      >
        <div
          className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 max-w-5xl mx-auto text-center shadow-2xl transition-all duration-1000 ${
            isVisible.investment ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
          }`}
        >
          {/* Investment Badge */}
          <div
            className={`inline-block mb-8 transition-all duration-700 delay-200 ${
              isVisible.investment ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-[#029791] bg-[#029791]/20 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase border border-[#029791]/30">
              Investment Opportunity
            </span>
          </div>

          {/* Investment Heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 transition-all duration-700 delay-400 ${
              isVisible.investment ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            Interested in{" "}
            <span className="text-[#029791] bg-gradient-to-r from-[#029791] to-[#00d4aa] bg-clip-text text-transparent">
              Investing?
            </span>
          </h1>

          {/* Investment Description */}
          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-600 ${
              isVisible.investment ? "opacity-100 translate-y-0" : "opacity-0 translate-y-15"
            }`}
          >
            Join us in shaping the future of local task-sharing. PickMyTask™ presents a unique investment opportunity in
            the growing gig economy.
          </p>

          {/* Investment CTA Button */}
          <div
            className={`transition-all duration-700 delay-800 ${
              isVisible.investment ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <button className="group relative inline-flex items-center bg-[#029791] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#027368] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#029791]/30">
              <span>Contact Us</span>
            </button>
          </div>

          <div
            className={`w-24 h-1 bg-[#029791] mx-auto rounded-full mt-8 transition-all duration-700 delay-1000 ${
              isVisible.investment ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div ref={contactRef} id="contact-section" className="min-h-screen flex items-center justify-center py-16 px-6">
        <div
          className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 max-w-6xl mx-auto text-center shadow-2xl transition-all duration-1000 ${
            isVisible.contact ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
          }`}
        >
          {/* Contact Badge */}
          <div
            className={`inline-block mb-8 transition-all duration-700 delay-200 ${
              isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-[#029791] bg-[#029791]/20 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase border border-[#029791]/30">
              Contact Us
            </span>
          </div>

          {/* Contact Heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 transition-all duration-700 delay-400 ${
              isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            Get in{" "}
            <span className="text-[#029791] bg-gradient-to-r from-[#029791] to-[#00d4aa] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          {/* Contact Description */}
          <p
            className={`text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-600 ${
              isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-15"
            }`}
          >
            Have questions? We're here to help! Reach out to our team for any inquiries.
          </p>

          <div
            className={`w-24 h-1 bg-[#029791] mx-auto rounded-full mb-12 transition-all duration-700 delay-700 ${
              isVisible.contact ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <ContactCard
              icon={<PhoneIcon />}
              title="Call"
              info="(+91) 9518791171"
              delay="delay-800"
              isVisible={isVisible.contact}
            />
            <ContactCard
              icon={<WhatsAppIcon />}
              title="WhatsApp"
              info="(+91) 9518791171"
              delay="delay-1000"
              isVisible={isVisible.contact}
            />
            <ContactCard
              icon={<EmailIcon />}
              title="Email"
              info="support@pickmytask.com"
              delay="delay-1200"
              isVisible={isVisible.contact}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactCard({ icon, title, info, delay, isVisible }) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) / 20
    const deltaY = (e.clientY - centerY) / 20

    setMousePosition({ x: deltaX, y: deltaY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div
      className={`transition-all duration-700 ease-out ${delay} ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
      }`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-[#029791]/50"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) scale(${
            isHovered ? 1.05 : 1
          })`,
          transition: isHovered ? "none" : "transform 0.5s ease-out",
          boxShadow: isHovered ? "0 20px 40px rgba(2, 151, 145, 0.3)" : "0 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <div
            className={`w-20 h-20 bg-[#029791] rounded-full flex items-center justify-center mb-6 shadow-lg transition-all duration-300 ${
              isHovered ? "scale-110 shadow-[#029791]/50" : "shadow-[#029791]/30"
            }`}
          >
            {icon}
          </div>
          <h3
            className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              isHovered ? "text-[#029791]" : "text-white"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-gray-300 leading-relaxed transition-colors duration-300 ${isHovered ? "text-white" : ""}`}
          >
            {info}
          </p>
        </div>
      </div>
    </div>
  )
}

// Icon Components
const PhoneIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)
