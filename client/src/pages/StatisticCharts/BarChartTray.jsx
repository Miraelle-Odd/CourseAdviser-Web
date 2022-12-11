import React, { useEffect, useState } from 'react'
import './StatisticCharts.css'
import axios from 'axios'
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

const BarChartTray = props => {
    const [year, setYear] = useState(new Date().getFullYear())
    const [option, setOption] = useState(props.options[0] ? props.options[0] : {})
    const [categoryData, setCategoryData] = useState([])

    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip
    );

    const dataSetsGenerate = (datas) => {
        const dataSets = []
        dataSets.push({
            type: 'line',
            label: 'Tổng',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            data: datas.totals,
        })
        option.categories.forEach(item => {
            dataSets.push({
                type: 'bar',
                label: item.label,
                backgroundColor: item.color,
                data: datas[item.name],
                borderColor: 'white',
                borderWidth: 2,
            });
        })
        return dataSets
    }

    const dataByCategory = {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: categoryData
    };

    const yearGenerate = () => {
        const years = []
        let temp = new Date().getFullYear()
        for (let i = temp - 5; i <= temp + 5; i++)
            years.push(i)
        return years
    }

    useEffect(() => {
        getDataSet()
    }, [option])

    useEffect(() => {
        getDataSet()
    }, [year])

    const getDataSet = async () => {
        const datas = {}
        await axios.get(`http://localhost:8080/${props.page}/get-counts-chart-by-time/${year}`).then(res => {
            const fullData = []
            for (let i = 0; i < 12; i++) {
                const totalByMonth = res.data.find(item => item.month === i + 1)
                if (totalByMonth) {
                    fullData.push(totalByMonth.total)
                }
                else {
                    fullData.push(0)
                }
            }
            datas.totals = fullData
            option?.categories?.forEach(async item => {
                await axios.get(`http://localhost:8080/${props.page}/get-counts-chart-by-time/${year}/${option.mode}/${item.name}`)
                    .then(ress => {
                        const fullData = []
                        for (let i = 0; i < 12; i++) {
                            const totalByMonth = ress.data.find(item => item.month === i + 1)
                            if (totalByMonth) {
                                fullData.push(totalByMonth.total)
                            }
                            else {
                                fullData.push(0)
                            }
                        }
                        datas[item.name] = fullData
                    })
                setCategoryData(dataSetsGenerate(datas))
            })
        })
    }

    const filterOnchange = (e) => {
        setOption(props.options[e.target.value])
    }

    const setChecked = (value) => {
        return option.mode === props.options[value].mode
    }

    return (
        <div className='chart-container'>
            <div className='title'>
                {props.title + " năm"}
                <select className='year-select' defaultValue={year} onChange={(e) => {
                    setYear(e.target.value)
                }}>
                    {
                        yearGenerate().map((item, index) => {
                            return (
                                <option key={index}>{item}</option>
                            )
                        })
                    }
                </select>
            </div>
            {
                props.options ?
                    <div className='filter-options' onChange={(e) => filterOnchange(e)}>
                        {
                            props.options.map((item, index) => {
                                return (
                                    <div key={index} className='option'>
                                        {
                                            <input type="radio" name="mode" value={index} defaultChecked={setChecked(index)}></input>
                                        }
                                        <label>{item.modeName}</label>
                                    </div>
                                )
                            })

                        }
                    </div>
                    : ''
            }

            <div className='chart-content'>
                <p>Nhấn vào các lựa chọn bên dưới để lọc thành phần</p>
                <Chart type='bar' className='bar' data={dataByCategory} />
            </div>
        </div>
    )
}

export default BarChartTray;