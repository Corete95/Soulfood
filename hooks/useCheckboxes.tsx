import { ReviewProps } from '@/types/common';
import React, { useState } from 'react';

const useCheckboxes = (data: any) => {
  const [checkItems, setCheckItems] = useState<any>([]);

  console.log('checkItems', checkItems);

  const handleSingleCheck = (checked: boolean, id: string) => {
    if (checked) {
      setCheckItems((prev: any) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el: any) => el !== id));
    }
  };

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArray: any = [];
      data.forEach((el: any) => idArray.push(el.no));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  return [checkItems, setCheckItems, handleSingleCheck, handleAllCheck];
};

export default useCheckboxes;
