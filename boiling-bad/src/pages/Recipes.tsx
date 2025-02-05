import styles from "./Pages.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  const recipes = [
    { id: 1, title: "bice cream", description: "boiled ice cream" },
    { id: 2, title: "bice bea", description: "unlikely cure to stomach aches" },
    // { id: 3, title: "Boiled Pasta", description: "The base for many Italian dishes" },
    // { id: 4, title: "Boiled Rice", description: "Fluffy and delicious every time" },
  ];

  return (
    <div className={styles.page}>
      <h1>recipes</h1>
      <div className={styles.timeline}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.timelineItem}>
            <div className={styles.timelinePoint}></div>
            <div 
              className={styles.timelineContent}
              onClick={() => setSelectedRecipe(recipe.id)}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <Link to={`/recipe/${selectedRecipe}`} className={styles.hiddenLink}>
          View Full Recipe
        </Link>
      )}
    </div>
  );
}

export default Recipes;
