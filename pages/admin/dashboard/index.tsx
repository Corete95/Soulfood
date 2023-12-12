import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import DashBordLayout from '@/components/common/DashBordLayout';

const DashBoardPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('loginCheck')) {
      router.push('/');
    }
  }, []);

  return <DashBordLayout>홈 페이지</DashBordLayout>;
};

export default DashBoardPage;
