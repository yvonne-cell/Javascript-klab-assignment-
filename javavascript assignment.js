


// Array of Objects representing projects
const projects = [
    {
        name: "SocialHub",
        description: "A social media app for sharing posts.",
        technologyUsed: ["Flutter", "Firebase"],
        year: 2024
    },
    {
        name: "E-Commerce Platform",
        description: "An online shopping website.",
        technologyUsed: ["React", "Node.js", "MongoDB"],
        year: 2023
    },
    {
        name: "Portfolio Website",
        description: "A personal portfolio website.",
        technologyUsed: ["HTML", "CSS", "JavaScript"],
        year: 2022
    }
];

// Use map to display project details
projects.map(project => {
    console.log(`Project Name: ${project.name}`);
    console.log(`Description: ${project.description}`);
    console.log(`Technology Used: ${project.technologyUsed.join(", ")}`);
    console.log(`Year: ${project.year}`);
    console.log("-------------------------------------------------------------------------------------------------");
});
