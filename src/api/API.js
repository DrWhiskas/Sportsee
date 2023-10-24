import axios from 'axios';
import {
	USER_MAIN_DATA,
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_PERFORMANCE,
} from '../app/data';

// requete API
export default async function API(id) {

	const APIMock = false;
	if (APIMock === false) {
		let APIresponse; // variable qui stocke la reponse de l'API
		let ApiActivityRes;
		let ApiAvergeRes;
		let ApiPerfRes;

		try {
			// Essaie requete GET à l'URL
			APIresponse = await axios.get(`http://localhost:3000/user/${id}`);
			ApiActivityRes = await axios.get(
				`http://localhost:3000/user/${id}/activity `
			);
			ApiAvergeRes = await axios.get(
				`http://localhost:3000/user/${id}/average-sessions`
			);
			ApiPerfRes = await axios.get(
				`http://localhost:3000/user/${id}/performance`
			);
		} catch (error) {
			// affichage de l'erreur
			console.error('Erreur', error);
			throw error;
		}
		//console.log(APIresPerf.data.data);
		// renvois de la ApiPerfRes.data.data de l'API
		return {
			main: APIresponse.data.data,
			act: ApiActivityRes.data.data,
			aver: ApiAvergeRes.data.data,
			performance: ApiPerfRes.data.data,
		};
	} else {
		const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));
		const userActivity = USER_ACTIVITY.find(
			(activity) => activity.userId === parseInt(id)
		);
		const userAverageSessions = USER_AVERAGE_SESSIONS.find(
			(sessions) => sessions.userId === parseInt(id)
		);
		const userPerformance = USER_PERFORMANCE.find(
			(performance) => performance.userId === parseInt(id)
		);

		return {
			main: userData,
			act: userActivity,
			aver: userAverageSessions,
			performance: userPerformance,
		};
	}
}
