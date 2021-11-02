import React from 'react'
import {ArrowRightAlt,Send} from '@material-ui/icons'
import { blue } from '@material-ui/core/colors'
export default function ServiceCard({title, content}) {
    return (
        
            <div className="card">
                <div className="top">
                   <Send className="icon"/>
                </div>
                <div className="content">
                   <h1>{title}</h1>
                    <p>{content} 
                    </p>
                </div>
                <div className="bottom">
                    <ArrowRightAlt className="icon"/>
                </div>
            </div>
    )
}
