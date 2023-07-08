import { styled } from 'styled-components';

import { HistoryTable } from '../components';

const History = () => {
  return (
    <Wrapper>
      <HistoryTable />
    </Wrapper>
  );
};

export default History;

const Wrapper = styled.section`
  padding: 16px;
  height: calc(100vh - 75px);
`;
