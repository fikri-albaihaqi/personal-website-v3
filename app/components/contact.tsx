'use client'

import { useState } from "react"
import { cormorantGaramond } from "../assets/fonts"
import Link from "next/link"
import Image from "next/image"

const Contact = () => {
  const [image, setImage] = useState<string>("/dummy.png")

  const handleMouseEnter = (imageSource: string) => {
    return () => {
      setImage(imageSource)
    }
  }
  return (
    <>
      <div id="contact" className="fixed bottom-0 -z-50 w-screen h-screen">
        <Image
          src={image}
          alt="Social Background Image"
          fill={true}
          className={`overflow-hidden object-cover transition-all duration-500 ${image === "/dummy.png" ? "opacity-0" : "opacity-15"}`}
        />
      </div>

      <section className="relative h-screen flex flex-col justify-center items-center text-center">
        <h1 className="mb-24 text-3xl">Social</h1>

        <ul className={`${cormorantGaramond.className} text-6xl md:text-9xl font-semibold`}>
          <Link href="mailto:fikrialbaihaqi@gmail.com" target='_blank' onMouseEnter={handleMouseEnter("/email.jpg")} onMouseLeave={handleMouseEnter("/dummy.png")} >
            <li className="my-8 hover:text-white transition-all duration-200">Email</li>
          </Link>
          <Link href="https://www.linkedin.com/in/fikri-albaihaqi/" target='_blank' onMouseEnter={handleMouseEnter("/linkedin.jpg")} onMouseLeave={handleMouseEnter("/dummy.png")}>
            <li className="my-8 hover:text-white transition-all duration-200">LinkedIn</li>
          </Link>
          <Link href="https://github.com/fikri-albaihaqi" target='_blank' onMouseEnter={handleMouseEnter("/github.jpg")} onMouseLeave={handleMouseEnter("/dummy.png")}>
            <li className="my-8 hover:text-white transition-all duration-200">Github</li>
          </Link>
          <Link href="https://codepen.io/Fikri-Code" target='_blank' onMouseEnter={handleMouseEnter("/codepen.jpg")} onMouseLeave={handleMouseEnter("/dummy.png")}>
            <li className="my-8 hover:text-white transition-all duration-200">Codepen</li>
          </Link>
        </ul>
      </section>
    </>
  )
}

export default Contact