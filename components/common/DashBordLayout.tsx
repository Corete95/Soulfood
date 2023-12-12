import React, { ReactNode } from 'react';
import { DashBoardContainer } from '@/styles/admin/adminDashBord';
import SideBarLayout from './SideBarLayout';

interface Props {
  children: ReactNode | ReactNode[];
}

const DashBordLayout = ({ children }: Props) => {
  return (
    <DashBoardContainer>
      <SideBarLayout>{children}</SideBarLayout>
    </DashBoardContainer>
  );
};

export default DashBordLayout;
