import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import { USER_ACTIVITY } from '../app/data';
import API from '../api/API';
import axios from 'axios';


export default function Activity() {
	// Récuperation de l'id de l'URL
	const { id } = useParams();
  const [dataActivity, setDataActivity] = useState(0);

  async function getData(){
    const ApiRes = await API(id)
    setDataActivity(ApiRes.act)
  }
  	useEffect(() => {
			getData();
		}, []);

	if (!dataActivity.sessions) return <div>No data available for this user.</div>;

	const minKilogram = Math.min(...dataActivity.sessions.map((session) => session.kilogram));
	const maxKilogram = Math.max(...dataActivity.sessions.map((session) => session.kilogram));

	return (
		<div>
			<h2 style={{ marginLeft: 20, marginTop: 20 }}>Activité quotidienne</h2>
			<BarChart width={835} height={320} data={dataActivity.sessions}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="day" />
				<YAxis yAxisId="left" tick={false} />
				<YAxis
					yAxisId="right"
					orientation="right"
					label={{ position: 'insideRight' }}
					domain={[minKilogram, maxKilogram]}
				/>

				<Tooltip />
				<Legend verticalAlign="top" align="right" />
				<Bar
					yAxisId="left"
					dataKey="kilogram"
					fill="#282D30"
					barSize={20}
					name="Poids (kg)"
					radius={[10, 10, 0, 0]}
				/>
				<Bar
					yAxisId="right"
					dataKey="calories"
					fill="#E60000"
					barSize={20}
					name="Calories brûlées (kCal)"
					radius={[10, 10, 0, 0]}
				/>
			</BarChart>
		</div>
	);
}
