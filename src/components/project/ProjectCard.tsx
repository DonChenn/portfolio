import { Link } from "react-router-dom";
import { projects, type Project } from "../../data/project";

interface ProjectCardItemProps extends Project {
  index: number;
}

function ProjectCardItem({
  title,
  description,
  thumbnail,
  link,
  index,
}: ProjectCardItemProps) {
  const isReversed = index % 2 !== 0;

  return (
    <article
      className={`project-card-container ${isReversed ? "flex-reverse" : ""}`}
    >
      <div className="project-image-wrapper">
        <img src={thumbnail} alt={title} className="project-thumbnail" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="description">{description}</p>
        <Link to={link} className="project-link-action">
          read more →
        </Link>
      </div>
    </article>
  );
}

function ProjectCard() {
  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCardItem key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectCard;
