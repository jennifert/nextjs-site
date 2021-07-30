import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
export default function VacationPlan() {
    const POST_TITLE = 'Planning a vacation to Japan';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>This post describes useful phrases, getting around and more.</p>
                <h2>Planning the trip</h2>
                <p>I love history, so I knew I wanted to see definitely Tokyo, and Kyoto. If time, I also really wanted to see Hiroshima and Mount Fuji. I visit a branch of travel agency <a className="underline focus:ring-2" href="http://www.carlsonwagonlit.com/en/countries/ca/" rel="nofollow noreferrer">Carlson Wagonlit</a>, that specialized in Asia. The agent I was planning with had been there before so she had great advice based on my needs and her own experiences.  This was great is that because here were no pre-built tours. A magazine was provided that you can pick and choose to customize what you want to see. For Japan, the tour company in Japan was Sunrise Tours. The tours Are in English, and it seems like they are some available in other languages like Spanish. It is also helpful that some tours included the price of transit and meals. <a className="underline focus:ring-2" href="/Japan_Trip_2011.pdf">Check out the final trip itinerary they provided</a> (please note pricing and tours may change or no longer be available).</p>
                <p><em>Important Notes:</em></p>
                <p>For any trip it is best to see a<a className="underline focus:ring-2" href="http://www.phac-aspc.gc.ca/tmp-pmv/travel/clinic-eng.php" rel="nofollow noreferrer"> travel doctor</a> to see what <a className="underline focus:ring-2" href="http://www.phac-aspc.gc.ca/tmp-pmv/countries-pays/japan-japon-eng.php" rel="nofollow noreferrer">vaccines</a> you need. Also, look into travel insurance (a [travel] credit card may be a great place to start). Be sure to check with your work to see if some insurance is included with your benefits. For example, I had medical insurance, so I bought a non-medical travel insurance package to supplement. Alternatively, there are some credit cards that offer non medial items, such as flight delays, emergency expenses, etc.</p>
                <p>Lastly, visit your government travel site. <a className="underline focus:ring-2" href="http://www.voyage.gc.ca/index-eng.asp" rel="nofollow noreferrer">This is Canada &apos;s</a>. They will provide warning, and other information on places you visit, such as how cautious you need to be or other dangers. Be sure to register the days and hotels you are staying at (as well as contact info during those times). This is only used in emergencies or situations were you need to be evacuated or warned.</p>
                <h2>Surviving a ten hour flight</h2>
                <p>Not wanting to miss connections or have trouble, I booked a non-stop flight. I brought a light weight laptop that had about six hundreds gigs (had my media libraries as well as room for storing digital photos). Power outlets were the same in Japan. It also helps to bring any media players or game consoles (like the DSi).</p>
                <p>A travel doctor suggested to bring some bottles of water, aspirin (due to sitting so long) and dry food to snack on. Also, you should do a circuit of the plane every few hours. this can help your circulation. And, you may need to advise the carrier if you have special meal requirements.</p>
                <p>More tips are on the<a className="underline focus:ring-2" href="http://www.independenttraveler.com/travel-tips/travelers-ed/10-ways-to-survive-a-long-haul-flight" rel="nofollow noreferrer"> Independent Traveler&apos;s Site</a>.</p>
                <h2>Transit sites to use</h2>
                <p>Note: Tokyo transit systems have the fare based on distance traveled.</p>
                <p>The most useful site I found to use transit in Japan is <a className="underline focus:ring-2" title="hyperdia.com: Japan Transit" href="http://www.hyperdia.com" rel="nofollow noreferrer">hyperdia.com</a>, it has routes, time tables, etc for all transit types (I wish I knew of this site before I went).</p>
                <p><a className="underline focus:ring-2" title="More information on the Japan Rail pass" href="http://www.japanrailpass.net/eng/en001.html" rel="nofollow noreferrer">Japan Rail Pass Information</a> : This is for temporary visitors. It saves money on trains like the shinkansen. This must be bought BEFORE entry into Japan.</p>
                <p>Also, In Tokyo, pick up a 500¥ re-loadable card (the one I used was <a className="underline focus:ring-2" href="http://www.pasmo.co.jp/en/index.html" rel="nofollow noreferrer">Pasmo</a>). 2500¥ (about $25 CAN) got me the card and lasted for three quarters of my time in Tokyo (I only added more to get to the airport).</p>
                <h2>Helpful basic phrases</h2>
                <p>(thing/place) wa doko desu ka?<br />
                Where is the ______.</p>
                <p>at fast food places: (number from menu)-ban kudasai.<br />
                can I please have Number _____ (for example, Ordering a number 1 combo from McDonald - the only place open before 7 am in some places).</p>
                <p>Check out the <a className="underline focus:ring-2" title="View book on Amazon" href="http://www.amazon.ca/gp/product/1741042313/ref=as_li_tf_tl?ie=UTF8&amp;camp=15121&amp;creative=330641&amp;creativeASIN=1741042313&amp;linkCode=as2&amp;tag=jennisportf-20" rel="nofollow noreferrer">Lonely Planet Japanese Phrasebook</a> for more phrases! Its super useful.</p>
                <h2>Save money while traveling</h2>
                <p>Quick note of approximate Yen (<strong>¥</strong>) to dollars (Canadian and United States). At the time of writing $1 = 80<strong>¥</strong> (approx). Also, taxes is about 5% (based on <a className="underline focus:ring-2" href="http://www.lonelyplanet.com/japan/practical-information/money-costs" rel="nofollow noreferrer">Lonely Planet practical information</a>).</p>
                <p>The easiest way to save money by traveling is to buy your meals from one of the many convenience stores. Most times you can get a full meal for about 500-700<strong>¥</strong> (or $5-$7 in Canadian Currency). There are also small family owned shops if you do not buy meals from convenience stores. These stores have a curtain across part of the booth and what looks like a vending machine (it dispenses your order ticket) and are usually 900¥ or less.</p>
                <p>Buy a small container of laundry detergent before you go, some times items can be washed in the sink.</p>
                <p>Wait as long as possible to buy souvenirs, and try to research beforehand, for items like electronics. Try using search engines or places like yahoo answers - there are many people who can tell the names of great stores or hidden locations.</p>
                <p>Use a travel card (such as <a className="underline focus:ring-2" href="http://www.yak.ca/yak-travel-card" rel="nofollow noreferrer">Yak&apos;s</a>) for emergencies, and try installing programs like <a className="underline focus:ring-2" href="http://www.skype.com/intl/en-us/prices/" rel="nofollow noreferrer">Skype</a>. Skype has pay as you go options, or monthly plans, and many hotels have free Internet access, although, you may feel safer with a <a className="underline focus:ring-2" href="https://www.howtogeek.com/133680/htg-explains-what-is-a-vpn/" rel="nofollow noreferrer">VPN program</a> which can be used to protect yourself online. If you use a smart phone over seas, please be sure to turn on the roaming setting, and turn off data.</p>
                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" title="View book on Amazon" href="http://www.amazon.ca/gp/product/1741042313/ref=as_li_tf_tl?ie=UTF8&amp;camp=15121&amp;creative=330641&amp;creativeASIN=1741042313&amp;linkCode=as2&amp;tag=jennisportf-20" rel="nofollow noreferrer">Lonely Planet Japanese Phrasebook</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.amazon.ca/gp/product/1741790425/ref=as_li_tf_tl?ie=UTF8&amp;camp=15121&amp;creative=330641&amp;creativeASIN=1741790425&amp;linkCode=as2&amp;tag=jennisportf-20" rel="nofollow noreferrer">Lonely Planet Japan</a></li>
                    <li><a className="underline focus:ring-2" title="Plan tours and more" href="http://www.jtb-sunrisetours.jp/" rel="nofollow noreferrer">Sunrise Tours</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.voyage.gc.ca/register/" rel="nofollow noreferrer">Registration of Canadians Abroad</a></li>
                    <li><a className="underline focus:ring-2" title="Travel information for Canadians" href="http://www.voyage.gc.ca/countries_pays/report_rapport-eng.asp?id=140000" rel="nofollow noreferrer">Japan Travel Advice and Advisory</a> from the Government of Canada</li>
                </ul>
            </section>
        </Layout>
    )
}
