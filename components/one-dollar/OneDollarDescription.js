import Image from "next/image";

export default function OneDollarDescription({ title }) {
    return (
        <>
            <h1 className="text-center">
                <span className="block text-3xl text-gold-200 leading-tight pt-6 font-semibold">
                    Welcome to Tips
                </span>
                
                <span className="block text-5xl font-bold leading-none text-gray-200 dark:text-gray-200 pt-6">
                    Leave a $1.00 Dollar Tip?
                </span>

                {/* <span>
                    <Image src={`/images/dollar-1.svg`} layout="fill" alt="One Dollar Image" className="h-80 w-80 cursor-pointer ease-out"/> 
                </span> */}
            </h1>
        </>
    )
}