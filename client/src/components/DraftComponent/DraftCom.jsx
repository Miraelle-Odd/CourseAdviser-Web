import React, { useRef, useEffect } from 'react'

import './DraftCom.css'

import defaultIcon from '../../assets/icons/draft.png'

const DraftCom = props => {
    return (
        <div className='draft'>            
            {
                props.icon ? <img src={props.icon}></img> : <img src={defaultIcon}></img>
            }
            {
                props.title ? <h1 className="title">{props.title}</h1> : ''
            }
            {
                props.content ? <p className="content">{props.content}</p> : ''
            }
        </div>
    )
}

export default DraftCom