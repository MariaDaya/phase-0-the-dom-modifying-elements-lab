// Write your code here!


const main = document.getElementById("main");
main.remove();

const body = document.getElementsByTagName('body');
const node = document.createElement("div");

var newHeader = document.createElement("h1");
node.appendChild (newHeader);

newHeader.id = 'victory';
newHeader.textContent= "Maria is the champion";


