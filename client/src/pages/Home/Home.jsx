import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'

import DraftCom from '../../components/DraftComponent/DraftCom'

const Home = props => {
    const [listOfTest, setListOfTest] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8080/tests").then((response)=> {
            setListOfTest(response.data)
        })
    }, [])
    return (
        <div className='home'>
            <div>Đây là Homepage</div>
            <DraftCom
                title="Homepage Component"
                content="Đây là một component của homepage. Thuộc tính gồm icon, title, content"
            >                
            </DraftCom>
            <h2>Dưới đây là test get từ db</h2>
            {
                listOfTest.map((value, key)=>{
                    return <DraftCom
                    title={value.title}
                    content={value.text}
                    ></DraftCom>
                })
            }            
        </div>
    )
}

export default Home