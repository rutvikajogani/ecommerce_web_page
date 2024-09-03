const url = 'https://fakestoreapi.com/products';
const list = document.getElementById("list")
let value = document.getElementsByClassName("glass")[0];
let input = document.getElementById("input");
let range = document.getElementsByClassName("range")[0];

let data = []
async function fetchData() {
    data = await fetch(url)
        .then(data => data.json())
        .then(data => data)
        .catch(err => (err));



    let tag = ""
    for (let i = 0; i < data.length; i++) {

        tag += `
            <div class="first_info_2_1">
                <img src="${data[i].image}" alt="" class="nature_img">
                     <div class="descriptions">
                       <h3>${data[i].title}</h3>
                       <div class="ratings">
                        <div class="rate">${data[i].rating.rate}<i class="fa-solid fa-star star"></i></div>
                        <p>${data[i].rating.count} reviews</p>
                        </div>
                        <p class="description">${data[i].description}</p>

                    </div>
                    <div class="price">
                      <h4>${data[i].price}</h4>
                       <h5>free delivery</h5>
                       <h6>Save extra with combo offers</h6>
                        <h5>Upto ₹35,150 off on Exchange</h5>
                     </div>
            </div>`



    }
    list.innerHTML = tag;
}

fetchData()




function searchbar() {
    let value = document.getElementsByClassName("text")[0].value;
    let search = data.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
    );
    let element = document.getElementById("close")

    // console.log(element.classList.value)
    if (element.classList[1] == "fa-magnifying-glass") {
        element.classList.remove("fa-magnifying-glass")
        element.classList.add("fa-xmark")
    } else {
        element.classList.add("fa-magnifying-glass")
        element.classList.remove("fa-xmark")
        document.getElementById("input").value = "";
        search = data
    }
    // console.log(element.classList[1])

    // console.log(search)
    let tag = ""
    for (let i = 0; i < search.length; i++) {

        tag += `
            <div class="first_info_2_1">
                <img src="${search[i].image}" alt="" class="nature_img">
                     <div class="descriptions">
                       <h3>${search[i].title}</h3>
                       <div class="ratings">
                        <div class="rate">${search[i].rating.rate}<i class="fa-solid fa-star star"></i></div>
                        <p>${search[i].rating.count} reviews</p>
                        </div>
                        <p class="description">${search[i].description}</p>

                    </div>
                    <div class="price">
                      <h4>${search[i].price}</h4>
                       <h5>free delivery</h5>
                       <h6>Save extra with combo offers</h6>
                        <h5>Upto ₹35,150 off on Exchange</h5>
                     </div>
            </div>`


    }



    list.innerHTML = tag;

}

function run(index) {
    let value = document.getElementById(index).checked;
    let price = value ? data.filter(value => value.rating.rate > index) : data
    console.log(price);
                           


    let tag = ""
    for (let i = 0; i < price.length; i++) {

        tag += `
            <div class="first_info_2_1">
                <img src="${price[i].image}" alt="" class="nature_img">
                     <div class="descriptions">
                       <h3>${price[i].title}</h3>
                       <div class="ratings">
                        <div class="rate">${price[i].rating.rate}<i class="fa-solid fa-star star"></i></div>
                        <p>${price[i].rating.count} reviews</p>
                        </div>
                        <p class="description">${price[i].description}</p>

                    </div>
                    <div class="price">
                      <h4>${price[i].price}</h4>
                       <h5>free delivery</h5>
                       <h6>Save extra with combo offers</h6>
                        <h5>Upto ₹35,150 off on Exchange</h5>
                     </div>
            </div>`


    }
    list.innerHTML = tag;


}
function pricechange(){
    const value =document.getElementsByClassName("range")[0].value;
    console.log(value);
    let rangeprice =data.filter(item => item.price >= value)

    
    let tag = ""
    for (let i = 0; i < rangeprice.length; i++) {

        tag += `
            <div class="first_info_2_1">
                <img src="${rangeprice[i].image}" alt="" class="nature_img">
                     <div class="descriptions">
                       <h3>${rangeprice[i].title}</h3>
                       <div class="ratings">
                        <div class="rate">${rangeprice[i].rating.rate}<i class="fa-solid fa-star star"></i></div>
                        <p>${rangeprice[i].rating.count} reviews</p>
                        </div>
                        <p class="description">${rangeprice[i].description}</p>

                    </div>
                    <div class="price">
                      <h4>${rangeprice[i].price}</h4>
                       <h5>free delivery</h5>
                       <h6>Save extra with combo offers</h6>
                        <h5>Upto ₹35,150 off on Exchange</h5>
                     </div>
            </div>`


    }
    list.innerHTML = tag;
}