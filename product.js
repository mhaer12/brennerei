import products from '/products.js';
import cart from './cart.js';



const initApp = () => {
    // load list product
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = null;
    
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        `<a href="">
            <img src="${product.image}">
        </a>
        <div class="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4"">
            <h5 class="text-secondary">${product.htmlname}</h5>     
            <span class="text-body">${product.description}<br>${product.price} €<br></span>
            <button class="addCart" style="transition: width 0.5s ease; " data-id='${product.id}'>
                Kaufen
            </button>
        </div>`;
        listProductHTML.appendChild(newProduct);
   });
}
initApp();