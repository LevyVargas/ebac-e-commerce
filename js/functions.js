// ---------------Selectores
// const title = document.getElementById("txt");
// console.log(title);

// const image = document.getElementsByClassName("header__logo");
// console.log(image[0]);

// const tags = document.getElementsByTagName("section");
// console.log(tags[0]);

// const elem = document.querySelectorAll(".header__logo");
// console.log(elem);

// ---------------Crear elementos y agregar atributos
// const parent = document.querySelector(".products");
// const newElem = document.createElement("article");
// newElem.className = "new__element";
// newElem.setAttribute("class", "new");
// parent.append(newElem);
// console.log("Nuevo: " + newElem);


// ---------------Atributos
// const logo = document.querySelector(".header__logo");
// logo.setAttribute("src", "img/jersey adidas.jpg");
// console.log(logo.getAttribute("src"));
// console.log(logo.hasAttribute("src"));
// logo.removeAttribute("src");

// if(logo.getAttribute("src")){
//     alert("El atributo src existe");
// }

// ---------------Clases
// const parent2 = document.querySelector(".products");
// const parent3 = parent2.firstElementChild;
// const price = parent3.lastElementChild;
// price.classList.add("red");
// price.classList.remove("red");
// price.classList.replace("red", "blue");
// console.log(price);

// ---------------Textos
// const button = document.getElementsByTagName("button");
// console.log(button[0].innerText);
// button[0].innerText = "BUY NOW";
// button.innerText = "Comprar ahora";

// ---------------Estilos
// console.log(button[0].style);
// button[0].style.backgroundColor = "blue";

// ---------------Eventos
// const elemButton = button[0]
// elemButton.addEventListener("click", function(){
//     elemButton.classList.toggle("toggle");
    // elemButton.style.backgroundColor = "red";
    // console.log("Diste click en el boton");
// })

// const iconRemove = document.querySelectorAll(".cart__delete-icon");
// iconRemove.forEach(elem =>{
//     elem.addEventListener("click", function(){
//         const elemParent = elem.parentElement;
//         elemParent.remove();
// })
// });

// const header = document.querySelector(".header");
// const cartIcon = header.lastElementChild;
// const cart = document.querySelector(".cart");
// // console.log(cart);
// cartIcon.addEventListener("click", function(){
//     cart.classList.toggle("show");
// });

// const product = document.querySelector(".products__art");
// product.addEventListener("mouseenter", () => {
//     product.style.opacity = "1";
// });

// product.addEventListener("mouseleave", () => {
//     product.style.opacity = "0.5";
// });

// ---------------Funciones del proyecto--------------------//

const header = document.querySelector(".header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");
// console.log(cart);
cartIcon.addEventListener("click", function(){
    cart.classList.toggle("show");
});

const product = document.querySelector(".products__art");
const menu = document.querySelector(".header__img");
const menuIcon = header.firstElementChild;
const menuSection = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu__icons--closed");
// console.log(menuSection);
function toggleMenu(){
    menuSection.classList.toggle("show");
    if (menuSection.classList.contains("show")) {
        product.style.opacity = "1";
    } else {
        product.style.opacity = "0.5";
    }
}
menu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

const addProduct = document.querySelector(".cart");
const buyButton = document.querySelector(".cart__button");
const cartShopping = document.getElementsByClassName("header__cart__badge");
console.log(cartShopping[0]);

addProduct.addEventListener("click", function(event) {
    if (event.target.classList.contains("cart__delete-icon")) {
        const elemParent = event.target.parentElement;
        elemParent.remove();
        countCartItems();
    }
});

const addButtons = document.querySelectorAll(".products__icon");
const noProduct = document.querySelector(".products__no");

addButtons.forEach(button => {
    button.addEventListener("click", function(event) {

        const productArticle = event.target.parentElement;

        if (productArticle.classList.contains("products__no")) {
            // console.log("Por el momento no hay stock de este producto");
            alert("Por el momento no hay stock de este producto"); 
            return;
        }

        const name = productArticle.querySelector(".products__title").textContent;
        const price = productArticle.querySelector(".products__text").textContent;
        const imgSource = productArticle.querySelector(".products__img").src;

        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "cart__shopping");

        const productImg = document.createElement("img");
        productImg.setAttribute("class", "cart__img");
        productImg.setAttribute("src", imgSource);
        productImg.alt = name;

        const productName = document.createElement("p");
        productName.setAttribute("class", "cart__text");
        productName.textContent = name;

        const productPrice = document.createElement("p");
        productPrice.setAttribute("class", "cart__text");
        productPrice.textContent = price;

        const deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("class", "cart__delete-icon");
        deleteIcon.setAttribute("src", "img/borrar.png");
        deleteIcon.alt = "Borrar producto";

        mainDiv.append(productImg, productName, productPrice, deleteIcon);
        // mainDiv.append(productName);
        // mainDiv.append(productPrice);
        // mainDiv.append(deleteIcon);
        addProduct.insertBefore(mainDiv, buyButton);
        countCartItems();
        // addProduct.append(mainDiv);
        console.log(addProduct);
    });
});

function countCartItems() {
    const items = document.querySelectorAll(".cart__shopping");
    cartShopping[0].innerText = items.length;
    return items.length;
    // console.log(items.length);
}

countCartItems();

