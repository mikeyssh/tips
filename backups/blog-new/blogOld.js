import Link from "../../components/CustomLink";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MediumCard from "../../components/MediumCard";
import { SiteLayout } from "../../components/SiteLayout";

const BlogNew = () => (
  <div className="mt-8 max-w-xl mx-auto px-8">
    <h1 className="text-center">
      <span className="block text-xl text-gray-600 leading-tight">
        Welcome to the
      </span>
      <span className="block text-5xl font-bold leading-none text-gray-200 dark:text-gray-200">
        BlogNew Page
      </span>
    </h1>
    <div className="mt-12 text-center">
      <Link
        href="/blognew/basic-information"
        className="inline-block
        bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6
        py-4 leading-tight"
      >
        {" "}
        View more posts
      </Link>
    </div>
  </div>
);

BlogNew.prototypegetLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default BlogNew;
