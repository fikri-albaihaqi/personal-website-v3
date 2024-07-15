import Link from "next/link";

export default function Menu() {
  return(
    <nav className="fixed z-50 right-16 mt-8 flex text-ivory text-lg">
      <ul className="mr-8">
        <Link href="#about" className="hover:text-white transition-all duration-500">
          <li>About</li>
        </Link>
        <Link href="#skills" className="hover:text-white transition-all duration-500">
          <li>Skills</li>
        </Link>
        <Link href="#works" className="hover:text-white transition-all duration-500">
          <li>Works</li>
        </Link>
        <Link href="#contact" className="hover:text-white transition-all duration-500">
          <li>Contact</li>
        </Link>
      </ul>
      <ul>
        <Link href="/" className="hover:text-white transition-all duration-500">
          <li>Project Archive</li>
        </Link>
      </ul>
    </nav>
  )
}