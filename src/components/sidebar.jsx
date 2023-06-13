import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.jpg';

import "../style/components/sidebar.sass";


const sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Islan Anthony" /> <br/> <br/>
      <p className="title">Desenvolvedor Jr</p>
      <SocialNetworks/>
      <p>Informações de Contato</p>
      <a href="" className="btn">Download Currículo</a>
    </aside>
  );
}

export default sidebar