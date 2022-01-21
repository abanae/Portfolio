import React, { useEffect } from "react";
import "./ProjectList.css";
import RecipeReviewCard from "./Project";
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="projects">
      <div className="projectsContainer">
        <div class="Iam">
          <p>Here is </p>
          <b>
            <div class="innerIam">
              my creations
              <br />
              my work,
              <br />
              my projects,
              <br />
              how I learn stuff
            </div>
          </b>
        </div>
        <div class="fadeText">
          {/* <h1>My Portfolio</h1> */}
          <h1>M</h1>
          <h1>y</h1>
        <br/>
          <h1>P</h1>
          <h1>r</h1>
          <h1>o</h1>
          <h1>j</h1>
          <h1>e</h1>
          <h1>c</h1>
          <h1>t</h1>
          <h1>s</h1>
          <span>
          A small gallery of recent projects I've created with the collaboration of other creative developers. Improving website navigation and content quality. I've created successful responsive applications that are fast and easy to use while implementing best practices. I'm constantly evolving as I discover new technologies & apply them to my work. I love learning new tools and taking on new challenges.
            </span>
            <span>
            Want to see more? Visit my <a href="https://github.com/abanae" target="_blank"
            rel="noreferrer"
            style={{color: "blue"}}
            >Github</a> 
          </span>
        </div>
        <div class="projectCont">
          <ul data-aos="fade-up" className="projectsItem1">
            <RecipeReviewCard
              label="The Social Petwork"
              date="October,2021"
              src="images/SocialPetwork.PNG"
              alt="The Social Petwork Cover"
              text="This project is a social media application for pets! The user can signup/login, make post, like posts and view the timeline. The user can also edit or delete their own posts"
              buttonDeploy="https://serene-tundra-79280.herokuapp.com/registerpage"
              buttonUrl="https://github.com/abanae/The-Social-Petwork"
            />
          </ul>
          <ul data-aos="fade-up" className="projectsItem1">
            <RecipeReviewCard
              label="Really Good Fake Store"
              date="August,2021"
              src="images/fakeStore.PNG"
              alt="Really Good Fake Store Cover"
              text="Our project is a mock e-commerce store using seeded data to simulate real e-commerce website. Users can
              login/logout & add/delete products from their shopping cart.
              "
              buttonDeploy="https://really-good-fake-store.herokuapp.com/"
              buttonUrl="https://github.com/abanae/Really-Good-Fake-Store"
            />
          </ul>
          <ul data-aos="fade-up" className="projectsItem1">
            <RecipeReviewCard
              label="Guess My Number"
              date="November,2021"
              src="images/GuessMN.PNG"
              alt="Guess My Number Cover"
              text="A simple guessing game where a user is supposed to guess a number between 0 and 20 in a maximum of 20 attempts. The game will end after 20 attempts, game also keeps track of the highesst scored"
              buttonDeploy="https://abanae.github.io/Guess-My-Number-Game/"
              buttonUrl="https://github.com/abanae/Guess-My-Number-Game"
            />
          </ul>
          <ul data-aos="fade-up" className="projectsItem1">
            <RecipeReviewCard
              label="Urban Cipher"
              date="June,2021"
              src="images/urbanCi.PNG"
              alt="Urban Cipher Cover"
              text="Deepen your lyrical knowledge by using our dictionary functions to look up any 'slang' term from your favorite songs.Or further your 'traditional' knowledge with our Webster dictionary search."
              buttonDeploy="https://maximosandoval.github.io/urban-cipher/"
              buttonUrl="https://github.com/abanae/urban-cipher"
            />
          </ul>
          <ul data-aos="fade-up" className="projectsItem1">
            <RecipeReviewCard
              label="Tech Blog"
              date="August,2021"
              src="images/Tech.PNG"
              alt="Tech Blog over"
              text="A blog made for developers to publish their ideas/projects as  posts and comment on other developers’ posts as well. Developers must create an account to view, create, update, & delete blogs."
              buttonDeploy="https://awesome-blogger.herokuapp.com/"
              buttonUrl="https://github.com/abanae/Tech_Blog"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;

// data-aos="zoom-in" className='projectsWrapper'
