import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { Fragment } from 'react/cjs/react.production.min'
import { useParams } from 'react-router-dom'
import AcademicPosts from './AcademicPosts/AcademicPosts'
import SpecialEvents from './SpecialEvents/SpecialEvents'
import Discounts from './Discounts/Discounts'

export default function ListHolder(props) {
    let {postType} = useParams();
    return (
        <Fragment>
            {
                postType=="academic-posts"?
                <AcademicPosts></AcademicPosts>
                :
                postType=="special-events"?
                <SpecialEvents></SpecialEvents>
                :
                <Discounts></Discounts>
            }
        </Fragment>
    )
}