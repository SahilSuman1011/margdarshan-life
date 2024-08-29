import React, { useState } from "react"
import Link from "next/link"
import logo from "../../../public/logo.svg"
import Image from "next/image"
import { Avatar } from "@mui/material"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white text-black p-4 px-8 fixed top-0 rounded-2xl left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" text-2xl font-bold flex gap-3 items-center">
          <Image src={logo} alt="logo" width={40} height={40} />
          Margdarshan
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className=" hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className=" hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className=" hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className=" hover:text-gray-300">
            Contact
          </Link>
        </div>
        <button className="md:hidden  focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <Avatar
            alt="Remy Sharp"
            src="https://64.media.tumblr.com/7f83217d032c1a9aebee02e82f5001a3/b681c4a96bda071a-fe/s640x960/d12950888709b1646262102806911633a70f6a54.jpg"
          />
          <span className="font-bold">Swayam</span>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block  hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block  hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block  hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block  hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
