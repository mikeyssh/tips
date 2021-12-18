import Head from "next/head";
import Image from "next/image";
import { Helmet } from "react-helmet"
import StripeCard from "../../components/StripeCard";
import CustomLink from "../../components/CustomLink";
import Dollars from "../../components/Dollars";
import TwoDollarDescription from "../../components/two-dollars/TwoDollarDescription";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SiteLayout from "../../components/SiteLayout";
import TipsLayout from "../../components/TipsLayout";
import TwoDollarImage from "../../components/two-dollars/TwoDollarImage";

function TipTwoDollars() {
  return (
    <>
      <Helmet
        title="2 Dollar Tip | Tip Portal | Notre Dame Live | ND Blog | Progressive Web App | Come Check It Out"
        meta={[{ property: 'og:title', content: '2 Dollar Tip Page' }]}
      />
      
      <main className="flex-grow">
        <section>
            <Header />
            <TwoDollarDescription />

              <div className="flex flex-row justify-center">
                <CustomLink href="https://buy.stripe.com/cN26sufwr8eUc6s9AE">
                  <Image src="/images/2-dollars.svg" height="300" width="500" alt="Two Dollar Image" className="flex flex-row justify-center"/> 
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

TipTwoDollars.getLayout = page => (
  <SiteLayout>
    <TipsLayout>{page}</TipsLayout>
  </SiteLayout>
);

export default TipTwoDollars;
