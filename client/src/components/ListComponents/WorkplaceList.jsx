import React, { useEffect, useState } from "react";
import './WorkplaceList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatusSwitch from "../SwitchComponents/WorkplacePage/StatusSwitch";
import WorkplaceListItem from "./WorkplaceListItem";
import WorkplaceListCategory from "./WorkplaceListCategory";
import { useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import WorkplaceStatistic from "./WorkplaceStatistic";

const WorkplaceList = props => {
    const itemsPerPage = 2
    // const [currentItems, setCurrentItems] = useState(props.data);
    // const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    let navigate = useNavigate();
    let { page } = useParams();
    let { category } = useParams();

    useEffect(() => {
        // console.log(props.pageCount)
        // Fetch items from another resources.
        // const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        // setCurrentItems(props.data.slice(itemOffset, endOffset));
        // console.log(currentItems)
        // console.log(props.data)
        // setPageCount(Math.ceil(props.data.length / itemsPerPage));
    }, []);
    const handlePageClick = (event) => {
        // const newOffset = event.selected * itemsPerPage % props.data.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        // setItemOffset(newOffset);
        // navigate("/workplace/"+ props.listName +"/all/" + (event.selected + 1))
    }
    return (
        <div className="workplace-list-container">
            <WorkplaceListCategory
                items={props.categoryItems}
                onCategoryChange={props.onCategoryChange}
            ></WorkplaceListCategory>
            <div className='wp-list-pagination-container'>
                <ReactPaginate
                    pageCount={props.pageCount}
                    className="wp-list-pagination"
                    pageClassName="wp-li-pagination page-hidden"
                    pageLinkClassName="wp-link-pagination"
                    previousClassName="prev-next prev"
                    previousLinkClassName="wp-link-pagination"
                    previousLabel=""
                    nextClassName="prev-next next"
                    nextLinkClassName="wp-link-pagination"
                    nextLabel=""
                    breakLabel=""
                    disabledClassName="prev-next-disabled"
                    onPageChange={props.handlePageClick? props.handlePageClick : handlePageClick}
                    renderOnZeroPageCount={null}
                    activeClassName="active"
                    forcePage={props.forcePage}
                ></ReactPaginate>
                {
                    
                    props.pageCount != 0 ?
                        <div>
                            <input type="text" className='wp-list-pagination-input' defaultValue={page} onKeyDown={props.onPageTextChange}></input>
                            <span className='wp-list-pagination-max'>/ {props.pageCount}</span>
                        </div>
                        : ""

                }

            </div>
            <button className="create-btn" onClick={props.onCreateClick}>
                + Thêm mới
            </button>
            <div className="workplace-list">
                <WorkplaceListItem isHeader fieldFormat={props.fieldFormat}></WorkplaceListItem>
                {
                    props.data ? props.data.map((item, index) => {
                        return (
                            <WorkplaceListItem
                                fieldFormat={props.fieldFormat}
                                data={item}
                                openFun={props.openAction}
                                editFun={props.editAction}
                            ></WorkplaceListItem>
                        )

                    })
                        :
                        ""
                }
            </div>

            <div className="statistics-container">
                <WorkplaceStatistic
                    items = {props.statisticItems}
                ></WorkplaceStatistic>
            </div>
        </div>

    )
}

export default WorkplaceList;