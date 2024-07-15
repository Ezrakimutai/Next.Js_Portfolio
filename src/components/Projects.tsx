"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Simple Portfolio Using React.Js, Typescript, CSS ",
    image: "/images/Portfolio.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://my-portfolio-eight-zeta-39.vercel.app/",
    previewUrl: ""
  },
  {
    id: 2,
    title: "Imperial Designs",
    description: "An architectural Portfolio website (HTML, CSS, Javascript",
    image: "/images/architect.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://imperialarchitects.github.io",
    previewUrl: ""
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Modern Comercal App for Business using React Native",
    image: "/images/Ecom.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ezrakimutai/E-Comm.git",
    previewUrl: ""
  },
  {
    id: 4,
    title: "Hiking and Entertainment",
    description: "A simple site to showcase all my Fun activities and hobbies",
    image: "/images/project-img1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: ""
  },
  {
    id: 5,
    title: "Food Ordering Site",
    description: "Authentication and CRUD operations",
    image: "/images/Tawi.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: ""
  },
  {
    id: 6,
    title: "Bookstore System",
    description: "Moderb bookstore site to access documentaries and historic journals",
    image: "/images/Bookstore.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: ""
  },
];
const Projects = () => {
  const [tag, setTag] = useState("All");
  
//Displays projects filtered out when click either web or App
  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
);
//Handles which tab is active when clicked
  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  return (
    <>  
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}

          />
        ))}
      </div>
    </>
  );
};

export default Projects;