import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import projects_service from "../projects_service.json";

const Projects = () => {
  const [projects, setProjects] = useState(undefined);

  useEffect(() => {
    setProjects(projects_service);
  }, []);

  if (projects) {
    return (
      <section className="projects">
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
      </section>
    );
  } else {
    return (
      <div>
        <h1>There are not projects to show</h1>
      </div>
    );
  }
};

export default Projects;
