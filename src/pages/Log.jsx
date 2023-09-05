import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import Profil from '../assets/profil.png'
import '../styles/log.css'
 

import { USER_MAIN_DATA } from '../app/data';

export default function Log(){
    return (
        <section className="log">
            <div className="log__content">
                <h1 className="log__content__title">
                    Qui est-ce ?
                </h1>
                <div className="log__content__user">
                    {USER_MAIN_DATA.map(user => (
                        <Link className="log__content__user__link" to={`/user/${user.id}`} key={user.id}>
                            <div className="log__content__user__card">
                                <img src={Profil} alt="profil's icon" />
                            </div>
                            <p className="log__content__user__name">
                                {user.userInfos.firstName}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
