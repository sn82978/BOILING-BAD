import RecipeStep from "../components/RecipeStep";
import Footer from "../components/Footer";

function BiceCream1Content() {
    return (
        <div>
            <h1>bice cream v1</h1>
            <p>published: january 28, 2025</p>
            <h2>bideo</h2>
            <video width="640" height="360" controls>
                <source src="/BOILING-BAD/videos/boilingbadep1_fixed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>becipe</h2>
            <RecipeStep stepNumber={1} content="let the ice cream thaw until the top layer is only slightly solid" />
            <RecipeStep stepNumber={2} content="scoop 1/3 cup of ice cream into a small pot" />
            <RecipeStep stepNumber={3} content="pour 1 cup of water into the small pot" />
            <RecipeStep stepNumber={4} content="put the pot on high heat and stir the concoction with a metal knife" />
            <RecipeStep stepNumber={5} content="when the (b)ice cream starts to bubble, edge it" />
            <RecipeStep stepNumber={6} content="edge the concoction 3 times" />
            <RecipeStep stepNumber={7} content="wait for it to cool and then enjoy!" />
            <h2>shoutouts</h2>
            <p>shoutout to ben & jerrys for this fruity ah ice cream</p>
        </div>
    )
}

function BiceCream1() {
    return (
        <div>
            <BiceCream1Content></BiceCream1Content>
            <Footer></Footer>
        </div>
    )
}

export default BiceCream1;
