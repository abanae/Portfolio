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
              path='/services'
            />
            <Project
              src='images/urbanCi.PNG'
              text="Deepen your lyrical knowledge by using our dictionary functions to look up any 'slang' term from your favorite songs.Or further your 'traditional' knowledge with our Webster dictionary search."
              label='Urban Cipher'
              path='/services'
            />
            <Project
              src='images/fakestore1.PNG'
              text="Our project is a mock e-commerce store called Really Good Fake Store. E-commerce websites make up about 10% of the internet. Our goal was to be able to build this mock store with our current coding skills to mock something similar to what we might see on a real job.The client has the ability to create an account, login/logout, and add/delete products to their shpping cart."
              label='Really Good Fake Store'
              path='/services'
            />
          </ul>
        </div>
      </div>   
        </div>
    );
}

export default ProjectList;
