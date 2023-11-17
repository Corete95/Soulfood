import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const sidebarItem = [
  { name: '홈', href: '/admin/dashboard', icon: FaHome },
  { name: '맛집 등록', href: '/admin/dashboard', icon: FaHome },
  { name: '맛집 관리', href: '/admin/dashboard', icon: FaHome },
  { name: '리뷰 관리', href: '/admin/dashboard', icon: FaHome },
];

const SideBar = () => {
  return (
    <SideBarContainer>
      <aside className="sidebar">
        <div className="sidebarTop">
          <Image
            src="/logo.jpeg"
            className="sidebarLogo"
            width={80}
            height={80}
            alt="logo"
          />
          <p className="sidebarLogoName">인생 맛집</p>
        </div>
        <ul>
          {sidebarItem.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link className="sidebarLink" href={href}>
                <span>
                  <Icon />
                </span>
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  .sidebar {
    width: 270px;
    height: 100%;
    background-color: gainsboro;
    padding: 16px;
    transition: all 0.3s linear;

    .sidebarTop {
      width: max-content;
      display: flex;
      align-items: center;
      gap: 16px;
      padding-bottom: 16px;
      margin-bottom: 16px;
      border-bottom: 1px solid #e5e7eb;

      .sidebarLogo {
        object-fit: fill;
        border-radius: 35px;
      }
      .sidebarLogoName {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .sidebarLink {
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
