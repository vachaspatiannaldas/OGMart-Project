import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import axios from "axios";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { useParams, Link } from "react-router-dom";
import Category from "./Category";
import { responsive, responsive1 } from "./responsiveslide";
function Index() {
  const id = useParams();
  const pid = id.id;

  const cid = id.id;
  // console.log("id=",cid);

  const [Showdata, setShowdata] = useState([""]);
  const [Showcategory, setShowcategory] = useState([""])
  const [Showproduct, setShowproduct] = useState([""]);

  
  

  function fetchData() {
    axios.get("http://127.0.0.1:8000/api/Product").then((res) => {
      const data = res.data;
      console.log(data);

      setShowdata(data);
    });
  }

  function fetchCategory() {
    axios.get("http://127.0.0.1:8000/api/Category").then((res) => {
      const data = res.data;
      console.log(data);

      setShowcategory(data);
    });
  }

  
  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);
  return (
    <React.Fragment>
      <Header />

      <section class="hero-slider">
        <div class="single-slider">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-lg-9 offset-lg-3 col-12">
                <div class="text-inner">
                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <div class="hero-text">
                        <h1>
                          <span>UP TO 50% OFF </span>TShirt For Woman
                        </h1>
                        <p>Maboriosami ctio in the find it </p>
                        <div class="button">
                          <Link to="/shop" class="btn">
                            Shop Now!
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          

      <section class="small-banner section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-banner">
                <img
                  src="images/men.jpg"
                  alt="#"
                  style={{ height: "350px", width: "100%" }}
                />
                <div class="content">
                  <p>Man's Collectons</p>
                  <h3>
                    Summer travel <br /> collection
                  </h3>
                  <Link to="">Discover Now</Link>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-banner">
                <img
                  src="images/girl4.jpg"
                  alt="#"
                  style={{ height: "350px", width: "100%" }}
                />
                <div class="content">
                  <p>Girl Collectons</p>
                  <h3>
                    Awesome Girl <br /> 2020
                  </h3>
                  <Link to="/shop">Shop Now</Link>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-12">
              <div class="single-banner tab-height">
                <img
                  src="images/men_women.jpg"
                  alt="#"
                  style={{ height: "350px" }}
                />
                <div class="content">
                  <p>Flash Sale</p>
                  <h3>
                    Mid Season <br /> Up to <span>40%</span> Off
                  </h3>
                  <Link to="">Discover Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

           <section className="slidetop m-4">

                <div class="section-title mt-3 mb-2">
                    <h2>Top Smartphones</h2>
                  </div>
                <Carousel responsive={responsive}>
                
                {Showdata.slice(4).map((row) => { 
                  return (

                      <div class="single-product sp1">
                        <div class="product-img">
                          <Link to={"/description/" + row.id}>
                            <img
                              class="default-img"
                              src={`http://localhost:8000/product_upload/${row.img}`}
                              alt="#"
                              style={{ width: "75%", height: "210px",margin: "0px 38px" }}
                            />
                            {/* <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#"/> */}
                          </Link>
                          <div class="button-head">
                            <div class="product-action">
                              <Link
                                title="Quick View"
                                to={"/description/" + row.id}
                              >
                                <i class=" ti-eye"></i>
                                <span>Quick Shop</span>
                              </Link>
                              <Link title="Wishlist" to="/wishlist">
                                <i class=" ti-heart "></i>
                                <span>Add to Wishlist</span>
                              </Link>
                              <Link title="Compare" to="">
                                <i class="ti-bar-chart-alt"></i>
                                <span>Add to Compare</span>
                              </Link>
                            </div>
                            <div class="product-action-2">
                              <Link
                                title="See All Product"
                                to={"/description/" + row.id}
                              >
                                Add To Cart
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <h3>
                            <Link to={"/description/" + row.id}>{row.pname}</Link>
                          </h3>
                          <div class="product-price">
                            <span>
                              <i class="fa fa-rupee"></i> {row.price_sale}
                            </span>
                          </div>
                        </div>
                      </div>
                  );
                })}
                </Carousel>

            </section>


            <section class="midium-banner mb1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="single-banner">
                <img src="images/iphone.jpg" alt="#" />
                <div class="content">
                  <p>Iphone Collectons</p>
                  <h3>
                    Iphone items <br />
                    Up to<span> 50%</span>
                  </h3>
                  <Link to="/shop">Shop Now</Link>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <div class="single-banner">
                <img
                  src="images/laptop3.jpg"
                  alt="#"
                  style={{ height: "320px" }}
                />
                <div class="content">
                  <p>Gaming Laptop</p>
                  <h3>
                    mid season <br /> up to <span>70%</span>
                  </h3>
                  <Link to="/shop" class="btn">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

           <section className="slidetop m-4">

                <div class="section-title mt-3 mb-2">
                    <h2>Top Deals</h2>
                  </div>
                <Carousel responsive={responsive1}>
                
                {Showdata.map((row) => { 
                  return (

                      <div class="single-product sp1">
                        <div class="product-img">
                          <Link to={"/description/" + row.id}>
                            <img
                              class="default-img"
                              src={`http://localhost:8000/product_upload/${row.img}`}
                              alt="#"
                              style={{ width: "75%", height: "210px",margin: "0px 38px" }}
                            />
                            {/* <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#"/> */}
                          </Link>
                          <div class="button-head">
                            <div class="product-action">
                              <Link
                                title="Quick View"
                                to={"/description/" + row.id}
                              >
                                <i class=" ti-eye"></i>
                                <span>Quick Shop</span>
                              </Link>
                              <Link title="Wishlist" to="/wishlist">
                                <i class=" ti-heart "></i>
                                <span>Add to Wishlist</span>
                              </Link>
                              <Link title="Compare" to="">
                                <i class="ti-bar-chart-alt"></i>
                                <span>Add to Compare</span>
                              </Link>
                            </div>
                            <div class="product-action-2">
                              <Link
                                title="See All Product"
                                to={"/description/" + row.id}
                              >
                                Add To Cart
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <h3>
                            <Link to={"/description/" + row.id}>{row.pname}</Link>
                          </h3>
                          <div class="product-price">
                            <span>
                              <i class="fa fa-rupee"></i> {row.price_sale}
                            </span>
                          </div>
                        </div>
                      </div>
                  );
                })}
                </Carousel>

            </section>

      {/* <div class="product-area section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h2>Trending Item</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="product-info">
                <div class="nav-main">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#man"
                        role="tab"
                      >
                        Man
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#women"
                        role="tab"
                      >
                        Woman
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#kids"
                        role="tab"
                      >
                        Laptop
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#accessories"
                        role="tab"
                      >
                        Mobiles
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#essential"
                        role="tab"
                      >
                        Watch
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="man"
                    role="tabpanel"
                  >
                    <div class="tab-single">
                      <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/men_t_shirt1.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="/wishlist">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link to="/shop"
                                    carttitle="See All Product"
                                    
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">Men Collection</Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 599</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/men_t_shirt2.jpg"
                                  id="tabimg"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/men_t_shirt2.jpg"
                                  id="tabimg"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link to=""
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link to="" title="Wishlist" >
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link to="" title="Compare" >
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link to="/shop"
                                    
                                    
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">Awesome Tshirt </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 799</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/men_t_shirt3.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/men_t_shirt3.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
                                  Awesome New Tshirt
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 699</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/men_t_shirt4.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/men_t_shirt4.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
                                  Awesome Oversize tshirt{" "}
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 899</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="women" role="tabpanel">
                    <div class="tab-single">
                      <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/women_t_Shirt1.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/women_t_Shirt1.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
                                  women t shirt Collection
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 499</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/women_t_Shirt2.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/women_t_Shirt2.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
                                  women t shirt Collection
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 599</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/women_t_Shirt3.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/women_t_Shirt3.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
                                  women t shirt Collection
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 799</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/women_t_Shirt4.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/women_t_Shirt4.jpg"
                                  alt="#"
                                  id="tabimg"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
                                  women t shirt Collection
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 899</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="kids" role="tabpanel">
                    <div class="tab-single">
                      <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/laptop1.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/laptop1.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
									ROG Strix G17
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 159990</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/laptop2.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/laptop2.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
								HP Pavilion Gaming 15
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 70000</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/laptop3.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/laptop3.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
								HP Pavilion Gaming 15 AMD
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 74000</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/laptop6.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/laptop6.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">
								ASUS Gaming Laptop
                                </Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 72000</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="accessories" role="tabpanel">
                    <div class="tab-single">
                      <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/oneplus1.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/oneplus1.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">OnePlus 9R</Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 40000</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/apple2.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/apple2.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">iPhone 11</Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 37999</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/apple3.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/apple3.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">iPhone 12</Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 49999</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/oneplus2.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/oneplus2.jpg"
                                  alt="#"
                                  id="tabimg2"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">One Plus Nord 2</Link>
                              </h3>
                              <div class="product-price">
                                <span>₹ 34999</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="essential" role="tabpanel">
                    <div class="tab-single">
                      <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/watch1.jpg"
                                  alt="#"
                                  id="tabimg3"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/watch1.jpg"
                                  alt="#"
                                  id="tabimg3"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">Watch Collection</Link>
                              </h3>
                              <div class="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/watch2.jpg"
                                  alt="#"
                                  id="tabimg3"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/watch2.jpg"
                                  alt="#"
                                  id="tabimg3"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">watch Collection</Link>
                              </h3>
                              <div class="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/watch3.jpg"
                                  alt="#"
                                  id="tabimg3"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/watch3.jpg"
                                  alt="#"
                                  id="tabimg3"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">watch Collection</Link>
                              </h3>
                              <div class="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div class="single-product">
                            <div class="product-img">
                              <Link to="">
                                <img
                                  class="default-img"
                                  src="/images/Tab/watch4.jpg"
                                  alt="#"
                                  id="tabimg3"
                                />
                                <img
                                  class="hover-img"
                                  src="/images/Tab/watch4.jpg"
                                  alt="#"
                                  id="tabimg3"
                                />
                              </Link>
                              <div class="button-head">
                                <div class="product-action">
                                  <Link
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    to=""
                                  >
                                    <i class=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </Link>
                                  <Link title="Wishlist" to="">
                                    <i class=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </Link>
                                  <Link title="Compare" to="">
                                    <i class="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </Link>
                                </div>
                                <div class="product-action-2">
                                  <Link
                                    
                                    to="/shop"
                                  >
                                    See All Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div class="product-content">
                              <h3>
                                <Link to="">watch Collection</Link>
                              </h3>
                              <div class="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      

      

      {/* <div class="container container1">
          <div class="tab-pane fade show active" id="man" role="tabpanel">
            <div class="tab-single">
              <div class="row">
                <div class="col-12 mt-5">
                  <div class="section-title">
                    <h2>Popular Items</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                {Showdata.map((row) => {
                  return (
                    <div class="col-sm-2 col-md-6 col-lg-3">
                      <div class="single-product">
                        <div class="product-img">
                          <Link to={"/description/" + row.id}>
                            <img
                              class="default-img"
                              src={`http://localhost:8000/product_upload/${row.img}`}
                              alt="#"
                              style={{ width: "100%", height: "210px" }}
                            />
                          </Link>
                          <div class="button-head">
                            <div class="product-action">
                              <Link
                                title="Quick View"
                                to={"/description/" + row.id}
                              >
                                <i class=" ti-eye"></i>
                                <span>Quick Shop</span>
                              </Link>
                              <Link title="Wishlist" to="/wishlist">
                                <i class=" ti-heart "></i>
                                <span>Add to Wishlist</span>
                              </Link>
                              <Link title="Compare" to="">
                                <i class="ti-bar-chart-alt"></i>
                                <span>Add to Compare</span>
                              </Link>
                            </div>
                            <div class="product-action-2">
                              <Link
                                title="See All Product"
                                to={"/description/" + row.id}
                              >
                                Add To Cart
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <h3>
                            <Link to={"/description/" + row.id}>{row.pname}</Link>
                          </h3>
                          <div class="product-price">
                            <span>
                              <i class="fa fa-rupee"></i> {row.price_sale}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
      </div> */}

      <section class="cown-down mt-5">
        <div class="section-inner ">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 col-12 padding-right">
                <div class="image">
                  <img
                    src="images/fashion.jpg"
                    alt="#"
                    style={{ height: "350px" }}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-12 padding-left">
                <div class="content">
                  <div class="heading-block">
                    <p class="small-title">Deal of day</p>
                    <h3 class="title">Beatutyful dress for women</h3>
                    <p class="text">
                      Suspendisse massa leo, vestibulum cursus nulla sit amet,
                      frungilla placerat lorem. Cars fermentum, sapien.{" "}
                    </p>
                    <h1 class="price">
                      ₹1200 <s>₹1890</s>
                    </h1>
                    <div class="coming-time">
                      <div class="clearfix" data-countdown="2021/02/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="shop-services section home">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="ti-rocket"></i>
                <h4>Free shiping</h4>
                <p>Orders over ₹500</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="ti-reload"></i>
                <h4>Free Return</h4>
                <p>Within 7 days returns</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="ti-lock"></i>
                <h4>Sucure Payment</h4>
                <p>100% secure payment</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service">
                <i class="ti-tag"></i>
                <h4>Best Peice</h4>
                <p>Guaranteed price</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 


  <section class="shop-newsletter section">
		<div class="container">
			<div class="inner-top">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-12">
					
						<div class="inner">
							<h4>Newsletter</h4>
							<p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
							<form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
								<input name="EMAIL" placeholder="Your email address" required="" type="email"/>
								<button class="btn">Subscribe</button>
							</form>
						</div>
					
					</div>
				</div>
			</div>
		</div>
	</section> */}

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span class="ti-close" aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row no-gutters">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="product-gallery">
                    <div class="quickview-slider-active">
                      <div class="single-slider">
                        <img
                          src="https://via.placeholder.com/569x528"
                          alt="#"
                        />
                      </div>
                      <div class="single-slider">
                        <img
                          src="https://via.placeholder.com/569x528"
                          alt="#"
                        />
                      </div>
                      <div class="single-slider">
                        <img
                          src="https://via.placeholder.com/569x528"
                          alt="#"
                        />
                      </div>
                      <div class="single-slider">
                        <img
                          src="https://via.placeholder.com/569x528"
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div class="quickview-content">
                    {/* <h2>{product.pname}</h2> */}
                    <div class="quickview-ratting-review">
                      <div class="quickview-ratting-wrap">
                        <div class="quickview-ratting">
                          <i class="yellow fa fa-star"></i>
                          <i class="yellow fa fa-star"></i>
                          <i class="yellow fa fa-star"></i>
                          <i class="yellow fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <Link to=""> (1 customer review)</Link>
                      </div>
                      <div class="quickview-stock">
                        <span>
                          <i class="fa fa-check-circle-o"></i> in stock
                        </span>
                      </div>
                    </div>
                    <h3>$29.00</h3>
                    <div class="quickview-peragraph">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia iste laborum ad impedit pariatur esse
                        optio tempora sint ullam autem deleniti nam in quos qui
                        nemo ipsum numquam.
                      </p>
                    </div>
                    <div class="size">
                      <div class="row">
                        <div class="col-lg-6 col-12">
                          <h5 class="title">Size</h5>
                          <select>
                            <option selected="selected">s</option>
                            <option>m</option>
                            <option>l</option>
                            <option>xl</option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-12">
                          <h5 class="title">Color</h5>
                          <select>
                            <option selected="selected">orange</option>
                            <option>purple</option>
                            <option>black</option>
                            <option>pink</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="quantity">
                      <div class="input-group">
                        <div class="button minus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[1]"
                          >
                            <i class="ti-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[1]"
                          class="input-number"
                          data-min="1"
                          data-max="1000"
                          value="1"
                        />
                        <div class="button plus">
                          <button
                            type="button"
                            class="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[1]"
                          >
                            <i class="ti-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="add-to-cart">
                      <Link to="" class="btn">
                        See All Product
                      </Link>
                      <Link to="" class="btn min">
                        <i class="ti-heart"></i>
                      </Link>
                      <Link to="" class="btn min">
                        <i class="fa fa-compress"></i>
                      </Link>
                    </div>
                    <div class="default-social">
                      <h4 class="share-now">Share:</h4>
                      <ul>
                        <li>
                          <Link class="facebook" to="">
                            <i class="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link class="twitter" to="">
                            <i class="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link class="youtube" to="">
                            <i class="fa fa-pinterest-p"></i>
                          </Link>
                        </li>
                        <li>
                          <Link class="dribbble" to="">
                            <i class="fa fa-google-plus"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Index;
