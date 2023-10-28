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
import ActivityModel from '../app/Models/ActivityModel';

export default function Activity() {
	// Récuperation de l'id de l'URL
	const { id } = useParams();
	const [dataActivity, setDataActivity] = useState(0);

	async function getData() {
		// appel de l'api avec l'id
		const ApiRes = await API(id);
		if(ApiRes){
			let modelAct = new ActivityModel();
			const dataAct = modelAct.moodelData(ApiRes);
			// met à jour les donnée
			setDataActivity(dataAct);
		}else{
			return 0
		}
		
	}
	useEffect(() => {
		getData();
	}, []);

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
	if (!dataActivity) {
		return <div>Chargement...</div>;
	}
	return (
		<div className="activity">
			<p className="activity__title">Activité quotidienne</p>
			<ResponsiveContainer width="99%" height={227}>
				<BarChart
					className="activity__chart"
					data={dataActivity}
					style={{ marginLeft: '-65px' }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" tickLine={false} />
					<YAxis yAxisId="left" tick={false} />
					<YAxis
						yAxisId="right"
						orientation="right"
						label={{ position: 'insideRight' }}
					/>
					<Tooltip content={CustomTooltipContent} />
					<Legend verticalAlign="top" align="right" iconType="circle" />
					<Bar
						yAxisId="right"
						dataKey="kilogram"
						fill="#282D30"
						barSize={10}
						name="Poids (kg)"
						radius={[10, 10, 0, 0]}
					/>
					<Bar
						yAxisId="left"
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
