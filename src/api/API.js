import axios from "axios"
// requete API
export default async function API(id) {
      let APIresponse // variable qui stocke la reponse de l'API  

        try{
          // Essaie requete GET à l'URL 
          console.log(id);
          APIresponse = await axios.get(`http://localhost:3000/user/${id}`);
        }

		catch(error){
      // affichage de l'erreur
			console.error('Erreur', error);
			throw error;
		};
		//console.log(APIresPerf.data.data);
      // renvois de la reponse de l'API
        return (
					APIresponse.data.data
				);
}
