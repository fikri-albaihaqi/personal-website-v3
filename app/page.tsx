'use client'

import Image from "next/image";
import { cormorantGaramond } from "./assets/fonts";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<string>("")

  const handleMouseEnter = (imageSource: string) => {
    return () => {
      setImage(imageSource)
    }
  }

  return (
    <>
      <header className={`h-screen flex justify-center ${cormorantGaramond.className}`}>
        <Image
          src="/self-portrait.png"
          alt="Fikri Albaihaqi Self Portrait"
          width={320}
          height={0}
          className="absolute top-32 min-[1920px]:top-56"
        />
        <h1 className="absolute top-8 min-[1920px]:top-32 left-[30%] text-8xl font-semibold mix-blend-exclusion">
          Fikri <br /> Albaihaqi
        </h1>
        <h1 className="absolute bottom-8 min-[1920px]:bottom-32 right-[30%] text-8xl font-semibold mix-blend-exclusion">
          Front end <br /> Developer
        </h1>
      </header>

      <main className="">
        <section className="h-screen flex justify-center items-center text-2xl text-center">
          Hello! I’m Fikri, a 22 years old front end web developer <br />
          located in Bandung, Indonesia. I like to craft solid and <br />
          beautiful website with great user experience.
        </section>

        <Skills />

        <section className="h-max">
          <h1 className={`${cormorantGaramond.className} sticky top-56 -z-10 text-8xl lg:text-[15rem] font-semibold text-center`}>
            WORKS
          </h1>

          <Projects />
        </section>

        <section className="h-screen flex justify-center items-center text-2xl text-center">
          I&apos;m currently available <br />
          and looking for a full-time remote position. <br />
          If you’d like me to join your team, please reach me out!
        </section>

        <div className="fixed bottom-0 w-screen h-screen">
          <Image
            src={image}
            alt="Social Background Image"
            fill={true}
            className={`overflow-hidden object-cover transition-all duration-500 ${image === "/dummy.png" ? "opacity-0" : "opacity-15"}`}
          />
        </div>

        <section className="relative h-screen flex flex-col justify-center items-center text-center">

          <h1 className="mb-24 text-3xl">Social</h1>

          <ul className={`${cormorantGaramond.className} text-9xl font-semibold`}>
            <Link href="mailto:fikrialbaihaqi@gmail.com" target='_blank' onMouseEnter={handleMouseEnter("/email.jpg")} onMouseLeave={handleMouseEnter("/dummy.png")} >
              <li className="my-8">Email</li>
            </Link>
            <Link href="https://www.linkedin.com/in/fikri-albaihaqi/" target='_blank' onMouseEnter={handleMouseEnter("/linkedin.jpg")} onMouseLeave={handleMouseEnter("/dummy.png")}>
              <li className="my-8">LinkedIn</li>
            </Link>
            <Link href="https://github.com/fikri-albaihaqi" target='_blank' onMouseEnter={handleMouseEnter("/github.jpg")} onMouseLeave={handleMouseEnter("/dummy.png")}>
              <li className="my-8">Github</li>
            </Link>
            <Link href="https://codepen.io/Fikri-Code" target='_blank' onMouseEnter={handleMouseEnter("/codepen.jpg")} onMouseLeave={handleMouseEnter("/dummy.png")}>
              <li className="my-8">Codepen</li>
            </Link>
          </ul>
        </section>
      </main>
    </>
  );
}
