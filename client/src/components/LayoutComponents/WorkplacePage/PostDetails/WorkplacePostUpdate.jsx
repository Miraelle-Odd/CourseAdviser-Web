import React, { useEffect, useState } from 'react'
import './WorkplacePostUpdate.css'
import WorkplaceStatistic from '../../../ListComponents/WorkplaceStatistic';
import noimg from '../../../../assets/icons/post-noimg.png';
import SortComboBox from '../../../ComboBoxComponents/SortComboBox';
import StatusSwitch from '../../../SwitchComponents/WorkplacePage/StatusSwitch';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';
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


const WorkplacePostUpdate = props => {
    const [title, setTitle] = useState()
    const [subtitle, setSubtitle] = useState()
    const [postImg, setPostImg] = useState()
    const [content, setContent] = useState()
    const [type, setType] = useState(0)
    const [status, setStatus] = useState()
    const [author, setAuthor] = useState()

    useEffect(() => {
        setType(props.type)
        setStatus(props.active)
        setAuthor(props.author_id)
    }, [props])

    const onConfirm = () => {
        var type_convert;
        if (type == 0)
            type_convert = "academic"
        else if (type == 1)
            type_convert = "event"
        else
            type_convert = "discount"

        var status_convert;
        if (status == true)
            status_convert = "enabled"
        else
            status_convert = "disabled"
        const params = {
            post_id: props.id,
            post_title: title,
            post_subtitle: subtitle,
            post_content: content,
            post_type: type_convert,
            post_status: status_convert,
            author_id: author,
        }
        //console.log(params)
        const result = axios.post("http://localhost:8080/posts/update-post/", params)
            .then(res => {
                console.log("dsadsad", res.data)
            })
    }

    const sortHandler = (e) => {
        setType(e.target.value)
        //Handle chosen sort option code
    }
    const statusHandler = () => {
        // setStatus(e.target.value)
        if (props.active == true)
            setStatus(false)
        else
            setStatus(true)
    }


    // var temp = getType()
    return (
        <div className="workplace-list-container">

            <button className="create-btn" onClick={onConfirm}>
                Đăng
            </button>
            <div className="workplace-list workplace-post-contain workplace-post-update">
                <div className="post-body-contain post-body-first">
                    <p className="post-update-item">Tiêu đề:</p>
                    <input className="post-update-title-input"
                        placeholder="Nhập tiêu đề của bài viết"
                        defaultValue={props.title}
                        onChange={e => { setTitle(e.target.value); }} />
                    <input className="post-update-title-input"
                        placeholder="Nhập tiêu đề phụ của bài viết"
                        defaultValue={props.subtitle}
                        onChange={e => { setSubtitle(e.target.value); }} />
                </div>
                <div className="post-body-contain">
                    <p className="post-update-item">Hình minh họa:</p>
                    <div className="post-update-img-contain">
                        <img className="post-update-img" src={props.img ? props.img : noimg}></img>
                        <button className="post-update-img-btn">Chọn hình</button>
                    </div>
                </div>
                <div className="post-body-contain">
                    <p className="post-update-item">Nội dung</p>
                    <TextareaAutosize
                        className="post-update-content"
                        placeholder="Nhập nội dung bài viết..."
                        defaultValue={props.content}
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
                            items={sortItems}
                            defaultValue={type}>
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
                        {
                            props.id ?
                                <div className='post-status workplace-post-center' onClick={statusHandler}>
                                    <StatusSwitch
                                        on={status}>
                                    </StatusSwitch>
                                </div> 
                                :
                                <div className='post-status workplace-post-center' >
                                    <StatusSwitch
                                        on={status}
                                        onClick={() => {}}>
                                    </StatusSwitch>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkplacePostUpdate;