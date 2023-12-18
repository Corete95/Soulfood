import React, { useState } from 'react';

const useCheckboxes = (data: any) => {
  const [checkItems, setCheckItems] = useState([]);

  console.log('checkItems', checkItems);

  const handleSingleCheck = (checked: any, id: any) => {
    if (checked) {
      setCheckItems((prev: any) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked: any) => {
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
