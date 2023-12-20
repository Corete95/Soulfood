import { ReviewProps } from '@/types/common';
import React from 'react';
import styled from 'styled-components';
interface Props {
  bodyData: ReviewProps[];
  widthData: ReviewProps;
  checkItems: any;
  checkBox: boolean;
  onChange?: any;
}

const TableBody = ({
  bodyData,
  widthData,
  checkItems,
  checkBox = false,
  onChange,
}: Props) => {
  const name = Object.keys(widthData);
  const width = Object.values(widthData);

  return (
    <StyledTableBody>
      {bodyData?.map((item, index) => (
        <tr key={index}>
          {checkBox && (
            <td style={{ width: 48 }}>
              <input
                name="checkBox"
                type="checkbox"
                onChange={(e) => onChange(e.target.checked, item.no)}
                checked={checkItems.includes(item.no) ? true : false}
              />
            </td>
          )}
          {name.map((_, i) => (
            <td key={i} style={{ width: width[i], textAlign: 'left' }}>
              {item[name[i]]}
            </td>
          ))}
        </tr>
      ))}
    </StyledTableBody>
  );
};

export default TableBody;

const StyledTableBody = styled.div`
  & tr {
    display: flex;
    align-items: center;
    height: 48px;

    &:hover {
      background-color: #f8f9fb;
    }
  }
  & td {
    padding: 0 16px;
    font-size: 14px;
    text-align: center;
    input {
      cursor: pointer;
      width: 15px;
      height: 15px;
    }
  }
`;
