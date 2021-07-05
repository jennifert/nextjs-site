import Link from 'next/link'
export default function Form() {
    return (
        <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
            <form role="search" action="" method="post" id="search-form" name="searchForm">
                <label htmlFor="search" className="sr-only">Search for: </label>
                <div className="flex">
                    <input type="search" name="search" id="search" required className="px-2 py-2 h-10 border border-solid rounded-full text-sm leading-snug text-indigo-700 bg-indigo-100 shadow-none outline-none w-full font-normal flex-1 border-l-0 mr-2  focus:ring-2 focus:ring-black" />

                    <button type="submit" className="flex text-center rounded-md bg-indigo-300 hover:bg-pink-700 focus:ring-2 focus:ring-white focus:ring-opacity-50 p-2 text-black">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}