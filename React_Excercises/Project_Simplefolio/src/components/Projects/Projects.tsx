import Project from "../Project/Project";
import "../Projects/Projects.css";


const Projects = () => {
  return (
    <div >
        
      <h1 className="project-h1">Projects</h1>
      <div className="projects">
        <Project />
        <Project />
        <Project />
      </div>
    
      
    </div>
  );
};

export default Projects;
