//Document methods
//  querySelctor()
const headings = document.querySelectorAll("h2");
const fheading = headings[0];
console.log(fheading.innerHTML);
const appleList  = document.querySelector(".apple-list");
console.log(appleList.children);
console.log(appleList.childNodes);
// children Property:

// Returns: A live HTMLCollection of the child elements (excluding text nodes, comments, etc.).
// Contains: Only element nodes (nodes of type Node.ELEMENT_NODE)
// childNodes:

// childNodes is a property of a DOM node that returns a NodeList of child nodes, including elements, text nodes, and comment nodes.
// It includes all types of nodes within the parent node, even text nodes and comments, which means it can return nodes that aren't directly visible elements in the document.
console.log(appleList.firstChild.innerText);
console.log(appleList.lastChild.innerText);
console.log(appleList.firstElementChild);
console.log(appleList.lastElementChild);
//        parentElement
// Returns the parent element node (an Element object) of the specified node.
// Null for Non-Element Parents: If the parent node is not an 
// element (for example, if it is a text node or a document node), parentElement will return null.
console.log(appleList.parentElement);
//     parentNode
// Returns the parent node (a Node object) of the specified node.
// Not Null for Non-Element Parents: Will return the parent node regardless 
// of its type. This can be an element, document, document fragment, etc.
console.log(appleList.parentNode);
const orange = document.querySelector(".orange");
const apple = orange.previousElementSibling;
const avacado = orange.nextElementSibling;
console.log(apple);
console.log(avacado);
