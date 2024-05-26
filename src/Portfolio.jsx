import React from 'react'
import img1 from './img1.svg';
import resume from './resume.pdf';
import { TypeAnimation } from 'react-type-animation';

export default function portfolio() {
    const projectsData = [
        {
          title: "Project One",
          description: "Description of Project One.",
          image: "project1.jpg",
          link: "https://example.com/project1"
        },
        {
          title: "Project Two",
          description: "Description of Project Two.",
          image: "project2.jpg",
          link: "https://example.com/project2"
        },
        {
          title: "Project Three",
          description: "Description of Project Three.",
          image: "project3.jpg",
          link: "https://example.com/project3"
        }
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
                <a href="#Page1" className="mr-5 hover:text-fuchsia-500">Home</a>
                <a href="#Page2" className="mr-5 hover:text-fuchsia-500">About</a>
                <a href="#Page3" className="mr-5 hover:text-fuchsia-500">Skills</a>
                <a href="#Page4" className="mr-5 hover:text-fuchsia-500">Projects</a>
                <a href="#Page5" className="mr-5 hover:text-fuchsia-500">Contact</a>
              </nav>
            </div>
        </header>
    
          {/* Landing Page */}
          <div id="Page1" className="section">
            <section className="text-gray-600 body-font bg-fuchsia-950">
              <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={img1} style={{width: "150px", height: "160px"}} />
                <div className="text-center lg:w-2/3 w-full">
                  <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-black">Hi, I'm Vaishnavi</h1>
                  <TypeAnimation
                    sequence={[
                        'Full Stack Developer', 
                        1000,
                        'Laravel Developer',
                        1000,
                    ]}
                    style={{ fontSize: "2rem", color: "#cbd5e1", whiteSpace: 'pre-line'  }}
                    repeat={Infinity}
                    />       
                    {/* <p className="mb-8 text-2xl text-slate-300 leading-relaxed">Specializing in frontend development.</p> */}

                  <div className="flex justify-center pt-10">
                    <a href="#Page2" className="inline-flex text-white bg-fuchsia-500 border-0 py-2 px-6 focus:outline-none hover:bg-fuchsia-600 rounded text-lg">Learn More</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
    
          {/* About Section */}
          <div id="Page2" className="section">
            <section className="text-gray-600 body-font bg-fuchsia-950">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-15 md:mb-0"> */}
                <h2 class="sm:text-3xl text-2xl text-fuchsia-700 font-medium title-font mb-2 md:w-2/5">I create websites for your
          business.</h2>    
                {/* </div> */}
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">About Me</h1>
                  <p className="mb-8 text-slate-300 leading-relaxed">As a final semester MCA student with a keen interest in Web Development,
            I possess a foundational understanding of Object-Oriented Programming (OOPs) concepts. Eager to apply and
            enhance my skills, I am actively seeking entry-level opportunities to contribute to real-world projects and
            expand my knowledge in the dynamic field of computer science.</p>
            <div class="flex md:mt-4 mt-6">
            <a href={resume} target="_blank" rel="noopener noreferrer">
            <div className="inline-flex text-white bg-fuchsia-500 border-0 py-1 px-4 focus:outline-none hover:bg-fuchsia-600 rounded">
                View Resume
            </div>
            </a>
          </div>
                </div>
              </div>
            </section>
          </div>
    
          {/* Skills Section */}
          <div id="Page3" className="section">
            <section className="text-gray-600 bg-fuchsia-950 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black mb-4">Technical Skills</h1>
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
          <div id="Page4" className="section">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2">Recent Projects</h2>
                <div className="flex flex-wrap -mx-4">
                  {projectsData.map((project, index) => (
                    <div className="p-4 md:w-1/3" key={index}>
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.image} alt={project.title} />
                        <div className="p-6">
                          <h2 className="text-xl font-medium text-gray-900 title-font mb-4">{project.title}</h2>
                          <p className="leading-relaxed mb-3">{project.description}</p>
                          <div className="flex items-center flex-wrap">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
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
          <div id="Page5" className="section">
            <section className="text-gray-600 body-font relative bg-red-100">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Send</button>
                    </div>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                      <a className="text-red-500">vaishnavi@example.com</a>
                      <p className="leading-normal my-5">49 Smith St.
                        <br />Saint Cloud, MN 56301
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18.36 6.64a9 9 0 11-12.73 0 9 9 0 0112.73 0z"></path>
                            <path d="M12 10.59V12l3.53 3.53"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18.36 6.64a9 9 0 11-12.73 0 9 9 0 0112.73 0z"></path>
                            <path d="M12 10.59V12l3.53 3.53"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M16 11h-2v1h2v5h-3v-2H7v2H4v-5h2v-1H4V9a2 2 0 012-2h3a2 2 0 012 2v2h3a2 2 0 012 2z"></path>
                          </svg>
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
