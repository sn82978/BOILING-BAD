import styles from "./RecipeList.module.css"

function RecipeList() {
  const recipes = [
    { id: 1, name: "BICE CREAM", description: "boiled ice cream!" },
    {
      id: 2,
      name: "BREESE",
      description: "boiled cheese!",
    },
    { id: 3, name: "BICE BEA", description: "boiled ice tea" },
  ]

  return (
    <div className={styles.recipeList}>
      <h2>All Recipes</h2>
      <div className={styles.recipeGrid}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeList

