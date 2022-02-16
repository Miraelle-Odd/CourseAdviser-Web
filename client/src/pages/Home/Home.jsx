import React, { useRef, useEffect } from 'react'
import './Home.css'

import DraftCom from '../../components/DraftComponent/DraftCom'

const Home = props => {
    return (
        <div className='home'>
            <div>Đây là Homepage</div>
            <DraftCom
                title="Homepage Component"
                content="Đây là một component của homepage. Thuộc tính gồm icon, title, content"
            >                
            </DraftCom>
        </div>
    )
}

export default Home