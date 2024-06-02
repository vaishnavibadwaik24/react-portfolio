import React from "react";
import resume from "./resume.pdf";
import view from "./view.png";
import { TypeAnimation } from "react-type-animation";

import g3 from './images/g3.png';
import g1 from './images/g1.png';
import g2 from './images/g2.png';
import g4 from './images/g4.png';

import laravel from './laravel.png';
import react from './react.svg';
import php from './php.svg';
import html from './html.svg';
import css from './css.svg';
import bootstrap from './bootstrap.svg'
import tailwind from './tailwind.svg'
import javascript from './javascript.svg'

export default function portfolio() {
  const projectsData = [
    {
      title: "ManaliTour",
      image: g1,
      link: "https://manali-tour.netlify.app/",
    },
    {
      title: "Whitefalcon Publishing",
      image: g2,
      link: "https://whitefalcon.netlify.app/",
    },
    {
      title: "Dine Out | Restro & Cafe",
      image: g3,
      link: "https://dine-out-restro.netlify.app/",
    },
    {
      title: "Adilqadri clone",
      image: g4,
      link: "https://main--adilqadri-clone.netlify.app/",
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-white text-xl">My Portfolio</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#Home" className="mr-5 hover:text-fuchsia-500">
              Home
            </a>
            <a href="#About" className="mr-5 hover:text-fuchsia-500">
              About
            </a>
            <a href="#Skills" className="mr-5 hover:text-fuchsia-500">
              Skills
            </a>
            <a href="#Projects" className="mr-5 hover:text-fuchsia-500">
              Projects
            </a>
            <a href="#Contact" className="mr-5 hover:text-fuchsia-500">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Landing Page */}
      <div id="Home" className="section">
        <section className="text-gray-600 body-font bg-fuchsia-950">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font italic hover:not-italic sm:text-5xl text-4xl mb-4 font-medium text-black">
                Vaishnavi Badwaik
              </h1>
              <TypeAnimation
                sequence={[
                  "A Full Stack Developer",
                  2000,
                  "A Laravel Developer",
                  2000,
                ]}
                style={{ fontSize: "2rem", color: "#cbd5e1" }}
                repeat={Infinity}
              />
              {/* <p className="mb-8 text-2xl text-slate-300 leading-relaxed">Specializing in frontend development.</p> */}

              <div className="flex justify-center pt-10">
                <a
                  href="#Projects"
                  className="inline-flex text-white bg-gradient-to-r from-fuchsia-600 to-fuchsia-300 ... border-0 py-1 px-6 focus:outline-none  rounded text-lg"
                >
                  Projects
                  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-6 h-6 ml-2 animate-bounce"
    viewBox="0 0 24 24"
>
    <path d="M5 12h14M16 5l7 7-7 7" transform="rotate(90 12 12)" />
</svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div id="About" className="section">
        <section className="text-gray-600 body-font bg-fuchsia-950">
          <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
            {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-15 md:mb-0"> */}
            <h2 class="text-gradient sm:text-3xl text-2xl font-semibold title-font mb-2 md:w-2/5">
              I create websites for your business.
            </h2>
            {/* </div> */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                About Me
              </h1>
              <p className="mb-8 text-slate-300 leading-relaxed">
              With a keen interest in Web Development and a foundational understanding of Object-Oriented Programming (OOP) concepts, I am eager to apply and enhance my skills. Actively seeking entry-level opportunities to contribute to real-world projects, I am committed to expanding my knowledge in the dynamic field of computer science.
              </p>
              <div className="flex md:mt-4 mt-6">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <div  
                    className="inline-flex items-center text-white border-0 px-5 focus:outline-none rounded bg-gradient-to-r from-fuchsia-600 to-fuchsia-300 ... ">
                    <div 
                      style={{ width: "50px", height: "40px" }} 
                      className="flex items-center justify-center">
                      <img src={view} style={{ width: "30px", height: "20px" }} alt="Eye Icon" />
                    </div>
                    <span className="mr-3 text-lg">View CV</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Work */}
      <section className="bg-fuchsia-950 text-gray-800">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
  <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black mb-4 text-center pb-6">Work Experience</h3>
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-fuchsia-950">
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-fuchsia-300">
					<div className="">
						<h3 className="text-xl font-semibold tracking-wide text-fuchsia-300">Full-Stack Developer   </h3>
						<time className="text-xs tracking-wide uppercase text-gray-500">Internship | ProWiggle Data Solution Pvt. Lmt. | Jan'24 - Present</time>
						<p className="mt-3 text-slate-300">Gained foundational knowledge in Web Development through <br /> hands-on training and mentorship.</p>
            <p className="text-slate-300">Acquiring proficiency in Working with Laravel framework.
</p>
<p className="text-slate-300">Hands-on experience in developing dynamic and responsive web <br /> applications using React.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
      

      {/* Skills Section */}
      <div id="Skills" className="section">
  <section className="text-gray-600 bg-fuchsia-950 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black mb-4">
          Technical Skills
        </h1>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="p-2 sm:w-1/4 w-full">
          <div className="rounded flex p-4 h-full items-center justify-center transition ease-in duration-500 transform hover:scale-110 shadow-lg shadow-red-500/50 ...">
            <img src={laravel} style={{ width: "50px", height: "50px" }} alt="laravel" />
          </div>
        </div>
        <div className="p-2 sm:w-1/4 w-full">
          <div className="rounded flex p-4 h-full items-center justify-center transition ease-in duration-500 transform hover:scale-110 shadow-lg shadow-cyan-400/50 ...">
            <img src={react} style={{ width: "60px", height: "60px" }} alt="react" />
          </div>
        </div>
        <div className="p-2 sm:w-1/4 w-full">
          <div className="rounded flex p-4 h-full items-center justify-center transition ease-in duration-500 transform hover:scale-110 shadow-lg shadow-orange-500/50 ...">
            <img src={html} style={{ width: "60px", height: "60px" }} alt="html" />
          </div>
        </div>
        <div className="p-2 sm:w-1/4 w-full">
          <div className="rounded flex p-4 h-full items-center justify-center transition ease-in duration-500 transform hover:scale-110 shadow-lg shadow-indigo-500/50 ...">
            <img src={bootstrap} style={{ width: "70px", height: "70px" }} alt="bootstrap" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="p-2 sm:w-1/4 w-full">
          <div className="rounded flex p-4 h-full items-center justify-center transition ease-in duration-500 transform hover:scale-110 shadow-lg shadow-cyan-300/50 ...">
            <img src={php} style={{ width: "70px", height: "70px" }} alt="php" />
          </div>
        </div>
        <div className="p-2 sm:w-1/4 w-full">
          <div className="rounded flex p-4 h-full items-center justify-center transition ease-in duration-500 transform hover:scale-110 shadow-lg shadow-yellow-300/50 ...">
            <img src={javascript} style={{ width: "60px", height: "60px" }} alt="javascript" />
          </div>
        </div>
        <div className="p-2 sm:w-1/4 w-full">
          <div className="rounded flex p-4 h-full items-center justify-center transition ease-in duration-500 transform hover:scale-110 shadow-lg shadow-blue-500/50 ...">
            <img src={css} style={{ width: "60px", height: "60px" }} alt="css" />
          </div>
        </div>
        <div className="p-2 sm:w-1/4 w-full">
          <div className="rounded flex p-4 h-full items-center justify-center transition ease-in duration-500 transform hover:scale-110 shadow-lg shadow-cyan-600/50 ...">
            <img src={tailwind} style={{ width: "60px", height: "60px" }} alt="tailwind" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


      {/* Projects Section */}
      <div id="Projects" className="section">
        <section className="text-gray-600 body-font bg-fuchsia-950">
          <div className="container px-5 py-24 mx-auto">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Recent Projects
            </h2>
            <div className="flex flex-wrap -mx-4">
              {projectsData.map((project, index) => (
                <div className="p-4 md:w-1/3" key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center transition ease-in-out duration-300 transform hover:scale-105"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-medium text-slate-300 title-font mb-4">
                        {project.title}
                      </h2>
                      <div className="flex items-center flex-wrap">
                        <button className="flex mx-auto text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  border-0 py-2 px-8 focus:outline-none rounded-full text-lg"><a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Demo
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div id="Contact" className="section">
        <section className="text-gray-600 body-font relative bg-fuchsia-950">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                Contact Us
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-lg text-slate-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-fuchsia-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-lg text-slate-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-fuchsia-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-lg text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-fuchsia-500 focus:bg-white focus:ring-2 focus:ring-fuchsia-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 ... flex mx-auto text-white bg-gradient-to-r from-fuchsia-600 to-fuchsia-300 ...  border-0 py-2 px-6 focus:outline-none rounded text-lg">
                    Let's Talk
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-fuchsia-500">vaishnavib2428@gmail.com</a>
                  {/* <p className="leading-normal my-5">49 Smith St.
                        <br />Saint Cloud, MN 56301
                      </p> */}
                  <br />
                  <span className="inline-flex pt-8">
                    <a
                      className="ml-3 text-gray-500"
                      href="https://www.linkedin.com/in/vaishnavib24/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-fuchsia-600">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0"
                          className="w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          ></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </div>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
