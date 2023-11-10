import React from 'react';
import styled from 'styled-components';

interface InputProps {
  width?: string;
  height?: string;
  padding?: string;
  type?: string;
  placeholder?: string;
  fz?: string;
  gap?: string;
  name?: string;
  value?: string | number;
  labelText?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const LabelInput = ({
  width = '300px',
  height = '58px',
  padding = ' 20px 15px',
  fz = '16px',
  type = 'text',
  placeholder,
  gap = '10px',
  labelText,
  name,
  value,
  onClick,
  onChange,
}: InputProps) => {
  return (
    <LabelInputContainer gap={gap}>
      {labelText && <label>{labelText}</label>}
      <InputWrapper>
        <InputBox
          width={width}
          height={height}
          padding={padding}
          type={type}
          placeholder={placeholder}
          fz={fz}
          name={name}
          value={value}
          onClick={onClick}
          onChange={onChange}
        />
      </InputWrapper>
    </LabelInputContainer>
  );
};

export default LabelInput;

export const LabelInputContainer = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  margin-bottom: 15px;

  label {
    font-weight: bold;
  }
`;

export const InputWrapper = styled.div<{}>``;

const InputBox = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fz};
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid black;
    box-shadow: 0 0 5px black;
  }
`;
