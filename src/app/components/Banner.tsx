import React from 'react';
import styled from 'styled-components';
import TextEffect from './TextEffect'; // Assurez-vous de corriger le chemin si nécessaire

const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px; /* Ajustez la hauteur selon vos besoins */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7; /* Ajout de l'opacité */
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const Mosaic = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const TextOverlay = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0; /* Espace autour du texte */
`;

const PhotoMosaic = () => {
  const images = [
    { src: '/assets/image1.jpg', alt: 'Image 1' },
    { src: '/assets/image2.jpg', alt: 'Image 2' },
    { src: '/assets/image3.jpg', alt: 'Image 3' },
    { src: '/assets/image4.jpg', alt: 'Image 4' },
    { src: '/assets/image5.jpg', alt: 'Image 5' },
    { src: '/assets/image6.jpg', alt: 'Image 6' },
  ];

  return (
    <BannerContainer>
      <Mosaic>
        {images.slice(0, 3).map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image.src} alt={image.alt} />
          </ImageContainer>
        ))}
      </Mosaic>

      <TextOverlay>
        <TextEffect />
      </TextOverlay>

      <Mosaic>
        {images.slice(3, 6).map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image.src} alt={image.alt} />
          </ImageContainer>
        ))}
      </Mosaic>
    </BannerContainer>
  );
};

export default PhotoMosaic;
