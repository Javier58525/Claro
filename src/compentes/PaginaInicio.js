import { Buscador } from "./Buscador";
import { PeliculasGrid } from "./PeliculasGrid";


export function PaginaInicio(id) {

    console.log("PaginaInicio"+id.id)
  return (
    <div>
      <PeliculasGrid  id={id.id}/>
    </div>
  );
}