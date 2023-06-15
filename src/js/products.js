let all= document.querySelector('#all')
let products = 
 [
    { id: 1,
     image: "https://i.postimg.cc/YqLHRJwn/YSL-Laurent-Libre.png",
     name : "YSL Laurent Libre",
     price: "R3 250,00",
     desc :" A pairing of icy-cool and juicy oranges complement each other while armfuls of sensual flowers introduce a spirited hot and cold ambiance.",
     category: "women",
},

{ id: 2,
    image: "https://i.postimg.cc/zDt3ss3w/prive.webp",
    name : "Eve Privé",
    price: "R1 950,00",
    desc: "Unique and personal to you with the gorgeous floral and woody fragrance.Embrace your individuality with crisp red apple and warm cedarwood. ",
    category: "women",
},

{ id: 3,
    image: "https://i.postimg.cc/5yKfyCFn/56834966-800-800.png",
    name : "Elie Saab",
    price: "R2 340,00",
    desc : "Radiant, voluptuous, addictive The top note opens with a sun-kissed, radiant orange blossom, as an ode to light.",
    category: "women",
},

    { id: 4,
        image: "https://i.postimg.cc/C5t9VGZg/Dolce-Gabbana.webp",
        name : "Dolce & Gabbana Light Blue",
        price: "R2 290,00",
        desc : "A chilled citrus cocktail of refreshing mandarin and frozen grapefruit gives the top notes a cool, elegant twist.",
        category: "men",
    },
    
    { id: 5,
        image: "https://i.postimg.cc/fy1mJ2X2/vanilla-fragrances-1662138843.jpg",
        name : "Vanille Antique",
        price: "R 5 280,00",
        desc : "Vanille Antique is a pleasant but generic amber-vanilla scent; warm, woody and just the right amount of sweet.",
        category: "men",
    },
    
    { id: 6,
        image: "https://i.postimg.cc/h4CfM5XN/di-MANzi-new-image-441x441.png",
        name : "RDT diMANzi",
        price: "R1 290,00",
        desc: "The composition of the fragrance encompasses zesty citrus top notes of Bergamot & Lemon, a heart note of Rosemary captures the aromatic, woody & earthy accord and the sensual & spicy appeal.",
        category: "men",
    }
    
]


products.forEach((data) => {
  all.innerHTML += `
  <div class="card px-3 m-4 col-lg-3 col-md-3 col-4" style="width: 18rem;">
  <img src="${data.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><b>${data.name}</b></h5>
    <p class="card-text">${data.price}</p>
    <p class="card-text">${data.desc}</p>
    <button class="btn btn-primary" id="atc" onclick="addToCart(${data.id})">Add to cart</button>
  </div>
</div>`;
});

localStorage.setItem('data',JSON.stringify(products))

const cart = [];
localStorage.setItem('checkout-list', JSON.stringify( []))
function addToCart(productId) {
  const product = products.find((product) => product.id == productId);
    cart.push(product);
    localStorage.setItem('checkout-list', JSON.stringify(cart));
}