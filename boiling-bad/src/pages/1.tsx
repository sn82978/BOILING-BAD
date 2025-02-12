import RecipeStep from "../components/RecipeStep";

function BappleBider() {
    return (
        <div>
            <h1>bapple bider</h1>
            <p>published: january ??, 2025</p>
            <h2>becipe</h2>
            <RecipeStep stepNumber={1} content="pour as much cider as you can into a small pot, leave half an inch of space at the top" />
            <RecipeStep stepNumber={2} content="put the pot on high heat and let the cider sit until it stops fizzing and large bubbles appear" />
            <RecipeStep stepNumber={3} content="wait for it to cool and then enjoy!" />
            <h2>shoutouts</h2>
            <p>shoutout to gilmore girls cuz they the reason we did this and started boiling stuff</p>
        </div>
    )
}

export default BappleBider;
