import styled, { css } from 'styled-components';

import { colors, device } from '../theme';

const Text = ({ value, type }) => {
  return <StyledText variant={type}>{value}</StyledText>;
};

export default Text;

const StyledText = styled.p`
  appearance: none;
  font-family: inherit;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  ${(p) =>
    p.variant === 'underweight' &&
    css`
      color: ${colors.affair};
    `};
  ${(p) =>
    p.variant === 'healthy' &&
    css`
      color: ${colors.apple};
    `};
  ${(p) =>
    p.variant === 'overweight' &&
    css`
      color: ${colors.clementine};
    `};
  ${(p) =>
    p.variant === 'obesity' &&
    css`
      color: ${colors.coralRed};
    `};
  ${(p) =>
    p.variant === 'medium' &&
    css`
      font-size: 22px;
      font-weight: 500;
    `};
  ${(p) =>
    p.variant === 'bold' &&
    css`
      font-size: 18px;
      font-weight: 600;
    `};
  ${(p) =>
    p.variant === 'small' &&
    css`
      font-size: 18px;
      font-weight: 400;
    `};
  ${(p) =>
    p.variant === 'xlTitle' &&
    css`
      font-size: 48px;
      font-weight: 700;
      @media ${device.laptop} {
        font-size: 42px;
      }
      @media ${device.phone} {
        font-size: 36px;
      }
    `};
  ${(p) =>
    p.variant === 'lgTitle' &&
    css`
      font-size: 36px;
      font-weight: 700;
      @media ${device.laptop} {
        font-size: 32px;
      }
      @media ${device.phone} {
        font-size: 24px;
      }
    `};
  ${(p) =>
    p.variant === 'listItem' &&
    css`
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 8px;
      position: relative;
      margin-left: 15px;
      &::before {
        content: '';
        height: 8px;
        width: 8px;
        position: absolute;
        left: -15px;
        top: 10px;
        border-radius: 50%;
        background-color: ${colors.black};
      }
    `};
`;
