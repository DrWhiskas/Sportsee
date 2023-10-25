import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import API from '../api/API';
import '../styles/score.css'

export default function Activity() {
	const { id } = useParams();
	const [dataScore, setDataScore] = useState([]);

	async function getData() {
		const ApiRes = await API(id);
		setDataScore(ApiRes.main);
	}
	useEffect(() => {
		getData();
	}, []);

	function DataGauge() {
		if (dataScore.todayScore) {
			const gaugeValue = dataScore.todayScore * 100;
			const emptyValue = 100 - gaugeValue;
			const data = [
				{ name: 'Gauge', value: gaugeValue },
				{ name: 'Empty', value: emptyValue },
			];
			return data;
		}else{
			const gaugeValue = dataScore.score * 100;
			const emptyValue = 100 - gaugeValue;
			const data = [
				{ name: 'Gauge', value: gaugeValue },
				{ name: 'Empty', value: emptyValue },
			];
			return data;
		}
	}
		

	const data = DataGauge();

	if (!data) return <div>No data available for this user.</div>;

	const COLORS = ['red', '#efefef'];

	return (
		<div className="score">
			<div className="score__content">
				<ResponsiveContainer width="80%" height={263}>
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
							<tspan
								x="50%"
								dy="-25"
								fontWeight="bold"
								fontSize={26}
								fill="#282D30"
							>
								{' '}
								{data[0].value}%{' '}
							</tspan>
							<tspan x="50%" dy="25" fontSize={16} fill="#74798C">
								{' '}
								de votre
							</tspan>
							<tspan x="50%" dy="25" fontSize={16} fill="#74798C">
								{''}
								objectif
								{''}
							</tspan>
						</text>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
