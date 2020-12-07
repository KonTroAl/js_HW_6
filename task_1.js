



"use strict"


let my_basket = document.querySelector(".basket");

let empty_basket = document.createElement("p");
empty_basket.className = 'basket_text';

let products = document.querySelector(".products");



function product_view() {
    let count = 0;
    while (count < Product.length) {
        let my_product = document.createElement("div");
        my_product.className = 'product';

        let my_product_text = document.createElement("p");
        my_product_text.className = 'product_text';


        let str = `Наименование товара: ${Product[count]["name"]}. Цена ${Product[count]["cost"]} рублей.`;
        my_product_text.innerHTML = str;

        my_product.appendChild(my_product_text)
        products.appendChild(my_product)
        count++;
    }

}

const Product = [
    { name: 'PS', cost: 47000, num: 3 },
    { name: 'Xbox', cost: 46000, num: 4 },
    { name: 'PC', cost: 110000, num: 2 },
]

let is_empty = false

let basket = {
    Product,
    countBasketPrice() {
        let a = 0;
        let res = 0;
        let is_num = true;
        let count = 0;
        for (let i = 0; i < Product.length; i++) {
            a = (Product[i]["cost"] * Product[i]["num"]);
            if (isNaN(a)) {
                is_num = false;
                break;
            }
            res = res + a;
            count++;
        }
        if (count === 0) {
            is_empty = true;
        }
        if (is_empty === true) {
            empty_basket.innerHTML = "Корзина пуста!"
        } else {
            let str = `В корзине: ${count} товаров на сумму ${res} рублей!`;
            empty_basket.innerHTML = str;
        }

    }
}

my_basket.appendChild(empty_basket)



basket.countBasketPrice()
product_view()