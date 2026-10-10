'use client'

import { useEffect } from 'react'
import { cormorantGaramond } from '../assets/fonts'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section
      id="contact"
      className="relative h-screen flex flex-col justify-center items-center my-32 text-center"
    >
      <h1 className="mb-8 text-3xl">Social</h1>

      <ul
        className={`${cormorantGaramond.className} text-6xl md:text-9xl font-semibold`}
      >
        <li data-aos="fade-up" className="my-8">
          <Link
            href="mailto:fikrialbaihaqi@gmail.com"
            target="_blank"
            className="relative transition-all duration-200 hover:text-neutral-900
              before:bg-yellow-canary before:content-[''] before:w-full before:absolute before:bottom-0.75
              before:h-0 before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
          >
            Email
          </Link>
        </li>

        <li data-aos="fade-up" data-aos-delay="300" className="my-8">
          <Link
            href="https://www.upwork.com/freelancers/~015e023b78f14b9f07"
            target="_blank"
            className="relative transition-all duration-200 hover:text-neutral-900
              before:bg-yellow-canary before:content-[''] before:w-full before:absolute before:bottom-0.75
              before:h-0 before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
          >
            Upwork
          </Link>
        </li>

        <li data-aos="fade-up" data-aos-delay="100" className="my-8">
          <Link
            href="https://www.linkedin.com/in/fikri-albaihaqi/"
            target="_blank"
            className="relative transition-all duration-200 hover:text-neutral-900
              before:bg-yellow-canary before:content-[''] before:w-full before:absolute before:bottom-0.75
              before:h-0 before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
          >
            LinkedIn
          </Link>
        </li>

        <li data-aos="fade-up" data-aos-delay="200" className="my-8">
          <Link
            href="https://github.com/fikri-albaihaqi"
            target="_blank"
            className="relative transition-all duration-200 hover:text-neutral-900
              before:bg-yellow-canary before:content-[''] before:w-full before:absolute before:bottom-0.75
              before:h-0 before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
          >
            Github
          </Link>
        </li>

        <li data-aos="fade-up" data-aos-delay="300" className="my-8">
          <Link
            href="https://codepen.io/Fikri-Code"
            target="_blank"
            className="relative transition-all duration-200 hover:text-neutral-900
              before:bg-yellow-canary before:content-[''] before:w-full before:absolute before:bottom-0.75
              before:h-0 before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
          >
            Codepen
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Contact
