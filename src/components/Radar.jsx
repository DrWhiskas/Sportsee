import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import API from '../api/API';

import '../styles/radar.css';

export default function Activity() {
	const { id } = useParams();
	const [dataRadar, setDataRadar] = useState([]);

	async function getData() {
		const ApiRes = await API(id);
		setDataRadar(ApiRes.performance);
		//console.log(dataRadar);
	}
	useEffect(() => {
		getData();
	}, []);

	

	return (
		<section className="radar">
			{dataRadar ? (
				<div className="test">
					<RadarChart
						outerRadius={100}
						width={258}
						height={263}
						data={dataRadar.data}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey="kind" />

						<Radar dataKey="value" fill="#be0e0f" fillOpacity={0.6} />
						<Tooltip />
						<Legend
							className="radar__legend"
							verticalAlign="top"
							align="right"
						/>
					</RadarChart>
				</div>
			) : (
				''
			)}
		</section>
	);
}
