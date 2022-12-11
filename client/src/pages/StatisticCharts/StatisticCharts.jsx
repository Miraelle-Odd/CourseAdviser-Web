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
            link: "/workplace/statistic-charts/posts",
            value: "posts"

        },
        {
            display: "Hỏi đáp",
            awesomeIcon: ['fas', 'comments'],
            link: "/workplace/statistic-charts/q-and-as",
            value: "q-and-as"
        },
        {
            display: "Yêu cầu",
            awesomeIcon: ['fas', 'scroll'],
            link: "/workplace/statistic-charts/requests",
            value: "requests"
        },
    ]

    const manageLcItems = [{
        display: "Tài khoản",
        awesomeIcon: ['fas', 'users'],
        link: "/workplace/statistic-charts/accounts",
        value: "accounts"
    }].concat(lcItems)

    const filterByStatus = {
        filterField: "status",
        filters: [
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
    const groupByCategory = {
        groupBy: "status",
        labels: ['Hoạt động', 'Khóa'],
        categories: [
            {
                label: 'Hoạt động',
                name: 'enabled',
                color: 'rgba(234, 92, 43, 0.6)'
            },
            {
                label: 'Khóa',
                name: 'disabled',
                color: 'rgba(202, 78, 121, 0.8)'
            },
        ]
    }
    const statusLineChart = {
        mode: "status",
        modeName: "Phân loại theo trạng thái",
        categories: [
            {
                label: 'Hoạt động',
                name: 'enabled',
                color: 'rgba(234, 92, 43, 0.6)'
            },
            {
                label: 'Khóa',
                name: 'disabled',
                color: 'rgba(202, 78, 121, 0.8)'
            }
        ]
    }

    const chartsGenerate = () => {
        if (page === "accounts")
            return {
                page: "accounts",
                categoryPieChart: {
                    title: "Theo phân loại tài khoản",
                    groupBy: "position",
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
                        },
                    ],
                    ...filterByStatus
                },
                statusPieChart: {
                    title: "Theo trạng thái tài khoản",
                    ...groupByCategory,
                    filterField: "position",
                    filters: [
                        {
                            value: "manager",
                            label: "Quản lý"
                        },
                        {
                            value: "employee",
                            label: "Nhân viên"
                        }
                    ]
                },
                lineChart: {
                    title: "Được tạo theo thời gian",
                    options: [
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
                        statusLineChart
                    ]
                }
            }
        if (page === "posts")
            return {
                page: "posts",
                categoryPieChart: {
                    title: "Theo phân loại bài viết",
                    groupBy: "post_type",
                    categories: [
                        {
                            label: 'Học thuật',
                            name: 'academic',
                            color: 'rgba(66, 194, 255, 0.6)'
                        },
                        {
                            label: 'Sự kiện',
                            name: 'event',
                            color: 'rgba(117, 121, 231, 0.6)'
                        },
                        {
                            label: 'Khuyến mãi',
                            name: 'discount',
                            color: 'rgba(55, 121, 231, 0.6)'
                        },
                    ],
                    ...filterByStatus
                },
                statusPieChart: {
                    title: "Theo trạng thái bài viết",
                    ...groupByCategory,
                    filterField: "post_type",
                    filters: [
                        {
                            value: "academic",
                            label: "Học thuật"
                        },
                        {
                            value: "event",
                            label: "Sự kiện"
                        },
                        {
                            value: "discount",
                            label: "Khuyến mãi"
                        }
                    ]
                },
                lineChart: {
                    title: "Được tạo theo thời gian",
                    options: [
                        {
                            mode: "post_type",
                            modeName: "Phân loại theo chủ đề bài viết",
                            labels: ['Học thuật', 'Sự kiện', 'Khuyến mãi'],
                            categories: [
                                {
                                    label: 'Học thuật',
                                    name: 'academic',
                                    color: 'rgba(66, 194, 255, 0.6)'
                                },
                                {
                                    label: 'Sự kiện',
                                    name: 'event',
                                    color: 'rgba(117, 121, 231, 0.6)'
                                },
                                {
                                    label: 'Khuyến mãi',
                                    name: 'discount',
                                    color: 'rgba(55, 121, 231, 0.6)'
                                }
                            ]
                        },
                        statusLineChart
                    ]
                }
            }
        if (page === "q-and-as")
            return {
                page: "q-and-as",
                categoryPieChart: {
                    title: "Theo phân loại hỏi đáp",
                    groupBy: "main_subject",
                    categories: [
                        {
                            label: 'Trung tâm',
                            name: 'center',
                            color: 'rgba(66, 194, 255, 0.6)'
                        },
                        {
                            label: 'Khóa học',
                            name: 'course',
                            color: 'rgba(117, 121, 231, 0.6)'
                        }
                    ],
                    ...filterByStatus
                },
                statusPieChart: {
                    title: "Theo trạng thái hỏi đáp",
                    ...groupByCategory,
                    filterField: "main_subject",
                    filters: [
                        {
                            value: "center",
                            label: "Trung tâm"
                        },
                        {
                            value: "course",
                            label: "Khóa học"
                        }
                    ]
                },
                lineChart: {
                    title: "Được tạo theo thời gian",
                    options: [
                        {
                            mode: "main_subject",
                            modeName: "Phân loại theo chủ đề hỏi đáp",
                            labels: ['Trung tâm', 'Khóa học'],
                            categories: [
                                {
                                    label: 'Trung tâm',
                                    name: 'center',
                                    color: 'rgba(66, 194, 255, 0.6)'
                                },
                                {
                                    label: 'Khóa học',
                                    name: 'course',
                                    color: 'rgba(117, 121, 231, 0.6)'
                                }
                            ]
                        },
                        statusLineChart
                    ]
                }
            }
        if (page === "requests")
            return {
                page: "requests",
                statusPieChart: {
                    title: "Theo trạng thái yêu cầu",
                    groupBy: "status",
                    categories: [
                        {
                            label: 'Đã duyệt',
                            name: 'approved',
                            color: 'rgba(66, 194, 255, 0.6)'
                        },
                        {
                            label: 'Đang xem xét',
                            name: 'considering',
                            color: 'rgba(117, 121, 231, 0.6)'
                        }
                    ],
                },
                lineChart: {
                    title: "Được tạo theo thời gian",
                    options: [
                        {
                            mode: "status",
                            modeName: "Phân loại theo trạng thái",
                            categories: [
                                {
                                    label: 'Đã duyệt',
                                    name: 'approved',
                                    color: 'rgba(66, 194, 255, 0.6)'
                                },
                                {
                                    label: 'Đang xem xét',
                                    name: 'considering',
                                    color: 'rgba(117, 121, 231, 0.6)'
                                }
                            ]
                        }
                    ]
                }
            }
    }


    const [pageData, setPageData] = useState(chartsGenerate())

    useEffect(() => {
        setPageData(chartsGenerate())
    }, [page])

    const onCategoryChange = (event) => {
        navigate("/workplace/statistic-charts/" + event.currentTarget.attributes.getNamedItem("value").value)
        navigate(0)
    }

    const renderStatisticCharts = () => {
        return (
            <div className='acc-set-body'>
                <WorkplaceListCategory
                    items={props.position === "manager" ? manageLcItems : lcItems}
                    onCategoryChange={onCategoryChange}
                ></WorkplaceListCategory>
                <div className='trays-container'>
                    {
                        page !== "requests" ?
                            <div className='pie-chart-section'>

                                <PieChartTray
                                    page={pageData?.page}
                                    title={pageData?.categoryPieChart?.title}
                                    groupBy={pageData?.categoryPieChart?.groupBy}
                                    categories={pageData?.categoryPieChart?.categories}
                                    filterField={pageData?.categoryPieChart?.filterField}
                                    filters={pageData?.categoryPieChart?.filters}
                                ></PieChartTray>
                                <PieChartTray
                                    page={pageData?.page}
                                    title={pageData?.statusPieChart?.title}
                                    groupBy={pageData?.statusPieChart?.groupBy}
                                    categories={pageData?.statusPieChart?.categories}
                                    filterField={pageData?.statusPieChart?.filterField}
                                    filters={pageData?.statusPieChart?.filters}
                                ></PieChartTray>

                            </div>
                            :
                            <div className='pie-chart-section'>
                                <PieChartTray
                                    page={pageData?.page}
                                    title={pageData?.statusPieChart?.title}
                                    groupBy={pageData?.statusPieChart?.groupBy}
                                    categories={pageData?.statusPieChart?.categories}
                                ></PieChartTray>
                            </div>
                    }

                    <div className='bar-chart-section'>
                        <BarChartTray
                            page={pageData?.page}
                            title={pageData?.lineChart?.title}
                            options={pageData?.lineChart?.options}
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