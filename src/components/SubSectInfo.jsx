import React,{useState} from 'react'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import './styles/SubSectInfo.scss'


const SubSectInfo = ({info}) => {  

    console.log(info)

    return (
        <div className='infoCard'>
            <div className='infoSubCard'>
                <div className='infoImgBox'>
                    <img className='ingfoImg' src={info.image} alt="" />
                </div>
                <p className='infoProduct'>{info.text}</p>
                <div className='horizLine'></div>
                <p className='infoStatus'>{info.status}</p>
                <div className="infoLink">
                    <a>&gt; VER MAS</a>
                </div>
            </div>
        </div>
    )
}

export default SubSectInfo