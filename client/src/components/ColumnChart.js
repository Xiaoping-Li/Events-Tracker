import React, { Component} from 'react';
import Chart from 'react-google-charts';


class ColumnChart extends Component {
  getDateFormate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth (0 - 11)
    const day = date.getDate(); // getDate (1 - 31)
    return `${year}-${month}-${day}`;
  }

  getDateSecondes = (date) => {
    const hours = date.getHours() + 1; // getHours (0 - 23)
    const minutes = date.getMinutes() + 1; // getMinutes (0 - 59)
    const secondes = date.getSeconds() + 1; // getSeconds (0 - 59)
    return (hours * 60 * 60 + minutes * 60 + secondes);
  }

  appendObject = (obj, key, value) => {
    return Object.keys(obj).includes(key) ? obj[key] += value : obj[key] = value;
  }

  getRawData = () => {
    const slotsDiff = {};

    if (this.props.timeSlots) {
      this.props.timeSlots.forEach(slot => {
        const startTime = new Date(slot.timeSlot_start);
        const stopTime = new Date(slot.timeSlot_stop);
        const timeDiff = Math.round((stopTime - startTime) / 1000);
  
        if (startTime.getDate() === stopTime.getDate()) {
          const slotDate = this.getDateFormate(stopTime);
          this.appendObject(slotsDiff, slotDate, timeDiff);  
        } else {
          const wholeDaySec = 24 * 60 * 60;
          const passedSec = this.getDateSecondes(startTime);
          const remainSecStartDay = wholeDaySec - passedSec;
          const remainSecStopDay = timeDiff - remainSecStartDay;
          const startDate = this.getDateFormate(startTime);
          const stopDate = this.getDateFormate(stopTime);
          this.appendObject(slotsDiff, startDate, remainSecStartDay);
          this.appendObject(slotsDiff, stopDate, remainSecStopDay);
        }
      });
  
      return slotsDiff;
    }
    
  }

  getData = () => {
    const data = [["TimeSlots", "Seconds", { role: "style" }],];
    const rawData = this.getRawData();

    if (rawData) {
      const rawDataKeys = Object.keys(rawData).sort();
      rawDataKeys.forEach(key => {
        data.push([key, rawData[key], "gold"]);
      });
    }
    return data;
  }

  render() {
    return (
      <div className="column-chart">
        <Chart
          chartType="ColumnChart"
          width="60%"
          height="400px"
          data={this.getData()} 
        />
      </div>
    );
  }
}

export default ColumnChart;