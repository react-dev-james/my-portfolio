import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import coverImg from '../../images/coverimage3.jpg';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, paragraph4, resume } = about;

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
            <Row>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div
                  className="about-wrapper__image"
                  style={{
                    alignItems: 'baseline',
                    justifyContent: 'end',
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
                  }}
                >
                  <img src={coverImg} width={350} alt="cover" />
                </div>
              </Fade>
            </Row>
            <Row>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="about-wrapper__info">
                  <br />
                  <br />
                  <br />
                  <p className="about-wrapper__info-text">
                    <b>Country: </b>Polandasdasd
                  </p>
                  <p className="about-wrapper__info-text">
                    <b>Email: </b>yegoryanushkevich@gmail.com
                  </p>
                  <p className="about-wrapper__info-text">
                    <b>Skype: </b>live:yegoryanushkevich
                  </p>
                  <br />
                  <p className="about-wrapper__info-text">
                    <b>Hourly rate: $40/hr</b>
                  </p>
                  <p className="about-wrapper__info-text">
                    <b>Available: More than 40hrs/week</b>
                  </p>
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
                  <b>{paragraph4 || ''}</b>
                </p>
                <p className="about-wrapper__info-text">
                  &nbsp;&nbsp;&nbsp;• ES5 + JavaScript, TypeScript, HTML5, CSS3, SCSS, jQuery
                  <br />
                  &nbsp;&nbsp;&nbsp;• React.js, Redux-Thunk, Redux-Saga, React Hooks, Context API,
                  React Storybook
                  <br />
                  &nbsp;&nbsp;&nbsp;• NextJS, GatsbyJS
                  <br />
                  &nbsp;&nbsp;&nbsp;• Angular 2-9, NgRx, RxJS, Angular Material
                  <br />
                  &nbsp;&nbsp;&nbsp;• REST, GraphQL, Apollo
                  <br />
                  &nbsp;&nbsp;&nbsp;• Vue.js, VueX, Nuxt.js <br />
                  &nbsp;&nbsp;&nbsp;• Ant Design, Semantic UI, UI Kit, Styled Component, Material,
                  Bootstrap
                </p>
                <p className="about-wrapper__info-text">
                  <b>- Back-end</b>
                </p>
                <p className="about-wrapper__info-text">
                  &nbsp;&nbsp;&nbsp;• NodeJS, PHP, Python, Ruby On Rails
                  <br />
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
                  Regards.
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
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
