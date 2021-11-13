import React from 'react';
import './ProjectList.css';
import Project from './Project';

function ProjectList() {
    return (
        <div className='projects'>
            <h1>Check out my work!</h1>
            <div className='projectsContainer'>
     <div className='projectsWrapper'>
          <ul className='projectsItem'>
            <Project
              src='images/SocialPetwork.PNG'
              text="Deepen your lyrical knowledge by using our dictionary functions to look up any 'slang' term from your favorite songs.Or further your 'traditional' knowledge with our Webster dictionary search."
              label='The Social Petwork'
              path='/projects'
            />
                <Project
              src='images/fakeStore.PNG'
              text="Our project is a mock e-commerce store using seeded data to simulate real e-commerce website. Users can
              login/logout & add/delete products from their shopping cart.
              "
              label='Really Good Fake Store'
              path='/projects'
            />
          </ul>
          <ul className='projectsItem'>
          <Project
              src='images/urbanCi.PNG'
              text="Deepen your lyrical knowledge by using our dictionary functions to look up any 'slang' term from your favorite songs.Or further your 'traditional' knowledge with our Webster dictionary search."
              label='Urban Cipher'
              path='/projects'
            />
            <Project
              src='images/GuessMN.PNG'
              text='A simple guessing game where a user is supposed to guess a number between 0 and 20 in a maximum of 20 attempts. The game will end after 20 attempts, game also keeps track of the highesst scored'
              label='Guess My Number'
              path='/projects'
            />
            <Project
              src='images/Tech.PNG'
              text='A blog made for developers to publish their ideas/projects as  posts and comment on other developers’ posts as well. Developers must create an account to view, create, update, & delete blogs.'
              label='Tech Blog'
              path='/projects'
            />
          </ul>
        </div>
      </div>   
        </div>
    );
}

export default ProjectList;
