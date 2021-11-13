import React from 'react';
import {Link} from 'react-router-dom';


function Project(props) {
    return (
        <>
            <li className='projectItem'>
        <Link className='projectItemLink' to={props.path}>
          <figure className='projectItemPicWrap' data-category={props.label}>
            <img
              className='projectItemImg'
              alt='Projects'
              src={props.src}
            />
          </figure>
          <div className='projectItemInfo'>
            <h5 className='projectItemText'>{props.text}</h5>
          </div>
        </Link>
      </li>
        </>
    )
}

export default Project
