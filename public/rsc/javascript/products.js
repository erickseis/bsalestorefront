import axios from "axios";
const aplication = document.querySelector("#container-podruct");
const aplications = document.querySelector("#container-category");

window.getProduct = async (id = 1) => {

  try {
    const result = await axios.get(
      `https://bsale-erickseis.vercel.app/api/v1/products/${id}` // ${i} valor dinamico?
    );
    const viewData = result.data;
    console.log(viewData);
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
    <li id="lo"  key="${indx}" onclick="window.getProduct(${category.id})"  class="list-group-item"  > ${category.name}
  </li></div>
    `;
    });
    aplications.innerHTML = `<div class="category">
    <ul class="list-group"">${table}</ul>
    </div>
    `;
  } catch (error) {
    console.log(error);
  }
};
getCategory();
getProduct();
