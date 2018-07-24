import React, { Component} from 'react';
import Chart from 'react-google-charts';

class ColumnChart extends Component {
  render() {
    return (
      <div className="column-chart">
        <Chart
          chartType="ColumnChart"
          data={data} 
        />
      </div>
    );
  }
}

export default ColumnChart;