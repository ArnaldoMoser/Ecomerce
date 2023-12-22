let cartItems = [];
let total = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');
    
    cartList.innerHTML = '';
    total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function checkout() {
    alert(`Total da compra: R$ ${total.toFixed(2)}`);
    cartItems = [];
    updateCart();
}
