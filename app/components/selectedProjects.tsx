'use client'

import CursorFollower from "./cursorFollower"
import { useRef } from "react"
import Project from "./project"
import projects from "../assets/projectsData"

const SelectedProjects = () => {
  const projectsWrapper = useRef<any>()

  return (
    <div ref={projectsWrapper} className="flex flex-col items-center">
      <CursorFollower el={projectsWrapper} />
      {projects.slice(0, 3).map((project: any) => (
        <Project project={project} key={project.id} classes="md:even:self-start md:odd:self-end my-32 md:even:ml-16 md:odd:mr-16" />
      ))}
    </div>
  )
}

export default SelectedProjects