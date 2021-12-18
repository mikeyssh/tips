import Image from "next/image";

import CustomLink from "../CustomLink";

function OneHundredDollarImage({ img, title }) {
    return (
        <CustomLink href="https://buy.stripe.com/cN26sufwr8eUc6s9AE">
            <Image src="/images/100-dollars.svg" layout="fill" alt="One Dollar Image"/> 
        </CustomLink>
    );
}

export default OneHundredDollarImage;