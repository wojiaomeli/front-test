import BannerPage from "../src/app/components/BannerPage";
import Layout from "../src/app/components/layout";
import Interesses from "../src/app/components/Interesses"; // Importer le composant Interesses

export default function ToutesLesRessources() {
  return (
    <div>
      <Layout>
        <BannerPage title="Toutes les ressources">
          {/* Placer le composant Interesses ici */}
          
        </BannerPage>
        <Interesses/>
        <h1>Contenu de la page</h1>
        {/* Ajoutez le contenu de la page ici */}
      </Layout>
    </div>
  );
}
