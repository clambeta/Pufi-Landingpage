import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Dropdown.scss'
import { Image } from 'react';
import {CNavbar, CNavbarNav, CContainer, CNavbarBrand} from '@coreui/react';
import {CNavbarToggler, CCollapse, CDropdownToggle, CDropdownMenu} from '@coreui/react';
import {CDropdownItem, CDropdownDivider, CDropdown} from '@coreui/react';


const Dropdown = () => {
    return (
        <CNavbar expand="lg"  >
        <CContainer fluid>
            <CNavbarToggler aria-label="Toggle navigation" aria-expanded={true} />
            <CCollapse className="navbar-collapse" visible={true}>
            <CNavbarNav>
                <CDropdown dark component="li" variant="nav-item">
                <CDropdownToggle className="toggle">MI CUENTA</CDropdownToggle>
                <CDropdownMenu className='dropDownMenu' >
                    <CDropdownItem className='dropDownNav' href="#">Mis ordenes</CDropdownItem>
                    <CDropdownItem className='dropDownNav' href="#">Mi perfil</CDropdownItem>
                    <CDropdownDivider className='dropDownNav'/>
                    <CDropdownItem className='dropDownNav' href="#">Cerrar sesión</CDropdownItem>
                </CDropdownMenu>
                </CDropdown>
            </CNavbarNav>
            </CCollapse>
        </CContainer>
        </CNavbar>
    )
}

export default Dropdown