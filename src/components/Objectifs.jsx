import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Label,
	ResponsiveContainer,
} from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../app/data';
import axios from 'axios';
import API from '../api/API';
import Model from '../app/model.js';
import '../styles/objectifs.css';

export default function Objectifs() {
	const { id } = useParams();
	const [dataObjectif, setDataObjectif] = useState([]);

	async function getData() {
		const ApiRes = await API(id);
		if(ApiRes){
			let model = new Model();
			const data = model.modelData(ApiRes);
			setDataObjectif(data);
		}else{
			return 0
		}
		
	}

	useEffect(() => {
		getData();
	}, []);



	// valeur minimal et maximal
	const minSessionLength = Math.min(
		...dataObjectif.map((item) => item.sessionLength)
	);
	const maxSessionLength = Math.max(
		...dataObjectif.map((item) => item.sessionLength)
	);
	// valeur des bulles de textes

	function CustomTooltip({active, payload}){
		if (active && payload && payload.length > 0) {
			const sessionLength = payload[0].value;
			return (
				<div className="custom-tooltip__objectif">{sessionLength} min</div>
			);
		}
		return null
	}

	function renderCustomLegend(){
		return (
			<div className="custom-legend__objectif">
				<p className="custom-legend__objectif__text">
					Durée moyenne des sessions
				</p>
			</div>
		);
	}
	if (!dataObjectif) {
		return <div>Chargement...</div>;
	}
	return (
		<div className="objectifs">
			<div className="objectifs__content">
				<ResponsiveContainer width="99%" height={263}>
					<LineChart
						data={dataObjectif}
						style={{
							background: 'linear-gradient(90deg, #FF0000 70%, #e60000 70%)',
							borderRadius: '6px',
						}}
						margin={{
							top: 0,
							right: 0,
							left: -55,
							bottom: 0,
						}}
					>
						<XAxis
							dataKey="day"
							style={{ stroke: 'transparent' }}
							tick={{ fill: '#ff8484' }}
							fontWeight="bold"
						></XAxis>
						<YAxis
							yAxisId="left"
							tick={false}
							style={{ stroke: 'transparent' }}
						/>
						<Tooltip content={CustomTooltip} />
						<Legend
							className="activity-chart-legend"
							verticalAlign="top"
							align="left"
							content={renderCustomLegend}
						/>
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="sessionLength"
							stroke="#FFFFFF"
							name="Durée moyenne des sessions"
							iconType="none"
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
