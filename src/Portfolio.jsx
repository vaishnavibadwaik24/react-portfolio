import React from "react";
import resume from "./resume.pdf";
import view from "./view.png";
import { TypeAnimation } from "react-type-animation";

export default function portfolio() {
  const projectsData = [
    {
      title: "Dine Out | Restro & Cafe",
      description: "Description of Project One.",
      image: "g3.png",
      link: "https://dine-out-restro.netlify.app/",
    },
    {
      title: "ManaliTour",
      description: "Description of Project Two.",
      image: "g1.png",
      link: "https://manali-tour.netlify.app/",
    },
    {
      title: "whitefalcon Publishing",
      description: "Description of Project Three.",
      image: "g2.png",
      link: "https://whitefalcon.netlify.app/",
    },
    {
      title: "Adilqadri",
      description: "Description of Project Three.",
      image: "project3.jpg",
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
                  href="#About"
                  className="inline-flex text-white bg-gradient-to-r from-fuchsia-600 to-fuchsia-300 ... border-0 py-1 px-8 focus:outline-none  rounded text-lg"
                >
                  Work ?
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div id="About" className="section">
        <section className="text-gray-600 body-font bg-fuchsia-950">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-15 md:mb-0"> */}
            <h2 class="sm:text-3xl text-2xl text-fuchsia-700 font-medium title-font mb-2 md:w-2/5">
              I create websites for your business.
            </h2>
            {/* </div> */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                About Me
              </h1>
              <p className="mb-8 text-slate-300 leading-relaxed">
                As a final semester MCA student with a keen interest in Web
                Development, I possess a foundational understanding of
                Object-Oriented Programming (OOPs) concepts. Eager to apply and
                enhance my skills, I am actively seeking entry-level
                opportunities to contribute to real-world projects and expand my
                knowledge in the dynamic field of computer science.
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
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium">HTML</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium">CSS</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium">JavaScript</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium">React</span>
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
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-medium text-slate-300 title-font mb-4">
                        {project.title}
                      </h2>
                      <p className="leading-relaxed text-xl text-slate-400 mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fuchsia-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
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
                        </a>
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
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-gradient-to-r from-fuchsia-600 to-fuchsia-300 ...  border-0 py-2 px-8 focus:outline-none rounded text-lg">
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
