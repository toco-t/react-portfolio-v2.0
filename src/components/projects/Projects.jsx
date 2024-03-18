import "./projects.css";
import Project from "./Project";

function Projects() {
	const projects = [
		{
			id: 1,
			title: "Predictive Regression/Classification Model",
			stack: "Python | pandas | scikit-learn | matplotlib | seaborn",
			github: "https://github.com/toco-t/predictive-regression-model",
		},
		{
			id: 2,
			title: "Geeks Collectors Network",
			stack: "TypeScript | React | Node | Express | MySQL",
			github: "https://github.com/Geek-Collectors-Network/geek-collectors-network",
		},
		{
			id: 3,
			title: "Portfolio",
			stack: "React | HTML | CSS",
			github: "https://github.com/toco-t/react-portfolio-v2.0",
		}
	];

	return (
		<section id="projects">
			<h2>Projects</h2>

			<div className="container projects__container">
				{projects.map((project) => {
					return (
						<Project
							key={project.id}
							title={project.title}
							stack={project.stack}
							github={project.github}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Projects;
