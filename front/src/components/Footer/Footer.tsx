import React from 'react';
import Style from './index.module.scss';
import Logo from '/public/logo.svg';
import Image from 'next/image';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { open_Sans } from '@/fonts/_fonts';

type IconType = OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
  muiName: string;
};

interface PropsSocialMedia {
  Media: IconType;
}

const SocialMediaIcon = ({ Media }: PropsSocialMedia) => {
  return (
    <div className={Style.footer__socialMediaIcon}>
      <Media />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={`${Style.footer__logo} ${open_Sans.className}`}>
        <Image src={Logo} alt="Logo" />
        <p>
          Empresa de Engenharia para Clínicas e Hospitais com foco na
          Inteligência do Negócio.
        </p>
      </div>
      <div className={Style.footer__siteMap}>
        <h3>Mapa Do Site</h3>
        <div>
          <p>Home</p>
          <p>Blog</p>
          <p>Serviços</p>
          <p>Engenharia Hospitalar</p>
          <p>Consultoria e Projetos</p>
          <p>Engenharia Clínica</p>
          <p>Manutenção e Calibração</p>
          <p>Materiais</p>
          <p>Clientes</p>
          <p>Equipacare Edu</p>
          <p>Fix System</p>
          <p>Contato</p>
        </div>
      </div>
      <div className={Style.footer__contact}>
        <h3>Contato</h3>
        <p>contato@equipacare.com.br</p>
        <p>+55 (24) 3348 - 7157</p>
        <p>+55 (24) 98119 - 1448</p>
      </div>
      <div className={Style.footer__socialMedia}>
        <h3>Acompanhe Nossas Redes Sociais</h3>
        <div className={Style.footer__iconList}>
          <SocialMediaIcon Media={Facebook} />
          <SocialMediaIcon Media={Instagram} />
          <SocialMediaIcon Media={LinkedIn} />
          <SocialMediaIcon Media={YouTube} />
        </div>
        <div className={Style.footer__stampList}>
          <img
            src="https://equipacare.com.br/wp-content/uploads/selogarantia-300x298.png"
            alt=""
          />
          <img
            src="https://equipacare.com.br/wp-content/uploads/selo-1-177x300.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
