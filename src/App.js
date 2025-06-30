"use client"

import "./globals.css"
import "./App.css"
import { useState, useEffect } from "react"

import { Navbar } from "./Navbar"
import Section from "./down"
import FeatureCards from "./cards"
import BenefitsSection from "./benifit"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Trigger content animations after loading screen fades
      setTimeout(() => {
        setShowContent(true)
      }, 500)
    }, 3500) // 3.5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Loading Screen */}
      <div className={`loading-screen ${!isLoading ? "fade-out" : ""}`}>
        {/* Floating Particles */}
        <div className="loading-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Loading Logo */}
        <div className="loading-logo">
          <div className="loading-logo-text">P</div>
        </div>

        {/* Loading Title */}
        <h1 className="loading-title">PickMyTask™</h1>
        <p className="loading-subtitle">From to-do to done fast, local, trusted.</p>

        {/* Loading Spinner */}
        <div className="loading-spinner"></div>

        {/* Loading Dots */}
        <div className="loading-dots">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>

        {/* Progress Bar */}
        <div className="loading-progress">
          <div className="loading-progress-bar"></div>
        </div>

        {/* Loading Text */}
        <p className="loading-text">Loading your tasks...</p>
      </div>

      {/* Main Content */}
      <div className={`main-content ${!isLoading ? "opacity-100" : "opacity-0"}`}>
        <Navbar showContent={showContent} />
        <Section showContent={showContent} />
        <FeatureCards showContent={showContent} style={{ backgroundColor: "#121212" }} />
        <BenefitsSection showContent={showContent} />
      </div>
    </div>
  )
}

export default App
