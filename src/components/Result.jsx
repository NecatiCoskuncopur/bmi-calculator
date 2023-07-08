import { styled } from 'styled-components';
import Text from './Text';

const Result = ({ result }) => {
  const getBmiMessage = (bmi) => {
    switch (true) {
      case bmi < 18.5:
        return 'Underweight';
      case bmi > 18.5 && bmi < 24.9:
        return 'Healthy';
      case bmi > 25 && bmi < 29.9:
        return 'Overweight';
      case bmi > 29.9:
        return 'Obesity';
      default:
        return '';
    }
  };

  return (
    <Wrapper>
      <Text
        value={result && getBmiMessage(result)}
        type={getBmiMessage(result).toLowerCase()}
      />

      <Text
        value={result}
        type="medium"
      />
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
