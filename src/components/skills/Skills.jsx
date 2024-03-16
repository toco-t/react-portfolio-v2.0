import "./skills.css";
import {
	SiC,
	SiDjango,
	SiGit,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiPostgresql,
	SiPython,
	SiTypescript,
} from "react-icons/si";
import { FaReact, FaNode, FaJava } from "react-icons/fa";

function Skills() {
	const size = 21;

	return (
		<section id="skills">
			<h2>Skill Sets</h2>

			<div className="container skills__container">
				<div className="skills__frontend">
					<h3>Languages & Frameworks</h3>
					<div className="skills__content">
						<article className="skills__details">
							<SiPython
								size={size}
								className="skills__details-icon"
							/>
							<div>
								<h4>Python</h4>
								<small className="text-light">Advanced</small>
							</div>
						</article>
						<article className="skills__details">
							<SiDjango
								size={size}
								className="skills__details-icon"
							/>
							<div>
								<h4>Django</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="skills__details">
							<SiJavascript
								size={size}
								className="skills__details-icon"
							/>
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Advanced</small>
							</div>
						</article>
						<article className="skills__details">
							<FaNode
								size={28}
								className="skills__details-icon"
							/>
							<div>
								<h4>Node.js</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="skills__details">
							<FaReact
								size={size}
								className="skills__details-icon"
							/>
							<div>
								<h4>React</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="skills__details">
							<SiTypescript
								size={size}
								className="skills__details-icon"
							/>
							<div>
								<h4>TypeScript</h4>
								<small className="text-light">Novice</small>
							</div>
						</article>
						<article className="skills__details">
							<FaJava
								size={28}
								className="skills__details-icon"
							/>
							<div>
								<h4>Java</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="skills__details">
							<SiC size={size} className="skills__details-icon" />
							<div>
								<h4>C</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
					</div>
				</div>

				<div className="skills__backend">
					<h3>Databases & Others</h3>
					<div className="skills__content">
						<article className="skills__details">
							<SiMysql
								size={size}
								className="skills__details-icon"
							/>
							<div>
								<h4>MySQL</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="skills__details">
							<SiMongodb
								size={size}
								className="skills__details-icon"
							/>
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">
									Intermediate
								</small>
							</div>
						</article>
						<article className="skills__details">
							<SiPostgresql
								size={size}
								className="skills__details-icon"
							/>
							<div>
								<h4>PostgreSQL</h4>
								<small className="text-light">Novice</small>
							</div>
						</article>
						<article className="skills__details">
							<SiGit
								size={size}
								className="skills__details-icon"
							/>
							<div>
								<h4>Git</h4>
								<small className="text-light">Advanced</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
