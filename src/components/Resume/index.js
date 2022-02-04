function Resume() {
  return (
    <section id="resume">
      <div className="title-wrapper">
        <h2>Resume</h2>
      </div>
      <div className="content-wrapper">
        <p>
          <span className="paragraph-start">
            Self-motivated full stack web developer
          </span>{" "}
          with background in design, marketing, and visual communication.
          Fascinated by the intersection of form and function and passionate
          about uniting intuitive front end experiences with powerful back end
          performance. Over a decade of experience in UI/UX design, WordPress
          development, project management, problem solving, leadership, and
          teamwork. Positioned to provide unique perspectives on end-user
          experience by leveraging expertise in digital marketing and user
          experience design. Excels working remotely.
        </p>
        <p>
          <span className="paragraph-start">Technical Skills:</span> MERN Stack,
          JavaScript, HTML, CSS, Git, GraphQL, Mongoose, Sequelize, MySQL,
          WordPress, Handlebars, Bootstrap, Illustrator, Photoshop, InDesign
        </p>
        <p>
          <span className="paragraph-start">Soft Skills:</span> UI/UX Design,
          Marketing, Branding, Problem Solving, Critical Thinking, Project
          Management, Written and Verbal Communication, Leadership, Teamwork,
          Interpersonal Skills, Emotional Intelligence, Time Management,
          Self-Management
        </p>
        <div className="download">
          <a
            href={require("../../assets/downloads/sophia-barrett-resume.pdf")}
            className="button"
            download
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
