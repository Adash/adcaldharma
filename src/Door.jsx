import React from 'react';
import styled from 'styled-components';

const StyledDoorContainer = styled.div`
  /* z-index: -3; */
  height: 400px;
  width: 250px;
  background-color: #f7ede2;
  border: 3px solid #f6bd60;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 1;
  height: 400px;
  width: 250px;
`;

const TextContainer = styled.div`
  position: absolute;
  z-index: 3;
  height: 400px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 24px;
  }
`;

const DoorWing = styled.div`
  z-index: 108;
  background-color: #f28482;
  width: 50%;
  border: 2px solid #f6bd60;
  transition: all 1s ease-in-out;
`;

const LeftDoorWing = styled(DoorWing)`
  transform-origin: left;
  transform: ${({ open }) =>
    open
      ? 'perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-125deg)'
      : 'null'};
`;

const RightDoorWing = styled(DoorWing)`
  transform-origin: right;
  transform: ${({ open }) =>
    open
      ? 'perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(125deg)'
      : 'null'};
`;

export const Door = ({ open, setOpen, backgroundImage, text }) => {
  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <StyledDoorContainer onClick={toggleOpen}>
      <BackgroundImage src={backgroundImage} />
      <TextContainer>
        <p>{text}</p>
      </TextContainer>
      <LeftDoorWing open={open} />
      <RightDoorWing open={open} />
    </StyledDoorContainer>
  );
};
