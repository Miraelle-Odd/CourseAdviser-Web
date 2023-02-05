import React, { useEffect, useState } from 'react'
import './QaLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QaListItem from '../../ListComponents/QaListItem';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AlertSuccess from '../../PopupComponents/AlertSuccess/AlertSuccess';
import AlertFail from '../../PopupComponents/AlertFail/AlertFail';
import Modal from 'react-modal';
import SearchInput from '../../SearchComponents/SearchInput';
import WorkplaceListCategory from '../../ListComponents/WorkplaceListCategory';
import SortComboBox from '../../ComboBoxComponents/SortComboBox';
import FilterSelect from '../../FilterComponents/FilterSelect';
const categoryItems = [
    {
        display: "Tất cả",
        awesomeIcon: ['fas', 'address-card'],
        value: "all"
    },
    {
        display: "Trung tâm",
        awesomeIcon: ['fas', 'school'],
        value: "center"

    },
    {
        display: "Khóa học",
        awesomeIcon: ['fas', 'book'],
        value: "course"

    },
]
const sortItems = [
    {
        value: 0,
        displayText: "Tạo mới nhất",
        sortParam: "updated-latest",
        sortField: "qa_id",
        sortOrder: "DESC"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất",
        sortParam: "updated-oldest",
        sortField: "qa_id",
        sortOrder: "ASC"
    },
    {
        value: 2,
        displayText: "Câu hỏi - A đến Z",
        sortParam: "question-ascend",
        sortField: "question",
        sortOrder: "ASC"

    },
    {
        value: 3,
        displayText: "Câu hỏi - Z đến A",
        sortParam: "question-descend",
        sortField: "question",
        sortOrder: "DESC"
    }
]

