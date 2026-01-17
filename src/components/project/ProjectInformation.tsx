import type { Project } from "../../data/project";

interface ProjectInformationProps {
  project: Project;
}

export function ProjectInformation({ project }: ProjectInformationProps) {
  return (
    <div className="project-information">
      {project.description.map((item, index) => (
        <div key={index} className="project-description-item">
          <h3>{item.header}</h3>
          <p>{item.text}</p>
          {item.bullets && item.bullets.length > 0 && (
            <ul>
              {item.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          )}
          {item.image && (
            <div className="description-image-container">
              <img src={item.image} alt={item.header} className="description-image" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
