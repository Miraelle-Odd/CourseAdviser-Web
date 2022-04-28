import React from 'react'
import './WorkplacePostView.css'
import WorkplaceStatistic from '../../../ListComponents/WorkplaceStatistic';
import noimg from '../../../../assets/icons/post-noimg.png';

const WorkplacePostView = props => {
    return (
        <div className="workplace-list-container">

            <button className="create-btn" onClick={props.onUpdateClick}>
                Chỉnh sửa
            </button>
            <div className="workplace-list workplace-post-contain">
                <div className="workplace-post-header workplace-post-center">
                    <div className="workplace-post-title post-2-line">
                        {props.title}
                    </div>
                </div>
                <div className="workplace-post-body">
                    <div className="workplace-post-title post-subtitle post-2-line">
                        {props.subtitle}
                    </div>
                    <img className="workplace-post-img" src={props.img ? props.img : noimg}></img>
                    <div className="workplace-post-content" readOnly={true}>
                        {props.content}
                    </div>
                </div>
            </div>
            <div className="statistics-container">
                <WorkplaceStatistic
                    menu_title={"Chi tiết"}
                    items={props.statisticItems}
                    customValue={"customValue"}
                ></WorkplaceStatistic>
            </div>
        </div>
    )
}

export default WorkplacePostView;