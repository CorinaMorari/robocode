let cartTitle = "";
let cartImgUrl = "";
let cartDescription = "";

const buttonHandller = () => {
  cartTitle = document.getElementById("cartTitle").value;
  cartImgUrl = document.getElementById("carUrl").value;
  cartDescription = document.getElementById("description").value;
  createCartItem();
};

const createCartItem = () => {
  const cartsContainer = document.getElementById("cartsContainer");
  cartsContainer.appendChild(cartContent());
};

const cartContent = () => {
  const container = document.createElement("div");
  container.className = "newCart";
  container.appendChild(createCartImg());
  container.appendChild(cartInformation());
  return container;
};

const createCartImg = () => {
  const image = document.createElement("img");
  image.className = "cartImg";
  image.src = cartImgUrl;
  image.alt = "Invalid image url";
  document.getElementById("carUrl").value = "";
  return image;
};

const cartInformation = () => {
  const divInformation = document.createElement("div");
  divInformation.className = "information";
  divInformation.appendChild(cartTitleElement());
  divInformation.appendChild(cartDescriptionElement());
  return divInformation;
};

const cartTitleElement = () => {
  const title = document.createElement("h4");
  title.className = "title";
  title.textContent = cartTitle;
  return title;
};

const cartDescriptionElement = () => {
  const description = document.createElement("p");
  description.className = "description";
  description.textContent = cartDescription;
  return description;
};
