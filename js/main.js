// Start Navbar
let barsIcon = document.querySelector(".bars-icon");
let icon = document.querySelector(".bars-icon i");
let dropDown = document.querySelector(".dropdown-menu");


function barsIconClick (){
    dropDown.classList.toggle("animation");
    
    if(dropDown.classList.contains("animation")){
        icon.classList.replace("fa-bars", "fa-x");
    }else{
        icon.classList.replace("fa-x", "fa-bars")
    }
}
// End Navbar


// Get data from API and render it in page.
let cards = document.querySelector(".cards");
let arr;

if(localStorage.getItem("productsData")){
    arr = JSON.parse(localStorage.getItem("productsData"));
    mapOnProducts();
}else{
    arr = [];
    getData();
}

function getData (){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((json)=> {
        json.map((el)=>{
            arr.push(el);
        })
        
        localStorage.setItem("productsData", JSON.stringify(arr));
        mapOnProducts();
    });
}

function mapOnProducts (){
    arr.map((el)=>{
        createCard(el.image, el.title, el.description, el.price);
    })
}



function createCard (url, title, desc, price){
    let card = `
    <div class="card rounded-md bg-white overflow-hidden">
        <div class="img-holder">
            <img src="${url}" alt="Product" class="h-[280px] w-full">
        </div>
        <div class="text p-2">
            <h2 class="text-2xl font-bold">${title.slice(0,10)}</h2>
            <p class="text-gray-500 my-2 max-w-[95%]">${desc.slice(0,80)}...</p>
            <span class="text-red-600 font-bold text-lg">$ ${price}</span>
            <div class="features pt-2 flex items-center justify-between">
                <span class="fav cursor-pointer">
                    <i class="fa-solid fa-heart text-red-600 text-xl hover:text-red-500 ml-2"></i>
                </span>
                <span class="cart cursor-pointer">
                    <i class="fa-solid fa-cart-shopping text-black text-xl hover:text-zinc-900 mr-2"></i>
                </span>
            </div>
        </div>
    </div>
    `;
    cards.innerHTML += card;
}