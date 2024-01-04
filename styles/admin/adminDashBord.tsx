import { styled } from 'styled-components';

export const DashBoardContainer = styled.div`
  display: flex;
  height: 100vh;
  /* min-width: 1440px; */
  min-height: 1024px;
  padding: 0;
  background-color: #ecf0f4;
`;

export const Layout = styled.div`
  display: flex;
  gap: 32px;

  .content {
    min-width: 1650px;
    padding-top: 75px;
  }
`;

export const Header = styled.div<{ state: boolean }>`
  position: fixed;
  left: ${(props) => (props.state ? '86px' : '271px')};
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  padding: 0px 30px;
  background-color: #fff;

  & p {
    font-size: 18px;
    font-weight: bold;
  }
`;
