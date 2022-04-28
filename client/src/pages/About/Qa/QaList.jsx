import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import QaLayout from '../../../components/LayoutComponents/QaPage/QaLayout'


export default function QaList() {
    let navigate = useNavigate()
    const onSearchClick = () => {
        navigate("/about/qa-none")
    }

    const [countQa, setCountQa] = useState()

    useEffect(() => {
        const getQaCount = async () => {
            const result = await axios.get(`http://localhost:8080/q-and-as/count`)
            setCountQa(result.data)
        }
        getQaCount().catch(console.error)
    }, [])
    return (
        <div className='qa-page-contain'>
            <QaLayout
            hasResult={true}
            searchHandle={onSearchClick}
            count={countQa}>
            </QaLayout>
            <Footer> </Footer>
        </div>

    )
}