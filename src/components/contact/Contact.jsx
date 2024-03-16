import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const {
	VITE_EMAILJS_SERVICE_ID,
	VITE_EMAILJS_TEMPLATE_ID,
	VITE_EMAILJS_USER_ID
} = import.meta.env;

function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				VITE_EMAILJS_SERVICE_ID,
				VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				VITE_EMAILJS_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section id="contact">
			<h2>Contact</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<form ref={form} onSubmit={sendEmail}>
						<input
							type="text"
							name="name"
							placeholder="Name:"
							required
						/>
						<input
							type="text"
							name="email"
							placeholder="Email:"
							required
						/>
						<textarea
							name="message"
							placeholder="Message:"
							rows="10"
							required
						></textarea>
						<button type="submit" className="btn btn-primary">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
