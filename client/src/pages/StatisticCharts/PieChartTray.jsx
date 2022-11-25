import React, { useEffect, useState } from 'react'
import './StatisticCharts.css'
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';

const PieChartTray = props => {
    const [filters, setFilters] = useState(props.filters?.map(item => item.value))
    const [categoryData, setCategoryData] = useState([])

    ChartJS.register(ArcElement, Tooltip, Legend);

    const dataByCategory = {
        labels: categoryData.map(pc => pc.label),
        datasets: [
            {
                data: categoryData.map(pc => pc.data),
                backgroundColor: categoryData.map(pc => pc.color)
            },
        ],
    };

    useEffect(() => {
        getDataSetByCategory()
    }, [filters])

    const getDataSetByCategory = () => {
        if (!props.groupBy)
            return
        if (!filters || filters.length === 0)
            return
        else {
            axios.post(`http://localhost:8080/accounts/get-counts-chart/${props.groupBy}`, {
                filterField: props.filterField,
                filters: filters
            })
                .then(res => {
                    const data = props.categories.map(pc => {
                        const pcResult = res.data.find(rd => rd[props.groupBy] === pc.name)
                        if (pcResult)
                            return {
                                label: pc.label,
                                data: pcResult.total,
                                color: pc.color,
                            }
                        else
                            return {
                                label: pc.label,
                                data: 0,
                                color: pc.color,
                            }
                    })
                    setCategoryData(data)
                })
        }
    }

    const filterOnchange = (e) => {

        if (e.target.checked) {
            setFilters(filters.concat(e.target.value))
        }
        else {
            const remain = filters.filter(item => item != e.target.value)
            if (remain.length > 0)
                setFilters(remain)
        }

        getDataSetByCategory()
    }

    const setChecked = (value) => {
        if (!filters)
            return false
        if (filters.find(item => item === value))
            return true
        return false
    }

    return (
        <div className='chart-container'>
            <div className='title'>{props.title}</div>
            {
                props.filters ?
                    <div className='filter-options'>
                        {
                            props.filters.map((item, index) => {
                                return (
                                    <div key={index} className='option'>
                                        {
                                            <input type="checkbox" value={item.value} onChange={(e) => filterOnchange(e)} checked={setChecked(item.value)}></input>
                                        }
                                        <label>{item.label}</label>
                                    </div>
                                )
                            })

                        }
                    </div>
                    : ''
            }

            <div className='chart-content'>
                <Chart type='pie' className='category-pie' data={dataByCategory} />
            </div>
        </div>
    )
}

export default PieChartTray;