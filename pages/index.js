import Head from "next/head";

import CustomLink from "../components/CustomLink";
import ContactForm from "../components/ContactForm";
import HomeDescription from "../components/home/HomeDescription";
import Header from "../components/Header";
import Dollars from "../components/Dollars";
import SiteLayout from "../components/SiteLayout";
import SectionContainer from "../components/SectionContainer";

const Index = () => (
    <div>
        <Head>
            <title>Tips | Notre Dame Live | ND Blog | Come Check It Out</title>
            <link rel="text" href="/favicon.svg" />
        </Head>
        
        <Header />

        <SectionContainer>
            <HomeDescription />

            <div className="flex flex-row justify-center">
                <Dollars className="flex flex-row justify-center" />
            </div>

            <br />

            {/* Continue Button */}

            <div className="mt-32 text-center">
                <CustomLink
                    href="/tips/five-dollars"
                    className="justify-center
                    bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6
                    py-3 leading-tight"
                >
                    {" "}
                    Leave a Tip
                </CustomLink>

                <ContactForm />
            </div>
        </SectionContainer>
        {/* Scoreboard */}

    </div>
);

Index.prototypegetLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Index;
