

export const Navbar = () => {
  return (
<nav className="absolute top-0 left-0 right-0 z-50 text-white p-4 flex items-center justify-between">
  
  <div className="flex items-center">
    <div
      className="w-8 h-8 rounded-full mr-2 flex items-center justify-center"
      style={{ backgroundColor: "#029791" }}
    >
      <img
        src="./SYM/Dark Background.svg"
        alt="PickMyTask"
        className="w-full h-full object-contain"
      />
    </div>
    <span className="font-bold text-lg">PickMyTask™</span>
  </div>


      <div className="hidden md:flex bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-2 border border-white border-opacity-20">
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-opacity-80 transition-opacity">
            Home
          </a>
          <a href="#" className="text-white hover:text-opacity-80 transition-opacity">
            About
          </a>
          <a href="#" className="text-white hover:text-opacity-80 transition-opacity">
            Careers
          </a>
          <a href="#" className="text-white hover:text-opacity-80 transition-opacity">
            Help center
          </a>
          <a href="#" className="text-white hover:text-opacity-80 transition-opacity">
            Contact
          </a>
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-4">
        <button
          className="text-white px-4 py-2 rounded-full hover:opacity-90 transition-all"
          style={{
            backgroundColor: "#029791",
            boxShadow: "0 4px 12px rgba(2, 151, 145, 0.3)",
          }}
        >
          + Join Waiting List
        </button>
      </div>
    </nav>
  )
}

