import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '@/components/common/Header';
import styles from '../../styles/admin.module.scss';
import { styled } from 'styled-components';

const AdminLoginPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="인생맛집 어드민 로그인"
        description="인생맛집 어드민 로그인 페이지 입니다."
        canonical="https://next-map-dusky.vercel.app/admin"
      />
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          touchAction: 'pinch-zoom',
        }}
      >
        <div className={styles.adminContainer}>
          <div className={styles.loginBox}>
            <div className={styles.loginForm}>1</div>
            <Test>2</Test>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLoginPage;

export const Test = styled.div`
  background-color: red;
`;
