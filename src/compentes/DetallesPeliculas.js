import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./PeliculaCard.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {getTitleDetailAction} from '../Redux/DetallesPeliculasRedux';


export function DetallesPeliculas() {
    const id = useParams();
    //const [infoPeliculas, setInfoPeliculas] = useState({});
    const dispatch = useDispatch();
    const detalles = useSelector( (store)=>store.titleDetail.detail);


    console.log("Detalles Peliculas Redux", detalles);


    console.log(id.Id);

    console.log(styles);

    useEffect(() => {
        //cargarPeliculas();
        dispatch(getTitleDetailAction(id.Id));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);



    /* const cargarPeliculas = async () => {
        console.log(id);



            const url = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=rrscut2td9j0v73m68jrf3k665&group_id=` + id.Id;

            const respuesta = await fetch(url);

            const datos = await respuesta.json();
            console.log(datos);

        const { group: { common: { image_background, image_medium, title, large_description, extendedcommon: { media: { publishyear, duration } },
            extendedcommon: { media: { rating: { desc, code } } }, extendedcommon: { media: { language: { dubbed, subbed } } }, extendedcommon: { genres: { genre } }, extendedcommon: { roles: { role } } } } } = datos.response;


        console.log(datos.response.group.common.large_description);

        setInfoPeliculas({ image_background, image_medium, title, large_description, publishyear, duration, desc, code, role, genre, dubbed, subbed });
        console.log(datos);


    } */

    const background = {
        backgroundImage: `url(${detalles.image_background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    console.log("subbed", detalles.subbed);
    console.log("dubbed", detalles.dubbed);

    const isSubbed = "subbed" in detalles && (detalles.subbed === "true" || detalles.subbed === true) ? true : false;
    const isDubbed = "dubbed" in detalles && (detalles.dubbed === "true" || detalles.dubbed === true) ? true : false;

    return (
        <div className={styles.detailsContainer} style={background}>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={detalles.image_medium}
                alt="tui"
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {detalles.title}
                </p>
                <p>
                    año{detalles.extendedcommon.media.publishyear}&nbsp;&nbsp;{detalles.duration}
                    <strong className={styles.blanco}>{detalles.code}</strong>
                    {
                        isSubbed && 
                            <strong className={styles.blanco}>Subtitulada</strong>
                    }
                    {
                        isDubbed && 
                            <strong className={styles.blanco}>Doblada</strong>
                    }
                </p>
                <p>
                    <strong >Descripción:</strong> {detalles.large_description} <br></br>
                    <strong>{"role" in detalles &&
                        detalles.role.map((actores) => (
                            <p key={actores.id}>

                                {actores.desc}: {actores.talents.talent.map((Actor) => (
                                    <i key={Actor.id}>{Actor.fullname}</i>
                                ))}
                            </p>
                        ))}
                    </strong>

                    <strong>Género: {"genre" in detalles &&
                        detalles.genre.map((genero) => (
                            <i key={genero.id}>{genero.desc} </i>
                        ))}</strong><br></br>




                </p>
                <div className="About me">
				&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/javier.perezsalas.7" title="Facebook">
                <img src="../facebook.png" alt="facebook" /> 
                
				</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="https://www.facebook.com/javier.perezsalas.7" title="Facebook">
                <img src="../facebook.png" alt="facebook" />
                

				</a><br></br>
                <i>Facebook</i>&nbsp;&nbsp;
                <i >Facebook2</i>
			    </div>
            </div>
        </div>
    );
}