import React from 'react';
import Style from './index.module.scss';
import Logo from '/public/logo.svg';
import Image from 'next/image';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { open_Sans } from '@/fonts/_fonts';
import { MUIIconType } from '@/types';

interface PropsSocialMedia {
  Media: MUIIconType;
  Link?: string;
}

const SocialMediaIcon = ({ Media, Link }: PropsSocialMedia) => {
  return (
    <a href={Link} className={Style.footer__socialMediaIcon}>
      <Media />
    </a>
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
          <a href="https://equipacare.com.br/">
            <p>Home</p>
          </a>
          <a href="https://equipacare.com.br/blog/">
            <p>Blog</p>
          </a>
          <a href="">
            <p>Serviços</p>
          </a>
          <a href="https://equipacare.com.br/servicos/eh/">
            <p>Engenharia Hospitalar</p>
          </a>
          <a href="https://equipacare.com.br/servicos/cp/">
            <p>Consultoria e Projetos</p>
          </a>
          <a href="https://equipacare.com.br/servicos/ec/">
            <p>Engenharia Clínica</p>
          </a>
          <a href="https://equipacare.com.br/servicos/mc/">
            <p>Manutenção e Calibração</p>
          </a>
          <a href="https://equipacare.com.br/materiais-gratuitos/">
            <p>Materiais</p>
          </a>
          <a href="https://equipacare.com.br/clientes">
            <p>Clientes</p>
          </a>
          <a href="https://equipacare-edu.com.br/">
            <p>Equipacare Edu</p>
          </a>
          <a href="https://fixsystem.io/">
            <p>Fix System</p>
          </a>
          <a href="https://equipacare.com.br/contato">
            <p>Contato</p>
          </a>
        </div>
      </div>
      <div className={Style.footer__contact}>
        <h3>Contato</h3>
        <a href="mailto:contato@equipacare.com.br">
          <p>contato@equipacare.com.br</p>
        </a>
        <a href="tel:+552433487157">
          <p>+55 (24) 3348 - 7157</p>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=24981191448&text&type=phone_number&app_absent=0">
          <p>+55 (24) 98119 - 1448</p>
        </a>
      </div>
      <div className={Style.footer__socialMedia}>
        <h3>Acompanhe Nossas Redes Sociais</h3>
        <div className={Style.footer__iconList}>
          <SocialMediaIcon
            Media={Facebook}
            Link="https://www.facebook.com/Equipacare"
          />
          <SocialMediaIcon
            Media={Instagram}
            Link="https://www.instagram.com/equipacare/"
          />
          <SocialMediaIcon
            Media={LinkedIn}
            Link="https://www.linkedin.com/company/equipacare"
          />
          <SocialMediaIcon
            Media={YouTube}
            Link="https://www.youtube.com/c/Equipacare"
          />
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
