import { useState } from 'react';
import { styled } from 'styled-components';

import { Form, Result } from '../components';

const Calculator = () => {
  const [result, setResult] = useState('');

  return (
    <Wrapper>
      <Form setResult={setResult} />
      <Result result={result} />
    </Wrapper>
  );
};

export default Calculator;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  gap: 32px;
  height: calc(100vh - 75px);
`;
