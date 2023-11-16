import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const SideBar = () => {
  return (
    <SideBarContainer>
      <aside className="sideBar">
        <div className="sideBarTop">
          <Image
            src="/logo.jpeg"
            className="sideBarLogo"
            width={80}
            height={80}
            alt="logo"
          />
        </div>
        <ul>
          <li>
            <Link className="sideBarLink" href="/admin/dashboard">
              <span>
                <FaHome />
              </span>
              <span>홈</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/asd">2</Link>
          </li>
          <li>
            <Link href="/dashboard">3</Link>
          </li>
        </ul>
      </aside>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  .sideBar {
    width: 270px;
    height: 100%;
    background-color: red;
    padding: 16px;
    transform: all 0.3s linear;

    .sideBarTop {
      width: max-content;
      display: flex;
      align-items: center;
      padding-bottom: 16px;
      margin-bottom: 16px;
      border-bottom: 1px solid #e5e7eb;
    }
  }
  .sideBarLink {
    font-size: 17px;
    text-decoration: none;
    color: #000;
    padding: 13px 16px;
    display: flex;
    background-color: #f3f4f6;
    margin-bottom: 16px;
    border-radius: 13px;

    span:nth-child(1) {
      font-size: 20px;
    }
    span:nth-child(2) {
      margin-left: 10px;
    }
  }
`;
