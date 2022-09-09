import React from 'react';
import './styles/FormEmail.scss'
import { useForm, ValidationError } from '@formspree/react';

const FormEmail= () => {  
    const [state, handleSubmit] = useForm("https://formspree.io/f/xvoyzdko");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className= 'inputMailBox'>
                    <input
                        className='inputMail'
                        id="email"
                        type="email" 
                        name="email"
                        placeholder='Ingresa tu email'
                    />
                
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <button className='buttonMail' type="submit" disabled={state.submitting}>
                    -&gt;
                </button>
            </div>
        </form>
    )
}

export default FormEmail