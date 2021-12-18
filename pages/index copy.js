import Head from "next/head";

import CustomLink from "../components/CustomLink";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import { SiteLayout } from "../components/SiteLayout";

const Index = () => (
    <div className="">
        <Head>
            <title>Tip Portal | Notre Dame Live | ND Blog | Come Check It Out</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        
        <Header />
        <Banner />

        <h1 className="text-center">
            {/* <span className="block text-xl text-gray-600 leading-tight">
                Welcome to the
            </span> */}
            <span className="block text-5xl font-bold leading-none text-gray-200 dark:text-gray-200">
                Home Page
            </span>
        </h1>

        

        {/* Continue Button */}

        <div className="mt-12 text-center">
        <CustomLink
            href="/tips"
            className="inline-block
            bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6
            py-4 leading-tight"
        >
            {" "}
            Tip Portal
        </CustomLink>
        </div>



  </div>
);

Index.prototypegetLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Index;
