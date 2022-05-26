const productsList = document.querySelector('.items');// seleciona o primeiro elemento dentro do documento pela clase clase requisito1
const shoppingCart = document.querySelector('.cart__items');// seleciona primeiro elemento dentro do documento pela clase requisito2,3
const selectedCart = document.querySelectorAll('.cart__items');// retorna uma lista de elementos requisito 4

// funçao nativa
function createProductImageElement(imageSource) {
    const img = document.createElement('img');
    img.className = 'item__image';
    img.src = imageSource;
    return img;
}

// funçao nativa
function createCustomElement(element, className, innerText) {
    const e = document.createElement(element);
    e.className = className;
    e.innerText = innerText;
    return e;
}

// funçao nativa
// obter o id do item do produto
function getSkuFromProductItem(item) {
    return item.querySelector('span.item__sku').innerText;
}


// tenttiva 5 / atualizçao de valores
const totalAmount = document.querySelector('.total-price');
// tentativa 5/ atualizçao de valores
let totalPrice = 0;
const savePrices = (price) => localStorage.setItem('priceItems', price); // mozila, setItem(). quando passado 'chave' e 'valor', irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já exista.
const getsavedPrices = () => localStorage.getItem('priceItems'); //  mozila, Passar o nome da chave para o método getItem() da interface Storage retornará o seu valor.

// tentativa 5 / atualizçao de valores
const updatePrice = () => {
    totalPrice = Number(getsavedPrices());
    totalAmount.innerText = Number(getsavedPrices());
    console.log(getsavedPrices());
};

// tentativa 5 / soma de valores
const sumPrice = () => {
    totalAmount.innerText = totalPrice;
    savePrices(totalAmount.innerText);
};
// tentativa 5
const subItems = (event) => {
    const priceGrab = Number(event.target.innerText.split('$')[1]);// 'Number, pego um texto e transformo em numeros .'split 'pra fazer array
    console.log(priceGrab);
    totalPrice -= priceGrab;
    totalAmount.innerText = totalPrice;
    savePrices(totalPrice);
};

selectedCart.forEach((li) => {
    li.addEventListener('click', subItems);
});

    const loading = document.createElement('p');
// reuisito 7
const testLoading = () => {
  // const loading = document.createElement('p');
    loading.className = 'loading';
    loading.innerText = 'carregando...';
    document.querySelector('.cart').appendChild(loading);
};
// requisito 7
  const removeLoading = () => loading.remove();

// requisito 6
const clearAllCart = () => {
    shoppingCart.innerHTML = null;
    saveCartItems(shoppingCart.innerHTML);
// tentativa 5 qaundo aciono o botao de limpar o carinho zero tbm os valores
    totalPrice = 0;
    totalAmount.innerHTML = '0';
};
// requisito 6
const clearCart = document.querySelector('.empty-cart');
    clearCart.addEventListener('click', clearAllCart);

// funçao nativa
// requisito3
function cartItemClickListener(event) {
    event.target.remove();
    saveCartItems(shoppingCart.innerHTML);
}

// funçao nativa
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
    const li = document.createElement('li');
        li.className = 'cart__item';
        li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
        li.addEventListener('click', cartItemClickListener);
    return li;
}

// requisito 2
const addItemCart = async (add) => {
    const sku = getSkuFromProductItem(add.target.parentNode);
    const results = await fetchItem(sku);
  // const resultsList = await fetchItem(sku);
  // const results = (resultsList && resultsList.results) || []; // https://stackoverflow.com/questions/62595534/typeerror-cannot-destructure-property-products-of-productlist-as-it-is-unde
    const cartItems = createCartItemElement(results);
    shoppingCart.appendChild(cartItems);

// tentativa 5 // quando eu adiciono no carrinho ja adiciono o valor do produtoao total
    const eventTarget = cartItems.innerText;
    const priceGrab = Number(eventTarget.split('$')[1]);
    totalPrice += priceGrab;
    sumPrice();// chama a funsao que atualiza o valor e salva
    saveCartItems(shoppingCart.innerHTML);
};

// funçao nativa
// acresido id, title e thumbnail que sao nomes encontrados na api
// funçao mudada de posiçao para resolver lint
function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
    const section = document.createElement('section');
    section.className = 'item';
    section.appendChild(createCustomElement('span', 'item__sku', sku));
    section.appendChild(createCustomElement('span', 'item__title', name));
    section.appendChild(createProductImageElement(image));
  // section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

    section.appendChild(createCustomElement('span', 'load'));
    const btnAddCart = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');

    btnAddCart.addEventListener('click', addItemCart);// funçao colocada  a baixo do Req 2 para resover lint do addItemCart
    section.appendChild(btnAddCart);

    return section;
}

// requisito 4
const storageLoad = () => {
    shoppingCart.innerHTML = getSavedCartItems();
    selectedCart.forEach((li) => {
        li.addEventListener('click', cartItemClickListener);
    });
};

// requisito 1
const listIten = async () => {
    testLoading(); // para aparecer a mesnsagemm do req 7 antes de estar com a Api carregada
    const { results } = await fetchProducts('computador');
        results.forEach((product) => {
            const createItem = createProductItemElement(product);
            productsList.appendChild(createItem);
        });
    removeLoading(); // para remover a mensagem do req 7 depois depois de carregar a api
};

window.onload = () => {
    listIten();
    updatePrice();
    storageLoad();
};
