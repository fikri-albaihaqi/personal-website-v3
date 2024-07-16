import { cormorantGaramond } from "../assets/fonts"
import projects from "../assets/projectsData"
import Project from "../components/project"

const AllProjects = () => {
  return (
    <main>
      <h1 className={`${cormorantGaramond.className} text-8xl font-semibold ml-16 pt-8`}>
        All <br /> 
        Works
      </h1>

      <section className="relative grid grid-cols-2 gap-y-16 mx-16 my-32">
        {projects.map((project: any) => (
          <Project project={project} key={project.id} classes="mx-4 odd:place-self-start even:place-self-end" />
        ))}
      </section>
    </main>
  )
}

export default AllProjects