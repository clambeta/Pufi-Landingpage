import React,{useState} from 'react'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import './styles/SubSection.scss'
import SubSectImg from './SubSectImg'
import SubSectInfo from './SubSectInfo'


const SubSection2 = ({data}) => {  
    const imgSubSection = data.img
    const info = data.info
    console.log (data.info)

    return (

        <div className='subSection'>
            <SubSectInfo info = {info} />
            <SubSectImg imagen = {imgSubSection} /> 
        </div>

    )
}

export default SubSection2