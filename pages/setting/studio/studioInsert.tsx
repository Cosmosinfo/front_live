import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const music = [
  {
    id: 1,
    type: "케이팝",
  },
  {
    id: 2,
    type: "알앤비",
  },
  {
    id: 3,
    type: "락/메탈",
  },
  {
    id: 4,
    type: "팝",
  },
  {
    id: 5,
    type: "일렉트로닉",
  },
  {
    id: 6,
    type: "얼터너티브",
  },
  {
    id: 7,
    type: "제이팝",
  },
  {
    id: 8,
    type: "발라드",
  },
  {
    id: 9,
    type: "재즈",
  },
  {
    id: 10,
    type: "컨트리",
  },
  {
    id: 11,
    type: "힙합",
  },
  {
    id: 12,
    type: "펑크",
  },
  {
    id: 13,
    type: "메탈",
  },
  {
    id: 14,
    type: "댄스",
  },
  {
    id: 15,
    type: "클래식",
  },
  {
    id: 16,
    type: "이디엠",
  },
  {
    id: 17,
    type: "레게",
  },
  {
    id: 18,
    type: "인디",
  },
];

const ticket = [
  {
    id: 1,
    imgUrl: "/images/ticket_clover.svg",
    ticket: "클로버",
  },
  {
    id: 2,
    imgUrl: "/images/ticket_heart.svg",
    ticket: "하트",
  },
  {
    id: 3,
    imgUrl: "/images/ticket_dia.svg",
    ticket: "다이아",
  },
  {
    id: 4,
    imgUrl: "/images/ticket_spade.svg",
    ticket: "스페이드",
  },
];

