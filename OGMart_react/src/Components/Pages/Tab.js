import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { tab } from '@testing-library/user-event/dist/tab';
import { Link } from 'react-router-dom';
function Tab() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tab')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row">
    <div className="col-12">
      <div className="product-info">
        <div className="nav-main">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {Object.keys(products).map((type, index) => (
              <li key={index} className="nav-item">
                <Link className={index === 0 ? 'nav-link active' : 'nav-link'} data-toggle="tab" to={`#${type}`} role="tab">{type}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          {Object.keys(products).map((type, index) => (
            <div key={index} className={index === 0 ? 'tab-pane fade show active' : 'tab-pane fade'} id={type} role="tabpanel">
              <div className="tab-single">
                <div className="row">
                  {products[type] && products[type].map((product, index) => (
                    <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-12">
                      <div className="single-product">
                        <div className="product-img">
                          <Link to="product-details.html">
                            <img className="default-img" src={`http://localhost:8000/product_upload/${product.img}`} alt="#" id="tabimg"/>
                          </Link>
                          <div className="button-head">
                            <div className="product-action">
                              <Link title="Quick View" to={'/description/' + product.id}>
                                <i class=" ti-eye"></i><span>Quick Shop</span>
                              </Link>
                              <Link title="Wishlist" to="#">
                                <i className=" ti-heart "></i><span>Add to Wishlist</span>
                              </Link>
                              <Link title="Compare" to="#">
                                <i className="ti-bar-chart-alt"></i><span>Add to Compare</span>
                              </Link>
                            </div>
                            <div className="product-action-2">
                              <Link title="Add to cart" to="#">Add to cart</Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3><Link to="product-details.html">{product.pname}</Link></h3>
                          <div className="product-price">
                            <span>${product.price_sale}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Tab;
