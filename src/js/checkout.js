let cart = JSON.parse(localStorage.getItem("cart"));
if(!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}
// const saveCart =  () => {
//   localStorage.setItem("cart", JSON.stringify(cart))
// }
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product ) {
    cart.push(product);
    product.quantity++;
    // saveCart()
    updateCart();
  }
}
function deleteFromCart(index) {
  let deletedProduct = cart.splice(index, 1)[0];
  deletedProduct.quantity++;
  updateCart();
}
function updateCart() {
  let cartContainer = document.getElementById("table");
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    let cartProduct = document.createElement("tr");
    cartProduct.innerHTML = `
    <td><img src="${product.image}" height="30px"></img></td>
    <td>${product.name}</td>
    <td><input type="number" placeholder="1" min="1" style="width: 40px;" height="40px"></td>
    <td>${product.price}</td>
    <td><button onclick="deleteFromCart(${index})" class="delbtn">X</button></td>`;
    cartContainer.appendChild(cartProduct);
  });
  calculateTotal();
}
function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((item) => {
    total += eval(item.price);
  });
  // totalElement.textContent = `<span>${total}</span>`;
}

updateCart();
function checkout() {
  const modalFooter = document.querySelector(".");
  modalFooter.innerHTML =  cart = [];
  updateCart();
}
function renderCartTotal() {
  let totalCartPrice = 0;
  totalCartAmount = 0;
  cart.forEach((item) => {
    totalCartPrice += item.price * item.numberOfUnits;
  });
  totalPriceEl.innerHTML = `Total Price: R${totalCartPrice.toFixed(2)}`;
}