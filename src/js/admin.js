let productTitle = document.querySelector("#product-name");
let productDescription = document.querySelector("#description");
let productContent = document.querySelector("#content");
let image = document.querySelector("#image-url");
let btnAddContent = document.querySelector(".btn-add");
let table = document.querySelector("#tbl-admin");   
let productList = document.querySelector("#product-list");
let productData = JSON.parse(localStorage.getItem("product-list"));
let itemId =
  productData.length > 0 ? productData[productData.length - 1].id + 1 : 1;
btnAddContent.addEventListener("click", () => {
  addProduct();
});
function addProduct() {
  if (
    productTitle.value &&
    productDescription.value &&
    productContent.value &&
    image.value
  ) {
    productData.push(new Product(itemId,productTitle.value,image.value,productDescription.value,productContent.value,new Date()))
    localStorage.setItem("product-list", JSON.stringify(productData));
    clearForm();
    displayProducts();
    itemId++;
  } else {
    alert("Please fill in all fields");
  }
}
function Product(idItem,title,img,desc,cont,dt) {
  this.id = idItem;
  this.title = title;
  this.image = img;
  this.description = desc;
  this.content = cont;
  this.date = dt
};
function clearForm() {
  productTitle.value = "";
  productDescription.value = "";
  productContent.value = "";
  image.value = "";
}
function displayProducts() {
  productList.innerHTML = "";
  productData.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td><img src="${item.image}" alt="Product Image" width="50"></td>
      <td>${item.description}</td>
      <td>${item.content}</td>
      <td>
      <div class="xxx">
        <button class="btn-edit" data-id="${item.id}" onclick="editProduct()">Edit</button>
        <button class="btn-delete" data-id="${item.id}" onclick="${item}">Delete</button>
        </div>
      </td>
    `;
    productList.appendChild(row);
  });
  attachEventListeners();
}
function attachEventListeners() {
  let deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let productId = parseInt(button.dataset.id);
      deleteProduct(productId);
    });
  });
  let editButtons = document.querySelectorAll(".btn-edit");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let productId = parseInt(button.dataset.id);
      editProduct(productId);
    });
  });
}
function editProduct(productId) {
  let product = productData.find((item) => item.id === productId);
  if (product) {
    productTitle.value = product.title;
    productDescription.value = product.description;
    productContent.value = product.content;
    image.value = product.image;
    itemId = product.id;
  }
}
function deleteProduct(item) {
  let index = productData.findIndex( p =>{
    return p.id == item.id
  })
  productData.splice(index, 1)
  localStorage.setItem('product-list', JSON.stringify(productData))
  displayProducts()
}
displayProducts(); 