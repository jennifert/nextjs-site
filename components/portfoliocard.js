export default function PorfolioCard(props) {

    return (

            <div class="xl:w-1/3 md:w-1/2 p-4" key={props.id}>
                <div class="border border-gray-300 p-6 rounded-lg">
                    <h2 class="text-lg  font-medium title-font mb-2">{props.title}</h2>
                    <p class="leading-relaxed text-base">
                        {props.summary}
                    </p>
                    <div class="text-center mt-2 leading-none flex justify-between w-full">
                        <span class=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                            {props.repo}
                        </span>
                        <span class=" inline-flex items-center leading-none text-sm">
                            {props.demo}
                        </span>
                    </div>

                </div>
            </div>
    )
}