import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import mainBackgroundImage from './cold-firs-forest.jpg';

const StyledDoorContainer = styled.div`
  position: relative;
  /* z-index: -3; */
  /* height: 400px;
  width: 250px; */
  height: 100%;
  width: 100%;
  background-color: #f7ede2;
  border: 1px solid var(--green-black);
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  .front {
    /* position: fixed;
    height: 280px;
    width: 280px; */
    /* top: 80px;
    bottom: 80px;
    left: 80px;
    right: 80px; */
    z-index: 118;
    border-radius: 5px;
    padding: 10px;
    background-color: var(--yallow-base);
    transform: scale(4, 4);
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
  /* height: 400px;
  width: 250px; */
  /* height: 100%;
  width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s ease-in-out;

  p {
    color: #5c7457;
    font-size: 8px;
  }
`;

const DoorWing = styled.div`
  z-index: 108;
  /* background-color: #f28482; */
  width: 50%;
  border: 1px solid var(--green-dark);
  transform-style: preserve-3d;
  transition: all 0.7s cubic-bezier(0.47, 0, 0.745, 0.715);
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
  /* background-color: ${(props) =>
    props.isUnlocked ? 'var(--red-base)' : 'var(--green-base)'}; */
`;

const InsideDoorWing = styled.div`
  transform: rotateY(180deg);
  /* backface-visibility: hidden; */
  position: absolute;
  top: 0px;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.isUnlocked ? 'var(--red-base-dark)' : 'var(--green-base-dark)'};
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
  const leftDoorRef = useRef();
  const [leftDoorTop, setLeftDoorTop] = useState(0);
  const [leftDoorLeft, setLeftDoorLeft] = useState(0);
  const rightDoorRef = useRef();
  const [rightDoorTop, setRightDoorTop] = useState(0);
  const [rightDoorLeft, setRightDoorLeft] = useState(0);

  useEffect(() => {
    console.log(leftDoorRef.current.getClientRects()[0].top);
    console.log(leftDoorRef.current.getClientRects()[0].left);
    setLeftDoorTop(leftDoorRef.current.getClientRects()[0].top);
    setLeftDoorLeft(leftDoorRef.current.getClientRects()[0].left);
    setRightDoorTop(rightDoorRef.current.getClientRects()[0].top);
    setRightDoorLeft(rightDoorRef.current.getClientRects()[0].left);
  }, [leftDoorRef, rightDoorRef]);

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
    <StyledDoorContainer onClick={toggleOpen}>
      {/* <BackgroundImage src={backgroundImage} /> */}
      <TextContainer className={displayText ? 'none' : ''}>
        <p>{displayText ? text : day}</p>
      </TextContainer>
      <LeftDoorWing isUnlocked={isUnlocked} open={open}>
        <OutsideDoorWing
          isUnlocked={isUnlocked}
          ref={leftDoorRef}
          elementTop={leftDoorTop}
          elementLeft={leftDoorLeft}
        />
        <InsideDoorWing isUnlocked={isUnlocked} />
      </LeftDoorWing>
      <RightDoorWing isUnlocked={isUnlocked} open={open}>
        <OutsideDoorWing
          isUnlocked={isUnlocked}
          ref={rightDoorRef}
          elementTop={rightDoorTop}
          elementLeft={rightDoorLeft}
        />
        <InsideDoorWing isUnlocked={isUnlocked} />
      </RightDoorWing>
    </StyledDoorContainer>
  );
};
