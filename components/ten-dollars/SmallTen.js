import Image from "next/image";
import CustomLink from "../CustomLink";

export default function SmallTen() {
    return (
        <>
            <CustomLink href="/tips/ten-dollars">
                    <span>
                        <Image className="bg-transparent hover:border-green-500 cursor-pointer dark:hover:border-gold-100 ease-out" src="/images/dollar-4.png" width="100" height="100" alt="Small Ten" />
                    </span>
            </CustomLink>
        </>
    )
}