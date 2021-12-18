import Image from "next/image";
import CustomLink from "../CustomLink";

export default function SmallFive() {
    return (
        <>
            <CustomLink className="flex flex-grow justify-center" href="/tips/five-dollars">
                    <span>
                        <Image className="bg-transparent hover:border-green-500 cursor-pointer dark:hover:border-gold-100 ease-out" src="/images/dollar-3.png" width="100" height="100" alt="Small Five" />
                    </span>
            </CustomLink>
        </>
    )
}