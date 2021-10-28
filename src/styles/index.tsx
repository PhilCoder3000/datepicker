import styled from "styled-components";
import svgSprit from '../assets/main-ui-control.svg'

export const DatePickerStyle = styled.div`
  position: relative;
  width: ${({ calendarWidth }: { calendarWidth: string }) => calendarWidth};
  height: 40px;
  display: flex;
  border: 1px solid #ccc;
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 35px;
    height: 38px;
    background: url(${svgSprit}) 6px -232px no-repeat;
  }
  * {
    font-family: "Open Sans", sans-serif;
  }
`;

export const DateFieldStyle = styled.input`
  position: absolute;
  padding: 10px 30px;
  width: 100%;
  height: 100%;
  border: ${({ border }: { border: boolean }) => (border ? "1px solid red" : "1px solid #fff")};
  background: none;
  outline: none;
  cursor: pointer;
`;

export const InvalidMessage = styled.div`
  position: absolute;
  top: -110%;
  padding: 3px 10px;
  display: ${({ show }: { show: boolean }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  background: red;
  border-radius: 5px;
  color: #fff;
  & p {
    font-size: 12px;
  }
  & span {
    font-size: 14px;
  }
`;

export const CalendarWindowStyle = styled.div`
  position: absolute;
  top: 105%;
  z-index: 1;
  padding: 5px;
  width: 220px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  opacity: ${({ show }: {show: boolean}) => (show ? 1 : 0)};
  transform: ${({ show }) =>
    show ? "translateY(0%) scaleY(1)" : "translateY(-50%) scaleY(0)"};
`;

export const HeaderStyle = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButtonPrev = styled.button`
  position: relative;
  width: 25px;
  height: 70%;
  background: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background: #eeeeee;
  }
  &::before {
    content: "";
    position: absolute;
    left: 35%;
    top: 40%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 5px 4px 0;
    border-color: transparent #000000 transparent transparent;
    opacity: 0.15;
  }
`;

export const HeaderButtonNext = styled(HeaderButtonPrev)`
  &::before {
    left: 40%;
    transform: rotate(180deg);
  }
`;

export const DaysOfWeekStyle = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15px;
  background: #eee;
  & p {
    font-size: 10px;
    color: #a9a9a9;
  }
`;

export const BodyStyle = styled.div`
  display: grid;
  grid-template: auto / repeat(7, 1fr);
`;

export const BodyItemStyle = styled.button`
  grid-column: ${({ column }: {column: number, current: boolean, color: string}) => column};
  width: 100%;
  height: 25px;
  background: ${({ current }) => (current ? "#dce3ea" : "#ffffff")};
  border: none;
  border-bottom: 1px solid #f3f2ed;
  color: ${({ color }) => color};
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
`;

export const MonthContainer = styled.div`
  position: relative;
  width: 95px;
  height: 80%;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
  &::after {
    content: "";
    position: absolute;
    top: 45%;
    right: 5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-color: #000000 transparent transparent transparent;
    opacity: 0.15;
  }
`;

export const MonthInput = styled.input`
  position: absolute;
  padding-right: 15px;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  text-align: center;
  font-size: 16px;
  color: #000;
  cursor: pointer;
`;

export const MonthOptions = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background: #fff;
  overflow-x: hidden;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  opacity: ${({ show }: {show: boolean}) => (show ? 1 : 0)};
  transform: ${({ show }) =>
    show ? "translateY(0%) scaleY(1)" : "translateY(-50%) scaleY(0)"};
`;

export const MonthItem = styled.button`
  width: 100%;
  min-height: 25px;
  background: none;
  border: none;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

export const YearContainer = styled(MonthContainer)`
  width: 55px;
`;

export const YearInput = styled(MonthInput)``;

export const YearOptions = styled(MonthOptions)``;

export const YearItem = styled(MonthItem)``;

export const EnableTime = styled.button`
  width: 100%;
  height: 20px;
  background: none;
  border: none;
  font-size: 10px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const TimeContainer = styled.div`
  width: 100%;
`;

export const TimeSetting = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: #ccc;
  & p {
    width: 35px;
    font-size: 12px;
  }
  & span {
    margin: 0 3px;
    font-size: 20px;
  }
  & button {
    margin: 0;
    margin-left: 15px;
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    color: #ccc;
    &:hover {
      background: #ececec;
    }
  }
`;

export const TimeInput = styled.input`
  width: 30px;
  height: 23px;
  background: none;
  border: 1px solid #ccc;
  color: #000;
  text-align: center;
  outline: none;
`;

export const TimeButton = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:first-of-type {
    margin-left: auto;
  }
  &:last-of-type {
    margin-right: auto;
  }
  & span {
    position: relative;
    width: 11px;
    height: 11px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
    &::before {
      content: "";
      position: absolute;
      top: 25%;
      left: 25%;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 3px 4px 3px;
      border-color: transparent transparent #ccc transparent;
    }
    &:last-of-type::before {
      top: 30%;
      transform: rotate(180deg);
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  & button {
    width: 70px;
    height: 23px;
    background: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 12px;
    &:hover {
      background: #ececec;
    }
    &:first-of-type {
      margin-left: auto;
      margin-right: 10px;
    }
    &:last-of-type {
      margin-right: auto;
    }
  }
`;
