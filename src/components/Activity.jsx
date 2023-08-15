import React from "react";
import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { USER_ACTIVITY } from '../app/data';
import API from "../api/API";

export default function Activity() {

  const { id } = useParams();

  const prepareDataForChart = (userId) => {
    const userActivity = USER_ACTIVITY.find((user) => user.userId === parseInt(userId));
    if (!userActivity) return null;

    const chartData = userActivity.sessions.map((session, index) => ({
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    }));

    return chartData;
  };

  const data = prepareDataForChart(id);

  if (!data) return <div>No data available for this user.</div>;

    const minKilogram = Math.min(...data.map((item) => item.kilogram));
    const maxKilogram = Math.max(...data.map((item) => item.kilogram));

  return (
    <div>
      <h2 style={{ marginLeft: 20, marginTop: 20 }}>Activité quotidienne</h2>
      <BarChart width={835} height={320} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" tick={false} />
        <YAxis yAxisId="right" orientation="right" label={{ position: 'insideRight' }} domain={[minKilogram, maxKilogram]} />
        
        
        <Tooltip />
        <Legend verticalAlign="top" align="right" />
        <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={20} name="Poids (kg)" radius={[10, 10, 0, 0]} />
        <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={20} name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} />
      </BarChart>
    </div>
  );
}