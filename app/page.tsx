import Image from "next/image";
import { cormorantGaramond } from "./assets/fonts";
import Skills from "./components/skills";
import Project from "./components/project";

export default function Home() {
  return (
    <>
      <header className={`h-screen flex justify-center ${cormorantGaramond.className}`}>
        <Image
          src="/self-portrait.png"
          alt="Fikri Albaihaqi Self Portrait"
          width={320}
          height={0}
          className="absolute top-32 xl:top-56"
        />
        <h1 className="absolute top-8 xl:top-32 left-[30%] text-8xl font-semibold mix-blend-exclusion">
          Fikri <br /> Albaihaqi
        </h1>
        <h1 className="absolute bottom-8 xl:bottom-32 right-[30%] text-8xl font-semibold mix-blend-exclusion">
          Front end <br /> Developer
        </h1>
      </header>

      <main className="">
        <section className={`h-screen flex justify-center items-center text-2xl text-center`}>
          Hello! I’m Fikri, a 22 years old front end web developer <br />
          located in Bandung, Indonesia. I like to craft solid and <br />
          beautiful website with great user experience.
        </section>

        <Skills />

        <section>
          <h1 className={`${cormorantGaramond.className} text-[15rem] font-semibold text-center`}>WORKS</h1>

          <Project />
        </section>
      </main>
    </>
  );
}
