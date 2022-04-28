import React, { useEffect, useState } from 'react'
import './QaLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QaListItem from '../../ListComponents/QaListItem';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function QaLayout(props) {
    let navigate = useNavigate();
    // const handlePageClick = (event) => {
    //     navigate("/about/qa/" + (event.selected + 1))
    // }
    var paginateColor = "qa-li-pagination"
    var paginatePrev = " qa-prev"
    var paginateNext = " qa-next"
    var paginateActive = "qa-li-active"

    let { page } = useParams();
    const [currentPage, setCurrentPage] = useState(page ? page : 1);
    const itemsPerPage = 2;
    const [listOfPaging, setListOfPaging] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    const handlePageClick = (event) => {
        navigate("/about/qa/" + (event.selected + 1))
        setCurrentPage(event.selected + 1);

        window.scrollTo(0, 0);
    }

    useEffect(() => {
        setPageCount(Math.ceil(props.count / itemsPerPage))

        const getListPaging = async () => {
            const result = await axios.get(`http://localhost:8080/q-and-as/${currentPage - 1}`)
            setListOfPaging(result.data)
        }
        getListPaging().catch(console.error)
    }, [currentPage, props.count])
    console.log("dfasfsd", props.count, pageCount)
    return (
        props.hasResult ?
            (<Fragment>
                <div className='qa-layout-contain'>
                    <div className='qa-half-abow qa-layout-center'>
                        <div className='qa-layout-title qa-layout-center'>{"Chúng tôi có thể\r\ngiúp gì cho bạn?"}</div>
                        <div className='qa-layout-search qa-layout-center'>
                            <FontAwesomeIcon icon={['fas', 'magnifying-glass']}></FontAwesomeIcon>
                            <input
                                className='qa-input-search'
                                type="text"
                                placeholder='Mô tả câu hỏi của bạn...' />
                        </div>
                        <button className='qa-button-search' onClick={props.searchHandle}>GO</button>
                    </div>
                    <div className='qa-mid-line'></div>
                    <div className='qa-half-below'>
                        <div className='qa-below-body qa-layout-center'>
                            <ul class="qa-list-contain">
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
                            <div className='qa-layout-title'>{"Không tìm thấy kết quả\r\nphù hợp"}</div>
                            <button className='qa-button-back' onClick={props.backHandle}>Trở về danh sách chính</button>
                        </div>
                        <div className='qa-mid-line'>
                            <div className='qa-mid-icon qa-layout-center'>
                                <FontAwesomeIcon className="mid-icon" icon={['fas', 'chevron-down']}></FontAwesomeIcon>
                            </div>
                        </div><div className='qa-half-below'>
                            <div className='qa-below-body qa-layout-center'>
                                <div className='qa-below-title-contain qa-layout-center'>
                                    <p className='qa-below-title'>Gửi yêu cầu giải đáp đến chúng tôi</p >
                                    <p className='qa-below-subtitle'>{"Sau khi ban tư vấn nhận được nội dung này, chúng tôi sẽ tiến hành xem xét\r\nvà gửi lại giải đáp cho bạn trong thời gian nhất định"}</p>
                                </div >
                                <textarea
                                    className='qa-below-textarea'
                                    placeholder='Vui lòng nhập câu hỏi của bạn'>
                                </textarea>
                            </div >
                            <div className='qa-below-button-contain'>
                                <button className='qa-below-send'>
                                    Gửi
                                </button>
                            </div>
                        </div >
                    </div>
                </Fragment>
            )
    )
}