import Image from "next/image";
import CustomLink from "../CustomLink";

export default function TipButton() {
    return (
        <>
            <CustomLink to="/tip-portal/leave-a-five-dollar-tip">
                    <span>
                        <Image className="flex-shrink-0 mr-3 bg-transparent hover:border-green-500 cursor-pointer dark:hover:border-gold-100 ease-out" src="/images/real-clover.svg" width="50" height="50" alt="Tip Button" />
                    </span>
            </CustomLink>
        </>
    )
}