import RecipeStep from "../components/RecipeStep";

function BiceCream2() {
    return (
        <div>
            <h1>bice cream v2</h1>
            <p>published: february 11, 2025</p>
            <h2>bideo</h2>
            <video width="640" height="360" controls>
                <source src="/videos/boilingbadep3_fixed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>becipe</h2>
            <RecipeStep stepNumber={1} content="microwave the tub of ice cream for 25 seconds" />
            <RecipeStep stepNumber={2} content="pour 2/3 cup of ice cream into a small pot" />
            <RecipeStep stepNumber={3} content="put the pot on high heat and stir it concoction with a metal knife" />
            <RecipeStep stepNumber={4} content="when the (b)ice cream starts to bubbleb, put 1/2 cup of water into the pot" />
            <RecipeStep stepNumber={5} content="edge the concoction 3 times" />
            <RecipeStep stepNumber={6} content="wait for it to cool and then enjoy!" />
            <h2>shoutouts</h2>
            <p>shoutout to ben & jerrys for this buss ice cream</p>
        </div>
    )
}

export default BiceCream2;