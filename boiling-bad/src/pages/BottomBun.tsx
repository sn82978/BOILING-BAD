import styles from "./Pages.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function BottomBunContent() {
  let navigate = useNavigate();

  const recipes = [
    { id: 60, title: "F23", description: "flying from SNA to SJC" }
  ];

  const routeChange = (id: number) => {
    let path = `/bottom-bun/${id}`;
    navigate(path);
  }

  return (
    <div className={styles.page}>
      <h1>bottom bun</h1>
      <p>bottom bun = Top Gun but better</p>
      <p>we are probably the worst people to sit next to on the plane</p>
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
    </div>
  );
}

function BottomBun(){
  return (
  <div>
    <BottomBunContent></BottomBunContent>
    <Footer></Footer>
  </div>)
}

export default BottomBun;
