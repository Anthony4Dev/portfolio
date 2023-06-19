import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../style/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/islan-anthony-649374200/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/Anthony4Dev" },
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/anthony_islan/" },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
