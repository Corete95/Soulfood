import React from 'react';
import styled from 'styled-components';

const TableBody = ({ bodyData, checkBox = false }: any) => {
  console.log('...?', bodyData);
  console.log('!!!', new Array(bodyData.length).fill(0));

  const test = ['timestamp', 'content', 'width1', 'width2', 'width3', 'width4'];
  return (
    <StyledTableBody>
      {bodyData.map((item, index) => (
        <tr key={index}>
          {checkBox && (
            <td style={{ width: item.width1 }}>
              <input type="checkbox" />
            </td>
          )}
          {test.map((b, i) => (
            <td style={{ width: item[`width${i + 1}`] }}>{item[b]}</td>
          ))}
          {/* <td style={{ width: item.width2 }}>{index + 1}</td>
          <td style={{ width: item.width3 }}>{item.timestamp}</td>
          <td style={{ width: item.width4 }}>{item.content}</td> */}
        </tr>
      ))}
    </StyledTableBody>
  );
};

export default TableBody;

const StyledTableBody = styled.div`
  & tr {
    height: 40px;
  }
  & td {
    padding: 0 16px;
    font-size: 14px;
    text-align: center;
  }
`;
