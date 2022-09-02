import axios from 'axios';
const aplication = document.querySelector('#container-podruct');

const getProduct = async () => {
  try {
    const result = await axios.get(
      'https://bsale-erickseis.vercel.app/api/v1/products'
    );

    const viewData = result.data;
    console.log(viewData)
    let cards = ``;
    viewData.forEach((producCard, indx) => {
      cards += `
      
        <div class="card">
        <img src="${producCard.url_image}" class="card-img-top" alt="...">
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
};

getProduct();
