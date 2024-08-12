'use client'

import CursorFollower from "./cursorFollower"
import { useRef, useState } from "react"
import Project from "./project"
import projects from "../assets/projectsData"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

const SelectedProjects = () => {
  const projectsWrapper = useRef<any>()
  const cursorFollower = useRef<any>()

  const [animation] = useState(gsap.timeline({ paused: true }))

  useGSAP(() => {
    gsap.set(cursorFollower.current, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 })

    let x = gsap.quickTo(
      cursorFollower.current,
      'x',
      {
        duration: 0.6,
        ease: 'back',
      }
    )

    let y = gsap.quickTo(
      cursorFollower.current,
      'y',
      {
        duration: 0.6,
        ease: 'back',
      }
    )

    window.addEventListener("mousemove", (e) => {
      x(e.clientX)
      y(e.clientY)
    })

    animation.fromTo(
      cursorFollower.current,
      {
        scale: 0,
        opacity: 0,
        duration: 0.3
      },
      {
        scale: 1,
        opacity: 100,
        duration: 0.3
      },
    )
    let targets = gsap.utils.toArray(projectsWrapper.current?.children)

    targets.forEach((target: any) => {
      target.addEventListener("mouseenter", () => {
        animation.play()
      })

      target.addEventListener("mouseleave", () => {
        animation.reverse()
      })
    })
  })

  return (
    <div ref={projectsWrapper} className="flex flex-col items-center">
      <CursorFollower ref={cursorFollower} />
      {projects.slice(0, 3).map((project: any) => (
        <Project project={project} key={project.id} classes="md:even:self-start md:odd:self-end my-32 md:even:ml-16 md:odd:mr-16" />
      ))}
    </div>
  )
}

export default SelectedProjects