import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import ScrollLogo from '../components/ScrollLogo';

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import "./styles/common.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="floating-logo-container">
						<ScrollLogo 
						initialSize={80} 
						minSize={40}
						seoData={currentSEO}
						/>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							My Design Projects
						</div>

						<div className="subtitle projects-subtitle">
							The following projects showcases my diverse skillset in end-to-end design and engineering.
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
