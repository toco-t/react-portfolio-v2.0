import { FiLinkedin, FiGithub } from "react-icons/fi";

function Socials() {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/toco-tachibana/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn Profile"
			>
				<FiLinkedin size={21} />
			</a>
			<a
				href="https://github.com/toco-t/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub Profile"
			>
				<FiGithub size={21} />
			</a>
		</div>
	);
}

export default Socials;
