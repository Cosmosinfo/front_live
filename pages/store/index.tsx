import React from "react";
import styled from "styled-components";
import Link from "next/link";
// import HomeBanner from "../../components/HomeBanner";

const stores = [
  {
    id: 1,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    link: "",
    type: ["주얼리", "아우터", "굿즈"],
  },
  {
    id: 2,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    link: "",
    type: ["주얼리", "아우터", "굿즈"],
  },
  {
    id: 3,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    link: "",
    type: ["주얼리", "아우터", "굿즈"],
  },
  {
    id: 4,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    link: "",
    type: ["주얼리", "아우터", "굿즈"],
  },
];

const items = [
  {
    id: 1,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 2,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 3,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 4,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 5,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 6,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 7,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 8,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 9,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 10,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 11,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
  {
    id: 12,
    imgUrl: "/images/artist.png",
    name: "밀코메다의 샵",
    company: "샤오미 프로",
    price: "58,000",
    link: "",
  },
];

const index = () => {
  return (
    <Container>
      {/* <HomeBanner /> */}
      <Store>
        <div>스토어</div>
        <StoreWrapper>
          {stores.map((store, index) => (
            <Link href={store.link} key={index} legacyBehavior passHref>
              <Stores>
                <img src={store.imgUrl} width="30%" />
                <p>{store.name}</p>
                <div>
                  {store.type.map((type, index) => (
                    <div key={index}>{type}</div>
                  ))}
                </div>
              </Stores>
            </Link>
          ))}
        </StoreWrapper>
        <Wrap>
          <div>추천상품</div>
          <Shop>
            {items.map((data, id) => (
              <div key={id}>
                <img src={data.imgUrl} />
                <div>
                  <p className="name">{data.name}</p>
                  <p className="company">{data.company}</p>
                  <p className="cost">{data.price}원</p>
                </div>
              </div>
            ))}
          </Shop>
        </Wrap>
      </Store>
    </Container>
  );
};

const Shop = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 24%;
    display: flex;
    background: #181820;
    border-radius: 4px;
    margin-top: 20px;
    margin-right: 20px;
    &:nth-child(4n + 0) {
      margin-right: 0;
    }
    @media (max-width: 1500px) {
      width: 23.5%;
    }
    > img {
      width: 90px;
      height: 90px;
    }
    > div {
      padding: 12px;
      > p {
        &.name {
          font-size: 1rem;
        }
        &.company {
          color: #757575;
        }
        &.cost {
          padding-top: 12px;
          color: #adadad;
        }
      }
    }
  }
`;

const Wrap = styled.div`
  margin-top: 36px;
`;

const Stores = styled.div`
  width: 24%;
  background: #181820;
  padding: 12px 24px;
  border-radius: 24px;
  > img {
    border-radius: 8px;
  }
  > p {
    margin: 12px 0;
    font-size: 1rem;
  }
  > div {
    display: flex;
    > div {
      font-size: 0.875rem;
      padding: 6px 10px;
      border: 1px solid #535373;
      border-radius: 100px;
      margin-right: 10px;
    }
  }
`;

const StoreWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Store = styled.div`
  margin-top: 16px;
  padding: 30px;
`;

const Container = styled.main`
  width: calc(100vw - 250px);
  margin-left: 250px;
  height: 100%;
  background: #1e1e1e;
  color: #ffffff;
`;

export default index;
