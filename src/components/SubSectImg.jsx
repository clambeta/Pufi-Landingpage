import React,{useState} from 'react'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import './styles/SubSectImg.scss'


const SubSectImg = (imagen) => {  
    //console.log(imagen.imagen)


    return (
        <div className='subSectImg'>
            <img className='sSIimg' src={imagen.imagen} alt="" />
        </div>
    )
}

export default SubSectImg