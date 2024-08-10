---
title: what is http
date: 7/27/2024
myData: W3S web site based https://www.w3schools.com/whatis/whatis_http.asp
---

## What is HTTP

# World Wide Web Communication
The World Wide Web is about communication between web clients and web servers.

Clients are often browsers (Chrome, Edge, Safari), but they can be any type of program or device.

Servers are most often computers in the cloud.

```
Web Client 
Cloud  
Web Server
```

## HTTP Request / Response
Communication between clients and servers is done by requests and responses:

1. A client (a browser) sends an HTTP request to the web
1. A web server receives the request
1. The server runs an application to process the request
1. The server returns an HTTP response (output) to the browser
1. The client (the browser) receives the response

## The HTTP Request Circle
A typical HTTP request / response circle:

1. The browser requests an HTML page. The server returns an HTML file.
1. The browser requests a style sheet. The server returns a CSS file.
1. The browser requests an JPG image. The server returns a JPG file.
1. The browser requests JavaScript code. The server returns a JS file
1. The browser requests data. The server returns data (in XML or JSON).

## XHR - XML Http Request
All browsers have a built-in XMLHttpRequest Object (XHR).

XHR is a JavaScript object that is used to transfer data between a web browser and a web server.

XHR is often used to request and receive data for the purpose of modifying a web page.

Despite the XML and Http in the name, XHR is used with other protocols than HTTP, and the data can be of many different types like HTML, CSS, XML, JSON, and plain text.

The XHR Object is a Web Developers Dream, because you can:

Update a web page without reloading the page
Request data from a server - after the page has loaded
Receive data from a server - after the page has loaded
Send data to a server - in the background
The XHR Object is the underlying concept of **AJAX and JSON**:

<img src="/image/img_ajax.gif" alt="img_ajax.gif">

# What is URL?

<img src="/image/mdn-url-all.png" alt="mdn_url_all.png">


We can differentiate between an **absolute** URL and a **relative URL** by looking only at the path part of the URL. 

If the path part of the URL starts with the "/" character, the browser will fetch that resource from the top root of the server, without reference to the context given by the current document.

## Example: 
```
https://developer.mozilla.org/en-US/docs/Learn 

```
itself is an absolute URL. It has all necessary parts needed to locate the resource it points to.

All of the following URLs are relative URLs:

- Scheme-relative URL: //developer.mozilla.org/en-US/docs/Learn — only the protocol is missing. The browser will use the same protocol as the one used to load the document hosting that URL.
- Domain-relative URL: /en-US/docs/Learn — the protocol and the domain name are both missing. The browser will use the same protocol and the same domain name as the one used to load the document hosting that URL.
- Sub-resources: Common_questions/Web_mechanics/What_is_a_URL — the protocol and domain name are missing, and the path doesn't begin with /. The browser will attempt to find the document in a subdirectory of the one containing the current resource. In this case, we really want to reach this URL: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL.
- Going back in the directory tree: ../CSS/display — the protocol and domain name are missing, and the path begins with ... This is inherited from the UNIX file system world — to tell the browser we want to go up by one level. Here we want to reach this URL: https://developer.mozilla.org/en-US/docs/Learn/../CSS/display, which can be simplified to: https://developer.mozilla.org/en-US/docs/CSS/display.
- Anchor-only: #semantic_urls - all parts are missing except the anchor. The browser will use the current document's URL and replace or add the anchor part to it. This is useful when you want to link to a specific part of the current document.

[https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)

# HTTP Methods

[Methods](https://www.w3schools.com/tags/ref_httpmethods.asp)
[Methods](https://www.w3schools.com/tags/ref_httpmethods.asp)

1. GET
1. POST
1. PUT
1. HEAD
1. DELETE
1. PATCH
1. OPTIONS
1. CONNECT
1. TRACE

The two most common HTTP methods are: GET and POST.

## The GET Method
GET is used to request data from a specified resource.

Note that the query string (name/value pairs) is sent in the URL of a GET request:
```
/test/?name1=value1&name2=value2

```
Some notes on GET requests:

- GET requests can be cached
- GET requests remain in the browser history
- GET requests can be bookmarked
- GET requests should never be used when dealing with sensitive data
- GET requests have length restrictions
- GET requests are only used to request data (not modify)

## The POST Method

POST is used to send data to a server to create/update a resource.

The data sent to the server with POST is stored in the request body of the HTTP request:
```
POST /test/demo HTTP/1.1
Host: w3schools.com

name1=value1&name2=value2
```

### Some notes on POST requests:

- POST requests are never cached
- POST requests do not remain in the browser history
- POST requests cannot be bookmarked
- POST requests have no restrictions on data length

## Compare GET vs. POST

The following table compares the two HTTP methods: GET and POST.

| 	                |GET	                          |POST
| ------------------| ------------------------------- | ---------------------------------
| BACK button/Reload| Harmless	| Data will be re-submitted (the browser should alert the user that the data are about to be re-submitted)
| ------------------| ------------------------------- | ---------------------------------
| Bookmarked	| Can be bookmarked	| Cannot be bookmarked
| ------------------| ------------------------        | ---------------------------------
| Cached	| Can be cached	| Not cached
| ------------------|------------------------------- | ----------------------------------- 
| Encoding type	| application/x-www-form-urlencoded	| application/x-www-form-urlencoded or multipart/form-data. Use multipart encoding for binary data
| ------------------| ------------------------------- | -------------------------------- 
| History	| Parameters remain in browser history	|Parameters are not saved in browser history
| ------------------| ------------------------------- | ---------------------------------
| Restrictions on data length	| Yes, when sending data, the GET method adds the data to the URL; and the length of a URL is limited (maximum URL length is 2048 characters)	| No restrictions
| ------------------| ------------------------------- | ---------------------------------
| Restrictions on data type	| Only ASCII characters allowed	| No restrictions. Binary data is also allowed
| ------------------| ------------------------------- | ---------------------------------
| Security	| GET is less secure compared to POST because data sent is part of the URL. sNever use GET when sending passwords or other sensitive information!	| POST is a little safer than GET because the parameters are not stored in browser history or in web server logs
| ------------------| ------------------------------- | ---------------------------------
|Visibility	|Data is visible to everyone in the URL	| Data is not displayed in the URL
| ------------------| ------------------------------- | ---------------------------------

## The PUT Method
PUT is used to send data to a server to create/update a resource.

The difference between POST and PUT is that PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times.

## The HEAD Method
HEAD is almost identical to GET, but without the response body.

In other words, if GET /users returns a list of users, then HEAD /users will make the same request but will not return the list of users.

A HEAD request is useful for checking what a GET request will return before actually making a GET request - a HEAD request can read the Content-Length header to check the size of the file, without actually downloading the file.

## The DELETE Method
The DELETE method deletes the specified resource.

## The PATCH Method
The PATCH method is used to apply partial modifications to a resource.

