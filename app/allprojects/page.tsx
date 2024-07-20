'use client'

import { cormorantGaramond } from "../assets/fonts"
import projects from "../assets/projectsData"
import Project from "../components/project"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const AllProjects = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <main>
      <h1 data-aos="fade-up" data-aos-duration="1000" className={`${cormorantGaramond.className} text-8xl font-semibold ml-8 lg:ml-16 pt-32`}>
        All <br /> 
        Works
      </h1>

      <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350" className="relative md:grid grid-cols-2 gap-y-16 mx-8 lg:mx-16 my-32">
        {projects.map((project: any) => (
          <Project project={project} key={project.id} classes="lg:mx-4 odd:place-self-start even:place-self-end" />
        ))}
      </section>
    </main>
  )
}

export default AllProjects