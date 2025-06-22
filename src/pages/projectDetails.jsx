import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ScrollLogo from '../components/ScrollLogo';

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projectDetails.css";
import "./styles/common.css";

const ProjectDetails = () => {
	const { projectId } = useParams();
	const [project, setProject] = useState(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [imageDimensions, setImageDimensions] = useState({ width: 'auto', height: 'auto' });

	useEffect(() => {
		window.scrollTo(0, 0);
		
		// Find project by ID (using title as ID for now)
		const foundProject = INFO.projects.find(p => 
			p.title.toLowerCase().replace(/\s+/g, '-') === projectId
		);
		setProject(foundProject);
	}, [projectId]);

	const currentSEO = SEO.find((item) => item.page === "projects");

	// Helper function to check if file is a video
	const isVideo = (filename) => {
		const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
		return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
	};

	// Helper function to get file extension

	if (!project) {
		return (
			<div className="page-content">
				<NavBar active="projects" showBackButton={true} />
				<div className="content-wrapper">
					<div className="project-not-found">
						<h2>Project Not Found</h2>
						<p>The project you're looking for doesn't exist.</p>
						<Link to="/projects" className="back-link">
							<FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
						</Link>
					</div>
				</div>
			</div>
		);
	}

	const nextImage = () => {
		setCurrentImageIndex((prev) => 
			prev === project.images.length - 1 ? 0 : prev + 1
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => 
			prev === 0 ? project.images.length - 1 : prev - 1
		);
	};

	const openModal = () => {
		setIsModalOpen(true);
		// Calculate dimensions when modal opens
		const currentFile = project.images[currentImageIndex];
		
		if (isVideo(currentFile)) {
			// For videos, use default dimensions that work well
			const maxWidth = window.innerWidth * 0.9;
			const maxHeight = window.innerHeight * 0.9;
			setImageDimensions({ 
				width: `${maxWidth}px`, 
				height: `${maxHeight * 0.6}px` // 16:9 aspect ratio
			});
		} else {
			// For images (including .webp), calculate based on actual dimensions
			const img = new Image();
			img.onload = () => {
				const maxWidth = window.innerWidth * 0.9;
				const maxHeight = window.innerHeight * 0.9;
				
				let { width, height } = img;
				
				if (width > maxWidth || height > maxHeight) {
					const scaleX = maxWidth / width;
					const scaleY = maxHeight / height;
					const scale = Math.min(scaleX, scaleY);
					
					width = width * scale;
					height = height * scale;
				}
				
				setImageDimensions({ width: `${width}px`, height: `${height}px` });
			};
			img.src = `/${currentFile}`;
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setImageDimensions({ width: 'auto', height: 'auto' });
	};

	const handleModalImageClick = (e) => {
		e.stopPropagation();
		nextImage();
		// Recalculate dimensions for new file
		const currentFile = project.images[currentImageIndex];
		
		if (isVideo(currentFile)) {
			const maxWidth = window.innerWidth * 0.9;
			const maxHeight = window.innerHeight * 0.9;
			setImageDimensions({ 
				width: `${maxWidth}px`, 
				height: `${maxHeight * 0.6}px`
			});
		} else {
			// For images (including .webp), calculate based on actual dimensions
			const img = new Image();
			img.onload = () => {
				const maxWidth = window.innerWidth * 0.9;
				const maxHeight = window.innerHeight * 0.9;
				
				let { width, height } = img;
				
				if (width > maxWidth || height > maxHeight) {
					const scaleX = maxWidth / width;
					const scaleY = maxHeight / height;
					const scale = Math.min(scaleX, scaleY);
					
					width = width * scale;
					height = height * scale;
				}
				
				setImageDimensions({ width: `${width}px`, height: `${height}px` });
			};
			img.src = `/${currentFile}`;
		}
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
				<meta
					name="keywords"
					content={project.technologies.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" showBackButton={true} />
				<div className="content-wrapper">
					<div className="floating-logo-container">
						<ScrollLogo 
						initialSize={80} 
						minSize={40}
						seoData={currentSEO}
						/>
					</div>

					<div className="project-details-container">
						<div className="project-details-header">
							<h1 className="project-title">{project.title}</h1>
							<p className="project-subtitle">{project.description}</p>
						</div>

						<div className="project-details-content">
							<div className="project-details-left">
								{/* Image Gallery */}
								<div className="project-gallery">
									<div className="gallery-main">
										{isVideo(project.images[currentImageIndex]) ? (
											<video 
												src={project.images[currentImageIndex].startsWith('/') ? project.images[currentImageIndex] : `/${project.images[currentImageIndex]}`} 
												className="gallery-main-video"
												controls
												onClick={openModal}
											>
												Your browser does not support the video tag.
											</video>
										) : (
											<img 
												src={project.images[currentImageIndex].startsWith('/') ? project.images[currentImageIndex] : `/${project.images[currentImageIndex]}`} 
												alt={`${project.title} - ${currentImageIndex + 1}`}
												className="gallery-main-image"
												onClick={openModal}
											/>
										)}
										{project.images.length > 1 && (
											<>
												<button className="gallery-nav prev" onClick={prevImage}>
													‹
												</button>
												<button className="gallery-nav next" onClick={nextImage}>
													›
												</button>
											</>
										)}
									</div>
									{project.images.length > 1 && (
										<div className="gallery-thumbnails">
											{project.images.map((image, index) => (
												<div
													key={index}
													className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
													onClick={() => setCurrentImageIndex(index)}
												>
													{isVideo(image) ? (
														<video 
															src={image.startsWith('/') ? image : `/${image}`}
															className="thumbnail-video"
															muted
														/>
													) : (
														<img
															src={image.startsWith('/') ? image : `/${image}`}
															alt={`Thumbnail ${index + 1}`}
															className="thumbnail-image"
														/>
													)}
												</div>
											))}
										</div>
									)}
								</div>

								{/* Image Modal */}
								{isModalOpen && (
									<div className="image-modal-overlay" onClick={closeModal}>
										<div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
											<button className="modal-close-btn" onClick={closeModal}>
												×
											</button>
											{isVideo(project.images[currentImageIndex]) ? (
												<video 
													src={`/${project.images[currentImageIndex]}`} 
													className="modal-video"
													controls
													style={imageDimensions}
													onClick={handleModalImageClick}
												>
													Your browser does not support the video tag.
												</video>
											) : (
												<img 
													src={`/${project.images[currentImageIndex]}`} 
													alt={`${project.title} - ${currentImageIndex + 1}`}
													className="modal-image"
													style={imageDimensions}
													onClick={handleModalImageClick}
												/>
											)}
											{project.images.length > 1 && (
												<>
													<button className="modal-nav prev" onClick={prevImage}>
														‹
													</button>
													<button className="modal-nav next" onClick={nextImage}>
														›
													</button>
													<div className="modal-image-counter">
														{currentImageIndex + 1} / {project.images.length}
													</div>
												</>
											)}
										</div>
									</div>
								)}

								{/* Technologies */}
								<div className="project-technologies">
									<h3>Technologies Used</h3>
									<div className="tech-tags">
										{project.technologies.map((tech, index) => (
											<span key={index} className="tech-tag">{tech}</span>
										))}
									</div>
								</div>
							</div>

							<div className="project-details-right">
								{/* Full Description */}
								<div className="project-description-section">
									<h3>About This Project</h3>
									<p>{project.fullDescription}</p>
								</div>

								{/* Project Details */}
								<div className="project-info-section">
									<h3>Project Information</h3>
									<div className="project-info-grid">
										<div className="info-item">
											<span className="info-label">Role:</span>
											<span className="info-value">{project.details.role}</span>
										</div>
										<div className="info-item">
											<span className="info-label">Duration:</span>
											<span className="info-value">{project.details.duration}</span>
										</div>
										<div className="info-item">
											<span className="info-label">Team Size:</span>
											<span className="info-value">{project.details.teamSize}</span>
										</div>
									</div>
								</div>

								{/* Challenges */}
								<div className="project-challenges-section">
									<h3>Key Challenges</h3>
									<ul className="challenges-list">
										{project.details.challenges.map((challenge, index) => (
											<li key={index}>{challenge}</li>
										))}
									</ul>
								</div>

								{/* Achievements */}
								<div className="project-achievements-section">
									<h3>Key Achievements</h3>
									<ul className="achievements-list">
										{project.details.achievements.map((achievement, index) => (
											<li key={index}>{achievement}</li>
										))}
									</ul>
								</div>

								{/* Links */}
								{(project.github || project.demo) && (
									<div className="project-links-section">
										<h3>Project Links</h3>
										<div className="project-links">
											{project.github && (
												<a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
													<FontAwesomeIcon icon={faGithub} />
													<span>View on GitHub</span>
													<FontAwesomeIcon icon={faExternalLinkAlt} className="external-icon" />
												</a>
											)}
											{project.demo && (
												<a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
													<FontAwesomeIcon icon={faYoutube} />
													<span>Watch Demo</span>
													<FontAwesomeIcon icon={faExternalLinkAlt} className="external-icon" />
												</a>
											)}
										</div>
									</div>
								)}
							</div>
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

export default ProjectDetails; 