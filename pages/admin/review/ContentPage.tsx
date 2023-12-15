import Table from '@/components/common/Table';
import TableBody from '@/components/common/TableBody';
import { ReviewProps } from '@/types/common';
import React from 'react';
import styled from 'styled-components';
interface Props {
  reviewList: ReviewProps[];
}

const widthData = {
  no: '80px',
  timestamp: '120px',
  content: '1131px',
};

const ContentPage = ({ reviewList }: Props) => {
  const reviewData = reviewList.map((item, i) => ({ ...item, no: i + 1 }));

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
        <TableBody
          bodyData={reviewData}
          widthData={widthData}
          checkBox={true}
        ></TableBody>
      </Table>
    </ContentContainer>
  );
};

export default ContentPage;

const ContentContainer = styled.div`
  background-color: #fff;
`;
