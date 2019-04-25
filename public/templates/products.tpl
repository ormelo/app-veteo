<style type="text/css">
a
{
    text-decoration: none;
}
.product-card {
    width: 90%;
    position: relative;
    box-shadow: 0px 2px 21px #dfdfdf;
    margin: 0px auto;
    background: #fafafa;
}

.badge {
    position: absolute;
    left: 0;
    top: 20px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    background: red;
    color: #fff;
    padding: 3px 10px;
}

.product-tumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    padding: 10px;
    background: #fafafa;
}

.product-tumb img {
    max-width: 100%;
    max-height: 100%;
}

.product-details {
    padding: 30px;
}

.product-catagory {
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ccc;
    margin-bottom: 18px;
}

.product-details h4 a {
    font-weight: 500;
    display: block;
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s;
    font-size: 18px;
}

.product-details h4 a:hover {
    color: #fbb72c;
}

.product-details p {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 18px;
    color: #999;
}

.product-bottom-details {
    overflow: hidden;
    border-top: 1px solid #eee;
    padding-top: 20px;
}

.product-bottom-details div {
    float: left;
    width: 50%;
}

.product-price {
    font-size: 18px;
    color: #0069db;
    font-weight: 600;
}

.product-price small {
    font-size: 80%;
    color: #666;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 5px;
}

.product-links {
    text-align: right;
}

.product-links a {
    display: inline-block;
    margin-left: 5px;
    color: #e1e1e1;
    transition: 0.3s;
    font-size: 17px;
}

.product-links a:hover {
    color: #fbb72c;
}

.wishlist-msg {
	display: table-cell;
    width: 75%;
    font-size: 16px;
    font-family: "Open Sans";
    vertical-align: middle;
    text-align: left;
}
.wishlist-icon {
	display: table-cell;
    width: 60px;
}
</style>


<div class="products">
	<div style="display: table"><img class="wishlist-icon" src="sc/wishlist.png" />
		<div class="wishlist-msg">Your personalized wishlist with products based on trusted reviews & your shopping criteria</div>
	</div>
<% _.each(productsByBrand, function(arr, key1, list){ %>
 <!-- Add <tbody>, <thead> etc with "key" here -->
 <hr size="1" class="line"/>
<div class="step"><%=key1%> products</div>
  <% _.each(arr, function(item, key2, list){ %>
	<br>
		<div class="product-card">
			<div class="badge">Hot</div>
			<div class="product-tumb">
				<img src="<%=item.img%>" alt="">
			</div>
			<div class="product-details">
				<span class="product-catagory">By <%=key1%></span>
				<h4><a href=""><%=item.title.substring(0,20)%>...</a></h4>
				<p><%=item.keySpecs[0]%>, <%=item.keySpecs[1]%></p>
				<div class="product-bottom-details">
					<div class="product-price"><small>₹<%=item.mrp%></small>₹<%=item.specialPrice%></div>
					<div class="product-links">
						<a href=""><i class="fa fa-heart"></i></a>
						<a href=""><i class="fa fa-shopping-cart"></i></a>
					</div>
				</div>
			</div>
		</div>
	<br>
  <% }) %>

<% }) %>
</div>