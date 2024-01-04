import React, { ReactNode } from 'react';
import SideBar from './SideBar';
import { Header, Layout } from '@/styles/admin/adminDashBord';
import { useRecoilValue } from 'recoil';
import { sideBarOpenAtom } from '@/recoil/admin/atom';
import useRouters from '@/hooks/useRouters';
import { ADMIN_ROUTERS } from '@/utils/commonObject';
import Button from './Button';

interface Props {
  children: ReactNode | ReactNode[];
}

const SideBarLayout = ({ children }: Props) => {
  const router = useRouters(ADMIN_ROUTERS);
  const sideState = useRecoilValue(sideBarOpenAtom);

  return (
    <Layout>
      <SideBar />
      <Header state={sideState}>
        <p>{router}</p>
        <Button>로그아웃</Button>
      </Header>
      <div className="content">{children}</div>
    </Layout>
  );
};

export default SideBarLayout;
