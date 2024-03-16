import cloud from "../../assets/cotton.png";
import "./about.css";

function About() {
	return (
		<section id="about">
			<h2>About Toco</h2>

			<div className="container about__container">
				<div className="about__img">
					<img src={cloud} alt="cloud-img" />
				</div>
				<div className="about__content">
					<p>
						Currently pursuing my studies at BCIT with a focus on
						Predictive Analytics. Passionate about learning new
						technologies and leveraging data-driven insights to
						solve complex problems.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
