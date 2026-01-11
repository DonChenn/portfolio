import ProjectCard from "../components/project/ProjectCard";
import Introduction from "../components/layout/Introduction";

function Home() {
  return (
    <div className="home">
      <Introduction />
      <ProjectCard />
    </div>
  );
}

export default Home;
