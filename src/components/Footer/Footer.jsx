import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <Link
          activeClass="active"
          to="hero"
          spy
          smooth
          offset={50}
          duration={100}
          style={{ cursor: 'pointer' }}
        >
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </Link>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Protfolio developed by Yegor Yanushkevich
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
