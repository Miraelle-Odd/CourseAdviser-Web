import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import QaLayout from '../../../components/LayoutComponents/QaPage/QaLayout'

let listQa = [
    {
        question:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ex debitis aut saepe accusantium sint libero doloremque accusamus, modi nihil atque pariatur odio voluptates optio asperiores ab excepturi voluptatum tenetur.",
        answer:"asdasddas\r\ndasdasd\r\ndasdsadasd\r\nasdasddas\r\ndasdasd\r\ndasdsadasd"
    },
    {
        question:"Lorem ipsum, doloemque accusamusxcepturi voluptatum tenetur.",
        answer:"asdasddas"
    },
    {
        question:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ex debitis aut saepe accusantium sint libero doloremque accusamus, modi nihil atque pariatur odio voluptates optio asperiores ab excepturi voluptatum tenetur.",
        answer:"asdasddas\r\ndasdasd\r\ndasdsadasd\r\nasdasddas\r\ndasdasd\r\ndasdsadasd"
    },
    {
        question:"Lorem ipsum, doloemque accusamusxcepturi voluptatum tenetur.",
        answer:"asdasddas"
    },
    {
        question:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ex debitis aut saepe accusantium sint libero doloremque accusamus, modi nihil atque pariatur odio voluptates optio asperiores ab excepturi voluptatum tenetur.",
        answer:"asdasddas\r\ndasdasd\r\ndasdsadasd\r\nasdasddas\r\ndasdasd\r\ndasdsadasd"
    },
    {
        question:"Lorem ipsum, doloemque accusamusxcepturi voluptatum tenetur.",
        answer:"asdasddas"
    },
    {
        question:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ex debitis aut saepe accusantium sint libero doloremque accusamus, modi nihil atque pariatur odio voluptates optio asperiores ab excepturi voluptatum tenetur.",
        answer:"asdasddas\r\ndasdasd\r\ndasdsadasd\r\nasdasddas\r\ndasdasd\r\ndasdsadasd"
    },
    {
        question:"Lorem ipsum, doloemque accusamusxcepturi voluptatum tenetur.",
        answer:"asdasddas"
    }
]

export default function QaList() {
    let navigate = useNavigate()
    const onSearchClick = () => {
        navigate("/about/qa/no-result")
    }
    return (
        <div className='qa-page-contain'>
            <QaLayout
            hasResult={true}
            listItem={listQa}
            searchHandle={onSearchClick}>

            </QaLayout>
            <Footer> </Footer>
        </div>

    )
}