import { Link } from "react-router-dom";
import { projects, type Project } from "../../data/project";

interface ProjectCardItemProps extends Project {
  index: number;
}

// Featured Projects

function FaturedProjectCard({
  title,
  subheading,
  thumbnail,
  link,
}: ProjectCardItemProps) {
  return (
    <Link to={link} className="project-card-container">
      <div className="project-image-wrapper">
        <img src={thumbnail} alt={title} className="project-thumbnail" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="description">{subheading}</p>
      </div>
    </Link>
  );
}

export function FeaturedProjectCards() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <FaturedProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

// All Projects

function AllProjectCard({
  title,
  subheading,
  thumbnail,
  link,
}: ProjectCardItemProps) {
  return (
    <Link to={link} className="project-card-container">
      <div className="project-image-wrapper">
        <img src={thumbnail} alt={title} className="project-thumbnail" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="description">{subheading}</p>
      </div>
    </Link>
  );
}

export function AllProjectCards() {
  return (
    <section className="projects-section">
      <div className="project-cards">
        {projects.map((project, index) => (
          <AllProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
