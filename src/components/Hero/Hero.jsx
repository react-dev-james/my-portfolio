import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import bgImage from '../../images/background.jpg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron" style={{ backgroundImage: `url(${bgImage})` }}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title" style={{ fontFamily: `'Montserrat', sans-serif` }}>
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Yegor Yanushkevich'}</span>
            <br />
            {subtitle || 'Senior Software Engineer.'}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <Link
              activeClass="active"
              to="about"
              spy
              smooth
              offset={50}
              duration={100}
              style={{ cursor: 'pointer' }}
            >
              <a className="cta-btn cta-btn--hero">{cta || 'Know more'}</a>
            </Link>
          </p>
        </Fade>
      </Container>
      <div className="container1">
        <Link
          activeClass="active"
          to="about"
          spy
          smooth
          offset={50}
          duration={100}
          style={{ cursor: 'pointer' }}
        >
          <div className="chevron" />
          <div className="chevron" />
          <div className="chevron" />
        </Link>
      </div>
    </section>
  );
};

export default Header;
