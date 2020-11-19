import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import mainBackgroundImage from './cold-firs-forest.jpg';

const initialCoordinates = {
  leftDoorLeft: 40.75,
  leftDoorTop: 34,
  rightDoorLeft: 96,
  rightDoorTop: 34,
};

const StyledDoorContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f7ede2;
  border: 1px solid var(--green-black);
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  .front {
    z-index: 228;
    border-radius: 5px;
    padding: 10px;
    font-size: 8px;
    color: white;
    background-color: var(--yallow-base);
    /* transform: scale(4); */
    transform: scale(4)
      ${({ leftDoorLeft, leftDoorTop }) =>
        `translate(${leftDoorLeft}px, ${leftDoorTop}px)}`};
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 1;
  /* height: 400px;
  width: 250px; */
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.7s ease-in-out;
  p {
    color: #5c7457;
    font-size: 7px;
  }
`;

const DoorWing = styled.div`
  z-index: 108;
  width: 50%;
  border: 1px solid var(--green-dark);
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.47, 0, 0.745, 0.715);
`;

const LeftDoorWing = styled(DoorWing)`
  transform-origin: left;
  border: 1px solid
    ${({ isUnlocked }) =>
      isUnlocked ? 'var(--red-base-dark)' : 'var(--green-base-dark)'};
  transform: ${({ open }) =>
    open
      ? 'perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg)'
      : 'null'};
`;

const RightDoorWing = styled(DoorWing)`
  transform-origin: right;
  border: 1px solid
    ${({ isUnlocked }) =>
      isUnlocked ? 'var(--red-base-dark)' : 'var(--green-base-dark)'};
  transform: ${({ open }) =>
    open
      ? 'perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(110deg)'
      : 'null'};
`;

const OutsideDoorWing = styled.div`
  backface-visibility: hidden;
  top: 0px;
  height: 100%;
  width: 100%;
  background-image: url(${mainBackgroundImage});
  background-position: ${(props) =>
    `-${props.elementLeft}px -${props.elementTop}px`};
`;

const InsideDoorWing = styled.div`
  transform: rotateY(180deg);
  backface-visibility: hidden;
  position: absolute;
  top: 0px;
  height: 100%;
  width: 100%;
  background-color: var(--red-base);
