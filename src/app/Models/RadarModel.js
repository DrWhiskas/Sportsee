export default class ModelRadar {
	modelData(ApiRes) {
		const typeOfperformance = [
			'Cardio',
			'Energie',
			'Endurance',
			'Force',
			'Vitesse',
			'Intensité',
		];
		const data = ApiRes.performance.data.map((item, index) => ({
			kind: typeOfperformance[index],
			value: item.value,
		}));
		console.log('tableau: ', data);

		function sortData() {
			data.reverse();
		}

		sortData();
		return data;
	}
}
