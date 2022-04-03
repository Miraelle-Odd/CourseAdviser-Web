import React from 'react'
import './PostListLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import PostItemBtn from '../../ButtonComponents/PostPage/PostItemBtn';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';



export default function PostListLayout(props) {
    let navigate = useNavigate();
    const handlePageClick = (event) => {
        navigate("/main-post/" + props.category + "/" + (event.selected + 1))
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
                                props.items.map((item, index) => {
                                    return (
                                        <PostItemBtn
                                            id={item.id}
                                            category={props.category}
                                            thumbnail={item.thumbnail}
                                            title={item.title}
                                            content={item.content}
                                            datetime={item.datetime}
                                            author={item.author}
                                            typeblue={true}>
                                        </PostItemBtn>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className='post-list-card post-list-items-center'>
                            {
                                props.items.map((item, index) => {
                                    return (
                                        <PostItemBtn
                                            id={item.id}
                                            category={props.category}
                                            thumbnail={item.thumbnail}
                                            title={item.title}
                                            content={item.content}
                                            datetime={item.datetime}
                                            author={item.author}>
                                        </PostItemBtn>
                                    )
                                })
                            }
                        </div>
                }

                <div className="post-list-pagination">
                    <ReactPaginate
                        pageCount={10}
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
                        forcePage={0}
                    />
                </div>

            </div>
        </Fragment>
    )
}