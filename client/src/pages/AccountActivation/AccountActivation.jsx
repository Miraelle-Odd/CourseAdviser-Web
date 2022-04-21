import React, { useEffect, useState } from 'react'
import './AccountActivation.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AccountActivation = (props) => {
    let { token } = useParams()

    const [message, setMessage] = useState()

    useEffect(() => {
        const validator = axios.post("http://localhost:8080/accounts/activate", {
            token: token
        }).then((res) => {
            const removeToken = axios.post("http://localhost:8080/accounts/token-activated", {
                token: token
            }).then(() => {
                if (res.data.message)
                    setMessage(res.data.message)
            })

        })

    }, [])

    return (
        <div>{message}</div>
    )
}

export default AccountActivation