import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
import { useParams, Link } from 'react-router-dom';

function Category() {
   


  const id = useParams();
  const cid = id.id;
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])
  const [Showcategory, setShowcategory] = useState([""])
  const [ShowSubcategory, setSubShowcategory] = useState([""])




  function fetchData()
  {
      axios.get('http://127.0.0.1:8000/api/Categoryshow/'+cid)
       .then((res)=>{
      const data=res.data;
      console.log(data);
                  
      setCategory(data[0]);
      console.log(data[0]);
      console.log(data[0].cname);
                  })
  }


  

  function fetchCategory()
  {
      axios.get('http://127.0.0.1:8000/api/Category')
       .then((res)=>{
      const data=res.data;
      console.log(data);
                  
      setShowcategory(data)
                  })
  }

  function fetchSubCategory()
  {
      axios.get('http://127.0.0.1:8000/api/SubCategory')
       .then((res)=>{
      const data=res.data;
      console.log(data);
                  
      setSubShowcategory(data)
                  })
  }
  useEffect(()=>{
      fetchData();
      fetchCategory();
      fetchSubCategory();
      
  },[])

  function productShow()
  {
      axios.get('http://127.0.0.1:8000/api/Productshow/'+cid)
       .then((res)=>{
      const data=res.data;
      console.log(data);
                  
      setProduct(data);
      // console.log(data[0]);
      // console.log(data[1].pname);
                  })
  }

  useEffect(()=>{
      productShow()
  },[])

  











  return (
    <React.Fragment>


<Header/>




<div class="breadcrumbs">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="bread-inner">
                <ul class="bread-list">
                    <li><Link to="/">Home<i class="ti-arrow-right"></i></Link></li>
                    <li class="active"><Link to="/shop">Shop Grid</Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>





<section class="product-area shop-sidebar shop section">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-4 col-12">
						<div class="shop-sidebar">
								
            <div class="single-widget category">
									<h3 class="title">Categories</h3>
                  

									<ul class="categor-list">
                                        {Showcategory.map((row)=>{
                                            return(
                                           
										<li><Link to={'/category/'+row.id}>{row.cname}</Link>
                    <br/>
                    
                    </li>
                   
                   
                                             
                                        )
                                    })}
										
									</ul>
								</div>



                {/* <div class="single-widget category">
									<h3 class="title">Categories</h3>
                  

									<ul class="categor-list">
                                        {ShowSubcategory.map((row)=>{
                                            return(
                                           
										<li><Link to={'/Category/'+row.id}><b>{row.cname}</b></Link> <br/>
                    <span><Link to={'/subcategory/'+row.id}>--{row.sub_name}</Link> </span>
                    <br/>
                    
                    </li>
                   
                   
                                             
                                        )
                                    })}
										
									</ul>
								</div> */}
								
								





									{/* <div class="single-widget range">
										<h3 class="title">Shop by Price</h3>
										<div class="price-filter">
											<div class="price-filter-inner">
												<div id="slider-range"></div>
													<div class="price_slider_amount">
													<div class="label-input">
														<span>Range:</span><input type="text" id="amount" name="price" placeholder="Add Your Price"/>
													</div>
						s						</div>
											</div>
										</div>
										<ul class="check-box-list">
											<li>
												<label class="checkbox-inline" for="1"><input name="news" id="1" type="checkbox" />$20 - $50<span class="count">(3)</span></label>
											</li>
											<li>
												<label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" />$50 - $100<span class="count">(5)</span></label>
											</li>
											<li>
												<label class="checkbox-inline" for="3"><input name="news" id="3" type="checkbox" />$100 - $250<span class="count">(8)</span></label>
											</li>
										</ul>
									</div> */}
									
						
								
								
							
								
						</div>
					</div>
					<div class="col-lg-9 col-md-8 col-12">
						<div class="row">
							<div class="col-12">
								
								<div class="shop-top">
									<div class="shop-shorter">
									<b>{category.cname}</b>
										{/* <div class="single-shorter">
											<label>Show :</label>
											<select>
												<option selected="selected">09</option>
												<option>15</option>
												<option>25</option>
												<option>30</option>
											</select>
										</div>
										<div class="single-shorter">
											<label>Sort By :</label>
											<select>
												<option selected="selected">Name</option>
												<option>Price</option>
												<option>Size</option>
											</select>
										</div> */}
									</div>
									<ul class="view-mode">
										<li class="active"><Link to=""><i class="fa fa-th-large"></i></Link></li>
										{/* <li><Link to=""><i class="fa fa-th-list"></i></Link></li> */}
									</ul>
								</div>
								
							</div>
						</div>
			<div className="row">
  {product.map((row) => (
    <div className="col-lg-4 col-md-6 col-12" key={row.pid}>
      <div className="single-product">
        <div className="product-img">
          {row.img && (
            <Link to="#">
              <img
                className="default-img"
                src={`http://localhost:8000/product_upload/${row.imgpro}`}
                alt={row.pname} style={{width:"100%",height:"210px"}}
              />
              {row.hoverImg && (
                <img
                  className="hover-img"
                  src={`http://localhost:8000/product_upload/${row.hoverImg}`}
                  alt={row.pname} style={{width:"100%",height:"210px"}}
                />
              )}
            </Link>
          )}
          <div className="button-head">
            <div className="product-action">
              <Link title="Quick View" to={`/description/${row.pid}`}>
                <i className="ti-eye"></i>
                <span>Quick Shop</span>
              </Link>
              <Link title="Wishlist" to="#">
                <i className="ti-heart"></i>
                <span>Add to Wishlist</span>
              </Link>
              <Link title="Compare" to="#">
                <i className="ti-bar-chart-alt"></i>
                <span>Add to Compare</span>
              </Link>
            </div>
            <div className="product-action-2">
              <Link title="Add to cart" to="#">
                Add to cart
              </Link>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h3>
            <Link to={`/description/${row.pid}`}>{row.pname}</Link>
          </h3>
          <div className="product-price">
            <span>{row.price_purchase}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



						
					</div>
				</div>
			</div>
		</section>





			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ti-close" aria-hidden="true"></span></button>
						</div>
						<div class="modal-body">
							<div class="row no-gutters">
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
									
										<div class="product-gallery">
											<div class="quickview-slider-active">
												<div class="single-slider">
													<img src="https://via.placeholder.com/569x528" alt="#"/>
												</div>
												<div class="single-slider">
													<img src="https://via.placeholder.com/569x528" alt="#"/>
												</div>
												<div class="single-slider">
													<img src="https://via.placeholder.com/569x528" alt="#"/>
												</div>
												<div class="single-slider">
													<img src="https://via.placeholder.com/569x528" alt="#"/>
												</div>
											</div>
										</div>
									
								</div>
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
									<div class="quickview-content">
										<h2>Flared Shift Dress</h2>
										<div class="quickview-ratting-review">
											<div class="quickview-ratting-wrap">
												<div class="quickview-ratting">
													<i class="yellow fa fa-star"></i>
													<i class="yellow fa fa-star"></i>
													<i class="yellow fa fa-star"></i>
													<i class="yellow fa fa-star"></i>
													<i class="fa fa-star"></i>
												</div>
												<Link to="#"> (1 customer review)</Link>
											</div>
											<div class="quickview-stock">
												<span><i class="fa fa-check-circle-o"></i> in stock</span>
											</div>
										</div>
										<h3>$29.00</h3>
										<div class="quickview-peragraph">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
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
													<button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
														<i class="ti-minus"></i>
													</button>
												</div>
												<input type="text" name="quant[1]" class="input-number"  data-min="1" data-max="1000" value="1"/>
												<div class="button plus">
													<button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
														<i class="ti-plus"></i>
													</button>
												</div>
											</div>
											
										</div>
										<div class="add-to-cart">
											<Link to="#" class="btn">Add to cart</Link>
											<Link to="#" class="btn min"><i class="ti-heart"></i></Link>
											<Link to="#" class="btn min"><i class="fa fa-compress"></i></Link>
										</div>
										<div class="default-social">
											<h4 class="share-now">Share:</h4>
											<ul>
												<li><Link class="facebook" to="#"><i class="fa fa-facebook"></i></Link></li>
												<li><Link class="twitter" to="#"><i class="fa fa-twitter"></i></Link></li>
												<li><Link class="youtube" to="#"><i class="fa fa-pinterest-p"></i></Link></li>
												<li><Link class="dribbble" to="#"><i class="fa fa-google-plus"></i></Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			

<Footer/>

    </React.Fragment>
  )
}

export default Category