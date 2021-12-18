import Image from "next/image";

function Background() {                                             
    return (
        <>
            <div className="opacity-50">
                <Image
                    src="/images/bg-tip-portal.svg"
                    alt="clover-bg"
                    className="flex flex-grow object-cover opacity-80"
                    objectFit="fixed"
                    layout="fill"
                />
            </div>
        </>
    );
}

export default Background;