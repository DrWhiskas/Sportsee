import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API from '../api/API';
import Card from '../components/Card';
import Calorie from '../assets/calorie.png';
import Glucides from '../assets/glucides.png';
import Lipides from '../assets/lipides.png';
import Prot from '../assets/prot.png';
import '../styles/nutriment.css';

export default function Nutriment() {
	const { id } = useParams();
	const [dataNutrient, setDataNutrients] = useState(0);
	console.log(dataNutrient);

	async function getData() {
		const ApiRes = await API(id);
		setDataNutrients(ApiRes);
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<section className="nutriment">
			{dataNutrient ? (
				<div className="nutriment__content">
					<Card
						img={Calorie}
						data={dataNutrient.main.keyData.calorieCount}
						unite="kcal"
						sub="Calories"
					/>
					<Card
						img={Prot}
						data={dataNutrient.main.keyData.proteinCount}
						unite="g"
						sub="Proteines"
					/>
					<Card
						img={Glucides}
						data={dataNutrient.main.keyData.carbohydrateCount}
						unite="g"
						sub="Glucides"
					/>
					<Card
						img={Lipides}
						data={dataNutrient.main.keyData.lipidCount}
						unite="g"
						sub="Lipides"
					/>{' '}
				</div>
			) : (
				''
			)}
		</section>
	);
}
