import React, { ReactNode } from 'react';
import SideBar from './SideBar';
import { Layout } from '@/styles/admin/adminDashBord';

interface Props {
  children: ReactNode | ReactNode[];
}

const SideBarLayout = ({ children }: Props) => {
  return (
    <Layout>
      <SideBar />
      <div>{children}</div>
    </Layout>
  );
};

export default SideBarLayout;
