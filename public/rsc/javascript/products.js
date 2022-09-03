import axios from 'axios';
const aplication = document.querySelector('#container-podruct');
const aplications = document.querySelector('#container-category');



const getProduct = async () => {
  try {
    const result = await axios.get(
      `https://bsale-erickseis.vercel.app/api/v1/products`

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


let getData = function (indx) {
  let x = indx
  return console.log(x)
}

const getCategory = async () => {
  try {
    const result = await axios.get(
      `https://bsale-erickseis.vercel.app/api/v1/categories/`);

    const viewData = result.data


    let table = ``;
    viewData.forEach((category, indx) => {
      table += `
    <div  onclick="alert(${getData(indx)})" >
    <li class="list-group-item"  > 
  ${category.name}
  </li></div>
    `

    });
    aplications.innerHTML =
      `<div class="category">
    <ul class="list-group"">${table}</ul>
    </div>
    `

  } catch (error) {
    console.log(error);
  }
};
// document.getElementById("hi").click = alert("holaaaaaacjndicdi")
getCategory();
getProduct();

// onclick='console.log(${category.id})