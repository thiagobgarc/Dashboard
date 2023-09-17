'use client'
import { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const BarChart = () => {
    const [chartData, setChartData] = useState<any>({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState<any>({})

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales ',
                    data: [18127, 22201, 19421, 17983, 24608, 12127, 23201],
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    borderColor: 'rgba(53, 162, 235, 0.5)',
                }
            ]
        })
        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue',
                },
            },
        })
    }, [])
    return (
        <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
            <Bar data={chartData} options={chartOptions}/>
        </div>
    )
}