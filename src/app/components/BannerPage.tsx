import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: rgba(3, 112, 225, 1);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 300px;
`;

const BannerTextWrapper = styled.div`
  flex: 1; /* Le texte prend tout l'espace restant */
  padding-right: 20px; /* Espacement entre le texte et l'image */
`;

const BannerTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: bold;
`;

const BannerImageWrapper = styled.div`
  width: 300px; /* Largeur de l'image */
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%; /* L'image occupe tout l'espace disponible */
  height: auto;
`;

const BannerPage = ({ title, imageSrc, children }) => {
  return (
    <BannerContainer>
      <BannerImageWrapper>
        {imageSrc && <BannerImage src={imageSrc} alt={title} />}
      </BannerImageWrapper>
      <BannerTextWrapper>
        <BannerTitle>{title}</BannerTitle>
        {children}
      </BannerTextWrapper>
    </BannerContainer>
  );
};

export default BannerPage;
