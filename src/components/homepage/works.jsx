import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./rivian.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Rivian</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">May 2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./cmu_ri.png"
								alt="cmu_robotics_institute"
								className="work-image"
							/>
							<div className="work-title">Carnegie Mellon University Robotics Institute</div>
							<div className="work-subtitle">
								Robotics Software Engineer
							</div>
							<div className="work-duration">Jan 2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./alstom.jpg"
								alt="alstom"
								className="work-image"
							/>
							<div className="work-title">Alstom</div>
							<div className="work-subtitle">
								Embedded Software Engineer
							</div>
							<div className="work-duration">Jan 2024 - Jan 2025</div>
						</div>

						<div className="work">
							<img
								src="./tsinghua.png"
								alt="tsinghua"
								className="work-image"
							/>
							<div className="work-title">Tsinghua University Department of Electrical Engineering</div>
							<div className="work-subtitle">
								Embedded Software Engineer
							</div>
							<div className="work-duration">April 2023 - Aug 2023</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
