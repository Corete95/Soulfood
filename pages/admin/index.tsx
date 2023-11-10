import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '@/components/common/Header';
import Image from 'next/image';
import { AdminContainer, AdminRightImg } from '@/styles/admin/adminLogin';
import LabelInput from '@/components/common/LabelInput';
import useInputs from '@/hooks/useInputs';
import Button from '@/components/common/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../../firebase/index';

const AdminLoginPage: NextPage = () => {
  const [form, onChangeForm] = useInputs({
    email: '',
    password: '',
  });

  const onLoginSubmit = async (data: any) => {
    try {
      await signInWithEmailAndPassword(authService, data.email, data.password);
    } catch (e) {
      console.log('error', e.message);
    }

    console.log('ff', data);
  };

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
        <AdminContainer>
          <div className="loginBox">
            <div className="loginForm">
              <h1>인생맛집</h1>
              <form>
                <LabelInput
                  name="email"
                  labelText="아이디"
                  placeholder="아이디 입력"
                  onChange={onChangeForm}
                />
                <LabelInput
                  name="password"
                  labelText="비밀번호"
                  placeholder="비밀번호 입력"
                  onChange={onChangeForm}
                />
                <Button
                  width="300px"
                  margin="20px 0px"
                  onClick={() => onLoginSubmit(form)}
                >
                  로그인
                </Button>
              </form>
            </div>
            <AdminRightImg>
              <Image
                src="/logo.jpeg"
                width={0}
                height={0}
                alt=""
                style={{ width: '100%', height: '100%' }}
                sizes="100vh"
              />
            </AdminRightImg>
          </div>
        </AdminContainer>
      </main>
    </>
  );
};

export default AdminLoginPage;
