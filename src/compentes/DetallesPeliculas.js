import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./PeliculaCard.module.css";

export function DetallesPeliculas() {
    const id = useParams();
    const [infoPeliculas, setInfoPeliculas] = useState({});

    console.log(id.Id);

    console.log(styles);

    useEffect(() => {
        cargarPeliculas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const cargarPeliculas = async () => {
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


    }

    const background = {
        backgroundImage: `url(${infoPeliculas.image_background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }


    return (
        <div className={styles.detailsContainer} style={background}>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={infoPeliculas.image_medium}
                alt="tui"
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {infoPeliculas.title}
                </p>
                <p>
                    {infoPeliculas.publishyear}&nbsp;&nbsp;{infoPeliculas.duration}
                    <strong className={styles.blanco}>{infoPeliculas.code}</strong>
                    <strong className={styles.blanco}>
                        {"subbed" in infoPeliculas && infoPeliculas.subbed? 
                        "Subtitulada"
                        : ""}
                    </strong>
                    <strong className={styles.blanco}>
                        {"dubbed" in infoPeliculas && infoPeliculas.dubbed? 
                        "Doblada"
                        : ""}
                    </strong>

                </p>
                <p>
                    <strong >Descripción:</strong> {infoPeliculas.large_description} <br></br>
                    <strong>{"role" in infoPeliculas &&
                        infoPeliculas.role.map((actores) => (
                            <p key={actores.id}>

                                {actores.desc}: {actores.talents.talent.map((Actor) => (
                                    <strong key={Actor.id}>{Actor.fullname}</strong>
                                ))}
                            </p>
                        ))}
                    </strong>

                    <strong>Género: {"genre" in infoPeliculas &&
                        infoPeliculas.genre.map((genero) => (
                            <strong key={genero.id}>{genero.desc} </strong>
                        ))}</strong><br></br>




                </p>
            </div>
        </div>
    );
}