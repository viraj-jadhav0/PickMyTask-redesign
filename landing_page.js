"use client"

import { useEffect, useRef, useState } from "react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    steps: false,
  })

  const heroRef = useRef(null)
  const stepsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero-section" && entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, hero: true }))
          }
          if (entry.target.id === "steps-section" && entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, steps: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const heroElement = heroRef.current
    const stepsElement = stepsRef.current

    if (heroElement) observer.observe(heroElement)
    if (stepsElement) observer.observe(stepsElement)

    // Trigger hero animation immediately
    setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, hero: true }))
    }, 100)

    return () => {
      if (heroElement) observer.unobserve(heroElement)
      if (stepsElement) observer.unobserve(stepsElement)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="text-white py-6 px-6">
      {/* Hero Section */}
      <div
        ref={heroRef}
        id="hero-section"
        className={`flex flex-col items-center justify-center py-8 transition-all duration-1000 ease-out ${
          isVisible.hero ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`inline-block mb-3 transition-all duration-700 delay-300 ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <span className="text-[#029791] bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase border border-white/20">
              How it works
            </span>
          </div>

          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 transition-all duration-700 delay-500 ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            One platform.{" "}
            <span className="text-[#029791] bg-gradient-to-r from-[#029791] to-[#00d4aa] bg-clip-text text-transparent">
              Endless possibilities.
            </span>
          </h1>

          <p
            className={`text-base md:text-lg text-gray-300 mb-4 transition-all duration-700 delay-700 ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            From posting to done — all in a few taps.
          </p>

          <div
            className={`w-16 h-0.5 bg-[#029791] mx-auto rounded-full transition-all duration-700 delay-900 ${
              isVisible.hero ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>
      </div>

      {/* Steps Section */}
      <div ref={stepsRef} id="steps-section" className="py-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {[
              {
                number: "1",
                title: "Post Your Task",
                description: "Describe what you need, set your budget, and choose the location.",
                delay: "delay-200",
              },
              {
                number: "2",
                title: "Get Connected",
                description: "Receive offers from verified local helpers ready to help you.",
                delay: "delay-400",
              },
              {
                number: "3",
                title: "Task Completed",
                description: "Your helper completes the job and you pay securely through the app.",
                delay: "delay-600",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ease-out ${step.delay} ${
                  isVisible.steps ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-full hover:bg-white/10 hover:border-[#029791]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#029791]/20">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#029791] rounded-full flex items-center justify-center mb-3 text-lg font-bold shadow-lg shadow-[#029791]/30 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#029791] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#029791] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#029791] rounded-full opacity-20 animate-bounce"></div>
      </div>
    </div>
  )
}