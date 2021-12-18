import Image from "next/image";

import CustomLink from "../CustomLink";

function TwoDollarImage({ img, title }) {
    return (
        <CustomLink href="https://buy.stripe.com/8wM3gi1FB52I0nKeUZ">
            <Image src="/images/2-dollars.svg" layout="fill" alt="Two Dollar Image"/> 
        </CustomLink>
    );
}

export default TwoDollarImage;