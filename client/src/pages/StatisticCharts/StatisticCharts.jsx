import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import './StatisticCharts.css'
import Footer from '../../components/Footer/Footer'
import WorkplaceLayout from '../../components/LayoutComponents/WorkplacePage/WorkplaceLayout'
import PieChartTray from './PieChartTray'
import BarChartTray from './BarChartTray'
import WorkplaceListCategory from '../../components/ListComponents/WorkplaceListCategory';

const StatisticCharts = props => {
    let { page } = useParams()
    let navigate = useNavigate()
    
    const lcItems = [
        {
            display: "Bài viết",
            awesomeIcon: ['fas', 'newspaper'],
            link: "/workplace/statistic-charts/post-management",
            value: "post-management"

        },
        {
            display: "Hỏi đáp",
            awesomeIcon: ['fas', 'comments'],
            link: "/workplace/statistic-charts/q-and-a-management",
            value: "q-and-a-management"
        },
        {
            display: "Yêu cầu",
            awesomeIcon: ['fas', 'scroll'],
            link: "/workplace/statistic-charts/request-management",
            value: "request-management"
        },
    ]

    const manageLcItems = [{
        display: "Tài khoản",
        awesomeIcon: ['fas', 'users'],
        link: "/workplace/statistic-charts/employee-management",
        value: "employee-management"
    }].concat(lcItems)

    const onCategoryChange = (event) => {
        // navigate("/workplace/statistic-charts/" + event.currentTarget.attributes.getNamedItem("value").value)
        // navigate(0)
    }

    const renderStatisticCharts = () => {
        return (
            <div className='acc-set-body'>
                <WorkplaceListCategory
                    items={props.position === "manager" ? manageLcItems : lcItems}
                    onCategoryChange={onCategoryChange}
                ></WorkplaceListCategory>
                <div className='trays-container'>
                    <div className='pie-chart-section'>
                        <PieChartTray
                            title="Theo phân loại tài khoản"
                            groupBy="position"
                            labels={['Quản lý', 'Nhân viên']}
                            categories={[
                                {
                                    label: 'Quản lý',
                                    name: 'manager',
                                    color: 'rgba(66, 194, 255, 0.6)'
                                },
                                {
                                    label: 'Nhân viên',
                                    name: 'employee',
                                    color: 'rgba(117, 121, 231, 0.6)'
                                },
                            ]}
                            filterField="status"
                            filters={
                                [
                                    {
                                        value: "enabled",
                                        label: "Hoạt động"
                                    },
                                    {
                                        value: "disabled",
                                        label: "Khóa"
                                    }
                                ]
                            }
                        ></PieChartTray>
                        <PieChartTray
                            title="Theo trạng thái tài khoản"
                            groupBy="status"
                            labels={['Hoạt động', 'Khóa']}
                            categories={[
                                {
                                    label: 'Hoạt động',
                                    name: 'enabled',
                                    color: 'rgba(234, 92, 43, 0.6)'
                                },
                                {
                                    label: 'Khóa',
                                    name: 'disabled',
                                    color: 'rgba(162, 123, 92, 0.6)'
                                },
                            ]}
                            filterField="position"
                            filters={
                                [
                                    {
                                        value: "manager",
                                        label: "Quản lý"
                                    },
                                    {
                                        value: "employee",
                                        label: "Nhân viên"
                                    }
                                ]
                            }
                        ></PieChartTray>
                    </div>
                    <div className='bar-chart-section'>
                        <BarChartTray
                            title="Được tạo theo thời gian"
                            options={[
                                {
                                    mode: "position",
                                    modeName: "Phân loại theo vị trí",
                                    labels: ['Quản lý', 'Nhân viên'],
                                    categories: [
                                        {
                                            label: 'Quản lý',
                                            name: 'manager',
                                            color: 'rgba(66, 194, 255, 0.6)'
                                        },
                                        {
                                            label: 'Nhân viên',
                                            name: 'employee',
                                            color: 'rgba(117, 121, 231, 0.6)'
                                        }
                                    ]
                                },
                                {
                                    mode: "status",
                                    modeName: "Phân loại theo trạng thái",
                                    labels: ['Hoạt động', 'Khóa'],
                                    categories: [
                                        {
                                            label: 'Hoạt động',
                                            name: 'enabled',
                                            color: 'rgba(66, 194, 255, 0.6)'
                                        },
                                        {
                                            label: 'Khóa',
                                            name: 'disabled',
                                            color: 'rgba(117, 121, 231, 0.6)'
                                        }
                                    ]
                                },
                            ]}

                        ></BarChartTray>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className='userpage-container'>
            <WorkplaceLayout
                title="Thống kê"
                renderBody={renderStatisticCharts()}
            ></WorkplaceLayout>
            <Footer></Footer>
        </div>
    )
}

export default StatisticCharts;