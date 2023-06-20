import React from 'react';
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../style/components/informationcontainer.sass';

const InformationContainer = () => {
  const email = 'Anthony.islan2005@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" color="#e93b81" />
        <div>
          <h3>Telefone</h3>
          <p>(81)991395701</p>
        </div>
      </div>

      <div className="info-card">
        <AiOutlineMail id="email-icon" color="#6ab5b9" />
        <div>
          <h3>E-mail</h3>
          <p className="email-link" onClick={handleEmailClick}>
            {email}
          </p>
        </div>
      </div>

      <div className="info-card">
        <AiFillEnvironment id="pin-icon" color="#c17ceb" />
        <div>
          <h3>Localização</h3>
          <p>Caruaru-PE</p>
        </div>
      </div>
    </section>
  );
}

export default InformationContainer;
