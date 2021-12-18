import React from 'react';
import Image from 'next/image';
import CustomLink from './CustomLink';

export default function StripeCard() {
    return (   
        <div className="flex flex-row justify-center align-bottom pt-6 bg-transparent">
            <form className="w-80 p-3 bg-gradient-to-r from-gray-100 to-gray-900 rounded-lg border-2  group-focus:outline-amber-800">
                <h1 className="text-3xl font-semibold text-black dark:text-gold-100 pb-2">
                    Debit/Credit
                </h1>{" "}
                <div className="flex flex-wrap">
                        {/* Name */}
                        <label className="block text-black dark:text-black text-sm font-medium mb-1" htmlFor="first-name">Name<span className="text-rose-500 dark:text-rose-200"> *</span><span className="text-rose-300 dark:text-rose-300 font-semibold"> optional</span></label>
                        <input id="first-name" type="text" className="form-input w-full text-teal-500 dark:text-gold-100 border-teal-500 border-solid border-shadowed bg-gray-200 rounded" placeholder="" />

                        <label className="block text-black dark:text-black text-sm font-medium mb-1" htmlFor="first-name">From<span className="text-rose-500 dark:text-rose-200"> *</span><span className="text-rose-300 dark:text-rose-300 font-semibold"> optional</span></label>
                        <input id="first-name" type="text" className="form-input w-full text-teal-500 dark:text-gold-100 border-teal-500 border-solid border-shadowed bg-gray-200 rounded" placeholder="" />

                    <div className="flex justify-between items-center pt-4">
                        {" "}
                            {/* Card Number */}
                            <label className="block text-black dark:text-black text-xs font-medium mb-1" htmlFor="last-name">Leave a name you're comfortable with<span className="text-rose-500 dark:text-gold-200"> * </span><span className="text-rose-300 font-semibold dark:text-gold-300">below</span>
                            </label>
                        {/* Date */}
                        <div className="flex justify-between items-center pt-4">
                        {" "}
                        </div>
                    </div>{" "}
                    <Image
                        className="object-right-bottom"
                        src="/images/sim-card-chip.png"
                        width={48}
                        height={48}
                        alt="Sim Card"
                    />
                    <CustomLink
                        href="https://buy.stripe.com/cN26sufwr8eUc6s9AE"
                        className="inline-block
                        bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6
                        py-4 leading-tight"
                    >
                        {" "}
                        Continue
                    </CustomLink>
                </div>
            </form>
        </div>
    );
}