'use client'

import CursorFollower from "./cursorFollower"
import { useRef } from "react"
import Project from "./project"
import projects from "../assets/projectsData"

const SelectedProjects = () => {
  const projectsWrapper = useRef<any>()

  return (
    <div ref={projectsWrapper} className="flex flex-col">
      <CursorFollower el={projectsWrapper} />
      {projects.map((project: any) => (
        <Project project={project} key={project.id} classes="even:self-start odd:self-end my-32 even:ml-16 odd:mr-16" />
      ))}
    </div>
  )
}

export default SelectedProjects