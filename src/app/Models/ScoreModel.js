export default class ModelScore {
	modelData(ApiRes) {
		const gaugeValue =
			ApiRes.main.todayScore !== undefined
				? ApiRes.main.todayScore * 100
				: ApiRes.main.score * 100;
		const emptyValue = 100 - gaugeValue;
		const data = [
			{ name: 'Gauge', value: gaugeValue },
			{ name: 'Empty', value: emptyValue },
		];
		return data;
	}
}
