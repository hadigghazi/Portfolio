import React, { Component, useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

export class AboutHadi extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", 
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "skills": <Skills />,
            "certificates": <Certificates />,
            "projects": <Projects />,
            "education": <Education />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e?.id || e?.target.id;

        localStorage.setItem("about-section", screen);

        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about hadi" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="hadi' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="certificates" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "certificates" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Certificates" src="./themes/Yaru/status/Certificates.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Certificates</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="hadi' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="hadi' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="hadi's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutHadi;

export const displayAboutHadi = () => {
    return <AboutHadi />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full rounded-full" src="./images/logos/1.png" alt="Hadi Ghazi Logo" />
            </div>
            <div className=" mt-2 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>Hi 👋, I'm <span className="font-bold">Hadi Ghazi</span></div>
                <div className="font-normal ml-1"><span className="text-pink-600 font-bold">Junior Software Engineer</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">A passionate Software Engineer from Beirut, Lebanon specializing in both frontend and backend development. Graduating from the Lebanese University at 20 years old with a degree in Computer Science. As an AWS Certified Cloud Practitioner, I have a strong foundation in cloud computing, which adds to my skills in software development. Throughout my journey, I've had the opportunity to work on numerous projects, both individually and as part of a team, allowing me to develop a versatile skill set. I am proficient in a variety of programming languages and frameworks, including but not limited to React, Express, Laravel, Flutter, and Java. Additionally, I have experience working with databases such as MySQL and MongoDB.</li>
                <li className=" mt-3 list-building"> Ask me about React, Laravel, Express.</li>
                <li className=" mt-3 list-time"> How to reach me hadigghazi@gmail.com</li>
                <li className=" mt-3 list-star"> I'm based in Beirut, Lebanon</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Lebanese University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Oct 2021 - Jun 2024</div>
                    <div className=" text-sm md:text-base">Bachelor of Science in Computer Science</div>
                </li>
            </ul>
        </>
    )
}

