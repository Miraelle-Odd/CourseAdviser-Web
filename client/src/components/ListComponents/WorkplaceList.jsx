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
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    let navigate = useNavigate();
    let { page } = useParams();
    let { category } = useParams();

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(props.data.slice(itemOffset, endOffset));
        console.log(currentItems)
        console.log(props.data)
        setPageCount(Math.ceil(props.data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % props.data.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
        navigate("/workplace/"+ props.listName +"/all/" + (event.selected + 1))
    }
    return (
        <div className="workplace-list-container">
            <WorkplaceListCategory
                items={props.categoryItems}
            ></WorkplaceListCategory>
            <div className='wp-list-pagination-container'>
                <ReactPaginate
                    pageCount={pageCount}
                    className="wp-list-pagination"
                    pageClassName="wp-li-pagination page-hidden"
                    pageLinkClassName="wp-link-pagination"
                    previousClassName="prev-next prev"
                    previousLinkClassName="wp-link-pagination"
                    previousLabel=""
                    nextClassName="prev-next next"
                    nextLinkClassName="wp-link-pagination"
                    nextLabel=""
                    disabledClassName="prev-next-disabled"
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}
                    activeClassName="active"
                ></ReactPaginate>
                {
                    pageCount != 0 ?
                        <div>
                            <input type="text" className='wp-list-pagination-input' value={page}></input>
                            <span className='wp-list-pagination-max'>/ 100</span>
                        </div>

                        : ""

                }

            </div>
            <button className="create-btn" >
                + Thêm mới
            </button>
            <div className="workplace-list">
                <WorkplaceListItem isHeader fieldFormat={props.fieldFormat}></WorkplaceListItem>
                {
                    currentItems ? currentItems.map((item, index) => {
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