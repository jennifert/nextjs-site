import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function PokemonConsoleToGo() {
    const POST_TITLE = '5 additions from the console games that would improve Pokemon Go';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Pokemon Go is a great idea for a game but as someone who has played the console games in the past there are quite a few things that seem to be missing.</p>
                
                <p>Here is a list of concepts that I feel can help improve the game play.</p>
                
                <ol className="list-decimal list-inside m-2">
                    <li>The Pokemon day care: some people use this to level up, but most people use this game play feature to breed Pokemon to create their own eggs (pass on parent moves and IVs)</li>
                    <li>Pokemon fossils at Pokestops: especially since the nearby feature is so broken (at the time of writing). in the games you can find fossils in various ways to bring back to life extinct Pokemon. It would be great if pokestops dropped fossils similar to eggs, where you walk to bring them back to life. Would make things easier and more fun than waiting for extremely rare encounters.</li>
                    <li>A way to have a set location as a Pokemon centre: In the console games, a Pokemon Centre is set up in each city, and is a free way to heal your team without using potions. Would be neat if you can set a few locations (such as your house or work/school) as one, and if you are around this area you can click a button (say once every hour) and all of your Pokemon will be healed.</li>
                    <li>Bring Pokemon abilities into play: Abilities can affect things in battle, or in other areas of the game. For example if your Pikachu has static, you will encounter more electric Pokemon, meanwhile, if your Magmar has Flame Body, your hatch eggs faster in 1/2 the time.</li>
                    <li>Allow Pokemon you have with you to fight wild Pokemon: This makes it easier to catch for example because the wild Pokemon would not be at full health, and may be sleeping or have another status condition.  In the console games, it is always suggested to leave a pokemon in the red HP wise, and have it sleeping to increase your catch rate.</li>
                </ol>
            </section>
        </Layout>
    )
}
