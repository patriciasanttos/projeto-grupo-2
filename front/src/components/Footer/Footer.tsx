import './_footer.scss';
import Logo from './logo.svg';
import Image from 'next/image';
import SocialMediaIcon from './SocialMediaIcon';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

function Footer() {
  return (
    <div className="footer">
      <div id="equipacare" className="section">
        <Image id='equipacare-icon' src={Logo} alt="" />
        <p>
          Empresa de Engenharia para Clínicas e Hospitais com foco na
          Inteligência do Negócio.
        </p>
      </div>
      <div className="section">
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
      <div className="section">
        <h3>Contato</h3>
        <p>contato@equipacare.com.br</p>
        <p>+55 (24) 3348 - 7157</p>
        <p>+55 (24) 98119 - 1448</p>
      </div>
      <div id="social-media" className="section">
        <h3>Acompanhe Nossas Redes Sociais</h3>
        <div id="icon-list">
          <SocialMediaIcon Media={Facebook} />
          <SocialMediaIcon Media={Instagram} />
          <SocialMediaIcon Media={LinkedIn} />
          <SocialMediaIcon Media={YouTube} />
        </div>
        <div className='stamp-list'>
          <div>
            <img
              className="stamp"
              id='stamp-1'
              src="https://equipacare.com.br/wp-content/uploads/selogarantia-300x298.png"
              alt=""
            />
          </div>
          <div>
            <img 
              className='stamp'
              src="https://equipacare.com.br/wp-content/uploads/selo-1-177x300.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
