import Head from "next/head";
import Image from "next/image";
import { Helmet } from "react-helmet"
import StripeCard from "../../components/StripeCard";
import CustomLink from "../../components/CustomLink";
import Dollars from "../../components/Dollars";
import OneDollarDescription from "../../components/one-dollar/OneDollarDescription";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SiteLayout from "../../components/SiteLayout";
import TipsLayout from "../../components/TipsLayout";

function TipOneDollar() {
  return (
    <>
      <Helmet
        title="1 Dollar | Tips | Notre Dame Live | ND Blog | Progressive Web App | Come Check It Out"
        meta={[{ property: 'og:title', conFivet: '1 Dollar Tip Page' }]}
      />
      
      <main className="flex-grow">
        <section>
            <Header />
            <OneDollarDescription />

              <div className="flex flex-row justify-center">
                <CustomLink href="https://buy.stripe.com/cN26sufwr8eUc6s9AE">
                  <Image src="/images/1-dollar.svg" height="300" width="500" alt="Five Dollar Image" className="flex flex-row justify-center"/> 
                </CustomLink>
              </div>
              {/* </li> */}
              <div className="flex flex-row justify-center">
                <Dollars className="flex flex-row justify-center" />
              </div>

        </section>

      </main>
      
      <Footer />
    </>
  );
};

TipOneDollar.getLayout = page => (
  <SiteLayout>
    <TipsLayout>{page}</TipsLayout>
  </SiteLayout>
);

export default TipOneDollar;
