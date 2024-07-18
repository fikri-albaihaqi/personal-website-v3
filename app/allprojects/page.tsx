import { cormorantGaramond } from "../assets/fonts"
import projects from "../assets/projectsData"
import Project from "../components/project"

const AllProjects = () => {
  return (
    <main>
      <h1 className={`${cormorantGaramond.className} text-8xl font-semibold ml-8 lg:ml-16 pt-32`}>
        All <br /> 
        Works
      </h1>

      <section className="relative md:grid grid-cols-2 gap-y-16 mx-8 lg:mx-16 my-32">
        {projects.map((project: any) => (
          <Project project={project} key={project.id} classes="lg:mx-4 odd:place-self-start even:place-self-end" />
        ))}
      </section>
    </main>
  )
}

export default AllProjects