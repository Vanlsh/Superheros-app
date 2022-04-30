import React from 'react';
import {useSelector} from "react-redux";
import {URL_SERVER} from "../../config";
import './details.css'

const Details = () => {
    const {superhero} = useSelector(state => state.superheros)
    const getAvatar = (avatarName) => {
        let avatar = ''
        if(!avatarName){
            return avatar = './img/defaultAvatar.png'
        } else {
            return avatar = URL_SERVER + avatarName

        }
    }
    return (
        <div className="details-container">
            <img className="img-box" src={getAvatar(superhero.avatar)} alt="superhero"/>
            <div className='details-box'>
                <div className="details-label">Nickname:</div>
                <div className="details-content">{superhero.nickname}</div>
            </div>
            {superhero.real_name &&
                <div className='details-box'>
                    <div className="details-label">Real name:</div>
                    <div className="details-content">{superhero.real_name}</div>
                </div>
            }
            {superhero.real_name &&
                <div className='details-box'>
                    <div className="details-label">Origin Description:</div>
                    <div className="details-content">{superhero.origin_description}</div>
                </div>
            }
            {superhero.real_name &&
                <div className='details-box'>
                    <div className="details-label">Superpowers:</div>
                    <div className="details-content">{superhero.superpowers}</div>
                </div>
            }
            {superhero.real_name &&
                <div className='details-box'>
                    <div className="details-label">Catch phrase:</div>
                    <div className="details-content">{superhero.catch_phrase}</div>
                </div>
            }


        </div>
    );
};

export default Details;