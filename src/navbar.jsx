"use client"

import { useState } from "react"
import Logo from "./SYM/Dark Background.png" // Use .png or .svg based on your preference

export const Navbar = ({ showContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <div
          className="w-8 h-8 rounded-full mr-2 flex items-center justify-center"
          style={{ backgroundColor: "#029791" }}
        >
          <img
            src={Logo}
            alt="PickMyTask"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-heading font-bold text-lg">PickMyTask™</span>
      </div>

      {/* Hamburger Menu Button (Visible on Mobile) */}
      <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-black md:bg-white md:bg-opacity-10 md:backdrop-blur-md rounded-b-lg md:rounded-full px-6 py-4 md:py-2 border md:border-white md:border-opacity-20 w-full md:w-auto z-40`}
      >
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a href="#" className="font-body text-white hover:text-opacity-80 transition-opacity">
            Home
          </a>
          <a href="#" className="font-body text-white hover:text-opacity-80 transition-opacity">
            About
          </a>
          <a href="#" className="font-body text-white hover:text-opacity-80 transition-opacity">
            Careers
          </a>
          <a href="#" className="font-body text-white hover:text-opacity-80 transition-opacity">
            Help center
          </a>
          <a href="#" className="font-body text-white hover:text-opacity-80 transition-opacity">
            Contact
          </a>
        </div>
      </div>

      {/* Right Side Button (Visible on Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <button
          className="font-body text-white px-4 py-2 rounded-full hover:opacity-90 transition-all"
          style={{
            backgroundColor: "#029791",
            boxShadow: "0 4px 12px rgba(2, 151, 145, 0.3)",
          }}
        >
          + Join Waiting List
        </button>
      </div>

      {/* Mobile Join Button (Visible when menu is open) */}
      {isMenuOpen && (
        <div className="flex md:hidden mt-4">
          <button
            className="font-body text-white px-4 py-2 rounded-full hover:opacity-90 transition-all w-full"
            style={{
              backgroundColor: "#029791",
              boxShadow: "0 4px 12px rgba(2, 151, 145, 0.3)",
            }}
          >
            + Join Waiting List
          </button>
        </div>
      )}
    </nav>
  )
}