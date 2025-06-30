"use client"

export default function LogoCard() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-24 h-24 bg-[#029791] rounded-lg flex items-center justify-center mr-4 shadow-lg">
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
        </svg>
      </div>
    </div>
  )
}
