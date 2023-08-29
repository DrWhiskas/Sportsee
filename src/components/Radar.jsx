import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend } from 'recharts';
import { USER_PERFORMANCE } from '../app/data';
import Error404 from "../pages/Error404";
import axios from "axios";
import API from "../api/API"

import '../styles/radar.css'


export default function Activity() {
  const { id } = useParams();
  const [dataRadar , setDataRadar] = useState([])

      async function getData(){
        const ApiRes = await API(id) 
        setDataRadar(ApiRes.performance)
    }
    useEffect(() =>{
        getData()
    },[])


  /*const prepareDataForChart = (userId) => {
    const userPerformance = USER_PERFORMANCE.find((user) => user.userId === parseInt(userId));
    if (!userPerformance) return null;

    const chartData = userPerformance.data.map((item) => ({
      kind: userPerformance.kind[item.kind],
      value: item.value,
    }));

    return chartData;
  };*/

  const ApiMockMode = true

  function getDataChart(userId){
  }



  const data = getDataChart(id);


  if (!data) return <div>No data available for this user.</div>;


  const minRadarValue = Math.min(...data.map((item) => item.value));
  const maxRadarValue = Math.max(...data.map((item) => item.value));

  return (
     <section className="radar">
      {dataRadar ? <div className="test">
      <RadarChart outerRadius={100} width={258} height={263} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        
        <Radar dataKey="value" fill="#be0e0f" fillOpacity={0.6} />
        <Tooltip />
        <Legend className="radar__legend" verticalAlign="top" align="right" />
      </RadarChart>
      </div>:''}
    </section>
  );
}