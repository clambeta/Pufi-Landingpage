import React from 'react';
import umbrella from "../assets/umbrella2.jpg";
import bags from "../assets/bags.jpg";
import pufiPlaya from "../assets/playa-puff.jpg";
import puffPlaya from "../assets/puffs-playa.jpg";
import napPuff from "../assets/nap-puff.jpg";
import peoplePuff from "../assets/people-puff.jpg";
import './styles/PanelPhotos.scss'

const PanelPhotos = () => {  

    return (

        <div className='panel'>
            <div className='photos'>
                <div className='boxImage'>
                    <img className='imagenCard' src={umbrella} alt="Umbrellas"></img>
                </div>
                <div className='boxImage'>
                    <img className='imagenCard' src={bags} alt="Bags"></img>
                </div>
                <div className='boxImage'>
                    <img className='imagenCard'  src={pufiPlaya} alt="Playa Puff"></img>  
                </div>                                                                          
            </div>

            <div className='photos'>
                <div className='boxImage'>
                    <img className='imagenCard' src={puffPlaya} alt="Puff Playa"></img>
                </div>
                <div className='boxImage'>
                    <img className='imagenCard' src={napPuff} alt="Nap Puff"></img>
                </div>
                <div className='boxImage'>
                    <img className='imagenCard' src={peoplePuff} alt="People Puff"></img> 
                </div>                                                                          
            </div>                  
        </div>

    )

}


export default PanelPhotos