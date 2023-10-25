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
	ResponsiveContainer,
} from 'recharts';
import API from '../api/API';
import axios from 'axios';
import '../styles/activity.css';

export default function Activity() {
	// Récuperation de l'id de l'URL
	const { id } = useParams();
	const [dataActivity, setDataActivity] = useState(0);

	async function getData() {
		// appel de l'api avec l'id
		const ApiRes = await API(id);
		// met à jour les donnée
		setDataActivity(ApiRes.act);
	}
	useEffect(() => {
		getData();
	}, []);

	if (!dataActivity.sessions)
		return <div>No data available for this user.</div>;

	// kilo max et minimum
	const minKilogram = Math.min(
		...dataActivity.sessions.map((session) => session.kilogram)
	);
	const maxKilogram = Math.max(
		...dataActivity.sessions.map((session) => session.kilogram)
	);

	//décompte des jours
	const xAxisValues = dataActivity.sessions.map((session, index) => index + 1);

	function CustomTooltipContent({ active, payload }) {
		if (active && payload) {
			const weight = payload[0].value;
			const calories = payload[1].value;

			return (
				<div className="custom-tooltip__activity">
					<p>{weight}kg</p>
					<p>{calories}kcal</p>
				</div>
			);
		}

		return null;
	}

	return (
		<div className="activity">
			<p className="activity__title">Activité quotidienne</p>
			<ResponsiveContainer width="99%" height={227}>
				<BarChart
					className="activity__chart"
					data={dataActivity.sessions}
					style={{ marginLeft: '-65px' }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey=""
						tickLine={false}
						tickFormatter={(value) => xAxisValues[value]} //mettre les valeur de 1 à X
					/>
					<YAxis yAxisId="left" tick={false} />
					<YAxis
						yAxisId="right"
						orientation="right"
						label={{ position: 'insideRight' }}
						domain={[minKilogram, maxKilogram]}
					/>

					<Tooltip content={CustomTooltipContent} />

					<Legend verticalAlign="top" align="right" iconType="circle" />
					<Bar
						yAxisId="left"
						dataKey="kilogram"
						fill="#282D30"
						barSize={10}
						name="Poids (kg)"
						radius={[10, 10, 0, 0]}
					/>
					<Bar
						yAxisId="right"
						dataKey="calories"
						fill="#E60000"
						barSize={10}
						name="Calories brûlées (kCal)"
						radius={[10, 10, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
