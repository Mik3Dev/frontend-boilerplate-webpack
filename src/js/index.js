import "../scss/style.scss";

function component(){
	const element = document.createElement('div');
	element.innerHTML = "<h1>Hello World</h1>"
	return element;
}

document.querySelector('body').appendChild(component());
console.log("Hello World");