'use client'

import { cormorantGaramond } from '../assets/fonts'
import projects from '../assets/projectsData'
import Project from '../components/project'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AllProjects = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <main>
      <div
        className={`${cormorantGaramond.className} sticky flex justify-center top-32 mb-32 -z-10 text-8xl lg:text-[12rem] font-semibold text-center`}
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

      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="350"
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-y-16 mx-8 lg:mx-16 my-32"
      >
        {projects.map((project: any) => (
          <Project
            project={project}
            key={project.id}
            classes="lg:mx-4 odd:place-self-start even:place-self-end"
          />
        ))}
      </section>
    </main>
  )
}

export default AllProjects
