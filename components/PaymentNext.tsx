import React from "react";
import styled from "styled-components";
import paypal from "paypal-rest-sdk";

const data = {
  comet: 40,
  ticket: 30,
};

const PaymentNext = () => {
  return (
    <>
      <div>결제 내용</div>
      <CometWrap>
        {data.comet && (
          <Payment>
            <div>코멧</div>
            <div>{data.comet}</div>
          </Payment>
        )}
        {data.ticket && (
          <Payment>
            <div>코멧</div>
            <div>{data.ticket}</div>
          </Payment>
        )}
        <Bottom>
          <div>결제 금액</div>
          <div>{data && Number(data.comet) + Number(data.ticket)}</div>
        </Bottom>
      </CometWrap>
      <div>카드 정보 입력</div>
    </>
  );
};

const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #2e2e33;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    font-size: 1rem;
  }
`;

const CometWrap = styled.div`
  padding: 24px;
  margin: 12px 0 24px;
  background: #26262b;
  border-radius: 12px;
`;

export default PaymentNext;
