import React from 'react';
import { styled } from 'styled-components';

import Text from './Text';
import { content } from '../content';
import { colors } from '../theme';

const AboutContent = () => {
  return (
    <Wrapper>
      {content.map((item, index) => (
        <Text
          key={index}
          value={item.text}
          type={item.type}
        />
      ))}

      <div>
        If you want to calculate your BMI, you can use the <a href="/">calculator</a>.
      </div>
    </Wrapper>
  );
};

export default AboutContent;

const Wrapper = styled.div`
  max-width: 640px;
  line-height: 1.5;
  padding: 16px;
  div {
    font-size: 22px;
    font-weight: 500;
    a {
      text-decoration: underline;
      color: ${colors.endeavour};
      transition: 0.4s ease all;
      &:hover {
        color: ${colors.ebonyClay};
      }
    }
  }
`;
