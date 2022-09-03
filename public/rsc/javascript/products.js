import axios from 'axios';
const aplication = document.querySelector('#container-podruct');
// const aplications = document.querySelector('#container-category');
var evento = document.getElementById('evento');


const getProduct = async () => {
  try {
    const result = await axios.get(
      `https://bsale-erickseis.vercel.app/api/v1/products/` // ${i} valor dinamico?

    );
    const viewData = result.data;
    console.log(viewData)
    let cards = ``;
    await viewData.forEach((producCard, indx) => {
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
      `https://bsale-erickseis.vercel.app/api/v1/categories/`);

    const viewData = result.data

    let table = ``;

     viewData.forEach((category) => {
      table += `

         <div >
       <li  key="${category.id}" onclick='categoryClicked(${category.id})' class="list-group-item"  > 
       ${category.name}
       </li></div>
       `

    });
    evento.innerHTML =table;

function categoryClicked (id){
  console.log(id, tipeof(id))
}

  } catch (error) {
    console.log(error);
  }
};
getCategory();
getProduct();



    //   let table = ``;
    //   await viewData.forEach((category, indx) => {
    //     table += `
    //   <div >
    //   <li id="lo"  key="${indx}"  class="list-group-item"  > 
    // ${category.name}
    // </li></div>
    //   `

    //   });
    //   aplications.innerHTML =
    //     `<div class="category">
    //   <ul class="list-group"">${table}</ul>
    //   </div>
    //   `



// const h = document.getElementById("lo")
// h.addEventListener("click", () => {
//   alert("hola mundo")
// })


// const buttonRight = document.querySelector('#lo');
// buttonRight.addEventListener('click', e => {
//   alert("hello");
// }
// );
// const event = function (indx) {

//   console.log(indx)
// }




// onclick='console.log(${category.id})