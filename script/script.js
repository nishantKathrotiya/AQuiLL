let products = {
    data: [
      {
        productName: "pottasium nitrate",
        category: "Food&PharmaProducts",
        price: "50",
      },
      {
        productName: "Benzoic acid",
        category: "Food&PharmaProducts",
        price: "49",
      },
      {
        productName: "Baking soda",
        category: "Backrey",
        price: "30",
      },
      {
        productName: "Dry ice ",
        category: "Backrey",
        price: "30",
      },
      {
        productName: "sodium benzoate ",
        category: "Food&PharmaProducts",
        price: "129",
      },
      {
        productName: "formaldehyde",
        category: "CosmaticProduct",
        price: "89",
      },
      {
        productName: "pottasium sorbate",
        category: "Backrey",
        price: "50",
      },
      {
        productName: "petrolatum",
        category: "CosmaticProduct",
        price: "49",
      },
      {
        productName: "chlorine Dioxide",
        category: "Biocides",
        price: "54",
      },
      {
        productName: "hydrogen peroxide",
        category: "Biocides",
        price: "45",
      },
      {
        productName: "Gum arabic. GG",
        category: "Encapsulations&DCGrade",
        price: "65",
      },
      {
        productName: "EMC Ethyl methylcellulose. GA.",
        category: "Encapsulations&DCGrade",
        price: "45",
      },
      {
        productName: "ferrous fumarate",
        category: "IronSupplements",
        price: "56",
      },
      {
        productName: "ferrous gluconate",
        category: "IronSupplements",
        price: "78",
      },
      {
        productName: "ferrous succinate",
        category: "IronSupplements",
        price: "89",
      },
      {
        productName: "Erythorbic Acid.",
        category: "FeedProducts",
        price: "34",
      },
      {
        productName: "Benzoic acid",
        category: "FeedProducts",
        price: "23",
      },
      {
        productName: "Sodium Benzoate.",
        category: "FeedProducts",
        price: "67",
      },
      {
        productName: "Zinc iodide",
        category: "IodineDerivatives",
        price: "78",
      },
      {
        productName: "Pottasium iodate",
        category: "IodineDerivatives",
        price: "54",
      },
      {
        productName: "Nutraceuticals",
        category: "SpecialityChemicals",
        price: "34",
      },
      {
        productName: "Resins",
        category: "SpecialityChemicals",
        price: "44",
      },
      {
        productName: "Oil field chemicals",
        category: "SpecialityChemicals",
        price: "42",
      },


    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    // let imgContainer = document.createElement("div");
    // imgContainer.classList.add("image-container");
    // //img tag
    // let image = document.createElement("img");
    // image.setAttribute("src", i.image);
    // imgContainer.appendChild(image);
    // card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "₹" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });




  document.getElementById("search-input").addEventListener("keyup", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });


  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };