import React, { useEffect, useState } from 'react';
import { PeliculaCard } from "./PeliculaCard";
import styles from "./MoviesGrid.module.css";
import { useSearchParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getTitleListAction } from '../Redux/Peliculas';



export function PeliculasGrid(id) {

  const [infoPeliculas, setInfoPeliculas] = useState([]);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('busqueda'));
  const dispatch= useDispatch();
  const peliculasLista=useSelector( (store)=>store.titleList.list );

  console.log(peliculasLista);





  useEffect(() => {
    //cargarPeliculas(id);
    dispatch(getTitleListAction());

  }, [id.id, dispatch]);



  const cargarPeliculas = async (id) => {

      console.log("PeliculasGrid"+id.id)

    


      const url = `https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&format=json&authpn=webclient&authphttps://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=7bni2atm7id0e33f9pppp1ttq1&quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34270t=tfg1h3j4k6fd7&region=mexico&HKS=7bni2atm7id0e33f9pppp1ttq1&quantity=50&from=0&filter_id=`+id.id;

      const respuesta = await fetch(url);
      //console.log("HOLA"+respuesta);


      const datos = await respuesta.json();
      //console.log(datos);

      const peliculas = datos.response.groups.map(pelicula => {
        return {
      
            id: pelicula.id,
            nombre: pelicula.title,
            imagen: pelicula.url_imagen_t1,
            description: pelicula.description_large,
            year: pelicula.year
            
        }
        
    })


    //console.log(peliculas);

    setInfoPeliculas(peliculas);
    //console.log(infoPeliculas);

  }

  

  return (
    <ul className={styles.moviesGrid}>

      
      { !searchParams.get('busqueda') && peliculasLista.map(({id,title,url_imagen_t1,description,year}) => (
        
        <PeliculaCard key={id} id={id} nombre={title} imagen={url_imagen_t1} description={description} year={year}/>


      ))} 

      {
        searchParams.get('busqueda') &&
        
          peliculasLista.filter(peliculas => peliculas.nombre.toLowerCase().includes(searchParams.get('busqueda'))).map(({id,title,url_imagen_t1,description,year}) =>(
          
          <PeliculaCard key={id} id={id} nombre={title} imagen={url_imagen_t1} description={description} year={year}/>
          )
        )
        

      }
    </ul>

    
  );
}