`;

export const Door = ({
  day,
  isUnlocked,
  open,
  setOpen,
  backgroundImage,
  text,
}) => {
  const [displayText, setDisplayText] = useState(false);
  const [leftDoorTop, setLeftDoorTop] = useState(0);
  const [leftDoorLeft, setLeftDoorLeft] = useState(0);
  const [rightDoorTop, setRightDoorTop] = useState(0);
  const [rightDoorLeft, setRightDoorLeft] = useState(0);
  const doorRef = useRef();
  const [textAreaOffset, setTextAreaOffset] = useState([0, 0]);

  useEffect(() => {
    // the 40 is equal to the grid spacing
    // grid cell is 118/108
    // half width of the image is 417.5px
    // the offset below might end up being useless
    var viewportOffset = doorRef.current.getBoundingClientRect();
    if (day < 6) {
      const index = day - 1;
      setLeftDoorLeft(initialCoordinates.leftDoorLeft + index * (42 + 118));
      setLeftDoorTop(initialCoordinates.leftDoorTop);
      setRightDoorLeft(initialCoordinates.rightDoorLeft + index * (42 + 118));
      setRightDoorTop(initialCoordinates.rightDoorTop);
      if (index < 2) {
        setTextAreaOffset([79 - index * 40, 75]);
      }
      if (index > 2) {
        setTextAreaOffset([-(40 + (index - 3) * 40), 75]);
      }
      if (index === 2) {
        setTextAreaOffset([0, 75]);
      }
    }
    if (day > 5 && day < 11) {
      const index = day - 6;
      setLeftDoorLeft(initialCoordinates.leftDoorLeft + index * (42 + 118));
      setLeftDoorTop(initialCoordinates.leftDoorTop + 108 + 38);
      setRightDoorLeft(initialCoordinates.rightDoorLeft + index * (42 + 118));
      setRightDoorTop(initialCoordinates.rightDoorTop + 108 + 38);
      if (index < 2) {
        setTextAreaOffset([79 - index * 40, 38]);
      }
      if (index > 2) {
        setTextAreaOffset([-(40 + (index - 3) * 40), 38]);
      }
      if (index === 2) {
        setTextAreaOffset([0, 38]);
      }
    }
    if (day > 10 && day < 16) {
      const index = day - 11;
      const rightDoorLeftTemp =
        initialCoordinates.rightDoorLeft + index * (42 + 118);
      setLeftDoorLeft(initialCoordinates.leftDoorLeft + index * (42 + 118));
      setLeftDoorTop(initialCoordinates.leftDoorTop + 2 * (108 + 38));
      setRightDoorLeft(initialCoordinates.rightDoorLeft + index * (42 + 118));
      setRightDoorTop(initialCoordinates.rightDoorTop + 2 * (108 + 38));
      if (index < 2) {
        setTextAreaOffset([79 - index * 40, 0]);
      }
      if (index > 2) {
        setTextAreaOffset([-(40 + (index - 3) * 40), 0]);
      }
      if (index === 2) {
        setTextAreaOffset([0, 0]);
      }
    }
    if (day > 15 && day < 20) {
      const index = day - 16;
      setLeftDoorLeft(initialCoordinates.leftDoorLeft + index * (42 + 118));
      setLeftDoorTop(initialCoordinates.leftDoorTop + 3 * (108 + 38));
      setRightDoorLeft(initialCoordinates.rightDoorLeft + index * (42 + 118));
      setRightDoorTop(initialCoordinates.rightDoorTop + 3 * (108 + 38));
      if (index < 2) {
        setTextAreaOffset([79 - index * 40, -33]);
      }
      if (index > 2) {
        setTextAreaOffset([-(40 + (index - 3) * 40), -33]);
      }
      if (index === 2) {
        setTextAreaOffset([0, -33]);
      }
    }
    if (day > 19 && day < 24) {
      const index = day - 20;
      setLeftDoorLeft(initialCoordinates.leftDoorLeft + index * (42 + 118));
      setLeftDoorTop(initialCoordinates.leftDoorTop + 4 * (108 + 38));
      setRightDoorLeft(initialCoordinates.rightDoorLeft + index * (42 + 118));
      setRightDoorTop(initialCoordinates.rightDoorTop + 4 * (108 + 38));
      if (index < 2) {
        setTextAreaOffset([79 - index * 40, -74]);
      }
      if (index > 2) {
        setTextAreaOffset([-(40 + (index - 3) * 40), -74]);
      }
      if (index === 2) {
        setTextAreaOffset([0, -74]);
      }
    }
    if (day === 24) {
      const index = 4;
      setLeftDoorLeft(initialCoordinates.leftDoorLeft + index * (42 + 118));
      setLeftDoorTop(initialCoordinates.leftDoorTop + 3 * (108 + 38));
      setRightDoorLeft(initialCoordinates.rightDoorLeft + index * (42 + 118));
      setRightDoorTop(initialCoordinates.rightDoorTop + 3 * (108 + 38));
      setTextAreaOffset([-80, -74]);
    }
    // console.log(initialCoordinates.leftDoorLeft + 42);
  }, [day]);

  const toggleOpen = () => {
    if (open && !displayText) {
      toggleText();
    }
    if (open && displayText) {
      toggleText();
      toggleDoor();
    }
    if (!open) {
      toggleDoor();
    }
  };

  const toggleDoor = () => {
    setOpen((prevState) => !prevState);
  };
  const toggleText = () => {
    setDisplayText((prevState) => !prevState);
  };

  return (
    <StyledDoorContainer
      ref={doorRef}
      onClick={toggleOpen}
      leftDoorLeft={textAreaOffset[0]}
      leftDoorTop={textAreaOffset[1]}
    >
      {/* <BackgroundImage src={backgroundImage} /> */}
      <TextContainer className={displayText ? 'front' : ''}>
        <p>{displayText ? text : day}</p>
      </TextContainer>
      <LeftDoorWing isUnlocked={isUnlocked} open={open}>
        <OutsideDoorWing
          isUnlocked={isUnlocked}
          elementLeft={leftDoorLeft}
          elementTop={leftDoorTop}
        />
        <InsideDoorWing isUnlocked={isUnlocked} />
      </LeftDoorWing>
      <RightDoorWing isUnlocked={isUnlocked} open={open}>
        <OutsideDoorWing
          isUnlocked={isUnlocked}
          elementLeft={rightDoorLeft}
          elementTop={rightDoorTop}
        />
        <InsideDoorWing isUnlocked={isUnlocked} />
      </RightDoorWing>
    </StyledDoorContainer>
  );
};
