import type { Project } from "../../data/project";

interface ProjectIntroProps {
  project: Project;
}

export function ProjectIntro({ project }: ProjectIntroProps) {
  return (
    <div className="project-details-container">
      <div className="project-details-header">
        <h1>{project.title}</h1>
        <h4>{project.subheading}</h4>
      </div>
      <div className="project-thumbnail-container">
        <img
          className="project-details-thumbnail"
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
        />
      </div>
      <table className="project-info">
        <thead>
          <tr>
            <th>Role</th>
            <th>Tech Stack</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Role">{project.role}</td>
            <td data-label="Tech Stack">
              <ul className="project-info-list">
                {project.techstack?.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </td>
            <td data-label="Links">
              <ul className="project-info-list">
                {project.links && project.links.length > 0 ? (
                  project.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>N/A</li>
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
