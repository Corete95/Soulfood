import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TableProps {
  headdatas?: any[];
  children: React.ReactNode;
  thheight?: string;
  trheight?: string;
  tbodyheight?: string;
  scrollPadding?: string;
  checkBox?: boolean;
  checkBoxSize?: string;
  fz?: string;
  handleAllCheck: any;
  allCheck: boolean;
}

const Table = ({
  headdatas,
  thheight = '57px',
  trheight = '56px',
  tbodyheight = '840px',
  fz = '14px',
  scrollPadding = '10px',
  checkBoxSize = '14px',
  checkBox = false,
  handleAllCheck,
  allCheck,
  children,
}: TableProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <StyledTable>
      <StyledThead thheight={thheight} fz={fz}>
        <tr>
          {checkBox && (
            <th>
              <input
                type="checkbox"
                style={{ width: checkBoxSize, height: checkBoxSize }}
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={allCheck}
              />
            </th>
          )}
          {headdatas &&
            headdatas?.map((headData, idx) => (
              <th
                key={idx}
                style={{ width: headData.width, textAlign: headData.align }}
              >
                {headData.element}
              </th>
            ))}
        </tr>
      </StyledThead>
      <StyledTbody
        tbodyheight={tbodyheight}
        trheight={trheight}
        scrollPadding={scrollPadding}
      >
        {children}
      </StyledTbody>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-collapse: collapse;
  table-layout: fixed;
`;

const StyledThead = styled.thead<{ thheight: string; fz: string }>`
  display: inline-flex;
  align-items: center;
  font-size: ${(props) => props.fz};
  font-weight: 700;
  height: ${(props) => props.thheight};
  color: black;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.97),
      rgba(255, 255, 255, 0.97)
    ),
    #2b2a2c;
  & tr {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & th {
    padding: 0 16px;
    input {
      cursor: pointer;
    }
  }
`;

const StyledTbody = styled.tbody<{
  trheight: string;
  tbodyheight: string;
  scrollPadding: string;
}>`
  display: inline-block;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  max-height: ${(props) => props.tbodyheight};
  min-height: ${(props) => props.tbodyheight};
  overflow-y: auto;
  padding-right: ${(props) => props.scrollPadding};
  letter-spacing: -0.03em;
`;
