function getList(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveList(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
}

function addToFavorites(productId) {
    let favorites = getList('favorites');
    if (!favorites.includes(productId)) {
        favorites.push(productId);
        saveList('favorites', favorites);
    }
}

function removeFromFavorites(productId) {
    let favorites = getList('favorites');
    favorites = favorites.filter(id => id !== productId);
    saveList('favorites', favorites);
}

function addToCart(productId, variant) {
    let cart = getList('cart');
    const existing = cart.find(item => item.id === productId);
    if (!existing) {
        cart.push({id: productId, weight: variant.weight, price: variant.price});
        saveList('cart', cart);
    }
    alert('Продукт добавлен в корзину');
}
function buyNow(productId, variant) {
    let cart = getList('cart');
    const existing = cart.find(item => item.id === productId);
    if (!existing) {
        cart.push({id: productId, weight: variant.weight, price: variant.price});
        saveList('cart', cart);
    }
    window.location.href = 'cart.html';
}

function handleFavoriteClick(button, productId) {
    const favorites = getList('favorites');
    const isSvgButton = button.querySelector('svg') !== null;

    if (favorites.includes(productId)) {
        removeFromFavorites(productId);
        button.classList.remove('active');
        if (!isSvgButton) button.textContent = '♡';
    } else {
        addToFavorites(productId);
        button.classList.add('active');
        if (!isSvgButton) button.textContent = '♥';
    }
}

function removeFromCart(productId) {
    let cart = getList('cart');
    cart = cart.filter(item => item.id !== productId);
    saveList('cart', cart);
    location.reload();
}

