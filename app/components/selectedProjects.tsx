'use client'

import CursorFollower from './cursorFollower'
import { useRef, useState, useEffect } from 'react'
import Project from './project'
import projects from '../assets/projectsData'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const SelectedProjects = () => {
  const projectsWrapper = useRef<HTMLDivElement>(null)
  const cursorFollower = useRef<HTMLDivElement>(null)

  const [animation] = useState(gsap.timeline({ paused: true }))
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches)
  }, [])

  useGSAP(() => {
    if (isTouch) return

    gsap.set(cursorFollower.current, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0,
    })

    let x = gsap.quickTo(cursorFollower.current, 'x', {
      duration: 0.6,
      ease: 'back',
    })

    let y = gsap.quickTo(cursorFollower.current, 'y', {
      duration: 0.6,
      ease: 'back',
    })

    window.addEventListener('mousemove', (e) => {
      x(e.clientX)
      y(e.clientY)
    })

    animation.fromTo(
      cursorFollower.current,
      { scale: 0, opacity: 0, duration: 0.3 },
      { scale: 1, opacity: 100, duration: 0.3 }
    )

    const targets = gsap.utils.toArray(projectsWrapper.current?.children ?? [])

    targets.forEach((target: any) => {
      target.addEventListener('mouseenter', () => animation.play())
      target.addEventListener('mouseleave', () => animation.reverse())
    })
  }, [isTouch])

  return (
    <div
      ref={projectsWrapper}
      className="flex flex-col items-center px-8 lg:px-0"
    >
      {!isTouch && <CursorFollower ref={cursorFollower} />}
      {projects.slice(0, 5).map((project: any) => (
        <Project
          project={project}
          key={project.id}
          classes="lg:even:self-start lg:odd:self-end my-32 lg:even:ml-16 lg:odd:mr-16"
        />
      ))}
    </div>
  )
}

export default SelectedProjects
