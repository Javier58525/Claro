import { useState } from "react";
import styles from "./PeliculaCard.module.css"
import { useNavigate } from "react-router-dom";

export function Buscador(){

    const [buscador, setBuscador] = useState("");
    const busqueda = useNavigate();

    const Buscar = (e) =>{
        e.preventDefault();
        busqueda("/?busqueda=" + buscador)

    }

    const Buscar2 = (e) =>{
        setBuscador(e.target.value)
        busqueda("/?busqueda=" + buscador)


    }

    return(
        <form className={styles.searchContainer} onSubmit={Buscar} >
            <div className={styles.searchBox}>
                <input 
                className={styles.searchInput} 
                type="text" value={buscador} 
                onChange={Buscar2}/>
                <button className={styles.searchButton} type="submit">
                    Buscar
                </button>

                
            </div>
        </form>

    )
}