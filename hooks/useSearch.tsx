import { SearchObjectProps } from '@/types/common';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function useSearch(initialState: SearchObjectProps): any {
  const [search, setSearch] = useState(initialState);
  const searchParams = useRouter();

  const onChangeFilter = (value: string) => {
    setSearch({
      ...search,
      filter: value,
    });
    const queryString = new URLSearchParams({
      ...search,
      filter: value,
    }).toString();
    searchParams.push(`${searchParams.pathname.split('/')[2]}?${queryString}`);
    console.log('????', queryString);
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search,
      value: e.target.value,
    });
  };

  const onSearch = () => {
    setSearch({
      ...search,
    });
    const queryString = new URLSearchParams(search).toString();
    searchParams.push(`${searchParams.pathname.split('/')[2]}?${queryString}`);
  };

  return {
    search,
    onChangeFilter,
    onChangeValue,
    onSearch,
    setSearch,
  };
}
