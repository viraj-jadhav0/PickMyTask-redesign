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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#029791] relative overflow-hidden">
      {/* Keep all existing background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#029791_0%,transparent_50%)] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#029791_0%,transparent_50%)] opacity-20"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,#029791_40deg,transparent_80deg)] opacity-10"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,151,145,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(2,151,145,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Modern Header Section with entrance animations */}
        <div className="text-center mb-20">
          <div className={`entrance-bounce-in stagger-1 ${showContent ? "animate" : ""}`}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#029791]/20 to-[#029791]/10 border border-[#029791]/30 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#029791] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#029791] font-semibold text-sm uppercase tracking-wider">HOW IT BENEFITS YOU</span>
            </div>
          </div>

          <div className={`entrance-fade-up stagger-2 ${showContent ? "animate" : ""}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Value for{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#029791] via-cyan-400 to-[#029791] bg-clip-text text-transparent animate-pulse">
                  Everyone
                </span>
                <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-[#029791] to-cyan-400 rounded-full transform scale-x-0 animate-[scaleX_1.5s_ease-out_0.8s_forwards]"></div>
              </span>
            </h1>
          </div>

          <div className={`entrance-fade-up stagger-3 ${showContent ? "animate" : ""}`}>
            <p className="text-gray-300 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Our platform is designed to create a win-win situation for both task posters and helpers.
            </p>
          </div>
        </div>

        {/* Modern Benefits Grid with staggered animations */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Task Posters Card */}
          <div className={`entrance-slide-left stagger-4 ${showContent ? "animate" : ""}`}>
            <div className="relative group">
              {/* Keep existing glassmorphism card structure */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-[#029791]/50 transition-all duration-500 hover:bg-white/15 h-full">
                {/* Keep existing gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#029791]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                <div className="text-center mb-10">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">For Task Posters</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#029791] to-cyan-400 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {taskPosterBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <div
                        key={benefit.title}
                        className={`flex items-start space-x-6 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group/item backdrop-blur-sm border border-transparent hover:border-white/20 entrance-flip-in stagger-${5 + index} ${showContent ? "animate" : ""}`}
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl ${benefit.glowColor} group-hover/item:shadow-2xl group-hover/item:scale-110 transition-all duration-300`}
                        >
                          <IconComponent />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-3 text-xl group-hover/item:text-[#029791] transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-lg">{benefit.description}</p>
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
              {/* Keep existing glassmorphism card structure */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-[#029791]/50 transition-all duration-500 hover:bg-white/15 h-full">
                {/* Keep existing gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-[#029791]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                <div className="text-center mb-10">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">For Task Helpers</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#029791] to-cyan-400 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {taskHelperBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <div
                        key={benefit.title}
                        className={`flex items-start space-x-6 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group/item backdrop-blur-sm border border-transparent hover:border-white/20 entrance-flip-in stagger-${6 + index} ${showContent ? "animate" : ""}`}
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl ${benefit.glowColor} group-hover/item:shadow-2xl group-hover/item:scale-110 transition-all duration-300`}
                        >
                          <IconComponent />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-3 text-xl group-hover/item:text-[#029791] transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-lg">{benefit.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keep existing floating elements */}
        <div className="absolute top-40 left-10 w-24 h-24 bg-[#029791]/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#029791]/30 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-cyan-300/20 rounded-full blur-md animate-bounce"></div>
      </div>

      {/* Keep existing styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-25px) rotate(-180deg) scale(1.1); }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        /* Entrance Animations */
        .entrance-bounce-in {
          transform: translateY(-50px);
          opacity: 0;
          transition: all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        .entrance-fade-up {
          transform: translateY(30px);
          opacity: 0;
          transition: all 0.6s ease-out;
        }

        .entrance-slide-left {
          transform: translateX(-80px);
          opacity: 0;
          transition: all 0.8s ease-out;
        }

        .entrance-slide-right {
          transform: translateX(80px);
          opacity: 0;
          transition: all 0.8s ease-out;
        }

        .entrance-flip-in {
          transform: rotateY(90deg);
          opacity: 0;
          transition: all 0.5s ease-out;
        }

        .animate {
          transform: translateY(0) translateX(0) rotateY(0);
          opacity: 1;
        }

        /* Staggered Animation Delays */
        .stagger-1 {
          transition-delay: 0.1s;
        }
        .stagger-2 {
          transition-delay: 0.2s;
        }
        .stagger-3 {
          transition-delay: 0.3s;
        }
        .stagger-4 {
          transition-delay: 0.4s;
        }
        .stagger-5 {
          transition-delay: 0.5s;
        }
        .stagger-6 {
          transition-delay: 0.6s;
        }
        .stagger-7 {
          transition-delay: 0.7s;
        }
        .stagger-8 {
          transition-delay: 0.8s;
        }
      `}</style>
    </div>
  )
}
