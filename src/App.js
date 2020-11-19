import React, { useState } from 'react';
import styled from 'styled-components';
import { Door } from './Door';
import Penguining from './penguining.jpg';
import { quotesArray } from './quotesArray';
import mainBackgroundImage from './cold-firs-forest.jpg';

const today = new Date().getDate();

const AppWrapper = styled.div`
  --grid-spacing: 40px;
  /* height: 100vh;
  width: 100vw; */
  height: 760px;
  width: 835px;
  /* background-color: var(--background-color); */
  background-image: url(${mainBackgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f5cac3;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  transition: all 0.4s ease-out;
  cursor: pointer;
  :hover {
    background-color: #f5cac3;
    color: #84a59d;
  }
`;

const CalendarGrid = styled.div`
  // adjust theese later
  height: 90%;
  width: 90%;
  /* height: auto;
  width: auto; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: var(--grid-spacing) var(--grid-spacing);
  grid-template-areas:
    'day1 day2 day3 day4 day5'
    'day6 day7 day8 day9 day10'
    'day11 day12 day13 day14 day15'
    'day16 day17 day18 day19 day24'
    'day20 day21 day22 day23 day24';
  .clicked {
    background-color: #f28482;
  }
  .day1 {
    grid-area: day1;
  }
  .day2 {
    grid-area: day2;
  }
  .day3 {
    grid-area: day3;
  }
  .day4 {
    grid-area: day4;
  }
  .day5 {
    grid-area: day5;
  }
  .day6 {
    grid-area: day6;
  }
  .day7 {
    grid-area: day7;
  }
  .day8 {
    grid-area: day8;
  }
  .day9 {
    grid-area: day9;
  }
  .day10 {
    grid-area: day10;
  }
  .day11 {
    grid-area: day11;
  }
  .day12 {
    grid-area: day12;
  }
  .day13 {
    grid-area: day13;
  }
  .day14 {
    grid-area: day14;
  }
  .day15 {
    grid-area: day15;
  }
  .day16 {
    grid-area: day16;
  }
  .day17 {
    grid-area: day17;
  }
  .day18 {
    grid-area: day18;
  }
  .day19 {
    grid-area: day19;
  }
  .day20 {
    grid-area: day20;
  }
  .day21 {
    grid-area: day21;
  }
  .day22 {
    grid-area: day22;
  }
  .day23 {
    grid-area: day23;
  }
  .day24 {
    grid-area: day24;
  }
`;

function App() {
  const [clickedArray, setClickedArray] = useState(new Array(24));

  const toggleDay = (day) => {
    // if (today < 1 + day) {
    //   return;
    // }
    let newArray = [...clickedArray];
    newArray[day] = !newArray[day];
    setClickedArray(newArray);
  };

  return (
    <AppWrapper>
      <CalendarGrid>
        {quotesArray.map((quote, index) => (
          <Day key={quote} className={`day${index + 1}`}>
            <Door
              day={index + 1}
              open={clickedArray[index]}
              setOpen={() => toggleDay(index)}
              text={quote}
              isUnlocked={today < 1 + index}
              // isUnlocked={true} // temporarily unlock all doors
              // backgroundImage={Penguining}
            />
          </Day>
        ))}
      </CalendarGrid>
    </AppWrapper>
  );
}

export default App;
