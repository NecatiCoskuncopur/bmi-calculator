import { styled } from 'styled-components';

import { AboutContent } from '../components';

const About = () => {
  return (
    <Wrapper>
      <AboutContent />
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  padding: 16px;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
