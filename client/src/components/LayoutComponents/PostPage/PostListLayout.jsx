import React, { useEffect, useState } from 'react'
import './PostListLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import PostItemBtn from '../../ButtonComponents/PostPage/PostItemBtn';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';


export default function PostListLayout(props) {
    let navigate = useNavigate();
    const handlePageClick = (event) => {
        navigate("/main-post/" + props.category + "/" + (event.selected + 1))
        setCurrentPage(event.selected + 1);

        window.scrollTo(0, 0);
    }

    var paginateColor = "post-li-pagination"
    var paginatePrev = " prev"
    var paginateNext = " next"
    var paginateActive = "post-li-active"
    if (props.typeblue !== true) {
        paginateColor = "post-li-pagination orange"
        paginatePrev = " prev-orange"
        paginateNext = " next-orange"
        paginateActive = "post-li-active-orange"
    }

    let { postType, page } = useParams();
    const [currentPage, setCurrentPage] = useState(page);
    const itemsPerPage = 6;
    const [listOfPaging, setListOfPaging] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        setPageCount(Math.ceil(props.count / itemsPerPage))

        const getListPaging = async () => {
            const result = await axios.get(`http://localhost:8080/Posts/${postType}?page=${currentPage - 1}`)
            setListOfPaging(result.data)
        }
        getListPaging().catch(console.error)
    }, [currentPage, props.count])
    console.log("dfasfsd", postType, listOfPaging)
    return (
        <Fragment>
            <div className={props.typeblue === true ? 'post-list-content for-pg-blue' : 'post-list-content for-pg-org'}>
                <div className='post-list-header post-list-center'>
                    <span className={props.typeblue === true ? 'post-list-title for-pg-blue' : 'post-list-title for-pg-org'}>Let's learn together !</span>
                    <div className='post-list-line'></div>
                </div>
                {
                    props.typeblue === true ?
                        <div className='post-list-card post-list-items-center'>
                            {
                                listOfPaging.map((item, index) => {
                                    var time = moment(item.updatedAt).format("YYYY-MM-DD hh-mm A");
                                    return (
                                        <PostItemBtn
                                            key={index}
                                            id={item.post_id}
                                            category={props.post_type}
                                            thumbnail={item.post_img}
                                            title={item.post_title}
                                            content={item.post_content}
                                            datetime={time}
                                            author={item.name}
                                            typeblue={true}>
                                        </PostItemBtn>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className='post-list-card post-list-items-center'>
                            {
                                listOfPaging.map((item, index) => {
                                    var time = moment(item.updatedAt).format("YYYY-MM-DD hh-mm A");
                                    return (
                                        <PostItemBtn
                                            id={item.post_id}
                                            category={props.post_type}
                                            thumbnail={item.post_img}
                                            title={item.post_title}
                                            content={item.post_content}
                                            datetime={time}
                                            author={item.name}>
                                        </PostItemBtn>
                                    )
                                })
                            }
                        </div>
                }

                <div className="post-list-pagination">
                    <ReactPaginate
                        pageCount={pageCount}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        breakLabel="..."
                        breakClassName={paginateColor}
                        breakLinkClassName="post-link-pagination"
                        className="post-list-pagination"
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
        </Fragment>
    )
}