const studioInsert = () => {
  const [imageSrc, setImageSrc] = useState<any>("");
  const [startDate, setStartDate] = useState(new Date());
  const [timeDate, setTimeDate] = useState(new Date());
  const [selected, setSelected] = useState("케이팝");
  const [selectedTicket, setSelectedTicket] = useState("클로버");

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
  };

  const handleSelectTicket = (e: any) => {
    setSelectedTicket(e.target.value);
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <Container>
      <p>공연 등록</p>
      <Main>
        <Left>
          <p>공연 썸네일</p>
          <div className="camera"> {imageSrc && <Img src={imageSrc} alt="preview-img" width="520px" height="325px" />}</div>
          <div className="des">
            <span>사이즈 : 520*325px</span>
            <Label
              htmlFor="file"
              onChange={(e: any) => {
                encodeFileToBase64(e.target.files[0]);
              }}
            >
              <div> 파일 업로드</div>
            </Label>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e: any) => {
                encodeFileToBase64(e.target.files[0]);
              }}
            />
          </div>
        </Left>
        <Right>
          <Wrap>
            <span>공연 제목</span>
            <input placeholder="공연 기획사" />
          </Wrap>
          <Wrap>
            <StageCalendar>
              <div className="left">
                <TimeTitle className="title">공연 일정</TimeTitle>
                <StyledDatepicker
                  dateFormat="yyyy/MM/dd"
                  selected={startDate}
                  onChange={(date: any) => setStartDate(date)}
                  minDate={new Date()}
                />
                {/* <input className="date" placeholder="YYYY/MM/DD" /> */}
              </div>
              <div className="right">
                <TimeTitle className="title">공연 일정</TimeTitle>
                <TimeDatepicker
                  selected={timeDate}
                  onChange={(date: any) => setTimeDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                />
              </div>
            </StageCalendar>
          </Wrap>
          <Wrap>
            <Title className="title">공연 장소</Title>
            <input placeholder="서울특별시 관악구 벽산아파트 301-906" />
          </Wrap>
          <Wrap>
            <Title className="title">참여 아티스트</Title>
            <input placeholder="공연 기획사" />
          </Wrap>
          <Wrap>
            <StageCalendar>
              <div className="left">
                <TimeTitle className="title">공연 장르</TimeTitle>
                <Select onChange={handleSelect} value={selected}>
                  {music.map((item, index) => (
                    <option value={item.type} key={index}>
                      {item.type}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <TimeTitle className="title">티켓 종류</TimeTitle>
                <Select onChange={handleSelectTicket} value={selectedTicket}>
                  {ticket.map((item, index) => (
                    <option value={item.ticket} key={index}>
                      {item.ticket}
                    </option>
                  ))}
                </Select>
              </div>
            </StageCalendar>
          </Wrap>
          <Wrap>
            <StageCalendar>
              <div className="left">
                <TimeTitle className="title">성인 콘텐츠 설정</TimeTitle>
              </div>
              <div>
                <TimeTitle className="title">스튜디오</TimeTitle>
              </div>
            </StageCalendar>
          </Wrap>
          <Wrap>
            <Title className="title">공연 설명</Title>
            <textarea placeholder="공연 설명 입력" />
          </Wrap>
          <ButtonWrap>
            <button className="cancel">취소</button>
            <button>등록</button>
          </ButtonWrap>
        </Right>
      </Main>
    </Container>
  );
};

const Select = styled.select`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 100px;
  background: #d9d9d91a;
  color: #ffffff;
  padding: 0 12px;
  font-size: 1rem;
`;

const TimeDatepicker = styled(DatePicker)`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 100px;
  background: #d9d9d91a;
  color: #ffffff;
  padding: 0 12px;
`;

const StyledDatepicker = styled(DatePicker)`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 100px;
  background: #d9d9d91a;
  color: #ffffff;
  padding: 0 12px;
`;

const Img = styled.img`
  border-radius: 12px;
`;

const Label = styled.label`
  padding: 7px 12px 7px 42px;
  background: url("/images/setting/document.svg") no-repeat 10% center #273dff;
  border-radius: 24px;
  font-size: 1rem;
  cursor: pointer;
`;

const StageCalendar = styled.div`
  display: flex;
  > div {
    width: 50%;
    &.left {
      margin-right: 24px;
    }
    > input {
      height: 40px;
      border: none;
      border-radius: 100px;
      background: #d9d9d91a;
      color: #ffffff;
      padding: 0 12px;
      &.date {
        width: 100%;
        margin-right: 24px;
      }
      &.time {
        width: 50%;
      }
    }
  }
`;

const TimeTitle = styled.div`
  font-size: 1rem;
  margin: 24px 0 12px;
`;

const Title = styled.div`
  margin-top: 24px;
  font-size: 1rem;
`;

const Wrap = styled.div`
  > span {
    font-size: 1rem;
  }
  > input {
    width: 100%;
    height: 40px;
    margin-top: 12px;
    padding: 0 12px;
    background: #d9d9d91a;
    border: none;
    border-radius: 100px;
    font-size: 1rem;
    color: #ffffff;
  }
  > textarea {
    margin-top: 12px;
    width: 100%;
    height: 160px;
    background: #d9d9d91a;
    border-radius: 12px;
    border: none;
    padding: 12px;
    resize: none;
    font-size: 1rem;
    color: #ffffff;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 24px;
  font-size: 1rem;
  > button {
    width: 50%;
    height: 60px;
    padding: 20px auto;
    border-radius: 200px;
    background: #273dff;
    &.cancel {
      margin-right: 24px;
      border: 1px solid #888888;
      background: #14141c;
    }
  }
`;

const Left = styled.div`
  width: 50%;
  margin-right: 24px;
  > p {
    font-size: 1rem;
    margin-bottom: 12px;
  }
  > div {
    > span {
      color: #c2c2c2;
      font-size: 1rem;
    }
    &.camera {
      max-width: 520px;
      height: 325px;
      background: url("/images/setting/setting_camera.svg") no-repeat center #d9d9d91a;
      border-radius: 12px;
      margin-bottom: 12px;
    }
    &.des {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  > p {
    font-size: 1rem;
    margin-bottom: 12px;
  }
`;

const Main = styled.div`
  margin-top: 22px;
  max-width: 1064px;
  display: flex;
`;

const Container = styled.main`
  width: calc(100vw - 250px);
  margin-left: 250px;
  height: 100%;
  background: #14141c;
  color: #ffffff;
  padding: 30px;
  padding-top: 30px;
  > p {
    font-size: 1.25rem;
  }
`;

export default studioInsert;
