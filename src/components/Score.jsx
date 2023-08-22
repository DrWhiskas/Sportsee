import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { USER_MAIN_DATA } from "../app/data";
import Error404 from "../pages/Error404";
import axios from "axios";
import API from "../api/API"

export default function Activity() {
  const { id } = useParams();

  const [dataScore, setDataScore] = useState(0)

  async function getData(){
        const ApiRes = await API(id) 
        setDataScore(ApiRes)
    }
     useEffect(() =>{
        getData()
    },[])

    

  const prepareDataForGauge = (userId) => {
    const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
    if (!user) return null;

    const gaugeValue = user.todayScore * 100;
    const emptyValue = 100 - gaugeValue;

    const data = [
      { name: "Gauge", value: gaugeValue },
      { name: "Empty", value: emptyValue },
    ];

    return data;
  };
  

  const data = prepareDataForGauge(id);

  console.log(dataScore,'oui');


  if (!data) return <div>No data available for this user.</div>;

  const COLORS = ["red", "#efefef"];

  return (
    <div className="score">
      <ResponsiveContainer width={258}  height={263}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            innerRadius="70%"
            outerRadius="80%"
            fill="#8884d8"
            paddingAngle={0}
            isAnimationActive={false}
             cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <text
            className="score__text"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20px"
            fill="black"
          >
            <tspan x="50%" dy="-10"> {data[0].value}% </tspan>
            <tspan x="50%" dy="20"> de votre objectif </tspan>
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
