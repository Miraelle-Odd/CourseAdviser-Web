import React from 'react'
import './QaLayout.css'
import { Fragment } from 'react/cjs/react.production.min';


export default function QaLayout(props) {
    return (
        <Fragment>
            <div className='qa-layout-contain'>
                <div className='qa-half-abow'>
                    <div className='qa-layout-title qa-layout-center'>Chúng tôi có thể giúp gì cho bạn?</div>
                    <div>
                        {/* <input
                        type="text"
                        placeholder='Mô tả câu hỏi của bạn...'/> */}

                    </div>
                    
                </div>
                <div className='qa-mid-line'>

                </div>
                <div className='qa-half-below'>
                    {/* <ul id="accordion" class="accordion">
                        <li>
                            <div class="link"><i class="fa fa-database"></i>Web Design<i class="fa fa-chevron-down"></i></div>
                            <div>Answer</div>
                        </li>
                        <li>
                            <div class="link"><i class="fa fa-code"></i>Coding<i class="fa fa-chevron-down"></i></div>
                            <div>Answer</div>
                        </li>
                        <li>
                            <div class="link"><i class="fa fa-mobile"></i>Devices<i class="fa fa-chevron-down"></i></div>
                            <div>Answer</div>
                        </li>
                        <li>
                            <div class="link"><i class="fa fa-globe"></i>Global<i class="fa fa-chevron-down"></i></div>
                            <div>Answer</div>
                        </li>
                    </ul> */}
                </div>
            </div>
        </Fragment>
    )
}