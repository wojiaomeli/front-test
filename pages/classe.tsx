import React from 'react';
import BannerPage from '../src/app/components/BannerPage';
import Layout from '../src/app/components/layout';
import RoundPhotoContainer from '../src/app/components/RoundPhotoComponents';

export default function Classe() {
  return (
    <div>
      <Layout>
        <div>
          <BannerPage title="Pour la classe" />
          <RoundPhotoContainer />
        </div>
        <h1>Classe hello !</h1>
      </Layout>
    </div>
  );
}
