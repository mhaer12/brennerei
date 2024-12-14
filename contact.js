import products from '/products.js';
import cart from './cart.js';

const contact = () => {
    function formatCart() {
            
        const carty = localStorage.getItem('cart');
        let newString = "";
        let cart = [];
        if (carty) {
            try {
                cart = JSON.parse(carty); // Converts the JSON string to an array
            } catch (error) {
                console.error('Error parsing cart JSON:', error);
            }
        }
        let total = 0;
        cart.forEach(element => {
            let positionProduct = products.findIndex((value) => value.id == element.product_id);
            let product = products[positionProduct];
            newString = newString + element.quantity + "x '"+ product.name + "' zu je " + product.price + "€\n";
            total = total + (product.price * element.quantity);
        });
        newString = newString + "_____________________________________\nGesamtpreis: " + total + "€";
        return newString;
    }
    

    const cartTextField = document.getElementById('Einkaufswagen');

    // Update the text field on page load
    document.addEventListener('DOMContentLoaded', () => {
        cartTextField.value = formatCart();
    });

    document.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let idProduct = buttonClick.dataset.id;
        switch (true) {
            case (buttonClick.classList.contains('addCart')):
            case (buttonClick.classList.contains('minus')):
            case (buttonClick.classList.contains('plus')):
                cartTextField.value = formatCart();
                break;
            default:
                break;
        }
        cartTextField.value = formatCart();
    })

    const sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('submit', () => {
        localStorage.removeItem('cart');
    })

    // Get the checkbox and the div
    const checkbox = document.getElementById('checkCart');
    const toggleDiv = document.getElementById('toggleCart');

    // Add an event listener to the checkbox
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            toggleDiv.style.display = 'block'; // Show the div
        } else {
            toggleDiv.style.display = 'none'; // Hide the div
        }
    });
    
}
contact();

