import React from 'react';
import styled from 'styled-components';
import Macaron from './Macaron';
import TextEffect from './TextEffect';

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px; // Ajustez la hauteur selon vos besoins
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%);
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/banner.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
`;

const ContentContainer = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
  color: #fff;
  max-width: 80%;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BackgroundImage />
      <ContentContainer>
        <TextEffect />
        <Macaron />
      </ContentContainer>
    </BannerContainer>
  );
};

export default Banner;
