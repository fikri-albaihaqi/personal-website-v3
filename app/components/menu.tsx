import Link from "next/link";

export default function Menu() {
  return(
    <nav className="fixed right-16 mt-8 flex text-ivory text-lg">
      <ul className="mr-8">
        <Link href="/" className="hover:text-white">
          <li>About</li>
        </Link>
        <Link href="/" className="hover:text-white">
          <li>Skills</li>
        </Link>
        <Link href="/" className="hover:text-white">
          <li>Works</li>
        </Link>
        <Link href="/" className="hover:text-white">
          <li>Contact</li>
        </Link>
      </ul>
      <ul>
        <Link href="/" className="hover:text-white">
          <li>Project Archive</li>
        </Link>
      </ul>
    </nav>
  )
}