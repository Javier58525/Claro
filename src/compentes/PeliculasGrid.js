import React, { useEffect, useState } from 'react';
import { PeliculaCard } from "./PeliculaCard";
import styles from "./MoviesGrid.module.css";
import inputStyles from "./PeliculaCard.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getTitleListAction } from '../Redux/Peliculas';

export function PeliculasGrid(id) {
  const dispatch= useDispatch();
  const peliculasLista=useSelector( (store)=>store.titleList.list );
  const [filter, setFilter] = useState("")

  useEffect(() => {
    dispatch(getTitleListAction(id.id));
  }, [id.id, dispatch]);

  const handleOnChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <form className={inputStyles.searchContainer} onSubmit={(e) => e.preventDefault()}>
          <div className={inputStyles.searchBox}>
              <input 
              className={inputStyles.searchInput} 
              type="text" 
              value={filter} 
              onChange={handleOnChange}
              />
              <button className={inputStyles.searchButton} type="submit">
                  Buscar
              </button> 
          </div>
      </form>
      <ul className={styles.moviesGrid}>
        {
          peliculasLista.filter((pelicula) => pelicula.title.toLowerCase().indexOf(filter.toLowerCase()) > -1).map((pelicula) => (
            <PeliculaCard key={pelicula.id} id={pelicula.id} nombre={pelicula.title} imagen={pelicula.url_imagen_t1} description={pelicula.description} year={pelicula.year}/>
          ))
        }
      </ul>
    </div>
  );
}