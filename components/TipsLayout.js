// import Link from "next/link";
import useSwr from 'swr'
import { dollarouter } from "next/router";
import CustomLink from "./CustomLink";

function TipsLayout({ children }) {
  return (

      <div>{children}</div>
  );
};

export default TipsLayout;
