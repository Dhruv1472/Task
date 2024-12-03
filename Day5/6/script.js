const cart = {
  getItems: function () {
    return JSON.parse(localStorage.getItem("cart")) || [];
  },
  addItem: function (item) {
    const items = this.getItems();
    items.push(item);
    localStorage.setItem("cart", JSON.stringify(items));
  },
  removeItem: function (index) {
    const items = this.getItems();
    items.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(items));
  },
  calculateTotal: function () {
    return this.getItems().reduce((total, item) => total + item.price, 0);
  },
};

if (document.querySelector(".menu")) {
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      const name = item.getAttribute("data-name");
      const price = parseFloat(item.getAttribute("data-price"));
      const image = item.querySelector("img").getAttribute("src");
      cart.addItem({ name, price, image });
      alert(`${name} added to cart!`);
    });
  });
}

if (document.querySelector(".cart-items")) {
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalPriceContainer = document.querySelector(".total-price");

  const items = cart.getItems();
  if (items.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
  } else {
    cartItemsContainer.innerHTML = items
      .map(
        (item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto; margin: 20px;">
                    <p style="text-align:center">${item.name} - ₹${item.price}</p>
                    <button class="remove-item" data-index="${index}" style="margin-left:30px;">Remove</button>
                </div>
            `
      )
      .join("");
    totalPriceContainer.textContent = `Total: ₹${cart.calculateTotal()}`;
  }

  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      cart.removeItem(index);
      alert("Item removed from cart!");
      location.reload();
    });
  });
}
