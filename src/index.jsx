import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const projects = [
  {
    title: "Attendance Portal",
    description:
      "Role-based MERN app with Admin, Manager, and Employee roles. Secure login, role access, and data tracking.",
    github: "https://github.com/Ramyadevi-web/Attendance-Portal-fe",
    live: "https://attendanceportalcapstone.netlify.app/",
  },
  {
    title: "Axio CRUD",
    description: "CRUD operations using Axios with a clean React UI.",
    github: "https://github.com/Ramyadevi-web/AxioCRUD",
    live: "https://axioscrudoperations.netlify.app/",
  },
  {
    title: "Todo App",
    description: "Simple and functional React todo list app.",
    github: "https://github.com/Ramyadevi-web/ReactTodo",
    live: "https://charming-kangaroo-686016.netlify.app/",
  },
  {
    title: "React Router",
    description: "Demo of React Router navigation across routes.",
    github: "https://github.com/Ramyadevi-web/ReactRouter/tree/main",
    live: "https://cerulean-pasca-12bc54.netlify.app/",
  },
  {
    title: "Shopping Page",
    description: "React Shopping Cart using Context API for state management.",
    github: "https://github.com/Ramyadevi-web/contextAPI",
    live: "https://shoppingpagecontextapi.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <div className="container py-5">
      <div className="d-flex">
          <img
          src="/profile.jpg"
          alt="Ramya Devi M"
          className="rounded-circle mb-3"
          style={{ width: "150px", height: "175px", objectFit: "cover" }}
        />
        <div className="ms-5 mt-4">
           <h1 className="mb-3">Ramya Devi M</h1>
        <p className="lead">
          Full Stack Developer | MERN Stack | Ex-CBSE Teacher turned Developer 🚀
        </p>
        </div>
       
      </div>
      

      <section className="mb-5">
        <h2 className="h4">About Me</h2>
        <p>
          Former CBSE computer teacher turned passionate developer. I transitioned
          into IT after completing Full Stack Development from Guvi. I build web
          apps that are functional, user-friendly, and secure.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm me-2"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="h4 mb-3">Contact</h2>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a
              href="mailto:ramyadevim7@gmail.com"
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <Mail size={18} className="me-2" /> ramyadevim7@gmail.com
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://github.com/Ramyadevi-web"
              target="_blank"
              className="text-decoration-none text-dark d-flex align-items-center"
              rel="noopener noreferrer"
            >
              <Github size={18} className="me-2" /> github.com/Ramyadevi-web
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/ramya-devi-m-52019435a/"
              target="_blank"
              className="text-decoration-none text-dark d-flex align-items-center"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="me-2" /> LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
