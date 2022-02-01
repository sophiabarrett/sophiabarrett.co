function About() {
  return (
    <>
      <section id="intro">
        <div class="img-wrapper">
          <img
            src={require("../../assets/images/sophia-barrett.png")}
            alt="Sophia Barrett"
          />
        </div>
        <p>
          Hi, I'm Sophia.
          <br />I design and build on-brand web applications and user
          experiences.
        </p>
      </section>
      <section id="about">
        <div class="title-wrapper">
          <h2>About</h2>
          <img
            src={require("../../assets/images/about-me.png")}
            alt="Sophia Barrett and partner on a hike."
          />
        </div>
        <div class="content-wrapper">
          <p>
            <span class="paragraph-start">I have always been an artist</span>{" "}
            with a seemingly inharmonious love for order and logic. Growing up
            and discovering myself inside of that dichotomy was (and is)
            confusing. In school, math was interesting, accessible and
            gratifying. But art was alluring and challenging and oh so soul
            nourishing. Neither felt fully like me. So, I went off to college
            without a clue and without pursuing either. Then, in my first year,
            fate sent me a friend in the Department of Design and I discovered
            my passion at the intersection of form and function.
          </p>
          <p>
            <span class="paragraph-start">Almost a decade later,</span> I am
            still exploring that intersection in my work. I’ve worked across
            countless industries helping small business owners, department
            heads, startups and artists create beautiful solutions to their
            practical needs. From creating recognizable logos, to designing
            seamless customer journeys, to building easy-to-use websites and
            applications, each of my projects delivers a compelling on-brand
            experience layered over powerful back-end performance.
          </p>
          <p>
            I am currently living in Gilbert, Arizona with my partner, our two
            orange tabbies and several cacti.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
