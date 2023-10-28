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
import ModelRadar from '../app/Models/RadarModel';

export default function Activity() {
	const { id } = useParams();
	const [dataRadar, setDataRadar] = useState([]);

	async function getData() {
		const ApiRes = await API(id);
		if(ApiRes){
			let modelRadar = new ModelRadar();
			const dataRadars = modelRadar.modelData(ApiRes);
			setDataRadar(dataRadars);
		}else{
			return
		}
		
	}
	useEffect(() => {
		getData();
	}, []);

	if (!dataRadar) {
		return <div>Chargement...</div>;
	}
	return (
		<section className="radar">
			{dataRadar ? (
				<div className="radar__content">
					<ResponsiveContainer width="99%" height={263}>
						<RadarChart outerRadius={80} data={dataRadar}>
							<PolarGrid radialLines={false} />
							<PolarAngleAxis dataKey="kind" tick={{fill :'white', fontSize: '.7vw'}} />
							<Radar dataKey="value" fill="#be0e0f" fillOpacity={0.6} />
							<Tooltip />
						</RadarChart>
					</ResponsiveContainer>
				</div>
			) : (
				''
			)}
		</section>
	);
}
