import { useState, useEffect } from "react";

function Projects(props) {
// Create a state to hold "Projects" data
const [projects, setProjects] = useState(null);

// Create function to make api call
const getProjectsData = async () => {
    // Make api call and get response
    const response = await fetch(props.URL + "projects");
    // Turn response into javascript object
    const data = await response.json();
    // Set the "Projects" state to the data
    setProjects(data);
};

// Make an initial call for the data inside a useEffect, so it only happens once on component load
useEffect(() => getProjectsData(), []);

// Define a function that will return the JSX needed once we get the data
const loaded = () => {
    const projectsList =        
       projects.map((project) => (
            <div className="project">
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
            </div>)
        )
        



    return (
    <div className="projects">
        {projectsList}
    </div>

)
};

// If data arrives, return the result of loaded; if not, an h1 that says "loading"
return projects ? loaded() : <h1>Loading ...</h1>;

}
  
  export default Projects;