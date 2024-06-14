// src/app/components/BannerPage.tsx
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import RoundPhotoContainer from './RoundPhotoContainer';

const BannerContainer = styled.div`
  background-color: rgba(3, 112, 225, 1);
  color: white;
  padding: 40px 20px; /* Réduction de l'espacement vertical */
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 300px; /* Réduction de la hauteur de la bannière */
`;

const BannerTextWrapper = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const BannerTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: bold;
`;

const BannerImageWrapper = styled.div`
  width: 300px;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;

const BannerPage = ({ title, imageSrc, children }) => {
  const router = useRouter();

  return (
    <BannerContainer>
      <BannerImageWrapper>
        {imageSrc && <BannerImage src={imageSrc} alt={title} />}
      </BannerImageWrapper>
      <BannerTextWrapper>
        <BannerTitle>{title}</BannerTitle>
        {children}
      </BannerTextWrapper>
      {router.pathname === '/classe' && <RoundPhotoContainer />}
    </BannerContainer>
  );
};

export default BannerPage;
