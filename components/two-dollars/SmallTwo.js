import Image from "next/image";
import CustomLink from "../CustomLink";

export default function SmallTwo() {
    return (
        <>
            <CustomLink href="/tip-portal/leave-a-two-dollar-tip">
                    <span>
                        <Image className="flex-shrink-0 mr-3 bg-transparent hover:border-green-500 cursor-pointer dark:hover:border-gold-100 ease-out" src="/images/dollar-2.png" width="100" height="100" alt="Small Two" />
                    </span>
            </CustomLink>
        </>
    )
}