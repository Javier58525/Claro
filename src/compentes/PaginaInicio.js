import { PeliculasGrid } from "./PeliculasGrid";


export function PaginaInicio(id) {

  return (
    <div>
      <PeliculasGrid  id={id.id}/>
    </div>
  );
}