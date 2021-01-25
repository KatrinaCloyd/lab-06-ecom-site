Plan:

Set up HTML 
landing page with link to listings page 
basic listings page with place holder Item
Style CSS of the place holder so it looks okay (don't take it too far)
JS
Create Item List in data.js file
layout objective for the TDD test and get testing
set up function for creating dom objects from data set 
test
when all working correctly go in and refine css 

--Cart Day--
Set up cart page 
set up dummy info
TDD function to get animal by id
TDD function to calculate line item total 
TDD function to create new table element 
Generate shopping cart populated with dummy data
TDD cart total 
Add cart total to cart page 

--Local Storage Day--
functions to write and test  in CartUtils.js
X    getCart- gets the current cart from local storage 
X    clearCart- zeros out cart to the default empty cart 
X    setCart- push cart back to localStorage as a string 
X    addItemToCart- adds items to the local parsed cart 

Xeventlistner to item buttons to add items to cart and show on cart page
Xload cart on shopping cart page 
place order button
    clear cart
    altert order
    redirect to items page X
X Maybe also add a clear cart button on cart page 

--admin page--

X -send item offerings array to local storage
X    -save items to a const
X    -stringify
X    -set to storage 

X-get items back from storage
X    -get arry back from storage
X    -parse
X    -set to a const for comparison and all current functions 

X-create HTML admin form page 
    -tie form to create item function no just need to add the correct key/values to the object before adding it to the array
    X -event listner
    X -get all relevant info
    
    X-get current items from storage
    X-append new item (push) 
    X-send itemlist back to storage 

This is adding to local storange, but as soon as I go back to the product page, it is rewriting the local storage to the standard base list. 
find where set inital cart is called and add an if... 
if cart already exists, do nothing. Only set cart with default items if there are no items in the cart... 