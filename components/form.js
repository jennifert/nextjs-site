import Link from 'next/link'
export default function Form() {
    return (
        <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
            <form role="search" action="" method="post" id="search-form" name="searchForm">
                <label htmlFor="search" className="sr-only">Search for: </label>
                <div className="flex">
                    <input type="search" name="search" id="search" required className="form-input px-2 py-2 h-10 border border-solid rounded-full text-sm leading-snug  text-black bg-indigo-100 shadow-none outline-none w-full font-normal flex-1 border-l-0 mr-2  focus:ring-2 focus:ring-black" />

                    {/* https://devdojo.com/tailwindcss/buttons:
                                        <a href="#_" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                        <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 translate-x-full group-hover:translate-x-0 ease">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative">Button Text</span>
                    </a>
                                        */}
                    <button type="submit" className="bg-white hover:bg-indigo-700 text-indigo-500 hover:text-white font-bold py-2 px-4 rounded">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}