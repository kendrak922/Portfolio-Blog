import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import chillTime from '../../../public/images/chillTime.png'
import amazon from '../../../public/images/amazon.png'
import people from '../../../public/images/people.png'


class Work extends React.Component {

    render() {
        return (
            <div>
                <h1>Stuff I've worked on</h1>
                <div className="workContainer">
                    <div className="project">
                        <img className="project-image"src={chillTime} />
                        <p className="project-title">Chill Time Trivia</p>
                        <p className="work-description">The app will allow users to log in. Users play a single game of of trivia with friends or random users, trivia games will be interactive including chat. Question will only be in mulitple choice format. No schedules no waiting. Play when you want.</p>
                    </div>
                    <div className="project">
                        <img className="project-image"src={people} />
                        <p className="project-title">We The People</p>
                        <p className="work-description">A full-stack Javascript app which allows the user to be more engaged in local politics.</p>
                    </div>
                    <div className="project">
                        <img className="project-image"src={amazon} />
                        <p className="project-title">Amazon-Customer</p>
                        <p className="work-description">Node.js and MySQL app</p>
                    </div>
                    {/* add banshee */}
                </div>
            </div>
        )
    }

}

export default Work;

