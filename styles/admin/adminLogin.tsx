import { styled } from 'styled-components';

export const AdminContainer = styled.div`
  position: relative;
  height: 100vh;
  margin-top: 60px;
  padding: 0px 12px;

  .loginBox {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 700px;
    border: 1px solid beige;
    border-radius: 20px;
    background-color: beige;

    .loginForm {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        margin-bottom: 50px;
      }

      .loginError {
        font-size: 14px;
        color: red;
        text-align: center;
      }
    }
  }
`;

export const AdminRightImg = styled.div`
  width: 50%;
`;
