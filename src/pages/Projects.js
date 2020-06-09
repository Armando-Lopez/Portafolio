import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import projects_service from "../projects_service.json";

const Projects = () => {
  const [projects, setProjects] = useState(undefined);

  useEffect(() => {
    setProjects(projects_service);
  }, []);

  if (projects) {
    return (
      <div className="projects">
        <Navigation />
        <div className="projects__content">
          <h1 className="projects__title">Projects</h1>
          <div className="cards-container">
            {projects.map((project, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  img={project.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navigation />
        <h1>There are not projects to show</h1>
      </div>
    );
  }
};

export default Projects;
