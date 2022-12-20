import Main from "components/Main";
import MainLeft from "components/MainLeft";
import MainTop from "components/MainTop";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <MainTop />
      <Wrap>
        <MainLeft />
        <Main />
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
`;
