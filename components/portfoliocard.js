import Link from 'next/link'
export default function PorfolioCard(props) {

    return (

        <div className="px-4 mb-4 xl:w-1/3 md:w-1/2" key={props.id}>
            <div className="portfolio-card">
                <h2 className="title-font">{props.title}</h2>
                <p className="leading-relaxed text-base">
                    {props.summary}
                </p>
                <div className="portfolio-card-main">
                    <span>
                        <a href={props.repo} rel="noopener noreferrer nofollow">Visit {props.title} Repository</a>
                    </span>
                    
                    {props.demo > 0 && <span><a href={props.demo} rel="noopener noreferrer nofollow">Visit {props.title} Demo Page</a></span>}
                    
                </div>

            </div>
        </div>
    )
}