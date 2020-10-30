import React from 'react';
import styled from 'styled-components';

const StyledDoorContainer = styled.div`
  position: relative;
  /* z-index: -3; */
  /* height: 400px;
  width: 250px; */
  height: 100%;
  width: 100%;
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
  p {
    color: #5c7457;
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
      {/* <BackgroundImage src={backgroundImage} /> */}
      <TextContainer>
        <p>{text}</p>
      </TextContainer>
      <LeftDoorWing open={open} />
      <RightDoorWing open={open} />
    </StyledDoorContainer>
  );
};
