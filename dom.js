// getelementbyclassname //
var items = dcoument.getelementByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello" ;
items[1].style.fontWeight = "bold" ;
items[1].style.backgroundColor = "yellow" ;

for(var i = 0; i< items.lenght; i++){
    items[i].style.backgroundColor ='red';
}