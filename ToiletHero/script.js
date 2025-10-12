const leftBtn = document.querySelector('#left-button');
const rightBtn = document.querySelector('#right-button');

let productsContainer = document.querySelector('.products-container');
console.log(productsContainer);

let products = ["origin", "streamline", "nexus"];

leftBtn.addEventListener('click', function(e){
    products.unshift(products[2]);
    products.pop();

    productsContainer.style.gridTemplateAreas = `"${products[0]} ${products[1]} ${products[2]}"`;
});
rightBtn.addEventListener('click', function(e){
    let shift = products.shift();
    products[2] = shift;

    productsContainer.style.gridTemplateAreas = `"${products[0]} ${products[1]} ${products[2]}"`;
});