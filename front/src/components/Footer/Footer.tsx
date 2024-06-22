import React from 'react';
import Style from './index.module.scss';
import Logo from '/public/logo.svg';
import Image from 'next/image';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type IconType = OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
  muiName: string;
};

interface PropsSocialMedia {
  Media: IconType
}

const SocialMediaIcon = ({ Media }:PropsSocialMedia ) => {
  return (
    <div className={Style.footer__socialMediaIcon}>
      <Media className={Style.footer__socialMediaImg} />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.footer_Logo}>
        <Image className={Style.footer__icon} src={Logo} alt="Logo" />
        <p>
          Empresa de Engenharia para Clínicas e Hospitais com foco na
          Inteligência do Negócio.
        </p>
      </div>
      <div className={Style.footer_SiteMap}>
        <h3>Mapa Do Site</h3>
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
      <div className={Style.footer__Contact}>
        <h3>Contato</h3>
        <p className={Style.footer__Contact}>contato@equipacare.com.br</p>
        <p className={Style.footer__Contact}>+55 (24) 3348 - 7157</p>
        <p className={Style.footer__Contact}>+55 (24) 98119 - 1448</p>
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
          <div>
            <img
              className={Style.footer__stamp}
              id="stamp-1"
              src="https://equipacare.com.br/wp-content/uploads/selogarantia-300x298.png"
              alt=""
            />
          </div>
          <div>
            <img
              className={Style.footer__stamp1}
              src="https://equipacare.com.br/wp-content/uploads/selo-1-177x300.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
