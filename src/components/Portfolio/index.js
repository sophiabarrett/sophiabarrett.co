import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      title: "The Book Exchange",
      description: "Web App Design & Development",
      live_url: "https://the-book-exchange.herokuapp.com/",
      repo_url: "https://github.com/sophiabarrett/the-book-exchange/",
      img_file: "the-book-exchange",
    },
    {
      title: "Technically a Blog",
      description: "Web App Design & Development",
      live_url: "https://technically-a-blog.herokuapp.com/",
      repo_url: "https://github.com/sophiabarrett/technically-a-blog",
      img_file: "technically-a-blog",
    },
    {
      title: "Show Finder",
      description: "Web App Development",
      live_url: "https://sophiabarrett.github.io/show-finder/",
      repo_url: "https://github.com/sophiabarrett/show-finder",
      img_file: "show-finder",
    },
    {
      title: "River City Prosthetics & Orthotics",
      description: "Logo Design, Website Design & Development",
      live_url: "http://rivercityprosthetics.com/",
      img_file: "river-city",
    },
    {
      title: "Center for Business Law, UC Hastings",
      description: "Website Design & Custom WordPress Development",
      live_url: "http://cbl.uchastings.edu/",
      img_file: "uc-hastings-cbl",
    },
    {
      title: "Weather Dashboard",
      description: "Web App Design & Development",
      live_url: "https://sophiabarrett.github.io/weather-dashboard/",
      repo_url: "https://github.com/sophiabarrett/weather-dashboard",
      img_file: "weather-dashboard",
    },
    {
      title: "Coding Quiz",
      description: "Web App Design & Development",
      live_url: "https://sophiabarrett.github.io/code-quiz/",
      repo_url: "https://github.com/sophiabarrett/code-quiz",
      img_file: "code-quiz",
    },
    {
      title: "Run Buddy",
      description: "Website Development",
      live_url: "https://sophiabarrett.github.io/run-buddy/",
      repo_url: "https://github.com/sophiabarrett/run-buddy",
      img_file: "run-buddy",
    },
    {
      title: "Daniel Armour Art",
      description: "Website Design & Custom WordPress Development",
      img_file: "daniel-armour-art",
    },
    {
      title: "Spa on the Plaza",
      description: "Website Design & Custom WordPress Development",
      img_file: "spa-on-the-plaza",
    },
    {
      title: "Mas 1 Audio",
      description: "Website Design & Development",
      img_file: "mas-1-audio",
    },
    {
      title: "Sustainable Design Academy, UC Davis",
      description: "Logo Design & Wordpress Development",
      live_url: "https://research.engineering.ucdavis.edu/sda/",
      img_file: "uc-davis-sda",
    },
  ];

  return (
    <section id="portfolio">
      <div className="title-wrapper">
        <h2>Portfolio</h2>
      </div>
      <div className="content-wrapper">
        <ul>
          {projects.map((project) => (
            <Project project={project} key={project.img_file} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
