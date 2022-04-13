import React, { useState } from 'react'
import './WorkplacePostUpdate.css'
import WorkplaceStatistic from '../../../ListComponents/WorkplaceStatistic';
import noimg from '../../../../assets/icons/post-noimg.png';
import SortComboBox from '../../../ComboBoxComponents/SortComboBox';
import StatusSwitch from '../../../SwitchComponents/WorkplacePage/StatusSwitch';
import TextareaAutosize from 'react-textarea-autosize';
const sortItems = [
    {
        value: 0,
        displayText: "Academic"
    },
    {
        value: 1,
        displayText: "Event"
    },
    {
        value: 2,
        displayText: "Discount"
    }
]
const sortHandler = (e) => {
    console.log(e.target.value);
    //Handle chosen sort option code
}

const WorkplacePostUpdate = props => {
    const [title, setTitle] = useState(props.title)
    const [subtitle, setSubtitle] = useState(props.subtitle)
    const [postImg, setPostImg] = useState(props.img ? props.img : noimg)
    const [content, setContent] = useState(props.contain)
    // const onChangeHandle = (value) => {
    //     setAa(value)
    // }
    return (
        <div className="workplace-list-container">

            <button className="create-btn" onClick={props.onUpdateClick}>
                Đăng
            </button>
            <div className="workplace-list workplace-post-contain workplace-post-update">
                <div className="post-body-contain post-body-first">
                    <p className="post-update-item">Tiêu đề:</p>
                    <input className="post-update-title-input"
                        placeholder="Nhập tiêu đề của bài viết"
                        value={title}
                        onChange={e => { setTitle(e.target.value); }} />
                    <input className="post-update-title-input"
                        placeholder="Nhập tiêu đề phụ của bài viết"
                        value={subtitle}
                        onChange={e => { setSubtitle(e.target.value); }} />
                </div>
                <div className="post-body-contain">
                    <p className="post-update-item">Hình minh họa:</p>
                    <div className="post-update-img-contain">
                        <img className="post-update-img" src={postImg}></img>
                        <button className="post-update-img-btn">Chọn hình</button>
                    </div>
                </div>
                <div className="post-body-contain">
                    <p className="post-update-item">Nội dung</p>
                    <TextareaAutosize
                        className="post-update-content"
                        placeholder="Nhập nội dung bài viết..."
                        defaultValue={content}
                        onChange={e => { setContent(e.target.value); }}
                        minRows={20}
                    />
                </div>
            </div>
            <div className="statistics-container">
                <div className="statistics-menu">
                    <p className="statistics-menu-title">Thông tin</p>
                    <div className="statistics-menu-item-contain">
                        <p className="statistics-menu-item">Chủ đề: </p>
                        <SortComboBox
                            onChange={sortHandler}
                            customClassName="sort-post"
                            items={sortItems}>
                        </SortComboBox>
                    </div>
                    <div className="statistics-menu-item-contain">
                        <p className="statistics-menu-item">Người đăng: </p>
                        <input className="statistics-menu-readonly"
                            readOnly={true}
                            value={props.name ? props.name : ""}></input>
                    </div>
                    <div className="statistics-menu-item-contain">
                        <p className="statistics-menu-item">Ngày đăng: </p>
                        <input className="statistics-menu-readonly"
                            readOnly={true}
                            value={props.date ? props.date : ""}></input>
                    </div>
                    <div className="statistics-menu-item-contain">
                        <p className="statistics-menu-item">Trạng thái: </p>
                        <div className='post-status workplace-post-center'>
                            <StatusSwitch
                                onClick={() => { }}
                                on={true}>
                            </StatusSwitch>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkplacePostUpdate;