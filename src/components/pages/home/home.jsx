import './home.scss'
import Intro from './includes/Intro'
import Service from './includes/Service'
import React from 'react'

export default function Home() {
    return (
        <div className="home">
         <Intro/>
         <Service/>
        </div>
    )
}
