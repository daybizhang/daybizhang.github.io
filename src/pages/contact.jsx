import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import ScrollLogo from '../components/ScrollLogo';

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import "./styles/common.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="floating-logo-container">
						<ScrollLogo 
						initialSize={80} 
						minSize={40}
						seoData={currentSEO}
						/>
					</div>
					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in contacting me! Please feel free to reach out with any 
							questions, concerns, suggestions, or even just to chat at
							&nbsp;{""}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I always try to respond within 24 hours; however, 
							expect delays if it is a work day.
							If informal, please contact me on social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. I don't post to often, but I frequently check and respond to messages.
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
