import axios from "axios"

export default async function API() {
        let APIresponse  
        try{

          APIresponse = await axios.get('http://localhost:3000/user/18');
		  
			
        }
		catch(error){
			console.error('Erreur', error);
			throw error;
		};
		console.log(APIresponse.data.data);
        return APIresponse.data.data;
}