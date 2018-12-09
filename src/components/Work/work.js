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
                    I designed the user interface for this game and came up with the theme. We wanted a clean, simple, and playful design that allowed for maximum game play. I worked with a team of five mostly backend oriented developers to integrate user autentication, a socket io chat feature, a general trivia api and more into a seamless user experiece.
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
                    <p className="work-description">A full-stack Javascript app which allows the user to be more engaged in local politics.</p>
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
                  <p className="work-description">Node.js and MySQL app</p>
                  <div className="project-links">
                  <p className="project-link"><a target='_blank' rel="noopener noreferrer"href="https://github.com/kendrak922/Amazon-Customer">Github</a></p>
               </div>
               </div>
            </div>
                    </div>
                            </div>
                            );

export default Work;

