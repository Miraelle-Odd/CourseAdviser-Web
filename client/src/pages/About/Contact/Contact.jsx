import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './Contact.css'
import { Fragment } from 'react/cjs/react.production.min'
import AppoinmentLayout from '../../../components/LayoutComponents/ContactPage/AppoinmentLayout'
import Footer from '../../../components/Footer/Footer'


export default function Contact(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <Fragment>
            <AppoinmentLayout> </AppoinmentLayout>
            <Footer> </Footer>
        </Fragment>
    )
}