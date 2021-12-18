import Image from "next/image";

import CustomLink from "../CustomLink";

function FiveDollarImage({ img, title }) {
    return (
        <CustomLink href="https://buy.stripe.com/cN26sufwr8eUc6s9AE">
            <Image src="/images/5-dollars.svg" layout="fill" alt="One Dollar Image"/> 
        </CustomLink>
    );
}

export default FiveDollarImage;