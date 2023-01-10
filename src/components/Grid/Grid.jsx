import React from 'react';
import Card from './../Card/Card'
import './Grid.css'


const Grid = () => {
    return (
        <div className= 'grid'>
            <h1 className= 'grid-title'>Checkout these epic destinations</h1>
            <div className= 'card'>
              <ul className= 'card-container'>
                <Card 
                src= {'https://media.kidadl.com/medium_60121f5f107018646b4b4b08_we_have_all_the_beautiful_waterfall_quotes_c66afe1a97.jpeg' } 
                text= {'Explore the hidden waterfall deep inside the amazon jungle'}
                />
                <Card 
                src={'https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg?auto=compress&cs=tinysrgb&w=600'}
                text= {'Are you ready to have the time of your life'}
                />
              </ul>

              <ul className= 'card-container'>
                <Card 
                src= {'https://images.pexels.com/photos/758744/pexels-photo-758744.jpeg?auto=compress&cs=tinysrgb&w=600' } 
                text= {'Explore the hidden waterfall deep inside the amazon jungle'}
                />
                <Card 
                src={'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/24/thumbs/800x531/146502.jpg?v=1632746091'}
                text= {'Are you ready to have the time of your life'}
                />
                <Card 
                src={'https://a.cdn-hotels.com/gdcs/production75/d966/8994658f-13ad-4106-bde4-856450359f47.jpg'}
                text= {'This is the beginning of an experience you will live to remember'}/>

              </ul>
            </div>
        </div>
    );
};

export default Grid;