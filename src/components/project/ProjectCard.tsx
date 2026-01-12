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
      className={`custom-project-row ${isReversed ? "row-flipped" : ""}`}
    >
      <div className="image-wrapper">
        <img src={thumbnail} alt={title} className="big-thumbnail" />
      </div>
      <div className="content-wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link}>read more →</Link>
      </div>
    </article>
  );
}

function ProjectCard() {
  return (
    /* Ensure THIS div isn't being squeezed by a parent class */
    <section className="wide-layout-wrapper">
      {projects.map((project, index) => (
        <ProjectCardItem key={project.title} {...project} index={index} />
      ))}
    </section>
  );
}

export default ProjectCard;
