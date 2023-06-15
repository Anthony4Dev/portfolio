import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.jpg';

import "../style/components/sidebar.sass";
import InformationContainer from './InformationContainer';


const sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Islan Anthony" /> <br/> <br/>
      <p className="title">Desenvolvedor Jr</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href='curriculo\Curriculo Islan.pdf' download="curriculo\Curriculo Islan.pdf" className="btn">Download Currículo</a>
    </aside>
  );
}

export default sidebar