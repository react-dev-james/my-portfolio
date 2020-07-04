import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import SkillRow from './SkillRow';

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <div className="project-wrapper">
          <Title title="My Skills" keepLetter />
          <SkillRow labels={['JavaScript ES5+', 'TypeScript']} percentage={100} />
          <SkillRow labels={['HTML5', 'CSS3', 'SCSS', 'jQuery']} percentage={100} />
          <SkillRow labels={['React.js']} percentage={100} />
          <SkillRow labels={['React Storybook', 'Styled Components']} percentage={100} />
          <SkillRow labels={['Redux-Thunk', 'Redux-Saga']} percentage={100} />
          <SkillRow labels={['React Hooks', 'Context API']} percentage={100} />
          <SkillRow labels={['NextJS', 'GatsbyJS']} percentage={100} />
          <SkillRow labels={['Angular 2-9', 'NgRx', 'RxJS']} percentage={100} />
          <SkillRow labels={['REST', 'GraphQL', 'Apollo']} percentage={100} />
          <SkillRow labels={['Ant Design', 'Semantic UI', 'UI Kit', 'Material']} percentage={100} />
          <SkillRow labels={['Vue.js', 'VueX', 'Nuxt.js']} percentage={80} />
          <SkillRow labels={['NodeJS', 'PHP', 'Python']} percentage={70} />
          <SkillRow labels={['Ruby On Rails']} percentage={60} />
          <SkillRow labels={['D3.js', 'DevExtreme']} percentage={90} />
          <SkillRow labels={['GCP', 'AWS']} percentage={70} />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
