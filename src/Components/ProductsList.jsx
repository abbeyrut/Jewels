import React from 'react';
import Products from './MainProducts/Products';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart/Cart';

const ProductsList = () => {
  const data = Products;

  return (
    <div className="main col-2" >

      {data &&
        data.map((product) => (
          <div className="row">
            <div className="card" key={product.id}>
              <img src={product.src} alt="jewel" className="displayimage" />

              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <Cart/>
              <div className="carticon">
                <FontAwesomeIcon icon={faCartArrowDown} />
              </div>
              
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsList;
