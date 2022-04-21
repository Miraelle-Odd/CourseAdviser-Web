import React, { useEffect, useState } from 'react'
import './AccountActivation.css'
import {useParams} from 'react-router-dom'

const AccountActivation = (props) => {
    let { token } = useParams()

    const [message, setMessage] = useState()

    useEffect(()=>{
        
    }, [])

    return(
        <div>{message}</div>
    )
}

export default AccountActivation