export default function QaLayout(props) {
    let navigate = useNavigate();
    var paginateColor = "qa-li-pagination"
    var paginatePrev = " qa-prev"
    var paginateNext = " qa-next"
    var paginateActive = "qa-li-active"

    let { page } = useParams();
    const [currentPage, setCurrentPage] = useState(page ? page : 1);
    const itemsPerPage = 8;
    const [listOfPaging, setListOfPaging] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [content, setContent] = useState();
    const [message, setMessage] = useState()
    const [failAlert, setFailAlert] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)

    const handlePageClick = (event) => {
        navigate("/about/qa/" + (event.selected + 1))
        setCurrentPage(event.selected + 1);
        window.scrollTo(0, 0);
    }

    const handleRequestClick = () => {
        navigate("/about/qa/send-request")
        window.scrollTo(0, 0);
    }

    const sendRequest = async () => {
        const params = {
            content: content,
        }
        await axios.post(`http://localhost:8080/requests/send-request`, params)
            .then(res => {
                console.log(res)
                if (res.data.errors) {
                    setMessage("Có lỗi xảy ra. Vui lòng thử lại sau.")
                    setFailAlert(true)
                }
                else {
                    setMessage("Gửi yêu cầu thành công.")
                    setSuccessAlert(true)
                }
            })
    }

    const handleFormClose = () => {
        setSuccessAlert(false)
        setFailAlert(false)
        setMessage("")
        window.location.reload();
    }
    const [sortOption, setSortOption] = useState(0)
    const [search, setSearch] = useState('all')
    const [qaType, setQaType] = useState('all');
    const [text, setText] = useState();
    const sortHandler = (e) => {
        console.log(e.target.value);
        setSortOption(e.target.value)
        //Handle chosen sort option code
    }
    const onCategoryChange = (e) => {
        setQaType(e.currentTarget.attributes.getNamedItem("value").value)
    }
    const searchHandler = (e) => {
        if (e.key === "Enter") {
            setText(e.target.value); 
        }
    }
    useEffect(() => {
        if (text && text.trim() != "") {
            setSearch(text);
        }
        else {
            setSearch("all");
        }
    }, [text])
    useEffect(() => {
        setPageCount(Math.ceil(props.count / itemsPerPage))

        const getListPaging = async () => {
            const result = await axios.get(`http://localhost:8080/q-and-as/active/${qaType}/${currentPage - 1}/${search}/${sortItems[sortOption].sortField}/${sortItems[sortOption].sortOrder}`)
            setListOfPaging(result.data)
        }
        getListPaging().catch(console.error)
    }, [currentPage, props.count,qaType, sortOption, search])


    return (
        props.hasResult ?
            (<Fragment>
                <div className='qa-layout-contain'>
                    <div className='qa-half-below'>
                        <div className='qa-below-body qa-layout-center'>
                            <div className='qa-request-button qa-layout-center' onClick={handleRequestClick}>Gửi câu hỏi</div>
                            <FilterSelect
                                type={qaType}
                                customCss="customCss"
                                items={categoryItems}
                                onCategoryChange={onCategoryChange}
                            ></FilterSelect>
                            <SearchInput searchHandler={searchHandler}
                                currentSearch={search}>
                            </SearchInput>

                            <div className="sort-in-list-container-2">
                                <SortComboBox
                                    onChange={props.sortHandler ? props.sortHandler : sortHandler}
                                    customClassName="sort margin-right-63 sort-in-list-2"
                                    items={props.sortItems ? props.sortItems : sortItems}
                                    defaultValue={props.sortOption ? props.sortOption : sortOption}>
                                </SortComboBox>
                            </div>
                            <ul className="qa-list-contain">
                                {
                                    listOfPaging ? listOfPaging.map((item, index) => (
                                        <QaListItem key={index}
                                            question={item.question}
                                            answer={item.answer}>
                                        </QaListItem>
                                    )) : ""
                                }
                            </ul>
                            <div className="">
                                <ReactPaginate
                                    pageCount={pageCount}
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={2}
                                    breakLabel="..."
                                    breakClassName={paginateColor}
                                    breakLinkClassName="post-link-pagination"
                                    className="qa-list-pagination"
                                    pageClassName={paginateColor}
                                    pageLinkClassName="post-link-pagination"
                                    nextLabel=""
                                    nextClassName={paginateColor + paginateNext}
                                    nextLinkClassName="post-link-pagination"
                                    previousLabel=""
                                    previousClassName={paginateColor + paginatePrev}
                                    previousLinkClassName="post-link-pagination"
                                    activeClassName={paginateActive}
                                    disabledClassName="disabled"
                                    onPageChange={handlePageClick}
                                    renderOnZeroPageCount={null}
                                    forcePage={parseInt(currentPage) - 1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            ) : (
                <Fragment>
                    <div className='qa-layout-contain'>
                        <div className='qa-half-abow qa-layout-center'>
                            <div className='qa-layout-title'>{"Không tìm thấy câu trả lời thích hợp cho vấn đề của bạn ?"}</div>
                            <button className='qa-button-back' onClick={props.backHandle}>Trở lại danh sách câu hỏi</button>
                        </div>
                        <div className='qa-mid-line'>
                            <div className='qa-mid-icon qa-layout-center'>
                                <FontAwesomeIcon className="mid-icon" icon={['fas', 'chevron-down']}></FontAwesomeIcon>
                            </div>
                        </div><div className='qa-half-below'>
                            <div className='qa-below-body qa-layout-center'>
                                <div className='qa-below-title-contain qa-layout-center'>
                                    <p className='qa-below-title'>Hãy gửi yêu cầu giải đáp đến chúng tôi</p >
                                    <p className='qa-below-subtitle'>{"Sau khi ban tư vấn nhận được nội dung này, chúng tôi sẽ tiến hành xem xét\r\nvà gửi lại giải đáp cho bạn trong thời gian nhất định"}</p>
                                </div >
                                <textarea
                                    className='qa-below-textarea'
                                    placeholder='Vui lòng nhập câu hỏi của bạn'
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}>
                                </textarea>
                            </div >
                            <div className='qa-below-button-contain'>
                                <button className='qa-below-send' onClick={sendRequest}>
                                    Gửi
                                </button>
                            </div>
                        </div >
                    </div>
                    <Modal
                        isOpen={successAlert}
                        onRequestClose={() => handleFormClose()}
                        className="popup-modal"
                        overlayClassName="popup-overlay"
                        shouldCloseOnOverlayClick={false}
                        ariaHideApp={false}>
                        <AlertSuccess
                            message={message}
                            onClose={() => handleFormClose()}
                        ></AlertSuccess>
                    </Modal>

                    <Modal
                        isOpen={failAlert}
                        onRequestClose={() => handleFormClose()}
                        className="popup-modal"
                        overlayClassName="popup-overlay"
                        shouldCloseOnOverlayClick={false}
                        ariaHideApp={false}>
                        <AlertFail
                            message={message}
                            onClose={() => handleFormClose()}
                        ></AlertFail>
                    </Modal>
                </Fragment>
            )
    )
}