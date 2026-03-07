import styles from "./Pages.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function BBContent() {
  let navigate = useNavigate();

  const recipes = [
    { id: 70, title: "Doja Cat: Vie", description: "Our music review of Doja Cat's Vie" },
    { id: 71, title: "Pink Pantheress: Fancy That Tour", description: "Concert Clips" },
    { id: 72, title: "Don Toliver: OCTANE", description: "Donny Boy Music Review" }
  ];

  const routeChange = (id: number) => {
    let path = `/billie-bean/${id}`;
    navigate(path);
  }

  return (
    <div className={styles.page}>
      <h1>billie bean</h1>
      <p>we deserve to be in a podcast</p>
      <p>we are musicers</p>
      <p>we truly music the way music should be musiced</p>
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

function BillieBean(){
  return (
  <div>
    <BBContent></BBContent>
    <Footer></Footer>
  </div>)
}

export default BillieBean;
