import Link from 'next/link'
export default function PorfolioCard(props) {

    return (

        <div className="xl:w-1/3 md:w-1/2 px-4" key={props.id}>
            <div className="border border-gray-300 p-6 rounded-lg">
                <h2 className="text-lg  font-medium title-font mb-2">{props.title}</h2>
                <p className="leading-relaxed text-base">
                    {props.summary}
                </p>
                <div className="text-center mt-2 leading-none flex justify-between w-full">
                    <span className="mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                        <a href={props.repo} className="no-underline hover:underline focus:ring-2 focus:ring-white" rel="noopener noreferrer nofollow">Visit {props.title} Repository</a>
                    </span>
                    
                    {props.demo > 0 && <span className="inline-flex items-center leading-none text-sm"><a href={props.demo} className="no-underline hover:underline focus:ring-2 focus:ring-white" rel="noopener noreferrer nofollow">Visit {props.title} Demo Page</a></span>}
                    
                </div>

            </div>
        </div>
    )
}
// TODO: fix links contrast