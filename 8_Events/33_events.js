// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Events ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

// some common events
// change	                                   The content of a form element has changed	                     Event
// click	                                   An element is clicked on	                                         MouseEvent
// contextmenu	                               An element is right-clicked to open a context men                 MouseEvent
// copy	                                       The content of an element is copied                               ClipboardEvent
// cut	                                       The content of an element is cut	                                 ClipboardEvent
// dblclick	                                   An element is double-clicked                                      MouseEvent
// drag	                                       An element is being dragged	                                     DragEvent
// keydown	                                   A key is down	                                                  KeyboardEvent
// keypress	                                   A key is pressed	                                                  KeyboardEvent
// keyup	                                   A key is released	                                              KeyboardEvent
// storage	                                   A Web Storage area is updated	                                  StorageEvent
// submit	                                   A form is submitted	                                              Event
// suspend	                                   The browser is intentionally not getting media data	              Event
// toggle	                                   The user opens or closes the <details> element	                  Event
// touchcancel	                               The touch is interrupted	                                          TouchEvent
// touchend	                                   A finger is removed from a touch screen	                          TouchEvent

document.getElementById("river").onclick = function () {
  // alert("River is clicked")
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript DOM EventListener ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The addEventListener() method attaches an event handler to the specified element.
// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

// General Syntax
// element.addEventListener(event, function, useCapture);

// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// The second parameter is the function we want to call when the event occurs.
// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.
// by default the third parameter is false.

// NOTE. that you don't use the "on" prefix for the event; use "click" instead of "onclick".

// +++++++++++++++++++ working with button +++++++++++++++++++++++++++++++++
const myButton = document.getElementById("btn");

myButton.addEventListener("mouseover", (e) => {
  console.log("Mouse is over on Button");
});
myButton.addEventListener("click", (e) => {
  console.log("Button is Clicked");
});
myButton.addEventListener("mouseout", (e) => {
  console.log("Mouse Out");
});

// +++++++++++++++++++++ Working with ul and images +++++++++++++++++++++++++

// Event Propagation
// There are two ways of event propagation in the HTML DOM, bubbling and capturing.

// 1. Bubbling (false)
// In bubbling the inner most element's event (japan image) is handled first and then the outer (ul), it is by default parameter

// 2. Capturing (true)
// In capturing the outer most element's event (ul) is handled first and then the inner (japan image)
document.getElementById("images").addEventListener("click",(e) => {
    // console.log("clicked inside the ul");
  },
  true
);

document.getElementById("japan").addEventListener("click",(e) => {
    e.preventDefault();
    // console.log("clicked inside the japan");
  },
  true
);

// ++++++++++++++++++++++++++++++++ Practice ++++++++++++++++++++++++++++++++++++
// remove the image when click
document.querySelector("#images").addEventListener("click", (e) => {
  // console.log(e.target.tagName);                    // e.target tell us about the element on which the event is occure.
  if (e.target.tagName === "IMG") {
    // console.log(e.target.id);                    // to log id of that element which is being removed.
    let eraseItem = e.target.parentNode;            // we use parentNode because we want to erase the parent of img tag, which is (li)
    eraseItem.remove();
  }
});
