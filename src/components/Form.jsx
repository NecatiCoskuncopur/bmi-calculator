import { useState } from 'react';
import { styled } from 'styled-components';

import Input from './Input';
import { writeToLocalStorage } from '../utils/writeToLocalStorage';
import { colors, device } from '../theme';

const Form = ({ setResult }) => {
  const initialValues = { name: '', weight: '', height: '' };
  const [formValues, setFormValues] = useState(initialValues);

  const bmi = formValues.weight / Math.pow(formValues.height / 100, 2);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const calculatedValues = {
    result: bmi.toFixed(1),
    name: formValues.name,
    date: new Date().toLocaleDateString('en-GB'),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(bmi.toFixed(1));
    setFormValues(initialValues);
    writeToLocalStorage(calculatedValues);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label="Name"
        name="name"
        type="text"
        placeholder="Your name"
        value={formValues.name}
        onChange={handleChange}
      />
      <Input
        label="Weight (kg)"
        name="weight"
        type="number"
        placeholder="Your weight"
        value={formValues.weight}
        onChange={handleChange}
      />
      <Input
        label="Height (cm)"
        name="height"
        type="number"
        placeholder="Your Height"
        value={formValues.height}
        onChange={handleChange}
      />
      <Button type="submit">Calculate</Button>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  gap: 20px;
  width: 30%;
  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.phone} {
    width: 80%;
  }
  @media ${device.mini} {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 30%;
  padding: 16px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${colors.codGray};
`;
