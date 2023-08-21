import axios from "axios"
// requete API
export default async function API() {
        let APIresponse // variable qui stocke la reponse de l'API  

        try{
          // Essaie requete GET à l'URL 
          APIresponse = await axios.get('http://localhost:3000/user/18');
        }

		catch(error){
      // affichage de l'erreur
			console.error('Erreur', error);
			throw error;
		};
		console.log(APIresponse.data.data);
      // renvois de la reponse de l'API
        return APIresponse.data.data;
}
