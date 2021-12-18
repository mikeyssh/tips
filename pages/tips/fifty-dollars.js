import Head from "next/head";
import Image from "next/image";
import { Helmet } from "react-helmet"
// import StripeCard from "../../components/StripeCard";
import CustomLink from "../../components/CustomLink";
import Dollars from "../../components/Dollars";
import FiftyDollarDescription from "../../components/fifty-dollars/FiftyDollarDescription";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SiteLayout from "../../components/SiteLayout";
import TipsLayout from "../../components/TipsLayout";
// import FiftyDollarImage from "../../components/fifty-dollars/FiftyDollarImage";

function TipFiftyDollars() {
  return (
    <>
      <Helmet
        title="50 Dollar Tip | Tip Portal | Notre Dame Live | ND Blog | Progressive Web App | Come Check It Out"
        meta={[{ property: 'og:title', content: '50 Dollar Tip Page' }]}
      />
      
      <main className="flex-grow">
        <section>
            <Header />
            <FiftyDollarDescription />

              <div className="flex flex-row justify-center hover:scale-15 transform transition-duration-300 ease-out animate-float">
                <CustomLink href="https://buy.stripe.com/cN26sufwr8eUc6s9AE">
                  <Image src="/images/50-dollars.svg" height="300" width="500" alt="Fifty Dollar Image" className="flex flex-row justify-center"/> 
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

TipFiftyDollars.getLayout = page => (
  <SiteLayout>
    <TipsLayout>{page}</TipsLayout>
  </SiteLayout>
);

export default TipFiftyDollars;
