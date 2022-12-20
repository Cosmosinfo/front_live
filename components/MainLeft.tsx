import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const MainLeft = () => {
  const router = useRouter();
  const { pathname } = router;

  const menus = [
    {
      id: 1,
      name: "홈",
      imgUrl: "/images/house.svg",
      hoverImgUrl: "/images/house_white.svg",
      nowImgUrl: "/images/house_white.svg",
      pathname: "/home",
    },
    {
      id: 2,
      name: "스테이지",
      imgUrl: "/images/stage.svg",
      hoverImgUrl: "/images/stage_white.svg",
      nowImgUrl: "/images/stage_white.svg",
      pathname: "/stage",
    },
    {
      id: 3,
      name: "아티스트",
      imgUrl: "/images/artist.svg",
      hoverImgUrl: "/images/artist_white.svg",
      nowImgUrl: "/images/artist_white.svg",
      pathname: "/artist",
    },
    {
      id: 4,
      name: "스토어",
      imgUrl: "/images/shop.svg",
      hoverImgUrl: "/images/shop_white.svg",
      nowImgUrl: "/images/shop_white.svg",
      pathname: "/store",
    },
    {
      id: 5,
      name: "설정",
      imgUrl: "/images/setting.svg",
      hoverImgUrl: "/images/setting_white.svg",
      nowImgUrl: "/images/setting_white.svg",
      pathname: "/setting",
    },
    {
      id: 6,
      name: "도움말",
      imgUrl: "/images/flag.svg",
      hoverImgUrl: "/images/flag_white.svg",
      nowImgUrl: "/images/flag_white.svg",
      pathname: "/support",
    },
  ];

  return (
    <Nav>
      {menus.map((menu, index) => (
        <Link href={menu.pathname} key={index} legacyBehavior passHref>
          <NavInfo
            key={index}
            imgUrl={menu.imgUrl}
            hoverImgUrl={menu.hoverImgUrl}
            isHere={pathname === menu.pathname}
            nowImgUrl={menu.nowImgUrl}
          >
            {menu.name}
          </NavInfo>
        </Link>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  width: 250px;
  height: 100vh;
  background: #181820;
  padding: 30px;
  color: #878787;
  display: flex;
  flex-direction: column;
`;

const NavInfo = styled.a<{ imgUrl: string; hoverImgUrl: string; nowImgUrl: string; isHere: boolean }>`
  display: inline-block;
  margin-bottom: 40px;
  background-position: 0 50%;
  background-size: 30px;
  padding-left: 40px;
  ${(props) =>
    props.isHere
      ? `color: #ffffff; background:url(${props.nowImgUrl}) no-repeat`
      : `color: #8B8B8B; background: url(${props.imgUrl}) no-repeat;`}
  :hover {
    color: #ffffff;
    ${(props) => `background: url(${props.hoverImgUrl}) no-repeat`}
  }
`;

export default MainLeft;
