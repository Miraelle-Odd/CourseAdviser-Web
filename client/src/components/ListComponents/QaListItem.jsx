import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QaListItem = props => {
    const [isShowDetail, setIsShowDetail] = useState(false);

    const handleShowDetail = () => {
        if (isShowDetail === false)
            setIsShowDetail(true)
        else
            setIsShowDetail(false)

        console.log(isShowDetail)
    }
    return (
        <li className='qa-list-item'>
            <div class="qa-item-question qa-layout-center" >
                {props.question}
                <div className='qa-icon-contain' onClick={handleShowDetail}>
                    <FontAwesomeIcon className='qa-item-icon' icon={isShowDetail ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']} ></FontAwesomeIcon>
                </div>
            </div>
            <div className={isShowDetail ? 'qa-item-answer qa-layout-center' : 'qa-item-answer qa-layout-center not-show'}>{props.answer}</div>
        </li>

    )
}

export default QaListItem;
