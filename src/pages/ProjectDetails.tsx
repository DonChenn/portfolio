import { useParams } from "react-router-dom";
import { projects } from "../data/project";
import { useEffect } from "react";
import { ProjectIntro } from "../components/project/ProjectIntro";
import { ProjectInformation } from "../components/project/ProjectInformation";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.link === `/project/${projectId}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div>
        <h1>Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="project-detail-body">
      <ProjectIntro project={project} />
      <ProjectInformation project={project} />
    </div>
  );
}

export default ProjectDetails;
