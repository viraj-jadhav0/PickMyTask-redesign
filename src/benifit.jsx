"use client"

import { useState, useEffect } from "react"

// Custom SVG Icons
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

export default function BenefitsSection({ showContent }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (showContent) {
      setIsLoaded(true)
    }
  }, [showContent])

  const taskPosterBenefits = [
    {
      icon: ClockIcon,
      title: "Save Time",
      description: "Get help without sacrificing your schedule",
      color: "from-purple-500 to-purple-600",
      glowColor: "shadow-purple-500/20",
    },
    {
      icon: HomeIcon,
      title: "Local & Trusted",
      description: "Verified helpers near you",
      color: "from-emerald-500 to-emerald-600",
      glowColor: "shadow-emerald-500/20",
    },
    {
      icon: CalendarIcon,
      title: "On-Demand Convenience",
      description: "Post tasks anytime, anywhere",
      color: "from-blue-500 to-blue-600",
      glowColor: "shadow-blue-500/20",
    },
    {
      icon: ShieldIcon,
      title: "Peace of Mind",
      description: "Real-time updates and secure payments",
      color: "from-orange-500 to-orange-600",
      glowColor: "shadow-orange-500/20",
    },
  ]

  const taskHelperBenefits = [
    {
      icon: DollarIcon,
      title: "Flexible Income",
      description: "Earn on your own schedule",
      color: "from-green-500 to-green-600",
      glowColor: "shadow-green-500/20",
    },
    {
      icon: StarIcon,
      title: "Grow Reputation",
      description: "Build trust with good ratings",
      color: "from-yellow-500 to-yellow-600",
      glowColor: "shadow-yellow-500/20",
    },
    {
      icon: BriefcaseIcon,
      title: "Variety of Tasks",
      description: "Choose what you're comfortable doing",
      color: "from-indigo-500 to-indigo-600",
      glowColor: "shadow-indigo-500/20",
    },
  ]

  return (
    <div className="text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with reduced spacing */}
        <div className="text-center mb-8">
          <div className={`entrance-bounce-in stagger-1 ${showContent ? "animate" : ""}`}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#029791]/20 border border-[#029791]/30 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 bg-[#029791] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#029791] font-semibold text-sm uppercase tracking-wider">HOW IT BENEFITS YOU</span>
            </div>
          </div>

          <div className={`entrance-fade-up stagger-2 ${showContent ? "animate" : ""}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Value for{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#029791] via-cyan-400 to-[#029791] bg-clip-text text-transparent animate-pulse">
                  Everyone
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#029791] to-cyan-400 rounded-full transform scale-x-0 animate-[scaleX_1.5s_ease-out_0.8s_forwards]"></div>
              </span>
            </h1>
          </div>

          <div className={`entrance-fade-up stagger-3 ${showContent ? "animate" : ""}`}>
            <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              Our platform is designed to create a win-win situation for both task posters and helpers.
            </p>
          </div>
        </div>

        {/* Benefits Grid with reduced spacing */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Task Posters Card */}
          <div className={`entrance-slide-left stagger-4 ${showContent ? "animate" : ""}`}>
            <div className="relative group">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-[#029791]/30 transition-all duration-500 hover:bg-white/8 h-full">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">For Task Posters</h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#029791] to-cyan-400 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {taskPosterBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <div
                        key={benefit.title}
                        className={`flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer group/item backdrop-blur-sm border border-transparent hover:border-white/10 entrance-flip-in stagger-${5 + index} ${showContent ? "animate" : ""}`}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${benefit.glowColor} group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300`}
                        >
                          <IconComponent />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2 text-lg group-hover/item:text-[#029791] transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Task Helpers Card */}
          <div className={`entrance-slide-right stagger-5 ${showContent ? "animate" : ""}`}>
            <div className="relative group">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-[#029791]/30 transition-all duration-500 hover:bg-white/8 h-full">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">For Task Helpers</h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#029791] to-cyan-400 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {taskHelperBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <div
                        key={benefit.title}
                        className={`flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer group/item backdrop-blur-sm border border-transparent hover:border-white/10 entrance-flip-in stagger-${6 + index} ${showContent ? "animate" : ""}`}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${benefit.glowColor} group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300`}
                        >
                          <IconComponent />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2 text-lg group-hover/item:text-[#029791] transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep existing styles */}
      <style jsx>{`
      @keyframes scaleX {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
      }
    `}</style>
    </div>
  )
}
