import { Link } from "react-router-dom";
import { projects, type Project } from "../../data/project";

function ProjectCardItem({ title, description, thumbnail, link }: Project) {
  return (
    <article className="container py-5 border-bottom">
      <div className="row align-items-center">
        {/* Thumbnail */}
        <div className="thumbnail">
          <div
            className="position-relative"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <img
              src={thumbnail}
              className="project-img-primary"
              alt={`${title} mockup 1`}
              style={{ width: "80%" }}
            />
            <img
              src={thumbnail}
              className="project-img-secondary"
              alt={`${title} mockup 2`}
              style={{
                width: "60%",
                bottom: "-20px",
                right: "0",
                border: "2px solid black",
              }}
            />
          </div>
        </div>

        {/* description */}
        <div className="description">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>
          <Link
            to={link}
            className="project-link"
          >
            read more <span className="link-arrow">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProjectCard() {
  return (
    <section className="projects">
      <div className="card-container">
        {projects.map((project) => (
          <ProjectCardItem
            key={project.title}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            link={project.link}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectCard;
