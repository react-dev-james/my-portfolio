import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const SkillRow = ({ labels, percentage }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <Row style={{ display: 'flex', alignItems: 'center', paddingTop: 8, paddingBottom: 4 }}>
      <Col lg={4} sm={12} style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex' }}>
          {labels?.map(label => {
            return (
              <h2 style={{ padding: 2 }}>
                <span
                  className="badge"
                  style={{
                    fontWeight: 500,
                    backgroundColor: '#2d2b3e',
                    color: 'white',
                    fontFamily: `'Source Sans Pro', sans-serif`,
                  }}
                >
                  {label}
                </span>
              </h2>
            );
          })}
        </div>
      </Col>
      <Col lg={8} sm={12}>
        <div className="progress" style={{ height: '8px' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${percentage}%`, backgroundColor: '#28a77e' }}
          />
        </div>
      </Col>
    </Row>
  </Fade>
);

SkillRow.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default SkillRow;
