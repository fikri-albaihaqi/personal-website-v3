'use client'

import Image from 'next/image'
import { cormorantGaramond } from './assets/fonts'
import SelectedProjects from './components/selectedProjects'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      <header
        className={`h-screen flex justify-center ${cormorantGaramond.className}`}
      >
        <Image
          src="/self-portrait.png"
          alt="Fikri Albaihaqi Self Portrait"
          width={320}
          height={0}
          className="absolute self-center md:top-1/3 lg:top-32 min-[1920px]:top-56"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="absolute hidden md:block top-8 min-[1920px]:top-32 left-[30%] text-8xl font-semibold mix-blend-exclusion"
        >
          Fikri <br /> Albaihaqi
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="absolute hidden md:block bottom-8 min-[1920px]:bottom-32 right-[30%] text-8xl font-semibold mix-blend-exclusion"
        >
          Frontend <br /> Developer
        </h1>

        <h1 className="md:hidden h-screen flex justify-center items-center text-6xl text-center font-semibold mix-blend-exclusion">
          <span
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="absolute top-32"
          >
            Fikri Albaihaqi
          </span>
          <br />
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="absolute bottom-[10%]"
          >
            Front end Developer
          </span>
        </h1>
      </header>

      <main>
        <section
          id="about"
          className="h-screen flex justify-center items-center mx-16 md:mx-0 text-xl md:text-2xl text-center"
        >
          <p className="w-full md:w-2/3 xl:w-1/3">
            Hello! I’m Fikri, a 24 years old passionate Frontend Web Developer
            who like to build a pixel-perfect and beautiful websites. I'm always
            stay updated with the latest technologies and trends in the
            industry. I am dedicated to delivering high-quality solutions that
            meet and exceed client expectations.
          </p>
        </section>

        <section id="works" className="relative h-max flex flex-col">
          <div
            className={`${cormorantGaramond.className} sticky flex justify-center top-56 mb-32 -z-10 text-8xl lg:text-[12rem] font-semibold text-center`}
          >
            <h1 data-aos="fade-up" data-aos-delay="300">
              W
            </h1>
            <h1 data-aos="fade-up" data-aos-delay="400">
              O
            </h1>
            <h1 data-aos="fade-up" data-aos-delay="500">
              R
            </h1>
            <h1 data-aos="fade-up" data-aos-delay="600">
              K
            </h1>
            <h1 data-aos="fade-up" data-aos-delay="700">
              S
            </h1>
          </div>

          <SelectedProjects />

          <Link
            href="/allprojects"
            className="absolute bottom-0 self-center text-3xl mt-32 text-center no-underline hover:text-neutral-900
              before:bg-yellow-canary before:content-[''] before:w-full before:absolute before:bottom-[3px]
              before:h-[4px] before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
          >
            See all my projects
          </Link>
        </section>

        <section className="relative h-screen flex justify-center items-center mx-16 md:mx-0 text-xl md:text-2xl text-center">
          <p className="w-full md:w-2/3 xl:w-1/3">
            I'm available for new projects and full-time remote opportunities.
            If you’re looking for someone to help bring your next website to
            life, let’s get in touch!
          </p>

          <Link
            href="/Resume_Fikri.pdf"
            target="_blank"
            className="absolute self-center text-xl mt-64 text-center no-underline hover:text-neutral-900
              before:bg-yellow-canary before:content-[''] before:w-full before:absolute before:bottom-[3px]
              before:h-[4px] before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
          >
            My Resume
          </Link>
        </section>
      </main>
    </>
  )
}
