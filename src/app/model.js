 export default class Model {
	modelData(ApiRes) {
        const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        const data = ApiRes.aver.sessions.map((session, index) => ({
					day: daysOfWeek[index],
					sessionLength: session.sessionLength,
				}));
                return data
    }
}