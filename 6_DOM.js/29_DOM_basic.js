// +++++++++++++++++++++++++++++++++++++++++++ JavaScript HTML DOM ++++++++++++++++++++++++++++++++++++++++++++
// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
// OR
// The HTML DOM is a standard for how to get, change, add, or delete HTML elements.


// ++++++++++++++++++++++++++++++++++++++++++ DOM Methods +++++++++++++++++++++++++++++++++++++++++++++++++++++
// HTML DOM methods are actions you can perform (on HTML Elements).

// getElementById()
// getElementByClassName()
// getElementByName()
// getElementByTagName()
// querySelector() and querySelectorAll()


// ++++++++++++++++++++++++++++++++++++++++ DOM ElementsProperties +++++++++++++++++++++++++++++++++++++++++++++++++++++
// HTML DOM properties are values (of HTML Elements) that you can set or change.

// innerHTML
// innerText
// innerContent
// classList


// ++++++++++++++++++++++++++++++++++++++++ HTML DOM Document +++++++++++++++++++++++++++++++++++++++++++++++++++++
// The HTML DOM document object is the owner of all other objects in your web page.
// If you want to access any element in an HTML page, you always start with accessing the document object.
// with document we can do the following tasks.

// +++++++++++++ 1. Finding HTML Elements +++++++++++++++++++
// document.getElementById(id)	               Find an element by element id
// document.getElementsByTagName(name)	       Find elements by tag name
// document.getElementsByClassName(name)	   Find elements by class name

// +++++++++++++ 2. Changing HTML Elements +++++++++++++++++++
// element.innerHTML =  new html content	       // Change the inner HTML of an element
// element.attribute = new value	               // Change the attribute value of an HTML element
// element.style.property = new style	           // Change the style of an HTML element

// +++++++++++++ 3. Adding and Deleting Elements +++++++++++++++
// document.createElement(element)	            // Create an HTML element
// document.removeChild(element)	            // Remove an HTML element
// document.appendChild(element)	            // Add an HTML element
// document.replaceChild(new, old)	            // Replace an HTML element
// document.write(text)                     	// Write into the HTML output stream

// +++++++++++++ 4. Finding HTML Objects ++++++++++++++++++++
// document.anchors	                           // Returns all <a> elements that have a name attribute	
// document.baseURI	                           // Returns the absolute base URI of the document	
// document.body	                           // Returns the <body> element	
// document.cookie	                           // Returns the document's cookie	
// document.doctype	                           // Returns the document's doctype
// document.documentElement	                   // Returns the <html> element	
// document.head	                           // Returns the <head> element	
// document.images                             // Returns all <img> elements