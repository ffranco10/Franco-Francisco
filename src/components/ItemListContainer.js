import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../utils/products';



const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useEffect([]);

  useEffect(() => {
    console.log(categoryName);
  }, [categoryName])

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data) )
      .catch((error) => console.warm(error))
  }, [])

  return (
    <Container>
      <h1>Figuras de Acción</h1>
      <h3 className="greeting">{greeting}</h3>
      <ItemList products={products}/>
    </Container>
  );
}
 
export default ItemListContainer;