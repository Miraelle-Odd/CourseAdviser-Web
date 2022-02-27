import React from 'react'
import './FacilityCard_Img.css'
import { Fragment } from 'react/cjs/react.production.min';

export default function FacilityCard_Img(props) {
    if (props.type == "small") {
        return (
            <Fragment>
                <div className="facility-card-content facility-card-content-type-small">
                    <img className="facility-card-img facility-card-img-type-small" src={props.img}></img>
                </div>
            </Fragment>
        )
    }
    else if (props.type == "large-hor") {
        return (
            <Fragment>
                <div className="facility-card-content facility-card-content-type-large-hor">
                    <img className="facility-card-img facility-card-img-type-large-hor" src={props.img}></img>
                </div>
            </Fragment>
        )
    }
    else if (props.type == "large-ver") {
        return (
            <Fragment>
                <div className="facility-card-content facility-card-content-type-large-ver">
                    <img className="facility-card-img facility-card-img-type-large-ver" src={props.img}></img>
                </div>
            </Fragment>
        )
    }
    else{
        return (
            <Fragment>
                <h3>Lỗi, không tìm thấy tham số type</h3>
            </Fragment>
        )
    }
}