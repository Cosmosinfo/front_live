import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const menus = [
  {
    id: 1,
    name: "홈",
    imgUrl: "/images/house.svg",
    nowImgUrl: "/images/house_white.svg",
    pathname: "/",
  },
  {
    id: 2,
    name: "스테이지",
    imgUrl: "/images/stage.svg",
    nowImgUrl: "/images/stage_white.svg",
    pathname: "/stage/liveStage",
  },
  {
    id: 3,
    name: "아티스트",
    imgUrl: "/images/artist.svg",
    nowImgUrl: "/images/artist_white.svg",
    pathname: "/artist",
  },
  {
    id: 4,
    name: "스토어",
    imgUrl: "/images/shop.svg",
    nowImgUrl: "/images/shop_white.svg",
    pathname: "/store",
  },
  {
    id: 5,
    name: "설정",
    imgUrl: "/images/setting.svg",
    nowImgUrl: "/images/setting_white.svg",
    pathname: "/setting",
  },
  {
    id: 6,
    name: "도움말",
    imgUrl: "/images/flag.svg",
    nowImgUrl: "/images/flag_white.svg",
    pathname: "/help",
  },
];

const setting_menus = [
  {
    id: 1,
    name: "프로필",
    imgUrl: "/images/setting/user.svg",
    nowImgUrl: "/images/setting/user_white.svg",
    pathname: "/setting/profile",
  },
  {
    id: 2,
    name: "애널리틱스",
    imgUrl: "/images/setting/analytics.svg",
    nowImgUrl: "/images/setting/analytics_white.svg",
    pathname: "/setting/analytics",
  },
  {
    id: 3,
    name: "스튜디오",
    imgUrl: "/images/setting/studio.svg",
    nowImgUrl: "/images/setting/studio_white.svg",
    pathname: "/setting/studio",
  },
  {
    id: 1,
    name: "수익정산",
    imgUrl: "/images/setting/coin.svg",
    nowImgUrl: "/images/setting/coin_white.svg",
    pathname: "/setting/coin",
  },
];

const MainLeft = () => {
  const router = useRouter();
  const { pathname } = router;
  const pathname_split = pathname.split("/")[1];
  const setting_pathname_split = pathname.split("/")[2];
  const token = useSelector((state: any) => state.Auth.token);

  return (
    <>
      {token === "Test" && pathname_split === "setting" ? (
        <Nav>
          {setting_menus.map((menu, index) => (
            <Link href={menu.pathname} key={index} legacyBehavior passHref>
              <NavInfo
                key={index}
                imgUrl={menu.imgUrl}
                isHere={setting_pathname_split === menu.pathname.split("/")[2]}
                nowImgUrl={menu.nowImgUrl}
              >
                {menu.name}
              </NavInfo>
            </Link>
          ))}
        </Nav>
      ) : (
        <Nav>
          {menus.map((menu, index) => (
            <Link href={menu.pathname} key={index} legacyBehavior passHref>
              <NavInfo key={index} imgUrl={menu.imgUrl} isHere={pathname_split === menu.pathname.split("/")[1]} nowImgUrl={menu.nowImgUrl}>
                {menu.name}
              </NavInfo>
            </Link>
          ))}
        </Nav>
      )}
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  padding-top: 100px;
  min-width: 250px;
  height: 100%;
  background: #181820;
  padding: 10px 30px;
  color: #878787;
  display: flex;
  flex-direction: column;
`;

const NavInfo = styled.a<{ imgUrl: string; nowImgUrl: string; isHere: boolean }>`
  display: inline-block;
  min-height: 40px;
  margin-bottom: 30px;
  background-position: 0 50%;
  background-size: contain;
  padding-left: 40px;
  line-height: 40px;
  ${(props) =>
    props.isHere
      ? `
      color: #ffffff;
      background: url(${props.nowImgUrl}) no-repeat left 50%;
  `
      : `
      color: #8B8B8B;
      background: url(${props.imgUrl}) no-repeat left 50%;;
  `}
  :hover {
    color: #ffffff;
    ${(props) => `background: url(${props.nowImgUrl}) no-repeat left 50%;`}
  }
`;

export default MainLeft;
