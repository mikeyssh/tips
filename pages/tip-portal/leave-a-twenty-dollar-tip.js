import Head from "next/head";
import Image from "next/image";
import { Helmet } from "react-helmet"
import StripeCard from "../../components/StripeCard";
import CustomLink from "../../components/CustomLink";
import Dollars from "../../components/Dollars";
import TwentyDollarDescription from "../../components/twenty-dollars/TwentyDollarDescription";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SiteLayout from "../../components/SiteLayout";
import TipsLayout from "../../components/TipsLayout";
import TwentyDollarImage from "../../components/twenty-dollars/TwentyDollarImage";

function TipTwentyDollars() {
  return (
    <>
      <Helmet
        title="10 Dollar Tip | Tip Portal | Notre Dame Live | ND Blog | Progressive Web App | Come Check It Out"
        meta={[{ property: 'og:title', content: '10 Dollar Tip Page' }]}
      />
      
      <main className="flex-grow">
        <section>
            <Header />
            <TwentyDollarDescription />

              <div className="flex flex-row justify-center">
                <CustomLink href="https://buy.stripe.com/cN26sufwr8eUc6s9AE">
                  <Image src="/images/20-dollars.svg" height="300" width="500" alt="Twenty Dollar Image" className="flex flex-row justify-center"/> 
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

TipTwentyDollars.getLayout = page => (
  <SiteLayout>
    <TipsLayout>{page}</TipsLayout>
  </SiteLayout>
);

export default TipTwentyDollars;
