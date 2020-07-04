import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import coverImg from '../../images/coverimage3.jpg';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Row className="left-side">
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div
                  className="about-wrapper__image"
                  style={{
                    alignItems: 'baseline',
                    justifyContent: 'end',
                  }}
                >
                  <img src={coverImg} width={350} alt="cover" />
                </div>
              </Fade>
            </Row>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'A seasoned full stack developer with a flair for creating elegant solutions in the least amount of time.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Specialized in web application development such as E-Commerce, Enterprise Application, SaaS Platform, SPA, Health Care System, CRM and Learning Management System.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Love working with great team with Agile/Scrum methodology.'}
                </p>
                <p className="about-wrapper__info-text">
                  I have strong debugging and troubleshooting skills that allow me to quickly
                  analyze problems and come to a modern solution that extends the life of the
                  application without rewriting everything from scratch.
                </p>
                <p className="about-wrapper__info-text">
                  My gift is to solve complex problems through code while maintaining the
                  perspective of an end user—keeping simplicity first and foremost in the product
                  design—then ensuring that the design and functionality of the product work in
                  perfect harmony.
                </p>
                <p className="about-wrapper__info-text">
                  I am sure I will be able to manage and make enough hours a week to meet your needs
                  and expectations.
                  <br />
                  <br />
                  I am ready to work with you and help your business grow.
                  <br />
                  <br />
                  Regards
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      View Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
