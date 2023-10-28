import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import API from '../api/API';
import '../styles/score.css';
import ModelScore from '../app/Models/ScoreModel';

export default function Activity() {
	const { id } = useParams();
	const [dataScore, setDataScore] = useState(null);

	async function getData() {
		const ApiRes = await API(id);
		if(ApiRes){
			let modelScore = new ModelScore();
			const scoreData = modelScore.modelData(ApiRes);
			setDataScore(scoreData);
		}else{
			return 0
		}
		
	}
	useEffect(() => {
		getData();
	}, []);

	const COLORS = ['red', '#efefef'];
	if (!dataScore) {
		return <div>Chargement...</div>;
	}

	return (
		<div className="score">
			<div className="score__content">
				<h2 className="score__content__title">Score</h2>
				<ResponsiveContainer width="80%" height={263}>
					<PieChart>
						<Pie
							data={dataScore}
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
							{dataScore.map((entry, index) => (
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
								{dataScore[0].value}%{' '}
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
