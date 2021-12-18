import Image from "next/image";

import CustomLink from "../CustomLink";

function TenDollarImage({ img, title }) {
    return (
        <CustomLink href="https://buy.stripe.com/cN26sufwr8eUc6s9AE">
            <Image src="/images/10-dollars.svg" layout="fill" alt="10 Dollar Image"/> 
        </CustomLink>
    );
}

export default TenDollarImage;