import React from 'react';
import {Link} from 'react-router-dom'
import './Card.css'

const Card = ({src, text}) => {
    return (
        <>
          <li className='card-list'>
              <Link className='card-link'>
                <figure className= 'card-img-container'>
                  <img className='card-img' 
                  src= {src}
                  alt= 'desert'/>
                </figure>
                <div className='card-text'>
                    <h5>{text}</h5>
                </div>
              </Link>
          </li>
        </>
    );
};

export default Card;
