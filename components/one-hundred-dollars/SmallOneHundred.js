import Image from "next/image";
import CustomLink from "../CustomLink";

export default function SmallOne() {
    return (
        <>
            <CustomLink href="/tips/one-hundred-dollars">
                    <span>
                        <Image className="flex-shrink-0 mr-3 bg-transparent hover:border-green-500 cursor-pointer dark:hover:border-gold-100 ease-out" src="/images/dollar-7.png" width="100" height="100" alt="Small One Hundred" />
                    </span>
            </CustomLink>
        </>
    )
}