import React, { useEffect, useState } from 'react'
import './PostListLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import PostItemBtn from '../../ButtonComponents/PostPage/PostItemBtn';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import SearchInput from '../../SearchComponents/SearchInput';
import SortComboBox from '../../ComboBoxComponents/SortComboBox';

const sortItems = [
    {
        value: 0,
        displayText: "Tạo mới nhất",
        sortParam: "updated-latest",
        sortField: "post_id",
        sortOrder: "DESC"
    },
    {
        value: 1,
        displayText: "Tạo cũ nhất",
        sortParam: "updated-oldest",
        sortField: "post_id",
        sortOrder: "ASC"
    },
    {
        value: 2,
        displayText: "Từ A đến Z",
        sortParam: "title-ascend",
        sortField: "post_title",
        sortOrder: "ASC"

    },
    {
        value: 3,
        displayText: "Từ Z đến A",
        sortParam: "title-descend",
        sortField: "post_title",
        sortOrder: "DESC"
    }
]

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

    const [search, setSearch] = useState("all");
    const [sortOption, setSortOption] = useState(0)
    const [text, setText] = useState();
    const sortHandler = (e) => {
        setSortOption(e.target.value)
        //Handle chosen sort option code
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

        if (sortItems[sortOption]) {
            axios.get(`http://localhost:8080/Posts/active/${postType}/${currentPage - 1}/${search}/${sortItems[sortOption].sortField}/${sortItems[sortOption].sortOrder}`)
                .then((res) => {
                    setListOfPaging(res.data)
                })
        }
    }, [currentPage, props.count, sortOption, search])
    return (
        <Fragment>
            <div className={props.typeblue === true ? 'post-list-content for-pg-blue' : 'post-list-content for-pg-org'}>
                <div className='post-list-header post-list-center'>
                    <span className={props.typeblue === true ? 'post-list-title for-pg-blue' : 'post-list-title for-pg-org'}>Let's learn together !</span>
                    <div className='post-list-line'></div>
                </div>
                <SearchInput
                    searchHandler={searchHandler}
                    currentSearch={search}></SearchInput>
                <div className="sort-in-list-container">
                    <SortComboBox
                        onChange={props.sortHandler ? props.sortHandler : sortHandler}
                        customClassName="sort margin-right-63 sort-in-list"
                        items={props.sortItems ? props.sortItems : sortItems}
                        defaultValue={props.sortOption ? props.sortOption : sortOption}>
                    </SortComboBox>
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
                                            key={index}
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