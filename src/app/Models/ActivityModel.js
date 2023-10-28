export default class ActivityModel {
	moodelData(ApiRes) {
		const data = ApiRes.act.sessions.map((activity, index) => ({
			day: index+1 ,
			kilogram: activity.kilogram,
			calories: activity.calories,
		}));
		return data;
	}
}
