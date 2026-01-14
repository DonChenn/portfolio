import { FeaturedProjectCards } from "../components/project/ProjectCard";
import Introduction from "../components/layout/Introduction";

function Home() {
  return (
    <div className="home">
      <Introduction />
      <FeaturedProjectCards />
    </div>
  );
}

export default Home;
