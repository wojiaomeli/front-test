import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Round = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RoundPhotoContainer = () => {
  return (
    <Container>
      <Round>
        <Image src="/assets/carte monde.png" alt="Image 1" />
      </Round>
      <Round>
        <Image src="/assets/teacher1.svg" alt="Image 2" />
      </Round>
      <Round>
        <Image src="/assets/thecher2.svg" alt="Image 3" />
      </Round>
    </Container>
  );
};

export default RoundPhotoContainer;
