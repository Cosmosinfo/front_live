import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const paid = {
  comet: 30,
  total_ticket: 30,
  clover: 10,
  spade: 20,
  heart: 10,
  dia: 0,
};
const index = () => {
  const [selected, setSelected] = useState({
    comet: "",
    ticket: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setSelected({
      ...selected, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <Container>
      {/* <Wrap>
        <p>결제하기</p>
        <CometWrap>
          <span>보유 코멧</span>30
        </CometWrap>
        <TicketWrap>
          <p>보유 티켓</p>
          <Ticket>
            <TicketBorder>
              <IndividualTicket ticket="clover">30장</IndividualTicket>
              <IndividualTicket ticket="dia">30장</IndividualTicket>
            </TicketBorder>
            <div style={{ paddingLeft: "24px" }}>
              <IndividualTicket ticket="heart">30장</IndividualTicket>
              <IndividualTicket ticket="spade">30장</IndividualTicket>
            </div>
          </Ticket>
        </TicketWrap>
        <TicketWrap>
          <p>코멧 구매</p>
          <CometDiv>
            <div>
              <CometInput type="radio" name="comet" value="10000" checked={selected.comet === "10000"} onChange={handleChange} />
              <CometLabel ticket="comet">코멧</CometLabel>
            </div>
            <div>￦ 10000</div>
          </CometDiv>
          <CometDiv>
            <div>
              <CometInput type="radio" name="comet" value="30000" checked={selected.comet === "30000"} onChange={handleChange} />
              <CometLabel ticket="comet">코멧</CometLabel>
            </div>
            <div>￦ 30000</div>
          </CometDiv>
          <CometDiv>
            <div>
              <CometInput type="radio" name="comet" value="50000" checked={selected.comet === "50000"} onChange={handleChange} />
              <CometLabel ticket="comet">코멧</CometLabel>
            </div>
            <div>￦ 50000</div>
          </CometDiv>
        </TicketWrap>
        <TicketWrap>
          <p>티켓 구매</p>
          <CometDiv>
            <div>
              <CometInput type="radio" name="ticket" value="10000" checked={selected.ticket === "10000"} onChange={handleChange} />
              <CometLabel ticket="clover">클로버</CometLabel>
            </div>
            <div>￦ 10000</div>
          </CometDiv>
          <CometDiv>
            <div>
              <CometInput type="radio" name="ticket" value="20000" checked={selected.ticket === "20000"} onChange={handleChange} />
              <CometLabel ticket="dia">다이아</CometLabel>
            </div>
            <div>￦ 20000</div>
          </CometDiv>
          <CometDiv>
            <div>
              <CometInput type="radio" name="ticket" value="30000" checked={selected.ticket === "30000"} onChange={handleChange} />
              <CometLabel ticket="heart">하트</CometLabel>
            </div>
            <div>￦ 30000</div>
          </CometDiv>
          <CometDiv>
            <div>
              <CometInput type="radio" name="ticket" value="40000" checked={selected.ticket === "40000"} onChange={handleChange} />
              <CometLabel ticket="spade">스페이드</CometLabel>
            </div>
            <div>￦ 40000</div>
          </CometDiv>
        </TicketWrap>
        <Link
          href={{
            pathname: "/setting/coin/payment",
            query: selected,
          }}
        >
          <Button>다음</Button>
        </Link>
      </Wrap> */}
      <Wrap>
        <Left>
          <Comet>
            보유 코멧<p>{paid.comet}</p>
          </Comet>
          <Ticket>
            <TicketTop>
              보유 티켓<p>{paid.total_ticket}</p>
            </TicketTop>
            <TicketDes>
              <div>
                <p>클로버</p>
                {paid.clover}장
              </div>
              <div>
                <p>스페이드</p>
                {paid.spade}장
              </div>
              <div>
                <p>하트</p>
                {paid.heart}장
              </div>
              <div>
                <p>다이아</p>
                {paid.dia}장
              </div>
            </TicketDes>
          </Ticket>
          <CometButton>코멧 및 티켓 구매하기</CometButton>
        </Left>
        <Right></Right>
      </Wrap>
    </Container>
  );
};

const CometButton = styled.button`
  height: 60px;
  padding: auto;
  margin-top: 24px;
  width: 100%;
  background: #273dff;
  border-radius: 36px;
`;

const TicketDes = styled.div`
  margin-top: 12px;
  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
`;

const Right = styled.div`
  flex: 0.66;
`;

const TicketTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #2b2b39;
  font-size: 1.25rem;
`;

const Ticket = styled.div`
  margin-top: 12px;
  padding: 25px 30px;
  background: #181820;
  border-radius: 12px;
  font-size: 1.25rem;
`;

const Comet = styled.div`
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  background: #181820;
  border-radius: 12px;
  font-size: 1.25rem;
  > p {
    background: url("/images/ranking.svg") no-repeat left;
    background-size: 24px;
    padding-left: 30px;
  }
`;

const Left = styled.div`
  flex: 0.34;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
`;

// const Button = styled.button`
//   display: block;
//   max-width: 120px;
//   margin: 24px auto 0;
//   padding: 15px 45px;
//   background: #273dff;
//   border-radius: 36px;
//   font-size: 1rem;
// `;

// const CometDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 13px;
//   padding-bottom: 7px;
//   border-bottom: 1px solid #2e2e33;
//   > span {
//     text-align: right;
//   }
//   > div {
//     font-size: 1rem;
//   }
// `;

// const CometLabel = styled.label<{ ticket: string }>`
//   background: url("/images/comet.svg") no-repeat 10px;
//   background-size: 24px;
//   padding-left: 40px;
//   ${({ ticket }) => {
//     switch (ticket) {
//       case "clover":
//         return `background: url("/images/ticket_clover.svg") no-repeat 10px`;
//       case "dia":
//         return `background: url("/images/ticket_dia.svg") no-repeat 10px;`;
//       case "heart":
//         return `background: url("/images/ticket_heart.svg") no-repeat 10px`;
//       case "spade":
//         return `background: url("/images/ticket_spade.svg") no-repeat 10px;`;
//     }
//   }}
// `;

// const IndividualTicket = styled.div<{ ticket: string }>`
//   text-align: right;
//   font-size: 1rem;
//   ${({ ticket }) => {
//     switch (ticket) {
//       case "clover":
//         return `background: url("/images/ticket_clover.svg") no-repeat left`;
//       case "dia":
//         return `background: url("/images/ticket_dia.svg") no-repeat left; margin-top: 16px;`;
//       case "heart":
//         return `background: url("/images/ticket_heart.svg") no-repeat left`;
//       case "spade":
//         return `background: url("/images/ticket_spade.svg") no-repeat left; margin-top: 16px;`;
//     }
//   }}
// `;

// const CometInput = styled.input``;

// const TicketBorder = styled.div`
//   border-right: 2px solid #2e2e33;
//   padding-right: 24px;
// `;

// const Ticket = styled.div`
//   display: flex;
//   padding-top: 20px;
//   > div {
//     width: 50%;
//   }
// `;

// const TicketWrap = styled.div`
//   margin-top: 16px;
//   padding: 12px 24px 24px;
//   background: #26262b;
//   border-radius: 12px;
//   > p {
//     font-size: 0.875rem;
//   }
// `;

// const CometWrap = styled.div`
//   width: fit-content;
//   margin-top: 12px;
//   padding: 7px 12px;
//   background: #26262a;
//   border-radius: 100px;
//   font-size: 0.875rem;
//   > span {
//     padding-right: 25px;
//     margin-right: 5px;
//     background: url("/images/ranking.svg") no-repeat right;
//     background-size: 16px 16px;
//   }
// `;

// const Wrap = styled.div`
//   margin: 100px auto;
//   width: 520px;
//   height: fit-content;
//   background: #181820;
//   border-radius: 24px;
//   padding: 24px;
//   > p {
//     text-align: center;
//   }
// `;

const Container = styled.main`
  width: calc(100vw - 250px);
  margin-left: 250px;
  height: 100%;
  background: #14141c;
  color: #ffffff;
  padding: 30px;
  display: flex;
  padding-top: 30px;
`;

export default index;
