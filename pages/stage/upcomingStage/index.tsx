import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const index = () => {
  const router = useRouter();
  const { pathname } = router;

  const menus = [
    {
      id: 1,
      name: "라이브 스테이지",
      pathname: "/stage/liveStage",
    },
    {
      id: 2,
      name: "다가오는 스테이지",
      pathname: "/stage/upcomingStage",
    },
    {
      id: 3,
      name: "지난 스테이지",
      pathname: "/stage/exitStage",
    },
  ];

  const liveData = [
    {
      stageId: 1,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 2,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 3,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 4,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 5,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 6,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 7,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 8,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 9,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 10,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 11,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
    {
      stageId: 12,
      imgUrl: "/images/sample.png",
      title: "공연제목",
      artist: "공연 참여 아티스트",
      ticket: "1장",
      link: "/artist",
      ticketImg: "/images/ticket.svg",
    },
  ];

  const [StageData, setStageData] = useState<any>(null);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/mainInfo`).then((res) => setStageData(res.data.stageReadyInfo));
  }, []);

  return (
    <Container>
      <MenuBar>
        {menus.map((menu, index) => (
          <Link href={menu.pathname} key={index} legacyBehavior passHref>
            <Menu key={index} isHere={pathname === menu.pathname}>
              {menu.name}
            </Menu>
          </Link>
        ))}
      </MenuBar>
      <StageContainer>
        {StageData &&
          StageData.map((data: any, id: any) => (
            <>
              <StageBox>
                <Figure href={data.stageStreamKey} artist="none">
                  <ImageArea src={data.stageThumbnailImage} alt="live_stage" />
                </Figure>
                <StageContentBox>
                  <div>
                    <img src={data.stageThumbnailImage} />
                    <div>
                      <p>{data.stageTitle}</p>
                      <span>{data.artistId}</span>
                    </div>
                  </div>
                  <Ticket>
                    <img src={data.ticketImg} className="ticket" />
                    {data.ticket}
                  </Ticket>
                </StageContentBox>
              </StageBox>
            </>
          ))}
      </StageContainer>
    </Container>
  );
};

const Ticket = styled.div`
  font-size: 1rem;
`;

const StageContentBox = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  > div {
    display: flex;
    > img {
      max-width: 40px;
      height: 40px;
      border-radius: 20px;
      &.ticket {
        max-width: 18px;
        height: 19px;
        margin-right: 10px;
      }
    }
    > div {
      margin-left: 10px;
      > p {
        font-size: 1rem;
      }
      > span {
        font-size: 0.875rem;
        color: #a0a0a0;
      }
    }
  }
`;

const ImageArea = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 12px;
`;

const Figure = styled.a<{ artist: string }>`
  display: block;
  position: relative;
  padding-bottom: 65%;
  width: 100%;
  ${(props) => props.artist === "artist" && `padding-bottom: 90%`}
`;

const StageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StageBox = styled.div`
  width: 24%;
  margin-top: 24px;
`;

const Menu = styled.a<{ isHere: boolean }>`
  margin-right: 30px;
  color: #b0b0b0;
  padding: 0 10px;
  :hover {
    color: #ffffff;
    border-bottom: 2px solid #273dff;
    padding-bottom: 5px;
  }
  ${(props) =>
    props.isHere
      ? `
      color: #ffffff;
      border-bottom: 2px solid #273DFF;
      padding-bottom: 5px;
  `
      : `
      color: #8B8B8B;
  `}
`;

const MenuBar = styled.div`
  display: flex;
`;

const Container = styled.main`
  width: calc(100vw - 250px);
  margin-left: 250px;
  height: 100vh;
  background: #14141c;
  color: #ffffff;
  padding: 30px;
`;

export default index;
