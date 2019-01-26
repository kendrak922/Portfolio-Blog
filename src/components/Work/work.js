import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import chillTime from '../../../public/images/chillTime.png'
import amazon from '../../../public/images/amazon.png'
import people from '../../../public/images/people.png'
import './style.scss';

const Work = () => (

    <div>
        <h1>Stuff I've worked on</h1>
        <div className="work-container">
            <div className="project">
            <div className="project-left">
            <p className="project-title">Chill Time Trivia</p>
                <img className="project-image" src={chillTime} />
                </div>
                <div className="project-right">
                    <p className="work-description">This app allows users to log on and answer general trivia questions whenever they want. There is also a chat feature so that users can talk to their friends as they play.
                    <br></br>
                    I designed the user interface and theme. I worked with a team of five mostly backend oriented developers to integrate user autentication, a socket io chat feature, a general trivia api, and more into a seamless user experiece.
                    </p>
                    <div className="project-links">
                    <p className="project-link"><a target='_blank' rel="noopener noreferrer" href="https://github.com/finne132/reactionTime">Github</a></p>
                 <p className="project-link"><a target='_blank' rel="noopener noreferrer"href="https://chilltimetrivia.herokuapp.com">App</a></p>
               </div>
                </div>
            </div>
            <div className="project">
            <div className="project-left">
            <p className="project-title">We The People</p>
                <img className="project-image" src={people} />
            </div>
                <div className="project-right">
                    <p className="work-description">WE THE PEOPLE is an application that helps the user find their elected officials based on their address. The user has to input their address to lookup their representatives. The app also provides officials Bio, voting history and upcoming bills.</p>
                    <div className="project-links">
                     <p className="project-link"><a target='_blank' rel="noopener noreferrer"href="https://github.com/kendrak922/We-the-People">Github</a></p>
                     <p className="project-link"><a target='_blank' rel="noopener noreferrer"href="https://wethepeopleapp.herokuapp.com/index.html">App</a></p>
               </div>
                </div>
            </div>
            <div className="project">
            <div className="project-left">
            <p className="project-title">Amazon-Customer</p>
                <img className="project-image" src={amazon} />
            </div>
                <div className="project-right">
                  <p className="work-description">Amazon-Customer is a node.js app that connects directly with a mysql database. This app works with the inquier npm to interact with the user and mysql to keep track of the products inventory.</p>
                  <div className="project-links">
                  <p className="project-link"><a target='_blank' rel="noopener noreferrer"href="https://github.com/kendrak922/Amazon-Customer">Github</a></p>
               </div>
               </div>
            </div>
                    </div>
                            </div>
                            );

export default Work;

