import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
import { Link, useNavigate } from 'react-router-dom';

function Wishlist() {
  const [product, setProduct] = useState([""])
    var p = 0;
    var dis = 0;
    var totalCartPrice = 0;
  const navigate = useNavigate();

    useEffect(() => {
      var user = JSON.parse(localStorage.getItem("uid"));
      if (!user) {
        alert("Login View Order Product");
        navigate("/login");
        return;
      }
    function wishlistshow()
    {
        var user=JSON.parse(localStorage.getItem("uid"));
        console.log(user.id);
        axios.get('http://127.0.0.1:8000/api/wishlistshow/'+user.id).then((res)=>{
        const data=res.data;
        console.log(data);
                    
        setProduct(data);
        // console.log(data[0]);
        // console.log(data[1].pname);
                    })
    }
  
  
    wishlistshow();
  }, []);

    function deletedata(cid){
    
      axios.delete('http://127.0.0.1:8000/api/wishlist/'+cid)
       .then((res)=>{
      const data=res.data;
      console.log(data);
      if(data)
      {
          console.log("Data Deleted")
          alert('Data Deleted!!!');
          navigate("/wishlist");
      }
      else
      {
          console.log("Sorry")
      }
     
       })          
  }



  function clearCart() {
    axios.delete('http://127.0.0.1:8000/api/clear')
      .then(response => {
        alert('Wishlist cleared successfully!!!');
          navigate("/wishlist");
        // Refresh your cart or update your cart state here
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }



  return (
    <React.Fragment>
    <Header/>
    <div class="shopping-cart section">
<div class="container">
  <div class="row">
    <div className="col-md-12">
                <div class="section-title">
                    <h2>Wishlist</h2>
                  </div>
    </div>
    <div class="col-12">
      
      <table class="table shopping-summery">
        <thead>
          <tr class="main-hading">
            <th>PRODUCT</th>
            <th class="text-center">Product Name</th>
            <th class="text-center">Quantity</th>
            <th class="text-center">Price</th> 
            <th class="text-center">Discount(%)</th>
            <th class="text-center">Total</th> 
            <th class="text-center">
              <button class="btn btn-sm btn-outline-danger"  onClick={clearCart}>Clear Cart</button>
              
              </th>

          </tr>
        </thead>
        <tbody>
        { product.map((row)=>{
              
      p = row.price_sale * row.pqty
      dis = p * row.discount / 100
      totalCartPrice += row.price_sale * row.pqty - dis
                  return(
          <tr>
            <td class="image" data-title="No"><img src={`http://localhost:8000/product_upload/${row.img}`} alt="#" style={{width:"160px",height:"70px"}} /></td>
            <td class="product-des" data-title="Description">
              <p class="product-name"><Link to={'/description/'+row.id}>{row.pname}</Link></p>
              <p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
            </td>
            <td class="price" data-title="Price"><span>{row.pqty}</span></td>
            
            <td class="total-amount" data-title="Total"><span>{row.price_sale}</span></td>
            <td class="total-amount" data-title="Total"><span>{row.discount}</span></td>
            <td class="total-amount" data-title="Total"><span>{(row.price_sale * row.pqty) - dis}</span></td>

            <td class="action" data-title="Remove"><Link to="#"><i class="ti-trash remove-icon"   onClick={()=>deletedata(row.cid)}></i></Link></td>
          </tr>
             )
          })
           }
          
        </tbody>
      </table>
      
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      
      <div class="total-amount">
        <div class="row">
          <div class="col-lg-8 col-md-5 col-12">
            <div class="left">
              <div class="coupon">
                <form action="#" target="_blank">
                  <input name="Coupon" placeholder="Enter Your Coupon" />
                  <button class="btn">Apply</button>
                </form>
              </div>
              
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

export default Wishlist