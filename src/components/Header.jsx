import React  from 'react';
import logo from "../assets/logos/Logo_Pufi.JPG";
import { Link } from 'react-router-dom';
import './styles/Header.scss'
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import Dropdown from './Dropdown';

const Header = () => {  


    return (
        <div className='header'>
            <nav className='nav-container'>

                <div className='logo-pufi'>
                    <img src={logo} alt="Logo Pufi"></img>
                </div>
                
                <div className='menu'>                
                    <ul className= 'navbar'>
                        <div>
                            <li className= 'cardHeader'>  
                                <FilterDramaOutlinedIcon className='card-icon'/>
                                <Link to='/PufiPuff'>PUFI PUFF</Link>                  
                            </li>
                        </div>
                        <div className='verticalLine'></div>
                        <div>
                            <li className= 'cardHeader'> 
                                <BeachAccessIcon className='card-icon'/>
                                <Link to='/PufiRain'>PUFI RAIN</Link>                  
                            </li>
                        </div>
                        <div className='verticalLine'></div>
                        <div>
                            <li className= 'cardHeader'> 
                                <WorkOutlineOutlinedIcon className='card-icon'/>
                                <Link to='/PufiCart'>PUFI CART</Link>                  
                            </li>
                        </div>
                        <div className='verticalLine'></div>                        
                        <div>
                            <li className= 'cardHeader'> 
                                <BackpackOutlinedIcon className='card-icon'/>
                                <Link to='/PufiNap'>PUFI NAP</Link>                  
                            </li>
                        </div>
                    </ul>
               </div>

               
               <div className='accountShopBox'>
                    <ul className='account-shop'>
                        <li>
                            <Dropdown />                            
                        </li>
                        <div className='verticalLineA'></div>
                        <div className='shop'>
                            <li>
                                <Link  to='/MiCompra'>MI COMPRA</Link> 
                            </li>
                        </div>
                    </ul>                    
               </div>
            </nav>
        </div>
    )
}

export default Header