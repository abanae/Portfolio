import React from 'react';
import './ProjectList.css';
import RecipeReviewCard from './Project';


function ProjectList() {
    return (
        <div className='projects'>
            <h1>Check Out My Work</h1>
            <div className='projectsContainer'>
     <div className='projectsWrapper'>
          <ul className='projectsItem1'>
            <RecipeReviewCard
              label='The Social Petwork'
              date = 'October,2021'
              src='images/SocialPetwork.PNG'
              alt="The Social Petwork Cover"
              text="This project is a social media application for pets! The user can signup/login, make post, like posts and view the timeline. The user can also edit or delete their own posts"
              buttonDeploy= 'https://serene-tundra-79280.herokuapp.com/registerpage'
              buttonUrl= 'https://github.com/abanae/The-Social-Petwork'
            />
             </ul>
            <ul className='projectsItem1'>
                <RecipeReviewCard
              label='Really Good Fake Store'
              date = 'August,2021'
              src='images/fakeStore.PNG'
              alt="Really Good Fake Store Cover"
              text="Our project is a mock e-commerce store using seeded data to simulate real e-commerce website. Users can
              login/logout & add/delete products from their shopping cart.
              "
              buttonDeploy= 'https://really-good-fake-store.herokuapp.com/'
              buttonUrl= 'https://github.com/abanae/Really-Good-Fake-Store'
            />
          </ul>
          <ul className='projectsItem2'>
            <RecipeReviewCard
              label='Guess My Number'
              date = 'November,2021'
              src='images/GuessMN.PNG'
              alt="Guess My Number Cover"
              text='A simple guessing game where a user is supposed to guess a number between 0 and 20 in a maximum of 20 attempts. The game will end after 20 attempts, game also keeps track of the highesst scored'
              buttonDeploy= 'https://abanae.github.io/Guess-My-Number-Game/'
              buttonUrl= 'https://github.com/abanae/Guess-My-Number-Game' 
            />
            </ul>
             <ul className='projectsItem2'>
            <RecipeReviewCard
              label='Urban Cipher'
              date = 'June,2021'
              src='images/urbanCi.PNG'
              alt="Urban Cipher Cover"
              text="Deepen your lyrical knowledge by using our dictionary functions to look up any 'slang' term from your favorite songs.Or further your 'traditional' knowledge with our Webster dictionary search."
              buttonDeploy= 'https://maximosandoval.github.io/urban-cipher/'
              buttonUrl= 'https://github.com/abanae/urban-cipher'
            />
            </ul>
             <ul className='projectsItem2'>
            <RecipeReviewCard
              label='Tech Blog' 
              date = 'August,2021'
              src='images/Tech.PNG'
              alt="Tech Blog over"
              text='A blog made for developers to publish their ideas/projects as  posts and comment on other developers’ posts as well. Developers must create an account to view, create, update, & delete blogs.'
              buttonDeploy= 'https://awesome-blogger.herokuapp.com/'
              buttonUrl= 'https://github.com/abanae/Tech_Blog'
            />
          </ul>
        </div>
      </div>   
        </div>
    );
}

export default ProjectList;
