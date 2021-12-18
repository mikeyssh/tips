import Image from "next/image";

import CustomLink from "../CustomLink";

function OneDollarImage({ img, title }) {
    return (
        <CustomLink href="https://buy.stripe.com/3cs7wy3NJdzeeeA5kq">
            <Image src="/images/dollar-1.svg" className=" cursor-pointer border-2 outline-white hover:border-shadowed" layout="fixed" width="500" height="500" alt="One Dollar Image"/> 
        </CustomLink>
    );
}

export default OneDollarImage;