import React from 'react'
import './PostListLayout.css'
import { Fragment } from 'react/cjs/react.production.min';
import PostItemBtn from '../../ButtonComponents/PostPage/PostItemBtn';
import ReactPaginate from 'react-paginate';

export default function PostListLayout(props) {
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


                {/* <div className="post-list-pagination">
                    <ReactPaginate
                        breakLabel="..."
                        // nextLabel={piggy}
                        pageRangeDisplayed={5}
                        pageCount={10}
                        // previousLabel={piggy}
                        renderOnZeroPageCount={null}
                        activeClassName="active"
                        forcePage={0}
                    />
                </div> */}

            </div>
        </Fragment>
    )
}