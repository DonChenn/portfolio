import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams();
  return (
    <div>
      <h1>{projectId}</h1>
    </div>
  );
}

export default ProjectDetails;
