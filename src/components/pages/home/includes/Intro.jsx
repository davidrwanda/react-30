import './intro.scss'
import React from 'react'
import {Send} from '@material-ui/icons'

export default function Intro() {
    return (
        <div className="intro">
            <div className="container">
            <img src="assets/images/work.jpg" alt="" />
            <div className="content">
            <h1>MARKETING SOLUTIONS AGENCY</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Omnis impedit placeat pariatur perferendis vero, quibusdam,
                 enim in consequuntur ducimus delectus iste nulla laudantium,
                 provident praesentium quasi sunt nihil natus corporis.
            </p>
            <a href=""><span><Send className="icon"/></span> Get started</a>
            </div>
            </div>
           
        </div>
    )
}
