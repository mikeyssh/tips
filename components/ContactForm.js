const ContactForm = () => {
    return (
        <div>
            {/* Name */}
            <form className="max-w-xl mx-auto bg-black bg-opacity-10 rounded">
                <div className="flex flex-wrap -mx-3 mb-5">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label className="block text-gray-900 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">Details Optional<span className=" text-rose-300"> *</span></label>
                        <input id="first-name" type="text" className="form-input w-full text-teal-500 dark:text-gold-100" placeholder="Enter your name for the Scoreboard:" required />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">
                        </label>
                        <input id="last-name" type="text" className="form-input text-teal-500 dark:text-gold-100 w-full" placeholder="Favorite Notre Dame Player:" required />
                    </div>
                </div>
                {/* Details */}
                <div className="flex flex-wrap -mx-3 mb-5">
                    <div className="w-full px-3">
                        <div className="flex justify-between items-center mb-1">
                            {/* <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium" htmlFor="message">Details<span className="text-teal-500 dark:text-gold-200">*</span></label> */}
                        </div>
                        <textarea id="message" rows="4" className="form-textarea w-full text-teal-500 dark:text-gold-100" placeholder="Feel free to include a brief message as well."></textarea>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default ContactForm