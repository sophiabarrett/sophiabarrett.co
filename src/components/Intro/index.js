function About() {
  return (
    <>
      <section id="intro">
        <div className="img-wrapper">
          <img
            src={require("../../assets/images/sophia-barrett.png")}
            alt="Sophia Barrett"
          />
        </div>
        <p>
          Hi, I'm Sophia.
          <br />I design and build compelling web applications and user
          experiences.
        </p>
      </section>
    </>
  );
}

export default About;
