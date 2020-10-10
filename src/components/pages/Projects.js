import React from 'react';

const projects = [
    {
        name: "Run Buddy",
        liveURL: "https://jdlawton.github.io/run-buddy/",
        ghURL: "https://github.com/jdlawton/run-buddy",
        tech: "HTML/CSS",
        style: "run-buddy"
    },
    {
        name: "Robot Gladiators",
        liveURL: "https://jdlawton.github.io/robot-gladiators/",
        ghURL: "https://github.com/jdlawton/robot-gladiators",
        tech: "JavaScript",
        style: "robot-gladiators"
    },
    {
        name: "Prestige Worldwide",
        liveURL: "https://jdlawton.github.io/prestige-worldwide/",
        ghURL: "https://github.com/jdlawton/prestige-worldwide",
        tech: "HTML/CSS/JavaScript",
        style: "prestige-worldwide"
    },
    {
        name: "Fallout 4 Character Manager",
        liveURL: "https://jdlawton.github.io/fo-char-gen",
        ghURL: "https://github.com/jdlawton/fo4-char-gen",
        tech: "Node.js/Express/Sequelize/Handlebars",
        style: "fo-char-mgr"
    },
    {
        name: "Noteworthy",
        liveURL: "https://lit-shelf-32609.herokuapp.com/",
        ghURL: "https://github.com/jdlawton/noteworthy",
        tech: "Node.js/Express",
        style: "noteworthy"
    },
    {
        name: "/dev/zero > blog",
        liveURL: "https://fast-caverns-43047.herokuapp.com/",
        ghURL: "https://github.com/jdlawton/tech-blog",
        tech: "Node.js/Express/MVC",
        style: "blog"
    }
]

//This component returns the div that contains all of the content for the Projects portion of the site.
const Projects = () => (
    <div>
        <h1>Projects</h1>
            {projects.map(project => (
                <div className={project.style} key={project.name}> 
                    <a href={project.liveURL} target="_blank" rel="noopener noreferrer" >
                        {project.name}
                    </a>
                    <a href={project.ghURL} target="_blank" rel="noopener noreferrer">
                        GitHub Repo
                    </a>
                    <p>{project.tech}</p>
                </div>
                
            ))}
    </div>
);

export default Projects;