import styles from "./PeliculaCard.module.css";
import { Link } from "react-router-dom";



export function PeliculaCard({id,nombre,imagen,description,year}) {
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + id }>
      <img
        width={200}
        height={300}
        className={styles.movieImage}
        src={imagen}
        alt={nombre}
      />
      <div>{nombre}</div>
      </Link>
    </li>
  );
}
