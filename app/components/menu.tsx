'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Menu() {
  const path = usePathname()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <nav
      className="fixed w-screen flex justify-between z-50 mt-8 px-8 lg:px-16 text-ivory text-lg mix-blend-difference"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="1500"
    >
      <Link href="/" className="font-semibold text-xl md:text-4xl">
        FA
      </Link>
      <div className="flex text-sm md:text-base">
        <ul className="mr-8">
          <li>
            <Link
              href={path === '/allprojects' ? '/#about' : '#about'}
              className="hover:text-white transition-all duration-500"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href={path === '/allprojects' ? '/#works' : '#works'}
              className="hover:text-white transition-all duration-500"
            >
              Works
            </Link>
          </li>

          <li>
            <Link
              href={path === '/allprojects' ? '/#contact' : '#contact'}
              className="hover:text-white transition-all duration-500"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="/"
              className="hover:text-white transition-all duration-500"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/allprojects"
              className="hover:text-white transition-all duration-500"
            >
              All
            </Link>
            Works
          </li>

          <li>
            <Link
              href="/Resume_Fikri.pdf"
              target="_blank"
              className="hover:text-white transition-all duration-500"
            >
              My
            </Link>
            Resume
          </li>
        </ul>
      </div>
    </nav>
  )
}