function Certificates() {
    const certificates = [
        {
            title: "SE Factory Full Stack Web Development Graduate",
            date: "Jun 2024 - Sep 2024",
            description: "SE Factory",
        },
        {
            title: "AWS Certified Cloud Practitioner (CLF-C02)",
            date: "Jul 2024",
            description: "Amazon Web Services",
        },
        {
            title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
            date: "Apr 2024",
            description: "AWS Academy",
        },
        {
            title: "ReactJS Developer Internship",
            date: "Jan 2024",
            description: "CodSoft",
        },
    ];

    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Certificates
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1">
                {certificates.map((certificate, index) => (
                    <li key={index} className="list-disc mb-4">
                        <div className="text-lg mt-10 md:text-xl text-left font-bold leading-tight">
                            {certificate.title}
                        </div>
                        <div className="text-sm text-gray-400 mt-0.5">{certificate.date}</div>
                        <div className="text-sm md:text-base">{certificate.description}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}

function Skills() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <strong>Programming (and Scripting) Languages: </strong><br />
                    <div className="px-2 w-full">
    <div className="flex flex-wrap justify-center items-start w-full mt-2">
        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="JavaScript" />
        <img className="m-1" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
        <img className="m-1" src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white" alt="PHP" />
        <img className="m-1" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="Python" />
        <img className="m-1" src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=ffffff" alt="Java" />
        <img className="m-1" src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white" alt="Dart" />
        <img className="m-1" src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white" alt="Go" />
        <img className="m-1" src="https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white" alt="C" />
        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="C++" />
    </div>
</div>
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <strong>Database Management Systems: </strong><br />
                <div className="px-2 flex flex-wrap items-start w-full">
    <div className="flex flex-wrap justify-center items-start w-full mt-2">
        <img className="m-1" src="https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=flat&logo=microsoft-sql-server&logoColor=white" alt="Microsoft SQL Server" />
        <img className="m-1" src="https://img.shields.io/badge/MySQL-005C79?style=flat&logo=mysql&logoColor=white" alt="MySQL" />
        <img className="m-1" src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" />
    </div>
</div>
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <strong>FrameWorks and Libraries: </strong><br />
                <div className="px-2 flex flex-wrap items-start w-full">
    <div className="flex flex-wrap justify-center items-start w-full mt-2">
        <img className="m-1" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="React" />
        <img className="m-1" src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white" alt="Flutter" />
        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="Redux" />
        <img className="m-1" src="https://img.shields.io/badge/RTK_Query-7B9FE1?style=flat&logo=redux&logoColor=white" alt="RTK Query" />
        <img className="m-1" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=ffffff" alt="Node.js" />
        <img className="m-1" src="https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white" alt="Express.js" />
        <img className="m-1" src="https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=ffffff" alt="Next.js" />
        <img className="m-1" src="https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white" alt="Laravel" />
        <img className="m-1" src="https://img.shields.io/badge/Scikit-learn-FFB300?style=flat&logo=scikit-learn&logoColor=white" alt="Scikit-learn" />
        <img className="m-1" src="https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white" alt="Pandas" />
        <img className="m-1" src="https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white" alt="NumPy" />
        <img className="m-1" src="https://img.shields.io/badge/Matplotlib-003B57?style=flat&logo=matplotlib&logoColor=white" alt="Matplotlib" />
        <img className="m-1" src="https://img.shields.io/badge/Streamlit-FF4B4B?style=flat&logo=streamlit&logoColor=white" alt="Streamlit" />
        <img className="m-1" src="https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi&logoColor=white" alt="FastAPI" />
        <img className="m-1" src="https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap" />
        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    </div>
</div>
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <strong>Tools and Cloud Services: </strong><br />
                <div className="px-2 flex flex-wrap items-start w-full">
    <div className="flex flex-wrap justify-center items-start w-full mt-2">
        <img className="m-1" src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
        <img className="m-1" src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white" alt="Postman" />
        <img className="m-1" src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white" alt="Figma" />
        <img className="m-1" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker" />
        <img className="m-1" src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" alt="AWS" />
    </div>
</div>

                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <strong>Theory: </strong><br />
                <div className="px-2 flex flex-wrap items-start w-full">
    <div className="flex flex-wrap justify-center items-start w-full mt-2">
        <span className="m-1 p-2 border rounded">Complexity Analysis</span>
        <span className="m-1 p-2 border rounded">Data Structures and Algorithms</span>
        <span className="m-1 p-2 border rounded">OOP</span>
        <span className="m-1 p-2 border rounded">Design Patterns</span>
        <span className="m-1 p-2 border rounded">AWS Cloud Services</span>
    </div>
</div>

                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <strong>Languages: </strong><br />
                <div className="px-2 flex flex-wrap items-start w-full">
    <div className="flex flex-wrap justify-center items-start w-full mt-2">
        <span className="m-1 p-2 border rounded">Arabic (Native)</span>
        <span className="m-1 p-2 border rounded">English (Intermediate)</span>
    </div>
</div>
                </li>
            </ul>
        </>
    );
}


function Projects() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            let allProjects = [];
            let page = 1;

            try {
                while (true) {
                    const response = await fetch(`https://api.github.com/users/hadigghazi/repos?page=${page}&per_page=100`);
                    const data = await response.json();
                    
                    if (data.length === 0) break;

                    const formattedProjects = data.map(project => ({
                        name: project.name,
                        date: new Date(project.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
                        link: project.html_url,
                        description: [project.description || 'No description available.'],
                        domains: project.topics
                    }));

                    allProjects = [...allProjects, ...formattedProjects];
                    page++;
                }

                setProjectList(allProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const tagColors = {
        javascript: 'yellow-300',
        python: 'green-300',
        react: 'blue-400',
    };

    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {projectList.map((project, index) => (
                <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                    <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className='flex justify-center items-center'>
                                <div className="text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                            </div>
                            <div className="text-gray-300 font-light text-sm">{project.date}</div>
                        </div>
                        <ul className="tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                            {project.description.map((desc, index) => (
                                <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap items-start justify-start text-xs py-2">
                            {project.domains && project.domains.map((domain, index) => {
                                const borderColorClass = `border-${tagColors[domain] || 'gray-300'}`;
                                const textColorClass = `text-${tagColors[domain] || 'gray-300'}`;
                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>;
                            })}
                        </div>
                    </div>
                </a>
            ))}
        </>
    );
}


function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Hadi_Ghazi_CV.pdf" title="hadi patel resume" frameBorder="0"></iframe>
    )
}