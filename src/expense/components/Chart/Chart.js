import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const dataPointMaxValue = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => 
        <ChartBar 
          value={dataPoint.value}
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={dataPointMaxValue} />)}
    </div>
  )
}

export default Chart
