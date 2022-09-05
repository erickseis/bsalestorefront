import axios from 'axios';
const aplication = document.querySelector('#container-podruct');
const category = document.querySelector('#container-category');
import img1 from '../img/botella.jpg'

window.getProduct = async (id = 8) => {
    console.log(id)
    if (id === 8) {
        try {
            const result = await axios.get(
                `https://bsale-erickseis.vercel.app/api/v1/products/` // ${i} valor dinamico?
            );
            const viewData = result.data;
            console.log(viewData);
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
              <a class="car-buy" ><i class="fa-solid fa-cart-plus"></i></a>
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
    else if (id >= 1) {
        console.log(id)
        try {
            const result = await axios.get(
                `https://bsale-erickseis.vercel.app/api/v1/products/${id}` // ${i} valor dinamico?
            );
            const viewData = result.data;
            console.log(viewData);
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
              <a class="car-buy" ><i class="fa-solid fa-cart-plus"></i></a>
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
        console.log(id)
        async function updateView(tname) {

            console.log(tname);
            try {
                const result = await axios.get(
                    `https://bsale-erickseis.vercel.app/api/v1/products/name/${tname}` // ${i} valor dinamico?
                );
                console.log(result);
                const viewData = result.data;
                console.log(viewData);
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
              <a class="car-buy" ><i class="fa-solid fa-cart-plus"></i></a>
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

        function greetingOnClickEvent(e) {
            e.preventDefault();
            const tname = document.getElementById('text').value;
            if (tname == "") {
                Swal.fire({
                    type: 'error',
                    title: 'MENSAJE',
                    text: 'Debes introducir caracteres'
                }); tname = "pisco"
            }

            updateView(tname);
        }
        btn.addEventListener('click', greetingOnClickEvent);

    }
};

const getCategory = async () => {
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
getCategory();
getProduct();
