/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Rock-Paper-Scissor Game ",
    description:
      "Designed and implemented a Rock-Paper-Scissors game application, showcasing proficiency in front-end development technologies such as HTML, CSS, and JavaScript.",
    url: "https://smitapatel12.github.io/Rock-Paper-scissor-game/",
  },
  {
    title: "Amazon-Clone",
    description:
      "Developed a polished Amazon clone site utilizing cutting-edge HTML and CSS methods; delivered a high-functionality platform that mirrored Amazon’s usability, increasing average user session time by 30% and conversion rates by 20%.",
    url: "https://smitapatel12.github.io/Amazon_clone/",
  },
  {
    title: "My Resume Site",
    description:
      "Created visually captivating online portfolios using HTML, CSS, and JavaScript, seamlessly integrating achievements, work experiences, certifications, and projects to showcase professional expertise with flair and functionality.",
    url: "https://smitapatel12.github.io/Portfolio/",
  },
  {
    title: "Blog-Site",
    description:
      "Developed a captivating nature blog site using Bootstrap, integrating API to enhance user engagement and foster a deeper connection with the environment",
    url: "https://smitapatel12.github.io/Blog-site/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
