import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart, LineController, LineElement, PointElement, LinearScale, TimeScale, Title, Tooltip} from 'chart.js';
import {_adapters} from 'chart.js';
import moment from 'moment';
import 'chartjs-adapter-moment';

// Register the adapter with Chart.js
_adapters._date.override(moment);

Chart.register(LineController, LineElement, PointElement, LinearScale, TimeScale, Title, Tooltip);

function MultiAxisLineChart(props) {

    const data = {
        labels: props.dates, // Array of dates for the X-axis
        datasets: [
            {
                label: 'Open Prices',
                data: props.openPrices, // Array of open prices
                borderColor: 'blue',
                yAxisID: 'y-axis-1',
                fill: false
            },
            {
                label: 'Close Prices',
                data: props.closePrices, // Array of close prices
                borderColor: 'red',
                yAxisID: 'y-axis-2',
                fill: false
            }
        ]
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                position: 'bottom',
                unit: 'day',
                distribution: 'linear',
                time: {
                    parser: 'YYYY-MM-DD',
                    unit: 'day',
                    displayFormats: {
                        day: 'MMM D'
                    }
                },
                ticks: {
                    source: 'labels'
                }
            },
            'y-axis-1': {
                type: 'linear',
                position: 'left',
                ticks: {
                    beginAtZero: true
                }
            },
            'y-axis-2': {
                type: 'linear',
                position: 'right',
                ticks: {
                    beginAtZero: true
                },
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    };


    return <Line data={data} options={options}/>;
}

export default MultiAxisLineChart;
