import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination]);

const images = [
  {
    imgUrl: "https://img.freepik.com/premium-vector/k-pop-music-concept-illustrated_23-2148633832.jpg",
  },
  {
    imgUrl: "https://assets.vogue.com/photos/62ec0f8872de9093ac1bd94a/3:2/w_3000,h_2000,c_limit/1143890227",
  },
  {
    imgUrl: "https://img.freepik.com/free-vector/k-pop-boy-group-concept_52683-43989.jpg?w=2000",
  },
];

const artistData = [
  {
    id: 1,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    profile: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    name: "아이유",
    category: "발라드, 팝송",
  },
  {
    id: 2,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    profile: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    name: "아이유",
    category: "발라드, 팝송",
  },
  {
    id: 3,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    profile: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    name: "아이유",
    category: "발라드, 팝송",
  },
  {
    id: 4,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    profile: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    name: "아이유",
    category: "발라드, 팝송",
  },
  {
    id: 5,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    profile: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    name: "아이유",
    category: "발라드, 팝송",
  },
  {
    id: 6,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    profile: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    name: "아이유",
    category: "발라드, 팝송",
  },
];

const liveData = [
  {
    stageId: 1,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    title: "공연제목",
    artist: "공연 참여 아티스트",
    ticket: "1장",
  },
  {
    stageId: 2,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    title: "공연제목",
    artist: "공연 참여 아티스트",
    ticket: "1장",
  },
  {
    stageId: 3,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    title: "공연제목",
    artist: "공연 참여 아티스트",
    ticket: "1장",
  },
  {
    stageId: 4,
    imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/03/10/202203100359236346_0.jpg",
    title: "공연제목",
    artist: "공연 참여 아티스트",
    ticket: "1장",
  },
];

const Main = () => {
  SwiperCore.use([Navigation]);

  return (
    <Container>
      <Swiper
        height={500}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.imgUrl} alt="banner" width="100%" height={500} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Section>
        <ArtistContainer>
          <Title>새로운 아티스트</Title>
          <Swiper slidesPerView={6} height={300}>
            {artistData.map((artist, id) => (
              <SwiperSlide key={id}>
                <img src={artist.imgUrl} alt="artist" />
              </SwiperSlide>
            ))}
          </Swiper>
        </ArtistContainer>
        <LiveStageContainer>
          <Title>라이브 스테이지</Title>
          <LiveStage>
            {liveData.map((data, id) => (
              <div key={id}>
                <img src={data.imgUrl} width="380px" height="240px" />
                <LiveTitle>
                  {data.title}
                  <p>{data.artist}</p>
                </LiveTitle>
                <LiveTicket>{data.ticket}</LiveTicket>
              </div>
            ))}
          </LiveStage>
        </LiveStageContainer>
      </Section>
    </Container>
  );
};

const LiveTicket = styled.div``;

const LiveTitle = styled.div``;

const LiveStage = styled.div`
  display: flex;
`;

const LiveStageContainer = styled.section`
  margin-top: 30px;
`;

const Title = styled.div`
  display: inline-block;
  padding-right: 30px;
  background: url("/images/blue_arrow.svg") no-repeat right;
  font-size: 1.25rem;
  font-weight: 600;
`;

const ArtistContainer = styled.div``;

const Section = styled.section`
  margin: 30px;
`;

const Container = styled.main`
  width: 100%;
  background: #1e1e1e;
  color: #ffffff;
`;

// const ArtistSwiper = styled(Swiper)``;

// const StyledSwiper = styled(Swiper)`
//   height: 500px;
// `;

export default Main;
