let products = JSON.parse(localStorage.getItem('data'))
console.log(products)
let addHere = document.querySelector('#product-list')


let productTitle = document.querySelector("#product-name");
let productDescription = document.querySelector("#desc");
let productCategory = document.querySelector("#content");
let image = document.querySelector("#image-url");
let btnAddContent = document.querySelector(".btn-add");
let table = document.querySelector("#tbl-admin");
let productList = document.querySelector("#product-list");
let productData = JSON.parse(localStorage.getItem("product-list"));
let row = document.getElementById("product-list");
renderStuff()

function deleteProduct(item) {
  let index = productData.findIndex( p =>{
    return p.id == item.id
  })
  productData.splice(index, 1)
  localStorage.setItem('product-list', JSON.stringify(productData))
  displayProducts()
}
let btnSort = document.querySelector(".btn-sort");
btnSort.addEventListener("click", sortProducts);
function sortProducts() {
  productData.sort((a, b) => {
    return a.desc.localeCompare(b.descr);
  });
  displayProducts();
}
// displayProducts();



function renderStuff(){

  products.forEach((data,i)=>{
    let yes = `<tr>
  <td>${data.id}</td>
  <td>${data.name}</td>
  <td>${data.desc}</td>
  <td>${data.category}</td>
  <td><button id="addItem">Add</button>
  <button id="deleteItem">Delete</button>
  </td>
</tr>`

addHere.innerHTML += yes
  })
}

function addToCart(){
  let productName = document.querySelector('#product-name')
  let productDesc = document.querySelector('#desc')
  let productCat = document.querySelector('#content')
  let productImg = document.querySelector('#image-url')
  let productPrice = document.querySelector('#finalPrice')

  let button = document.querySelector('.btn-add')
  let newObject = {
    category:productCat.value,
    desc:productDesc.value,
    id:products.id++,
    image:productImg.value,
    name:productName.value,
    price:productPrice.value
  }
  products.push(newObject)
  localStorage.setItem('data',JSON.stringify(products))
  
  addHere.innerHTML = ''
  renderStuff()
}

