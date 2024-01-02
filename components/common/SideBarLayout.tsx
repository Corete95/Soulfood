import React, { ReactNode } from 'react';
import SideBar from './SideBar';
import { Header, Layout } from '@/styles/admin/adminDashBord';

interface Props {
  children: ReactNode | ReactNode[];
}

const SideBarLayout = ({ children }: Props) => {
  return (
    <Layout>
      <SideBar />
      <Header>ㅎ2ㅎ2</Header>
      <div className="content">{children}</div>
    </Layout>
  );
};

export default SideBarLayout;
