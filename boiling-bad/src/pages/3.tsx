import RecipeStep from "../components/RecipeStep";

function BiceBea() {
    return (
        <div>
            <h1>bice bea</h1>
            <p>published: january 31, 2025</p>
            <h2>bideo</h2>
            <video width="640" height="360" controls>
                <source src="/BOILING-BAD/videos/boilingbadep2_fixed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>becipe</h2>
            <RecipeStep stepNumber={1} content="put the bricked ice tea in a small pot and put the heat to high" />
            {/* <RecipeStep stepNumber={2} content="scoop 1/3 cup of ice cream into a small pot" />
            <RecipeStep stepNumber={3} content="pour 1 cup of water into the small pot" />
            <RecipeStep stepNumber={4} content="put the pot on high heat and stir the concoction with a metal knife" />
            <RecipeStep stepNumber={5} content="when the (b)ice cream starts to bubble, edge it" />
            <RecipeStep stepNumber={6} content="edge the concoction 3 times" />
            <RecipeStep stepNumber={7} content="wait for it to cool and then enjoy!" /> */}
            <h2>shoutouts</h2>
            <p>shoutout to seaside for the ice tea</p>
        </div>
    )
}

export default BiceBea;
