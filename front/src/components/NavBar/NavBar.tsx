import React from 'react';
import Style from './index.module.scss'
import Logo from '../../../public/logo.svg'
import Image from 'next/image';

const NavBar = () => {
    return (<nav className={Style.NavBar}>
        <a href="https://equipacare.com.br/">
            <Image alt='logo' className={Style.NavBar__logo} src={Logo} ></Image>
        </a>
    </nav>)

};

export default NavBar