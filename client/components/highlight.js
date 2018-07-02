// var range = window.getSelection().getRangeAt(0);
// var selectionContents = range.extractContents();
// var div = document.createElement("div");
// div.style.color = "yellow";
// div.appendChild(selectionContents);
// range.insertNode(div);
const fetch = require('node-fetch')

fetch('https://en.wikipedia.org/wiki/Main_Page', {
	method: 'get'
}).then(function(response) {
	return response.text()
}).then((html) => {
    console.log(`html is ${html}`)
}).catch(function(err) {
	console.log(err);
});