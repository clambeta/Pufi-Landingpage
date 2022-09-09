import React,{useState} from 'react'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { DataSubSections } from './DataSubSections'
import './styles/SecondarySection.scss'
import SubSection1 from './SubSection1'
import SubSection2 from './SubSection2'


const SecondarySection = () => {  


    return (
        <div className='secondaySections'>
            {DataSubSections.map((data, index) => {
            {
                if(index % 2 == 0){
                    return <SubSection1 data ={data} />
                } else{
                    return <SubSection2 data ={data} />
                }
            }
                })
            }
        </div>)

    }
    


export default SecondarySection