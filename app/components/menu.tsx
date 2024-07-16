'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const path = usePathname()

  return(
    <nav className="fixed z-50 right-16 mt-8 flex text-ivory text-lg">
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
        <Link href="/allprojects" className="hover:text-white transition-all duration-500">
          <li>All Works</li>
        </Link>
      </ul>
    </nav>
  )
}