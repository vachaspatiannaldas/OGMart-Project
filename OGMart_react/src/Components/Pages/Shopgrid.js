import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'

function Shopgrid() {
	const [categories, setCategories] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [filteredProduct, setFilteredProduct] = useState([]);
	const [productsPerPage, setProductsPerPage] = useState(9);
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchInputChange = (e) => {
		setSearchQuery(e.target.value);
	  };


	  const handleSearch = () => {
		if (searchQuery.trim() === '') {
		  // Fetch all data when the search query is empty
		  axios
			.get('http://127.0.0.1:8000/api/productfrontend')
			.then((res) => {
			  const data = res.data;
			  setFilteredProduct(data);
			})
			.catch((error) => {
			  console.error(error);
			});
		} else {
		  // Fetch data based on the search query
		//   axios
		// 	.get(`http://127.0.0.1:8000/api/searchProduct?searchQuery=${searchQuery}`)
		// 	.then((res) => {
		// 	  const data = res.data;
		// 	  setFilteredProduct(data);
		// 	})
		// 	.catch((error) => {
		// 	  console.error(error);
		// 	});
		axios.get(`http://127.0.0.1:8000/api/searchProduct?searchQuery=${searchQuery}`)
		.then((res) => {
			const data = res.data;
			// Handle the search results
		})
		.catch((error) => {
			console.error(error);
		});

		}
	  };
	  

	// Fetch hall data from the API
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/productfrontend')
		  .then((res) => {
			const data = res.data;
			// console.log(data); // Log the data to the console
			setFilteredProduct(data);
		  })
		  .catch((error) => {
			console.error(error);
		  });
	  
		axios.get('http://127.0.0.1:8000/api/categoryfrontend')
		  .then((res) => {
			const data = res.data;
			console.log(data); // Log the data to the console
			setCategories(data);
		  })
		  .catch((error) => {
			console.error(error);
		  });
	  }, []);
	  

	  // Function to handle checkbox changes and filter Product
	  const handleCheckboxChange = (categoryId) => {
		const updatedCategories = [...selectedCategories];
	  
		if (updatedCategories.includes(categoryId)) {
		  // Category is already selected, remove it
		  const index = updatedCategories.indexOf(categoryId);
		  updatedCategories.splice(index, 1);
		} else {
		  // Category is not selected, add it
		  updatedCategories.push(categoryId);
		}
	  
		setSelectedCategories(updatedCategories);
		console.log(updatedCategories); // Log the selected categories to the console
	  };
	  

  
  // Fetch filtered Product when selectedCategories change
  useEffect(() => {
    if (selectedCategories.length === 0) {
      // Fetch all data when no checkboxes are selected
      axios
        .get('http://127.0.0.1:8000/api/productfrontend')
        .then((res) => {
          const data = res.data;
          setFilteredProduct(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Fetch data based on selected categories
      axios
        .get(`http://127.0.0.1:8000/api/filteredProduct?selectedCategories=${selectedCategories.join(',')}`)
        .then((res) => {
          const data = res.data;
          setFilteredProduct(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedCategories]);
  


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
                    <li class="active"><Link to="/shop">Product</Link></li>
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
									{categories.map((category) => (
										<li key={category.id}>
										<label>
											<input
											type="checkbox"
											value={category.id}
											checked={selectedCategories.includes(category.id)}
											onChange={() => handleCheckboxChange(category.id)}
											class="orange-checkbox"
											/>
											<span className="ml-2">{category.cname}</span>
										</label>
										</li>
									))}														
									</ul>
								</div>
								
								
								
									
						</div>
					</div>
					<div class="col-lg-9 col-md-8 col-12">
						<div class="row">
							<div class="col-12">
{/* 								
								<div class="shop-top">
									<div class="shop-shorter">
										<div class="single-shorter">
											<label>Show :</label>
											<select 
												value={productsPerPage}
												onChange={(e) => setProductsPerPage(parseInt(e.target.value))}
												style={{marginTop:"8px"}}
											>
												<option value={9}>09</option>
												<option value={15}>15</option>
												<option value={25}>25</option>
												<option value={30}>30</option>
												<option value={60}>60</option>
											</select>
										</div>
									</div>
									<ul class="view-mode">
										<li class="active"><Link to="/shop"><i class="fa fa-th-large"></i></Link></li>
									</ul>
								</div> */}

								<div class="shop-top">
									<div class="shop-shorter">
										<div class="single-shorter">
										<label>Show :</label>
										<select 
											value={productsPerPage}
											onChange={(e) => setProductsPerPage(parseInt(e.target.value))}
											style={{ marginTop: "8px" }}
										>
											<option value={9}>09</option>
											<option value={15}>15</option>
											<option value={25}>25</option>
											<option value={30}>30</option>
											<option value={60}>60</option>
										</select>
										</div>
									</div>
									{/* <div class="search-bar">
										<input
										type="text"
										placeholder="Search products..."
										value={searchQuery}
										onChange={handleSearchInputChange}
										/>
										<button onClick={() => handleSearch()}>
										<i class="fa fa-search"></i>
										</button>
									</div> */}
									<ul class="view-mode">
										<li class="active">
										<Link to="/shop">
											<i class="fa fa-th-large"></i>
										</Link>
										</li>
										{/* <li><Link to="/shop"><i class="fa fa-th-list"></i></Link></li> */}
									</ul>
								</div>

								
							</div>
						</div>
						<div class="row">
						{filteredProduct.slice(0, productsPerPage).map((row) => {
                        return(
                            
                       
            		<div class="col-lg-4 col-md-6 col-12">
								<div class="single-product">
									<div class="product-img">
										<Link  to={'/description/' + row.id}>
											<img class="default-img" src={`http://localhost:8000/product_upload/${row.img}`} alt="#" id='tabimg3'/>
											<img class="hover-img" src={`http://localhost:8000/product_upload/${row.img}`} alt="#" id='tabimg3'/>
										</Link>
										<div class="button-head">
											<div class="product-action">
												{/* <Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i class=" ti-eye"></i><span>Quick Shop</span></Link> */}
												<Link title="Quick View" 
                                to={'/description/' + row.id}><i class=" ti-eye"></i><span>Quick Shop</span></Link>
												<Link title="Wishlist" to="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></Link>
												<Link title="Compare" to="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
											</div>
											<div class="product-action-2">
												<Link title="Add to cart" to="#">Add to cart</Link>
											</div>
										</div>
									</div>
									<div class="product-content">
										<h3><Link to="product-details.html">{row.pname}</Link></h3>
										<div class="product-price">
											<span>{row.price_sale}</span>
										</div>
									</div>
								</div>
							</div>
                             )
                            })}
						
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

export default Shopgrid