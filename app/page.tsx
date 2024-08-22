'use client'

import Image from "next/image";
import { cormorantGaramond } from "./assets/fonts";
import Skills from "./components/skills";
import SelectedProjects from "./components/selectedProjects";
import Link from "next/link";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <header className={`h-screen flex justify-center ${cormorantGaramond.className}`}>
        <Image
          src="/self-portrait.png"
          alt="Fikri Albaihaqi Self Portrait"
          width={320}
          height={0}
          className="absolute self-center md:top-1/3 lg:top-32 min-[1920px]:top-56"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="absolute hidden md:block top-8 min-[1920px]:top-32 left-[30%] text-8xl font-semibold mix-blend-exclusion">
          Fikri <br /> Albaihaqi
        </h1>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" className="absolute hidden md:block bottom-8 min-[1920px]:bottom-32 right-[30%] text-8xl font-semibold mix-blend-exclusion">
          Front end <br /> Developer
        </h1>

        <h1 className="md:hidden h-screen flex justify-center items-center text-6xl text-center font-semibold mix-blend-exclusion">
          <span data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="absolute top-32">Fikri Albaihaqi</span>
          <br />
          <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" className="absolute bottom-[10%]">Front end Developer</span>
        </h1>
      </header>

      <main>
        <section id="about" className="h-screen flex justify-center items-center mx-16 md:mx-0 text-xl md:text-2xl text-center">
          Hello! I’m Fikri, a 22 years old front end web developer <br />
          located in Bandung, Indonesia. I like to craft solid and <br />
          beautiful website with great user experience.
        </section>

        <section id="skills" className="py-96 xl:py-64">
          <Skills />
        </section>

        <section id="works" className="relative h-max flex flex-col">
          <div className={`${cormorantGaramond.className} sticky flex justify-center top-56 mb-32 -z-10 text-8xl lg:text-[12rem] font-semibold text-center`}>
            <h1 data-aos="fade-up" data-aos-delay="300">W</h1>
            <h1 data-aos="fade-up" data-aos-delay="400">O</h1>
            <h1 data-aos="fade-up" data-aos-delay="500">R</h1>
            <h1 data-aos="fade-up" data-aos-delay="600">K</h1>
            <h1 data-aos="fade-up" data-aos-delay="700">S</h1>
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
          <div>
            I&apos;m currently available <br />
            and looking for a full-time remote position. <br />
            If you’d like me to join your team, please reach me out!
          </div>

          <Link
            href="/Resume_Fikri.pdf" target='_blank'
            className="absolute self-center text-xl mt-64 text-center no-underline hover:text-neutral-900
              before:bg-yellow-canary before:content-[''] before:w-full before:absolute before:bottom-[3px]
              before:h-[4px] before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
          >
            My Resume
          </Link>
        </section>
      </main>
    </>
  );
}
