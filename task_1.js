// 1. Продолжаем реализовывать модуль корзины:
//  a.Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
//  b.Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.


"use strict"

const Product = [
    { name: 'PS', cost: 47000, num: 3 },
    { name: 'Xbox', cost: 46000, num: 4 },
    { name: 'PC', cost: 110000, num: 2 },
]

let Basket_Product = []

let is_empty = false

let basket = {
    Basket_Product,
    countBasketPrice() {
        let a = 0;
        let res = 0;
        let is_num = true;
        let count = 0;
        for (let i = 0; i < Basket_Product.length; i++) {
            a = (Basket_Product[i]["cost"] * Basket_Product[i]["num"]);
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

        let buy_button = document.createElement("button");
        buy_button.className = "buy_button"
        buy_button.innerHTML = "Купить!";
        buy_button.id = `${Product[count]["name"]}`



        let str = `Наименование товара: ${Product[count]["name"]}. Цена ${Product[count]["cost"]} рублей.`;
        my_product_text.innerHTML = str;

        my_product.appendChild(my_product_text)
        my_product.appendChild(buy_button)
        products.appendChild(my_product)

        count++;
    }



}




my_basket.appendChild(empty_basket)




product_view()

// let val = 'PS'

function Buy_Basket(val, count) {
    for (let i = 0; i < Product.length; i++) {

        if (val === Product[i]["name"]) {
            Basket_Product.push(Product[i])
            for (let a = 0; a < Basket_Product.length; a++) {
                if (val === Basket_Product[a]['name']) {
                    Basket_Product[a]['num'] = count
                }
            }
        }
    }

}


// let str = `#${Product[i]["name"]}`;

document.querySelector("#Xbox")
    .addEventListener('click', (e) => {
        let count = 0;
        count++
        Buy_Basket(e.target.id, count)
    })

// document.querySelector("#PS")
//     .addEventListener('click', (e) => {
//         console.log('PS');
//     })

// document.querySelector("#PC")
//     .addEventListener('click', (e) => {
//         console.log('PC');
//     })



basket.countBasketPrice()