import styles from "./Pages.module.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function RecipesContent() {
  let navigate = useNavigate();

  const recipes = [
    { id: 1, title: "bapple bider", description: "boiled cider" },
    { id: 2, title: "bice cream v1 [1/28]", description: "boiled ice cream - strawberry cheesecake" },
    { id: 3, title: "bice bea [1/31]", description: "unlikely cure to stomach aches" },
    { id: 4, title: "bice cream v2 [2/11]", description: "boiled ice cream - chocolate fudge" }
  ];

  const routeChange = (id: number) => {
    let path = `/boiling-bad/${id}`;
    navigate(path);
  }

  return (
    <div className={styles.page}>
      <h1>boiling bad</h1>
      <p>we're in college and they gave us a stove.</p>
      <p>we have pots, water, and are not lactose intolerant.</p>
      <div className={styles.timeline}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.timelineItem}>
            <div className={styles.timelinePoint}></div>
            <div 
              className={styles.timelineContent}
              onClick={() => routeChange(recipe.id)}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>testimonials</h2>
      <p>"i love watching your videos you're so funny"</p>
      <p>"brain rot"</p>
      <p>"UR REACTION AFTWR WATING IS SO FUNNY"</p>
    </div>
  );
}

function Recipes() {
  return (
  <div>
    <RecipesContent></RecipesContent>
    <Footer></Footer>
  </div>)
}

export default Recipes;
