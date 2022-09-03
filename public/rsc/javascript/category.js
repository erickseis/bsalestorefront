import axios from 'axios';
const aplication = document.querySelector('#container-category')



const getCategory = async () => {
    try {
        const result = await axios.get(
            'https://bsale-erickseis.vercel.app/api/v1/categories');

        const viewData = result.data
        let table = ``;
        viewData.forEach((category, indx) => {
            table += `<li class="list-group-item">${category.name}</li>`
        });
        aplication.innerHTML =
            `<div class="category">
              <ul class="list-group"">${table}</ul>
             </div>
        `
    } catch (error) {
        console.log(error);
    }
};



getCategory();
