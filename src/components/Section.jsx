import React,{useState} from 'react'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { Data } from './Data'
import './styles/Section.scss'


const Section = ({slides}) => {

    const [first,setFirst] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setFirst(first === length - 1 ? 0 : first + 1)
    }

    const prevSlide = () => {
        setFirst(first === 0 ? length - 1 : first - 1)
    }

    return (
        <section>
            <div className="slide">
                <ArrowBack className='back' onClick={prevSlide}/>
                <ArrowForward className='forward' onClick={nextSlide}/>
                     {Data.map((item,index) => {
                    return (
                        <div key={index} className={item.className}>
                            <div className={index === first ? 'slides active' : 'slides'}>
                            {index === first && (
                                <div className='slideCard'>
                                    <img src={item.image} alt="" />
                                    <p className='product'>{item.text}</p>
                                    <p className='status'>{item.status}</p>
                                    <div className="buttons">
                                        <button>SHOP</button>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}



export default Section 