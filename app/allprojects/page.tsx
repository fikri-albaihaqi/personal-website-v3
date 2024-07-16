import { cormorantGaramond } from "../assets/fonts"
import projects from "../assets/projectsData"
import Project from "../components/project"

const AllProjects = () => {
  return (
    <main>
      <h1 className={`${cormorantGaramond.className} text-8xl font-semibold ml-16 pt-8`}>
        All <br /> 
        Projects
      </h1>

      <section>
        {projects.map((project: any) => (
          <Project project={project} key={project.id} />
        ))}
      </section>
    </main>
  )
}

export default AllProjects