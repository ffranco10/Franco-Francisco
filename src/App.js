
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavBar />
      <ItemListContainer greeting={"Bienvenido a Tienda de figuras de acción coleccionables"}/>
    
    </>
  );
}

export default App;
