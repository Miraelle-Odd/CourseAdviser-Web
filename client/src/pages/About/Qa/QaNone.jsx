import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import QaLayout from '../../../components/LayoutComponents/QaPage/QaLayout'

export default function QaNone() {
    let navigate = useNavigate()
    const onBackClick = () => {
        navigate("/about/qa/1")
    }
    return (
        <div className='qa-page-contain'>
            <QaLayout
            backHandle={onBackClick}
            count={0}>
            </QaLayout>
            <Footer> </Footer>
        </div>

    )
}