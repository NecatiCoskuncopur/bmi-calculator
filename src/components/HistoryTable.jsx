import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { styled } from 'styled-components';

import { getResultsFromLocalStorage } from '../utils/getResultsFromLocalStorage';
import { clearResultsFromLocalStorage } from '../utils/clearResultsFromLocalStorage';
import { colors } from '../theme';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'BMI',
    dataIndex: 'result',
    key: 'result',
  },
];
const HistoryTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getResultsFromLocalStorage());
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      {data.length > 0 && (
        <Button
          onClick={() => {
            clearResultsFromLocalStorage();
            setData(getResultsFromLocalStorage());
          }}
        >
          Clear History
        </Button>
      )}
    </>
  );
};

export default HistoryTable;

const Button = styled.button`
  padding: 16px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  float: right;
  border: 1px solid ${colors.codGray};
`;
