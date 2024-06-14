// src/pages/classe.js
import React from 'react';
import BannerPage from '../src/app/components/BannerPage';
import Layout from '../src/app/components/layout';

export default function Classe() {
  return (
    <div>
      <Layout>
        <div>
          <BannerPage title="Pour la classe" showRoundPhotoContainer />
        </div>
        <h1>Classe hello !</h1>
      </Layout>
    </div>
  );
}
