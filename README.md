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
     -event listner
     -get all relevant info
     -will have to auto generate next sequential id# 
    
    -get current items from storage
    -append new item (push) 
    -send itemlist back to storage 

**WAIT How will these live there for good? If we are just adding it to local storage, it wont be there for the next new user, it will need to write it to the js data file, right? But if we are pretending that the Local Storage is our database, then that is it not really saving it is okay...? 
X