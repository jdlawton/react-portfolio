import React from 'react';

//Array of projects. If projects in the portfolio are changed or added, all you should need to do is edit/add the objects here.
//style here is used in the stylesheet to provide a unique background image for each project.
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
        name: "/dev/zero > blog",
        liveURL: "https://fast-caverns-43047.herokuapp.com/",
        ghURL: "https://github.com/jdlawton/tech-blog",
        tech: "Node.js/Express/MVC",
        style: "blog"
    },
    {
        name: "tech-docs",
        liveURL: "https://evening-gorge-96741.herokuapp.com/",
        ghURL: "https://github.com/jdlawton/tech-docs",
        tech: "MERN / GraphQL",
        style: "network"
    }
]



//This component returns the div that contains all of the content for the Projects portion of the site.
const Projects = () => (
    <section>
        <h2 className="section-header">Projects</h2>
            <div className="project-wrapper">
                {projects.map(project => (
                    <div className={`${project.style} project-item`} key={project.name}> 
                        <div className="project-header">
                            <a href={project.liveURL} target="_blank" rel="noopener noreferrer" className="project-title">
                                {project.name}
                            </a>
                            <a href={project.ghURL} target="_blank" rel="noopener noreferrer" className="project-github">
                                GitHub
                            </a>
                        </div>
                        <p className="project-tech">{project.tech}</p>
                    </div>
                    
                ))}
            </div>
            
    </section>
);

export default Projects;