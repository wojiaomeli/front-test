import BannerPage from "../src/app/components/BannerPage";
import Layout from "../src/app/components/layout";

export default function Methodologie() {
  return (
    <div>
      <Layout>
        <div>
          <BannerPage title="Methodologie" imageSrc="/assets/methodologie.png" showRounds={false} imageLeft={true} />
        </div>
        <h1>Methodologie hello !</h1>
      </Layout>
    </div>
  );
}
