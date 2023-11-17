import Header from '@/components/home/Header';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import SideBar from '../../../components/common/SideBar';
import { DashBoardContainer } from '@/styles/admin/adminDashBord';
import SideBarLayout from '@/components/common/SideBarLayout';

const DashBoardPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('loginCheck')) {
      router.push('/');
    }
  }, []);

  return (
    <DashBoardContainer>
      <SideBarLayout>123</SideBarLayout>
    </DashBoardContainer>
  );
};

export default DashBoardPage;
