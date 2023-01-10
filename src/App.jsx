import {BrowserRouter as Router,Routes,Route,Link,Navigate,} from "react-router-dom";
import { DetallesPeliculas } from "./compentes/DetallesPeliculas";
import { PaginaInicio } from "./compentes/PaginaInicio";
import  styles from "./App.module.css";
import { Provider } from "react-redux";
import generateStore from "./Redux/store";


export function App() {
  const store= generateStore();
  return (
    <Provider store={store}>     

    <Router>
      <header>
          <h2 >        
            <Link to="/">
            <img className={styles.Image} src="/clarovideo_home_logo.png" /><br/><br/>

            Ciencia Ficción      
            </Link>
            &nbsp;&nbsp;
            <Link to="/gen=CinedeOro">
            Cine de Oro
            </Link>
            &nbsp;&nbsp;
            <Link to="/gen=Comedia">
            Comedia
            </Link>
            &nbsp;&nbsp;
            <Link to="/gen=Anime">
            Anime
            </Link>
            &nbsp;&nbsp;
            <Link to="/gen=Familiares">
            Familiares
            </Link>
            &nbsp;&nbsp;
            <Link to="/gen=Clasicas">
            Clasicas
            </Link>
      </h2>

      </header>
      <main>
        <Routes>
          <Route path="/movies/:Id" element={<DetallesPeliculas  />} />
          <Route path="/" element={<PaginaInicio id={34270} />} />
          <Route path="/gen=CinedeOro" element={<PaginaInicio id={34309} />} />
          <Route path="/gen=Comedia" element={<PaginaInicio id={34310} />} />
          <Route path="/gen=Anime" element={<PaginaInicio id={34312}/>} />
          <Route path="/gen=Familiares" element={<PaginaInicio id={34290} />} />
          <Route path="/gen=Clasicas" element={<PaginaInicio id={34251} />} />





          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </Router>
    </Provider>  

  );
}