import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  toogle: boolean;
}

const sidebarItem = [
  { name: '홈', href: '/admin/dashboard', icon: FaHome },
  { name: '맛집 등록', href: '/admin/registration', icon: FaHome },
  { name: '맛집 관리', href: '/admin/dashboard', icon: FaHome },
  { name: '리뷰 관리', href: '/admin/dashboard', icon: FaHome },
];

const SideBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <SideBarContainer toogle={toggle}>
      <button className={toggle ? 'toggleOn' : ''} onClick={toggleHandler}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <aside className="sidebar">
        <div className="sidebarTop">
          <Image
            src="/logo.jpeg"
            className="sidebarLogo"
            width={toggle ? 50 : 80}
            height={toggle ? 50 : 80}
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

const SideBarContainer = styled.div<Props>`
  position: relative;

  button {
    position: absolute;
    right: ${(props) => (props.toogle ? '-11px' : '0px')};
    top: ${(props) => (props.toogle ? '70px' : '100px')};
    border: none;
    border: 1px solid #e5e7eb;
    border-radius: 50%;
    background-color: #fff;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(50%);
    font-size: 18px;
  }

  .toggleOn {
    transform: rotate(180deg);
  }

  .sidebar {
    width: ${(props) => (props.toogle ? '85px' : '270px')};
    height: 100%;
    background-color: gainsboro;
    padding: 16px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

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
        display: ${(props) => props.toogle && 'none'};
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
      display: ${(props) => props.toogle && 'none'};
    }
  }
`;
