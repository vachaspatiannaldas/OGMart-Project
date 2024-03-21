import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <React.Fragment>

<footer class="footer">
		
		<div class="footer-top section">
			<div class="container">
				<div class="row">
					<div class="col-lg-5 col-md-6 col-12">
						
						<div class="single-footer about">
							<div class="logo">
								<Link to="#"><img src="/images/logo.png" alt="#"  style={{width:"180px" }}  /></Link>
							</div>
							<p class="text">102 B 16 Bhavani Peth,
Solapur, Maharashtra.
ogmart@gmail.com
+91 7020270105 </p>
							<p class="call">Got Question? Call us 24/7<span><Link to="tel:123456789">+91 7020270105</Link></span></p>
						</div>
						
					</div>
					<div class="col-lg-2 col-md-6 col-12">
						
						<div class="single-footer links">
							<h4>Information</h4>
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/shop">Product</Link></li>
								{/* <li><Link to="/shop">Shop</Link></li> */}
								<li><Link to="/contact">Contact Us</Link></li>
								
							</ul>
						</div>
						
					</div>
					<div class="col-lg-2 col-md-6 col-12">
						
						<div class="single-footer links">
							<h4>Customer Service</h4>
							<ul>
								<li><Link to="#">Payment Methods</Link></li>
								<li><Link to="#">Money-back</Link></li>
								<li><Link to="#">Returns</Link></li>
								<li><Link to="#">Shipping</Link></li>
								<li><Link to="#">Privacy Policy</Link></li>
							</ul>
						</div>
						
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						
						<div class="single-footer social">
							<h4>Get In Tuch</h4>
							
							<div class="contact">
								<ul>
									<li>102 B 16 Bhavani Peth</li>
									<li>Solapur, Maharashtra</li>
									<li>ogmart@gmail.com</li>
									<li>+91 7020270105</li>
								</ul>
							</div>
							
							<ul>
								<li><Link to="#"><i class="ti-facebook"></i></Link></li>
								<li><Link to="#"><i class="ti-twitter"></i></Link></li>
								<li><Link to="#"><i class="ti-flickr"></i></Link></li>
								<li><Link to="#"><i class="ti-instagram"></i></Link></li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		
		<div class="copyright">
			<div class="container">
				<div class="inner">
					<div class="row">
						<div class="col-lg-6 col-12">
							<div class="left">
								<p>Copyright © 2023 <Link to="#" target="_blank">OGMart</Link>  -  All Rights Reserved.</p>
							</div>
						</div>
						<div class="col-lg-6 col-12">
							<div class="right">
								<img src="images/payments.png" alt="#"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>




    </React.Fragment>
  )
}

export default Footer