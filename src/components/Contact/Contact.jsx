import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn-contact"
              href={email ? `mailto:${email}` : ''}
            >
              <i className="fa fa-envelope fa-inverse" />
            </a>
            <a href="skype:live:yegoryanushkevich?chat" className="cta-btn cta-btn-contact">
              <i className="fa fa-skype fa-inverse" />
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
