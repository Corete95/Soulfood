import Table from '@/components/common/Table';
import TableBody from '@/components/common/TableBody';
import React from 'react';
import styled from 'styled-components';

const widthData = {
  width1: '48px',
  width2: '80px',
  width3: '120px',
  width4: '1131px',
};

const ContentPage = ({ initialFeedbackList }: any) => {
  const mixData = initialFeedbackList.map((item: any, b: any) => {
    return Object.assign(item, widthData);
  });
  console.log(',,', mixData);
  return (
    <ContentContainer>
      <Table
        headdatas={[
          { element: 'No', width: '80px', align: 'left' },
          { element: '시간', width: '120px', align: 'left' },
          { element: '내용', width: '1131px', align: 'left' },
        ]}
        checkBox={true}
        checkBoxSize="15px"
      >
        <TableBody bodyData={mixData} checkBox={true}></TableBody>
      </Table>
    </ContentContainer>
  );
};

export default ContentPage;

const ContentContainer = styled.div`
  background-color: #fff;
`;
