// import tools to consume our api
import axios from 'axios';
//define the labels to use
const aplication = document.querySelector('#container-podruct');
const category = document.querySelector('#container-category');
//import element to replace images that have null value
import img1 from '../img/botella.jpg'

//function to consume our apirest
window.getProduct = async (id = 8) => { //    receive the id of the window function
    if (id === 8) { //if id is equal to this value show all products
        try {
            const result = await axios.get( //await implementation to wait for a promise
                `https://bsale-erickseis.vercel.app/api/v1/products/`
            );
            const viewData = result.data;

            let cards = ``; //define empty string to be redefined later
            await viewData.forEach((producCard, indx) => { // foreach application to start iterating within our apirest
                cards += `
          <div class="card">
          
             <img src="${producCard.url_image != null ? producCard.url_image : img1}" class="card-img-top" alt="imagen">
           <div class="card-body">
             <h5 class="card-title">${producCard.name}</h5>
          <hr/>
               <p class="card-text">Price: $ ${producCard.price}</p>
          <span> 
              <a class="car-buy" href=""><i class="fa-solid fa-cart-plus"></i></a>
          </span>
            </div>
          </div>   
        `;
            });
            aplication.innerHTML = cards;//redefining our previously declared element to be included in our DOM
        } catch (error) {//defining errors to show in the console in case of receiving a negative response
            console.log(error);
        }
    }
    else if (id >= 1) { //If it is greater than or equal to the given value, show me the products according to the id received from category from the window function.
        try {
            const result = await axios.get(
                `https://bsale-erickseis.vercel.app/api/v1/products/${id}` // ${i} dynamic value
            );
            const viewData = result.data;
            let cards = ``;
            await viewData.forEach((producCard, indx) => {
                cards += `
          <div class="card">
          <img src="${producCard.url_image != null ? producCard.url_image : img1}" class="card-img-top" alt="imagen">
           <div class="card-body">
             <h5 class="card-title">${producCard.name}</h5>
          <hr/>
               <p class="card-text">Price: $ ${producCard.price}</p>
          <span> 
              <a class="car-buy" href=""><i class="fa-solid fa-cart-plus"></i></a>
          </span>
            </div>
          </div>   
        `;
            });
            aplication.innerHTML = cards;
        } catch (error) {
            console.log(error);
        }
    }
    if (id) {
        async function updateView(tname) { //receiving the names entered in the browser from the greetingOnClickEvent function

            console.log(tname);
            try {
                const result = await axios.get(
                    `https://bsale-erickseis.vercel.app/api/v1/products/name/${tname}` // ${tname} dinamic value
                );
                const viewData = result.data;

                let cards = ``;
                await viewData.forEach((producCard, indx) => {
                    cards += `
          <div class="card">
          <img src="${producCard.url_image != null ? producCard.url_image : img1}" class="card-img-top" alt="imagen">
           <div class="card-body">
             <h5 class="card-title">${producCard.name}</h5>
          <hr/>
               <p class="card-text">Price: $ ${producCard.price}</p>
          <span> 
              <a class="car-buy" href=""><i class="fa-solid fa-cart-plus"></i></a>
          </span>
            </div>
          </div>
             `;
                });
                aplication.innerHTML = cards;
            } catch (error) {
                console.log(error);
            }
        }

        function greetingOnClickEvent(e) { //defining the function to execute every time it is required
            e.preventDefault();
            const tname = document.getElementById('text').value;
            if (tname == "") {
                Swal.fire({ //execute modal to show errors to the client in case of not entering names in the browser
                    type: 'error',
                    title: 'MENSAJE',
                    text: 'Debes introducir caracteres'
                });
            }
            updateView(tname);
        }
        const btn = document.querySelector('.btn')

        const submit = document.querySelector('#form')
        btn.addEventListener('click', greetingOnClickEvent);//wait for event to execute function
        submit.addEventListener('submit', greetingOnClickEvent);//wait for event to execute function
    }
};

const getCategory = async () => {// function to obtain all the categories provided by the apirest
    try {
        const result = await axios.get(
            `https://bsale-erickseis.vercel.app/api/v1/categories/`
        );

        const viewData = result.data;

        let table = ``;
        await viewData.forEach((category, indx) => {
            table += `
    <div >
    <li id="lo"  key="${category.id}" onclick="window.getProduct(${category.id})"  class="list-group-item"  > ${category.name}
  </li></div>
    `;
        });
        category.innerHTML = `<div class="category">
    <ul class="list-group"">${table}</ul>
    </div>
    `;
    } catch (error) {
        console.log(error);
    }
};

//*executing the previously performed functions
getCategory();
getProduct();