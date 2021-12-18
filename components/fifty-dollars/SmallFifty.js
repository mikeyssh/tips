import Image from "next/image";
import CustomLink from "../CustomLink";

export default function SmallFifty() {
    return (
        <>
            <CustomLink href="/tips/fifty-dollars">
                    <span>
                        <Image className="bg-transparent hover:border-green-500 cursor-pointer dark:hover:border-gold-100 ease-out" src="/images/dollar-6.png" width="100" height="100"
                        alt="Small Fifty" />
                    </span>
            </CustomLink>
        </>
    )
}