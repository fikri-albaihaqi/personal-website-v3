'use client'

import Image from "next/image"

const Projects = () => {
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
    <div className="flex flex-col">
      {projects.map((project: any) => (
        project.id % 2 !== 0 ? (
          <div className="self-start my-32 ml-16" key={project.id}>
            <Image src={project.image} alt="Project Image" width={640} height={600} />
            <div className="flex items-center justify-between">
              <div className="self-start">
                <h1 className="font-bold text-3xl uppercase mt-4">{project.name}</h1>
                <h2 className="mt-4">{project.year}</h2>
              </div>
              <div className="flex flex-wrap w-[200px] justify-end">
                {project.techStack.map((tech: any) => 
                  <p>{tech} &nbsp;</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="self-end my-32 mr-16" key={project.id}>
            <Image src={project.image} alt="Project Image" width={640} height={600} />
            <div className="flex items-center justify-between">
              <div className="self-start">
                <h1 className="font-bold text-3xl uppercase mt-4">{project.name}</h1>
                <h2 className="mt-4">{project.year}</h2>
              </div>
              <div className="flex flex-wrap w-[200px] justify-end">
                {project.techStack.map((tech: any) => 
                  <p>{tech} &nbsp;</p>
                )}
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  )
}

export default Projects