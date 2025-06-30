"use client"

import { useState, useRef } from "react"

const Section = ({ showContent }) => {
  const [isPhoneHovered, setIsPhoneHovered] = useState(false)

  return (
    <>
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          -webkit-overflow-scrolling: touch;
        }

        /* Smooth scrolling behavior */
        .scroll-smooth {
          scroll-behavior: smooth;
        }

        /* Floating animation - faster and smoother */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateY(0deg);
          }
          50% {
            transform: translateY(-8px) rotateY(1deg);
          }
        }

        .floating {
          animation: float 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Glow effect - faster and smoother */
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 20px 40px rgba(2, 151, 145, 0.3));
          }
          50% {
            filter: drop-shadow(0 20px 40px rgba(2, 151, 145, 0.6));
          }
        }

        .phone-glow {
          animation: glow 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Cursor interaction - faster response */
        .phone-interactive {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .phone-interactive:hover {
          animation-play-state: paused;
          transform: translateY(-12px) scale(1.04) rotateX(4deg);
          filter: drop-shadow(0 30px 70px rgba(2, 151, 145, 0.8));
        }

        /* Button hover effect */
        .btn-hover {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(2, 151, 145, 0.3);
        }

        /* Badge hover effect */
        .badge-hover {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .badge-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(2, 151, 145, 0.3);
        }

        /* Phone-shaped background hover effect - faster and smoother */
        @keyframes cleanGlow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        .phone-bg-effect.active {
          animation: cleanGlow 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Page-wide particle animations - faster and smoother */
        @keyframes floatPageParticle1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.8); 
            opacity: 0; 
          }
          10% { opacity: 0.6; }
          50% { 
            transform: translateY(-25px) translateX(12px) rotate(180deg) scale(1.2); 
            opacity: 1; 
          }
          90% { opacity: 0.4; }
        }

        @keyframes floatPageParticle2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.6); 
            opacity: 0; 
          }
          15% { opacity: 0.8; }
          50% { 
            transform: translateY(-20px) translateX(-16px) rotate(-180deg) scale(1); 
            opacity: 1; 
          }
          85% { opacity: 0.3; }
        }

        @keyframes floatPageParticle3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.9); 
            opacity: 0; 
          }
          20% { opacity: 0.7; }
          50% { 
            transform: translateY(-30px) translateX(20px) rotate(360deg) scale(1.3); 
            opacity: 1; 
          }
          80% { opacity: 0.5; }
        }

        /* Smooth fade in/out for particles - faster */
        .page-particles {
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Entrance Animations */
        .entrance-fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .entrance-scale-up {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .entrance-slide-right {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .entrance-bounce-in {
          opacity: 0;
          transform: translateY(-50px);
          transition: all 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .animate {
          opacity: 1;
          transform: translateY(0);
          transform: translateX(0);
          transform: scale(1);
        }

        /* Staggered animation delays */
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
      `}</style>

      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-16 py-8 relative overflow-hidden">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-60"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(2, 151, 145, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
          }}
        />

        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            background: "radial-gradient(circle at 70% 80%, rgba(2, 151, 145, 0.2) 0%, rgba(0, 0, 0, 0) 60%)",
          }}
        />

        {/* Page-wide floating particles */}
        <div className={`page-particles ${isPhoneHovered ? "opacity-100" : "opacity-0"}`}>
          {/* Top section particles */}
          <div
            className="fixed w-2 h-2 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "10%",
              left: "15%",
              animation: isPhoneHovered ? "floatPageParticle1 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
            }}
          />
          <div
            className="fixed w-3 h-3 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "20%",
              right: "20%",
              animation: isPhoneHovered ? "floatPageParticle2 3s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "0.4s",
            }}
          />
          <div
            className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "15%",
              left: "80%",
              animation: isPhoneHovered ? "floatPageParticle3 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "0.8s",
            }}
          />

          {/* Middle section particles */}
          <div
            className="fixed w-2.5 h-2.5 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "40%",
              left: "10%",
              animation: isPhoneHovered ? "floatPageParticle1 2.7s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "0.2s",
            }}
          />
          <div
            className="fixed w-1 h-1 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "50%",
              right: "15%",
              animation: isPhoneHovered ? "floatPageParticle2 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "0.6s",
            }}
          />
          <div
            className="fixed w-2 h-2 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "35%",
              left: "25%",
              animation: isPhoneHovered ? "floatPageParticle3 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "1s",
            }}
          />

          {/* Bottom section particles */}
          <div
            className="fixed w-3 h-3 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "70%",
              left: "20%",
              animation: isPhoneHovered ? "floatPageParticle1 2.3s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "0.5s",
            }}
          />
          <div
            className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "80%",
              right: "25%",
              animation: isPhoneHovered ? "floatPageParticle2 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "1.2s",
            }}
          />
          <div
            className="fixed w-2 h-2 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "75%",
              left: "75%",
              animation: isPhoneHovered ? "floatPageParticle3 3s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "0.1s",
            }}
          />

          {/* Additional scattered particles */}
          <div
            className="fixed w-1 h-1 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "25%",
              left: "60%",
              animation: isPhoneHovered ? "floatPageParticle1 2.1s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "0.7s",
            }}
          />
          <div
            className="fixed w-2.5 h-2.5 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "60%",
              left: "5%",
              animation: isPhoneHovered ? "floatPageParticle2 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "0.9s",
            }}
          />
          <div
            className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-10"
            style={{
              backgroundColor: "#029791",
              top: "45%",
              right: "5%",
              animation: isPhoneHovered ? "floatPageParticle3 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none",
              animationDelay: "1.1s",
            }}
          />
        </div>

        {/* Text Section with entrance animations */}
        <div className="mt-16 lg:w-1/2 relative z-20">
          {/* Launching Soon Badge */}
          <div
            className={`inline-block text-white text-sm font-semibold py-2 px-4 rounded-full mb-6 uppercase badge-hover cursor-pointer entrance-bounce-in stagger-1 ${showContent ? "animate" : ""}`}
            style={{ backgroundColor: "#029791" }}
          >
            Launching Soon
          </div>

          <h1
            className={`text-6xl md:text-7xl font-bold leading-tight text-white entrance-fade-up stagger-2 ${showContent ? "animate" : ""}`}
          >
            From to-do to done
            <br />
            <span className="highlight-fast" style={{ color: "#029791" }}>
              fast, local, trusted.
            </span>
          </h1>

          <p
            className={`mt-6 text-gray-300 max-w-lg text-lg entrance-fade-up stagger-3 ${showContent ? "animate" : ""}`}
          >
            PickMyTask™ connects you with trusted people near you for all your task needs. From home cleaning to grocery
            delivery, find help with just a few taps.
          </p>

          {/* Join Waiting List Button */}
          <div className={`mt-8 mb-6 entrance-scale-up stagger-4 ${showContent ? "animate" : ""}`}>
            <button
              className="inline-flex items-center text-white px-8 py-3 rounded-full hover:opacity-90 transition-all text-lg font-semibold btn-hover"
              style={{ backgroundColor: "#029791" }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              <span>Join Waiting List</span>
            </button>
          </div>

          {/* Waiting List Count */}
          <p className={`text-gray-300 text-lg entrance-fade-up stagger-5 ${showContent ? "animate" : ""}`}>
            <span className="font-bold" style={{ color: "#029791" }}>
              500+
            </span>{" "}
            people already on the waiting list
          </p>
        </div>

        {/* Phone Section with entrance animation */}
        <div
          className={`lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative z-20 entrance-slide-right stagger-3 ${showContent ? "animate" : ""}`}
        >
          <PhoneMockup onHoverChange={setIsPhoneHovered} />
        </div>
      </div>
    </>
  )
}

const PhoneMockup = ({ onHoverChange }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const phoneRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!phoneRef.current) return

    const rect = phoneRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) / 12
    const deltaY = (e.clientY - centerY) / 12

    setMousePosition({ x: deltaX, y: deltaY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHoverChange(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHoverChange(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div className="relative">
      {/* Clean Glow Effect - No Shadows */}
      <div
        className="absolute"
        style={{
          width: "360px",
          height: "700px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "3rem",
          background: isHovered
            ? "radial-gradient(ellipse 180px 350px at center, rgba(2, 151, 145, 0.15) 0%, rgba(2, 151, 145, 0.08) 40%, rgba(2, 151, 145, 0.02) 70%, transparent 100%)"
            : "transparent",
          opacity: isHovered ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: -1,
          pointerEvents: "none",
          filter: isHovered ? "blur(1px)" : "none",
        }}
      />

      <div
        className="relative mx-auto floating phone-interactive phone-glow"
        ref={phoneRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `translateY(-12px) scale(1.04) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
            : "translateY(0px) scale(1) rotateX(0deg) rotateY(0deg)",
          transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        {/* Phone Frame */}
        <div
          className="relative bg-gradient-to-b from-gray-800 to-black rounded-[3rem] w-[340px] h-[680px] mx-auto p-2"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-10"></div>

          {/* Screen */}
          <div className="relative bg-white rounded-[2.5rem] w-full h-full overflow-hidden">
            <StatusBar />
            <PhoneContent />
          </div>
        </div>
      </div>
    </div>
  )
}

const StatusBar = () => (
  <div className="flex justify-between items-center px-6 py-3 bg-white text-black text-sm font-medium">
    <div>10:19 AM</div>
    <div className="flex items-center space-x-1">
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
      </div>
      <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
      </svg>
    </div>
  </div>
)

const PhoneContent = () => (
  <div className="flex flex-col h-full">
    {/* Fixed Header */}
    <div className="sticky top-0 bg-white z-10 pt-2 px-4 pb-2">
      <AppHeader />
      <SearchBar />
    </div>

    {/* Scrollable Task List */}
    <div
      className="flex-1 px-4 overflow-y-auto pb-24 scrollbar-hide scroll-smooth"
      style={{
        scrollBehavior: "smooth",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <TaskList />
    </div>

    {/* Fixed Footer */}
    <AppNavBar />
  </div>
)

const AppHeader = () => (
  <div className="flex justify-between items-center mb-4 pt-2">
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
      <div
        className="w-8 h-8 rounded-full mr-2 flex items-center justify-center"
        style={{ backgroundColor: "#029791" }}
      >
        <span className="text-white font-bold text-sm">P</span>
      </div>
      <span className="font-semibold text-gray-800">PickMyTask™</span>
    </div>
    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
  </div>
)

const SearchBar = () => (
  <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 mb-4">
    <svg className="w-4 h-4 mr-3 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
    <span className="text-gray-500 flex-1">Search any task...</span>
    <button className="p-1">
      <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
      </svg>
    </button>
  </div>
)

const TaskCard = ({ title, status, description, category, location, price }) => (
  <div className="bg-white rounded-xl p-4 mb-3 shadow-sm border border-gray-100">
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-semibold text-base text-gray-800 flex-1 pr-2">{title}</h3>
      <span
        className="text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap"
        style={{ backgroundColor: "#029791", color: "white" }}
      >
        {status}
      </span>
    </div>
    <p className="text-gray-600 mb-3 text-sm leading-relaxed">{description}</p>
    <div className="flex justify-between items-center mb-3 text-xs">
      <div className="flex items-center text-gray-500">
        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {category}
      </div>
      <div className="flex items-center text-gray-500">
        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        {location}
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="text-lg font-bold text-gray-900">₹{price}</div>
      <button
        className="text-white px-4 py-2 rounded-lg hover:opacity-90 text-sm font-medium transition-all"
        style={{ backgroundColor: "#029791" }}
      >
        Pick
      </button>
    </div>
  </div>
)

const TaskList = () => {
  const tasks = [
    {
      title: "Organize Storage Room",
      status: "OPEN",
      description: "Clean the storage room, label boxes, and discard unnecessary items.",
      category: "Storage Help",
      location: "Delhi NCR",
      price: "100.0",
    },
    {
      title: "Bathroom Deep Clean",
      status: "OPEN",
      description: "Clean tiles, scrub toilet, disinfect surfaces, and mop the floor thoroughly.",
      category: "Weekly Home Tasks",
      location: "Milestone Apartment",
      price: "150.0",
    },
    {
      title: "Plant Care",
      status: "OPEN",
      description: "Water indoor plants daily for 1 week while I'm on vacation.",
      category: "Gardening",
      location: "Garden Hills Society",
      price: "80.0",
    },
    {
      title: "Grocery Pickup",
      status: "OPEN",
      description: "Pickup groceries from the market and deliver to my home before 6 PM.",
      category: "Delivery",
      location: "Green Park Market",
      price: "120.0",
    },
    {
      title: "Dog Walking",
      status: "OPEN",
      description: "Need someone to walk my dog for 30 minutes in the evening for the next 3 days.",
      category: "Pet Care",
      location: "Central Park Area",
      price: "90.0",
    },
    {
      title: "Tech Setup Help",
      status: "OPEN",
      description: "Need help setting up my new laptop and transferring files from old computer.",
      category: "Tech Support",
      location: "Sector 18, Noida",
      price: "200.0",
    },
    {
      title: "Furniture Assembly",
      status: "OPEN",
      description: "Need help assembling a new bookshelf and coffee table from IKEA.",
      category: "Home Help",
      location: "Mayur Vihar",
      price: "180.0",
    },
  ]

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
    </div>
  )
}

const AppNavBar = () => (
  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 rounded-b-[2.5rem] shadow-md">
    <div className="flex justify-around items-center py-4 px-6">
      <button className="flex flex-col items-center space-y-1">
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <span className="text-xs text-gray-400">Home</span>
      </button>
      <button className="flex flex-col items-center space-y-1">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#029791" }}>
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
        <span className="text-xs font-medium" style={{ color: "#029791" }}>
          Tasks
        </span>
      </button>
      <button className="flex flex-col items-center space-y-1">
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
        <span className="text-xs text-gray-400">Profile</span>
      </button>
    </div>
  </div>
)

export default Section
