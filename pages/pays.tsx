import BannerPage from "../src/app/components/BannerPage";
import Layout from "../src/app/components/layout";

export default function Pays() {
  return (
    <div>
      <Layout>
        <div>
          <BannerPage title="Dispositif par pays" imageSrc="/assets/carte mond.png" showRounds={false} imageLeft={true} />
        </div>
        <h1>Pays hello !</h1>
      </Layout>
    </div>
  );
}
