import { styled } from 'styled-components';

const Input = ({ label, name, type, placeholder, value, onChange }) => {
  return (
    <Row>
      <label htmlFor={name}>{label}</label>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </Row>
  );
};

export default Input;

const StyledInput = styled.input`
  height: 50px;
  border-radius: 5px;
  padding: 16px;
  font-weight: 500;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
