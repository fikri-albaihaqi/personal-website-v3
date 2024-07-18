'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const path = usePathname()

  return (
    <nav className="fixed w-screen flex justify-between z-50 mt-8 px-8 lg:px-16 text-ivory text-lg">
      <Link href="/" className="font-semibold text-4xl">
        FA
      </Link>
      <div className="flex">
        <ul className="mr-8">
          <Link href={path === '/allprojects' ? '/#about' : '#about'} className="hover:text-white transition-all duration-500">
            <li>About</li>
          </Link>
          <Link href={path === '/allprojects' ? '/#skills' : '#skills'} className="hover:text-white transition-all duration-500">
            <li>Skills</li>
          </Link>
          <Link href={path === '/allprojects' ? '/#works' : '#works'} className="hover:text-white transition-all duration-500">
            <li>Works</li>
          </Link>
          <Link href={path === '/allprojects' ? '/#contact' : '#contact'} className="hover:text-white transition-all duration-500">
            <li>Contact</li>
          </Link>
        </ul>
        <ul>
          <Link href="/" className="hover:text-white transition-all duration-500">
            <li>Home</li>
          </Link>
          <Link href="/allprojects" className="hover:text-white transition-all duration-500">
            <li>All Works</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}