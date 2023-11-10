import React from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  fz?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  width = '180px',
  height = '58px',
  margin = '0px',
  fz = '16px',
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <ButtonStyle
      width={width}
      height={height}
      margin={margin}
      fz={fz}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fz};
  border: none;
  border-radius: 5px;
  background: #ffffff;
`;
