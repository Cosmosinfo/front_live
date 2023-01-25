import React from "react";
import styled from "styled-components";
import { Carousel } from "./carousel";

function HomeBanner() {
  const images = [
    {
      image: "/images/img1.jpg",
    },
    {
      image: "/images/img1.jpg",
    },
    {
      image: "/images/img1.jpg",
    },
  ];
  return (
    <Banner>
      <Carousel
        //accepts news data
        data={images}
        //time interval milliseconds between each picture
        time={4000}
        //width of carousel
        width="100&"
        //height of carousel
        height="400px"
        //constitutes the border radius of each slide px
        radius="6px"
        //enables automatic transitioning between slides
        automatic={true}
        //enables visual dots between slides
        dots={true}
        showNavBtn={true}
        //changes object fit I used cover to avoud stretching
        slideImageFit="cover"
        thumbnailWidth="100px"
      />
    </Banner>
  );
}

const Banner = styled.div`
  margin-bottom: 12px;
`;

export default HomeBanner;
