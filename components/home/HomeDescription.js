import Image from "next/image";

export default function HomeDescription() {
    return (
        <>
            <h1 className="text-center leading-tight pt-6">
                <span className="block text-3xl text-gold-200 leading-tight pt-6 font-semibold">
                    Welcome to the Tip Portal
                </span>

                <span className="block text-2xl text-ndblue-100 leading-tight pt-6">
                    Feel free to leave a
                </span>
                
                <span className="block text-5xl font-bold leading-none text-gray-200 dark:text-gray-200 pt-6">
                    Tip
                </span>
            </h1>
        </>
    )
}