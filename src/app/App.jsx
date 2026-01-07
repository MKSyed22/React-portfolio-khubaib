import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/Resume-khubaib.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";

//import images
import ModernDome from '../assets/images/MDC-logo.png';
import BMS from '../assets/images/MDC-logo.png';

// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
  { name: 'HTML 5', icon: <AiFillHtml5 size="25px" color="white" />, cssName: "html" },
  { name: 'CSS 3', icon: <BiLogoCss3 size="25px" color="white" />, cssName: "css" },
  { name: 'JavaScript', icon: <BiLogoJavascript size="25px" color="white" />, cssName: "javascript" },
  { name: 'React', icon: <FaReact size="25px" color="white" />, cssName: "react" },
  { name: 'Responsive Design', icon: <FaMobileAlt size="25px" color="white" />, cssName: "responsive" },
  { name: 'Git', icon: <BsGit size="25px" color="white" />, cssName: "git" }
];

const projects = [
	{
		name: 'Modern Dome Contracting Website',
		link: 'https://trademdc.com/',
		github: '',
		description: 'Developed the official WordPress website for Modern Dome Contracting, an interior and commercial fit-out company, highlighting services and project portfolio with a responsive, business-oriented design.',
		image: ModernDome
	},
	{
		name: 'Business Management System',
		link: '',
		github: '',
		description: "Built a Business Management System for Modern Dome Contracting to manage projects, clients, suppliers, inventory, and employees, improving operational workflow and efficiency.",
		image: BMS
	},
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_RECEIVE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(() => {
      return emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_REPLY_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
    })
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong 😢");
      setLoading(false);
    });
};

	

	return (
		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
					<FaReact color='var(--primary-main)' size='50px' />
					<h5>Muhammad Khubaib Shah</h5>
				</a>
				<ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label
  className={`${style.toggle} ${style.toggle2}`}
  htmlFor="checkbox"
  onClick={() => setMenu(!menu)}
>

						<div className={`${style.bars} ${style.bar4}`}></div>
<div className={`${style.bars} ${style.bar5}`}></div>
<div className={`${style.bars} ${style.bar6}`}></div>

						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
					<h1 >HEY, I'M Muhammad Khubaib Shah</h1>
					<p>A Front-End React Developer building modern and responsive websites and applications</p>
					<a
						href={cv}
						download="Muhammad Khubaib Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DownloadButton >
							Download CV
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/MKSyed22' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:mkhubaibshah22@gmail.com?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>
					<a className={style.facebook} target="_blank" href='https://www.facebook.com/khubaib.shah.796' >
						<BsFacebook size="30px" color='black' />
					</a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					<p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Get to know me!</h3>
							<p>
                                I'm a <span>Frontend React Developer</span> passionate about building modern, responsive, and user‑friendly web applications.
  								I focus on creating seamless user experiences using clean, maintainable code. I enjoy solving problems, learning new
  								technologies, and contributing to real‑world projects with practical impact. I’m open to opportunities where I can grow and contribute to high‑quality product development.
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill-${index}`}
 className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project-${index}`}
 className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											{project.link && (
                                                <IconButton
    											width="170px"
    											height="50px"
    											backgroundColor="var(--primary-main)"
    											color="white"
    											link={project.link}
    											icon={<AiOutlineEye size="25px" color='white' />}
  												>
   												Live Demo
 												</IconButton>
												)}

											{project.github && (
  												<IconButton
    												width="100px"
    												height="50px"
    												backgroundColor="black"
    												color="white"
    												link={project.github}
    												icon={<AiFillGithub size="25px" color='white' />}
  													>
    												Github
                                                </IconButton>
                                            )}
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>

			{/* Contact */}
<div id='Contact' className={style.contact}>
  <div className={style.container}>
    <h2 className={style.title}>Contact</h2>
    <p>
      Feel free to Contact me by submitting the form below and I will get back to
      you as soon as possible
    </p>

    <form
  ref={form}
  onSubmit={sendEmail}
  className={clsx({ [style['inactive-form']]: loading })}
>
  <InputField
    width="700px"
    height="40px"
    name="name"
    placeholder="Enter Your Name"
    label="Name"
    type="text"
    required
  />

  <InputField
    width="700px"
    height="40px"
    name="email"
    placeholder="Enter Your Email"
    label="Email"
    type="email"
    required
  />

  <TextAreaField
    width="700px"
    height="250px"
    name="message"
    placeholder="Enter Your Message"
    label="Message"
    required
  />

  <SubmitButton
    icon={<RiSendPlaneFill size="20px" color="white" />}
    width="200px"
    height="60px"
    color="white"
    backgroundColor="var(--primary-main)"
  >
    Submit
  </SubmitButton>

  {loading && (
    <div className={style.loader}>
      <Loader />
    </div>
  )}
</form>

  </div>
</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Muhammad Khubaib Shah</h3>
                            <p>A Frontend React Developer building modern, responsive web applications with clean, maintainable code.</p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/MKSyed22' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:mkhubaibshah22@gmail.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
								<a className={style.facebook} target="_blank" href='https://www.facebook.com/khubaib.shah.796' >
									<BsFacebook size="30px" color='white' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2026. Made by <span>Muhammad Khubaib Shah</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;