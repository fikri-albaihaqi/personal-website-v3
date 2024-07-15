'use client'

import Image from "next/image"
import Link from "next/link"
import CursorFollower from "./cursorFollower"
import { useRef } from "react"

const Projects = () => {
  const projectsWrapper = useRef<any>()

  const projects = [
    {
      id: 1,
      name: "Polatify",
      year: "2022",
      techStack: ["Vue.js", "Express", "Tailwind CSS", "Spotify API"],
      image: "/polatify.png",
    },
    {
      id: 2,
      name: "Cinefo",
      year: "2022",
      techStack: ["Vue.js", "Tailwind CSS", "The Movie Database API"],
      image: "/cinefo.png",
    },
    {
      id: 3,
      name: "Twiceland",
      year: "2024",
      techStack: ["Next.js", "Tailwind CSS", "Firebase"],
      image: "/twiceland.png",
    },
  ]

  return (
    <div ref={projectsWrapper} className="flex flex-col">
      <CursorFollower el={projectsWrapper} />
      {projects.map((project: any) => (
        <Link href="/" className="relative even:self-start odd:self-end my-32 even:ml-16 odd:mr-16 group" key={project.id}>
          <Image
            src={project.image}
            alt="Project Image"
            width={720}
            height={0}
          />
          <div 
            className="absolute flex items-end select-none bottom-[92px] gap-4 bg-[#EDCA85] w-[720px] max-w-full h-0 group-hover:h-[540px] transition-all duration-500 overflow-hidden"
          >
            <div
              className="flex shrink-0 justify-around min-w-full bottom-0 gap-4 text-[15rem] leading-none font-bold opacity-0 group-hover:opacity-100 transition-all duration-500
                text-neutral-900 uppercase animate-marquee whitespace-nowrap"
            >
              <span>
                &nbsp; {project.name}
              </span>
              <span>
                &nbsp; {project.name}
              </span>
              <span>
                &nbsp;{project.name}
              </span>
              <span>
                &nbsp;{project.name}
              </span>
              <span>
                &nbsp;{project.name}
              </span>
              <span>
                &nbsp;{project.name}
              </span>
            </div>
            <div
              className="flex shrink-0 justify-around min-w-full bottom-0 gap-4 text-[15rem] leading-none font-bold opacity-0 group-hover:opacity-100 text-neutral-900 
              uppercase animate-marquee whitespace-nowrap"
              aria-hidden="true"
            >
              <span>
                &nbsp;{project.name}
              </span>
              <span>
                &nbsp;{project.name}
              </span>
              <span>
                &nbsp;{project.name}
              </span>
              <span>
                &nbsp;{project.name}
              </span>
              <span>
                &nbsp;{project.name}
              </span>
              <span>
                &nbsp; {project.name}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative self-start">
              <h1
                className="relative font-bold text-3xl uppercase mt-4 mix-blend-difference before:bg-ivory before:content-[''] before:w-0 before:absolute before:-bottom-2
                    before:h-[2px] before:left-0 before:block before:transition-all before:duration-500 before:-z-10 group-hover:before:w-full"
              >
                {project.name}
              </h1>
              <h2 className="mt-4 mix-blend-difference">{project.year}</h2>
            </div>
            <div className="flex flex-wrap w-[200px] justify-end">
              {project.techStack.map((tech: any, index: number) =>
                <p className="mix-blend-difference" key={index}>{tech} &nbsp;</p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Projects