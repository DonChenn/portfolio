import { Link } from "react-router-dom";
import { projects, type Project } from "../../data/project";

function ProjectCardItem({ title, description, thumbnail, link }: Project) {
  return (
    <article className="container py-5 border-bottom">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <div
            className="position-relative"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <img
              src={thumbnail}
              className="img-fluid rounded shadow"
              alt={`${title} mockup 1`}
              style={{ width: "80%" }}
            />
            <img
              src={thumbnail}
              className="img-fluid rounded shadow position-absolute"
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

        <div className="col-md-6 text-center text-md-start px-md-5">
          <h1 className="display-4 fw-bold">{title}</h1>
          <p className="lead fs-4 text-secondary">{description}</p>
          <Link
            to={link}
            className="btn btn-link p-0 text-decoration-none fw-bold fs-5"
          >
            read more <span className="ms-2">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProjectCard() {
  return (
    <section className="projects">
      <div className="container-fluid p-0">
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
