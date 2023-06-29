import { useContext } from 'react';
import { ProductsContext } from '../../contexts/product.context';
import './shop.styled.scss';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => { 
    const { products } = useContext(ProductsContext);

    return (
      <div className='product-container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
};

export default Shop;