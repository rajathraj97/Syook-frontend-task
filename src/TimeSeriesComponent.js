// TimeSeriesComponent.js
import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios'

const TimeSeriesComponent = () => {
  const [timeSeriesData, setTimeSeriesData] = useState([]);
  let a = 0

  if(a==0){
    axios.get("http://localhost:3005/data",{abc:"abc"})
    .then((res)=>{
      console.log(res)
      res.data.map((ele,i)=>{
        <div key = {i}>
           {setTimeSeriesData([...timeSeriesData,...ele.data])}
        </div>
       
      })
  })
  a = 1
  }

 setInterval(()=>{
  console.log("call made")
  axios.get("http://localhost:3005/data",{abc:"abc"})
  .then((res)=>{
    console.log(res)
    res.data.map((ele,i)=>{
      <div key = {i}>
         {setTimeSeriesData([...timeSeriesData,...ele.data])}
      </div>
     
    })
    
  })
  .catch((err)=>{
    console.log(err)
  })
 },60000)

console.log(timeSeriesData,'timeseries data')
  return (
    <div>
      <h1>Time Series Data</h1>
      <ul>
        {timeSeriesData.map((entry,i) => (
          <li key={i}>
            {`${entry.name} from ${entry.origin} to ${entry.destination} at ${new Date(entry.timestamp)}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSeriesComponent;