---
title: Quarter 3 Lab 2
date: 7/27/2024
myData: lab02 Modified from Brooks
---

# Building Web Applications using Node.js, Express and Mongo DB Part 2.
The Purpose of this lab is to set up various routes to access different data, pages, or files. You will also learn how to set up a search function for Name and listing price Less than a given value.

    Lab 1 must be completed before doing this lab.

## Steps
- Create a get route to view a single product.
- Create a Lab 2 Folder, Copy the files/folders of lab 1 into the lab 2 folder (make sure to include the node_module folder).
 Open the product-file.js file and add the repo.getById function:
Things to note:
⦁	Line 27: while this is very similar to the repo.get() it has one difference, we are also passing in the id of the product.
⦁	Line 38: .⦁	find() is an ⦁	Array Function. If you are not familiar with this function, or other array functions read up on them.
⦁	Line 39: is a function with in our find function. We are getting the row where the row.productID is equal to the id we pass in.
 Open index.js and add the new get route for a single item:
Things to note:
⦁	Line 38: ‘/:id’ - the :id denotes that id is a parameter to be passed to the get function. Copy this url and paste it I chrome to read  more: file:///C:/Users/Public/Downloads/from-wsr-server/express/expressjs.com/en/4x/api.html#req.params
⦁	Line 40: req.params.id – is how we access the id # that we put into the URL.
⦁	Lines 51-62: If the find function does not find a product we don’t want to return a normal error page, instead we want to send an error page that lets us know everything worked fine, but the product was not found.
⦁	Save your files, navigate to http://localhost:3000 you should see the full product listings, navigate to  http://localhost:3000/706 then to http://localhost:3000/1. What do you see? Why are they different?
⦁	Create a search Function to find product by name and/or listing price
⦁	In the product-file.js file update the code to add the following:
 Things to note:
⦁	Line 61: This line uses a ⦁	ternary operator.  This is the same as if(){}else{}, and has the structure of CONDITION ? TRUE : FALSE.
⦁	Line 61: .toLowerCase() is a ⦁	string function. Read up on it and others if you need to.
⦁	Line 61: .indexOf() is another built in array function.  
⦁	Line 63: Number([string]) is an JS function used to ⦁	convert a string to an integer number.
 Update the index.js file to have a get route for the search function:

 Things to note:
⦁	The app.get(‘/search’) route must be placed in the code before the app.get(‘/:id’) route. Move it after, save and refresh and run step c. below to see why. The reason you see the 404 error is it now thinks the productid number is search, and can’t find any that matches. Keep this in mind when you code your own projects.
⦁	Line 41 & 42 : similar to passing params, we can pass query strings. Copy this url and paste it in chrome to read  more: ⦁	file:///C:/Users/Public/Downloads/from-wsr-server/express/expressjs.com/en/4x/api.html#req.query
⦁	Line 61 & 62: here is another JSON method (Stringify) this parses the JS and turns it into a JSON string.
⦁	Lines 69 & 70: Only type these lines once, the code was to long to fit in one image.
⦁	Save and refresh your page. 
⦁	Visit http://localhost:3000/search?name=sport – What should you see? Screenshot the results and save in your Lab 2 folder named 2c1.
⦁	Visit http://localhost:3000/search?listPrice=50 – Do you see what you expected? Screenshot the result and save in your Lab 2 folder named 2c2.
⦁	Visit ⦁	http://localhost:3000/search?name=SPORT⦁	&⦁	listprice=50 – Do you see what you expected? Did it show what you expected? Why did you get the result you did? Note name is now SPORT and listprice is all lowercase. Screenshot the result and save in your Lab 2 folder named 2c3.
⦁	Add router object, API prefix, add CRUD routes
⦁	Most web servers put the prefix api in front of every route that deals with data. This helps distinguish between routes that returns HTML versus routes that return Data. To accomplish this with Express you need to use the router object instead of the app object.
⦁	In the Lab 2 folder create a routes folder, then add a new file called product.js
 Add the following code to the product.js file:
					Things to note:
⦁	Lines 12, 32, and 83 are the full code for the routes (cut from index.js and paste here), they are collapsed here to show the full code block.
⦁	In the index.js file the code should look like:
 Things to note:
⦁	We are no longer importing the product repository as it is being handled by the router.
⦁	We are adding the prefix /product to every route so that later if we add customers, or employees or something else. This makes it so that http://localhost:3000/api/product/1 looks for a product with id 1, if we didn’t have it and instead went with http://localhost:3000/api/1 is this productID, customerID or employeeID?
⦁	Move the node_module from your Lab 2 Folder and zip the remaining files/folder and submit the zipped file. Move the node_modules folder back.