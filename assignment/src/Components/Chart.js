import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, Tooltip, Legend, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './chart.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = () => {
  const chartData = {
    labels: ['20', '25', '30', '35', '40', '60', '65'],
    datasets: [
      {
        label: `Employer: K73,500`,
        data: [50, 75, 100, 125, 150, 200, 225],
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: `Employee: K52,500`,
        data: [30, 50, 70, 90, 110, 130, 150],
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: `Total Interest:K244,313`,
        data: [20, 30, 40, 50, 60, 70, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Green
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: ['20', '25', '30', '35', '40', '60', '65'],
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            return '$' + value;
          },
        },
      },
    },
  };

  const data = {
    year: 2024,
    my_goal: 300000,
    collection_per: 59,
    est_income: 300,
    
  };

  return (
    <div className='container'>
      <div className='header'>
        <h4>Retirement Income</h4>
        <h2>Starting Year {data.year}</h2>
        <div className='subheader'>
          <li><h1>${data.my_goal}</h1>My Goal</li>
          <li><h1>{data.collection_per}%</h1>Goal Achieved</li>
          <li><h1>${data.est_income}</h1>Est. Monthly Income</li>
        </div>
        <div className='chart'>
          <h1>Contributions Over Time</h1>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Chart;