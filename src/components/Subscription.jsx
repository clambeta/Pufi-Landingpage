import React from 'react';
import './styles/Subscription.scss'
import FormEmail from './FormEmail';


const Subscription= () => {  

    return (
        <div className='news'>
            <div className='newsletter'>
                <p className='nNewsletter'> NEWSLETTER </p>
            </div>
            <div className='suscribete'>
                <p className='sSuscribete'> SUSCRÍBETE </p>
            </div>
            <div className='novedades'>
                <p className='todas'> Y entérate de todas las novedades </p>
            </div>
            <div className='email'>
                <FormEmail/>
            </div>
        </div>
    )
}

export default Subscription