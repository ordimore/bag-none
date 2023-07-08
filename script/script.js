let btn_show = document.getElementById("show-item");
let row3 = document.getElementById("product-row3");
let navmobile = document.getElementById("nav-mobile");
let burgerbar = document.getElementById("burgerbebe");

function show_more_item(){
    row3.innerHTML = 
        `
        <div class="product1">
            <div class="product-img">
                <img src="./img/product/9.webp" alt="">
            </div>
            <div class="product-name">
                <p>Dickies x Pop Trading Company Tote Bag</p>
            </div>
            <div class="product-harga">
                <p>IDR 440.000,00</p>
            </div>
             
            <div class="product-buy-button">
            <p>BUY NOW</p>
            </div>
        </div>
        <div class="product2">
            <div class="product-img">
                <img src="./img/product/10.webp" alt="">
            </div>
            <div class="product-name">
                <p>Parra Hot Springs Pattern Beach Bag</p>
            </div>
            <div class="product-harga">
                <p>IDR 435.000,00</p>
            </div>
             
            <div class="product-buy-button">
            <p>BUY NOW</p>
            </div>
        </div>
        <div class="product1">
            <div class="product-img">
                <img src="./img/product/11.webp" alt="">
            </div>
            <div class="product-name">
                <p>Carhartt Philis Backpack</p>
            </div>
            <div class="product-harga">
                <p>IDR 856.000,00</p>
            </div>
             
            <div class="product-buy-button">
            <p>BUY NOW</p>
            </div>
        </div>
        <div class="product2">
            <div class="product-img">
                <img src="./img/product/12.webp" alt="">
            </div>
            <div class="product-name">
                <p>Patagonia Altvia Pack 28L</p>
            </div>
            <div class="product-harga">
                <p>IDR 964.000,00</p>
            </div>
             
            <div class="product-buy-button">
            <p>BUY NOW</p>
            </div>
        </div>
    `;
    btn_show.innerHTML = "SHOW LESS";
    btn_show.setAttribute('onclick','show_less_item()');
}

function show_less_item(){
    row3.innerHTML = 
        `<div>
    </div>`;
    btn_show.innerHTML = "SHOW MORE";
    btn_show.setAttribute('onclick','show_more_item()');
}


function displaynav(){
    navmobile.style.display = "flex";
    burgerbar.setAttribute('onclick','displaynonav()');
}

function displaynonav(){
    navmobile.style.display = "none";
    burgerbar.setAttribute('onclick','displaynav()');
}
