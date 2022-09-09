import { Link } from 'react-router-dom'
import React from 'react'
import './styles/Footer.scss'
import { Facebook, Twitter, Instagram} from '@material-ui/icons'
import SecurityIcon from '@mui/icons-material/Security';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import logoBlack from '../assets/logos/LogoPufiBlack.jpg';


const Footer= () => {  

    return (
        <>
            <div className='footer'>    
            <div className='horizontalLine'></div>       
                <footer className='footer-container'>
                    <div className='cardFooter'>
                        <div className='firstCardFooter'>
                            <div className='logo-black'>
                                <img src={logoBlack} alt="Logo Black"></img>
                            </div>
                            <div className='card-ul'>
                                <ul className='products'>
                                    <li className='listProducts'>
                                        <Link to='/'>PUFI PUFF</Link>
                                    </li>
                                    <li className='listProducts'>
                                        <Link to='/'>PUFI RAIN</Link>
                                    </li>
                                    <li className='listProducts'>
                                        <Link to='/'>PUFI CART</Link>
                                    </li>
                                    <li className='listProducts'>
                                        <Link to='/'>PUFI NAP</Link>
                                    </li>
                                </ul>
                            </div>
                            </div>
                    </div> 

                    <div className='verticalLine'></div>

                    <div className='cardFooter'>
                        <div className='secondCardFooter'>
                            <div className='card-ul'>
                                <ul className='contacto'>
                                    <li>
                                        <Link to='/'>CONTACTO</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>AYUDA</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>CÓMO COMPRAR</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>TÉRMINOS Y CONDICIONES</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='verticalLine'></div>

                    <div className='cardFooter'>
                        <div className='thirdCardFooter'>
                            <p>COMPRA 100% SEGURA</p>
                            <p> <QrCodeScannerOutlinedIcon className='card-icon'/><SecurityIcon className='card-icon'/> COMPRA CON LA GARANTÍA PUFI</p>
                        </div>
                    </div>

                    <div className='verticalLine'></div>

                    <div className='cardFooter'>
                        <div className='fourthCardFooter'>                            
                                <div className="media">
                                    <p> SÍGUENOS EN  </p>
                                    <Link className="icon" to='/'>
                                        <Facebook/>
                                    </Link>
                                    <Link className="icon" to='/'>
                                        <Twitter/>
                                    </Link>
                                    <Link className="icon" to='/'>
                                        <Instagram/>
                                    </Link>               
                                </div>                           
                        </div>
                    </div>
            
                </footer>
                <div className='copywrite'>
                    <p>PUFI Copywrite 2022 - Todos los derechos reservados</p>
                </div>
            </div> 
        </>

    )
}

export default Footer