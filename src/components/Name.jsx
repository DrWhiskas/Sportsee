import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from '../app/data';
import Error404 from "../pages/Error404";
import axios from "axios";

import API, { APIMock } from "../api/API"

export default  function UserProfile() {
    
    const { id } = useParams();
    const [dataProfile, setDataProfile] = useState(0) 
    
    async function getData(){
        const ApiRes = await API(id) 
        setDataProfile(ApiRes)
    }
    useEffect(() =>{
        getData()
    },[])
    
   // const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

    let firstName
   // let APIuserName
    let user = APIMock(id)
    const ApiMockMode = true
    console.log(user);

    /*
    if(userData){
         firstName = userData.userInfos.firstName
    }
    */
    if(ApiMockMode == true){
        firstName = user.firstName
        console.log("API MOCK");
    }
    else{
         firstName = dataProfile.userInfos.firstName
         console.log('API');
    }

   /*if(dataProfile){
         firstName = dataProfile.userInfos.firstName
    }
   */

    return (
        <div className="name">
            Bonjour<span className="name__user">  {firstName}</span>
            <p className="name__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}