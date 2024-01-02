import Button from '@/components/common/Button';
import Table from '@/components/common/Table';
import TableBody from '@/components/common/TableBody';
import { deleteFeedBack } from '@/firebase/feedback';
import useCheckboxes from '@/hooks/useCheckboxes';
import { ReviewProps } from '@/types/common';
import React from 'react';
import styled from 'styled-components';
interface Props {
  reviewList: ReviewProps[];
}

const widthData = {
  no: '70px',
  timestamp: '140px',
  content: '1094px',
};

const ContentPage = ({ reviewList }: Props) => {
  const reviewData = reviewList?.map((item, i) => ({
    ...item,
    no: i + 1,
    checkBox: false,
  }));

  const [checkItems, setCheckItems, handleSingleCheck, handleAllCheck] =
    useCheckboxes(reviewData);
  console.log('reviewData', checkItems);
  const allCheck = checkItems.length === reviewData?.length;

  const handleDeleteReview = () => {
    const alert = window.confirm('삭제하시겠습니까?');
    if (alert) {
      const result = reviewData
        .filter((doc) => checkItems.includes(doc.no))
        .map((doc) => doc.id);
      console.log('RRR', result);
      deleteFeedBack(result);
      setCheckItems([]);
    }
  };
  return (
    <ContentContainer>
      <div className="deleteWrapper">
        <Button
          width="130px"
          height="30px"
          border="1px solid #e5e6e6"
          disabled={checkItems.length ? false : true}
          onClick={handleDeleteReview}
        >
          삭제
        </Button>
      </div>
      <Table
        headdatas={[
          { element: 'No', width: '70px', align: 'left' },
          { element: '시간', width: '140px', align: 'center' },
          { element: '내용', width: '1094px', align: 'left' },
        ]}
        checkBox={true}
        allCheck={allCheck}
        checkBoxSize="15px"
        handleAllCheck={handleAllCheck}
      >
        <TableBody
          bodyData={reviewData}
          widthData={widthData}
          checkBox={true}
          checkItems={checkItems}
          onChange={handleSingleCheck}
        ></TableBody>
      </Table>
    </ContentContainer>
  );
};

export default ContentPage;

const ContentContainer = styled.div`
  background-color: #fff;

  .deleteWrapper {
    text-align: end;
    background-color: #ecf0f4;
  }
`;
