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
                    <p className="work-description">The app will allow users to login and play any time of the day. Users play a single game of of trivia with friends or random users, trivia games will be interactive including chat. Question will only be in mulitple choice format. No schedules no waiting. Play when you want.</p>
                    <p className="project-link"><a target='_blank' rel="noopener noreferrer" href="https://github.com/finne132/reactionTime">Github</a></p>
                    <p className="project-link"><a target='_blank' rel="noopener noreferrer"href="https://chilltimetrivia.herokuapp.com">Play Game</a></p>
                </div>
            </div>
            <div className="project">
            <div className="project-left">
            <p className="project-title">We The People</p>
                <img className="project-image" src={people} />
            </div>
                <div className="project-right">
                    <p className="work-description">A full-stack Javascript app which allows the user to be more engaged in local politics.</p>
                     <p className="project-link"><a target='_blank' rel="noopener noreferrer"href="https://github.com/kendrak922/We-the-People">Github</a></p>
                     <p className="project-link"><a target='_blank' rel="noopener noreferrer"href="https://wethepeopleapp.herokuapp.com/index.html">Check it Out</a></p>
                </div>
            </div>
            <div className="project">
            <div className="project-left">
            <p className="project-title">Amazon-Customer</p>
                <img className="project-image" src={amazon} />
            </div>
                <div className="project-right">
                  <p className="work-description">Node.js and MySQL app</p>
                  <p className="project-link"><a target='_blank' rel="noopener noreferrer"href="https://github.com/kendrak922/Amazon-Customer">Github</a></p>
               </div>
            </div>
                    </div>
                            </div>
                            );

export default Work;

