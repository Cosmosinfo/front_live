import React from "react";
import styled from "styled-components";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { PayPalButtonsComponentProps } from "@paypal/paypal-js/types/components/buttons";

const paypalScriptOptions: PayPalScriptOptions = {
  "client-id": `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
  "currency": "USD",
};

const data = {
  comet: 40,
  ticket: 30,
};

function Button() {
  /**
   * usePayPalScriptReducer use within PayPalScriptProvider
   * isPending: not finished loading(default state)
   * isResolved: successfully loaded
   * isRejected: failed to load
   */
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
    style: { layout: "vertical" },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "0.01",
            },
          },
        ],
      });
    },
    onApprove(data, actions) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */
      return actions.order.capture({}).then((details: any) => {
        alert("Transaction completed by" + (details?.payer.name.given_name ?? "No details"));

        alert("Data details: " + JSON.stringify(data, null, 2));
      });
    },
  };
  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </>
  );
}

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
      <Card>카드 정보 입력</Card>
      <PayPalScriptProvider options={paypalScriptOptions}>
        <Button />
      </PayPalScriptProvider>
    </>
  );
};

const Card = styled.div`
  margin-bottom: 20px;
`;

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
