let Houses = JSON.parse(localStorage.getItem("Houses"))
  ? JSON.parse(localStorage.getItem("Houses"))
  : [
      {
        id: "1",
        category: "Single-Family Home",
        title: " Large Detached House",
        description:
          "2 bedroom detached house with 1.5 bathrooms and a garage on a beautiful property",
        address: "Arrowtown, New Zealand",
        imgURL:
          "https://i.postimg.cc/SKLvNYTt/zac-gudakov-FH3zl-Ds-Y4-Z4-unsplash.jpg",
        rooms: "4",
        bedrooms: "2",
        bathrooms: "1.5",
        garages: "1",
        area: "3209 sq ft",
        price: "5 000 000",
      },
      {
        id: "2",
        category: "Apartment",
        title: "Top-Floor Penthouse",
        description:
          "recently renovated top-floor penthouse equipped with vaulted ceilings, integrated appliaces and underground assigned parking",
        address: "Atabey, Yeni, 32670 Atabey/Isparta, Turkey",
        imgURL:
          "https://i.postimg.cc/T1zfrWVv/roberto-nickson-emqn-SQw-QQDo-unsplash.jpg",
        rooms: "9",
        bedrooms: "5",
        bathrooms: "3",
        garages: "2 ",
        area: "1800 sq ft",
        price: "15 700 000",
      },
      {
        id: "3",
        category: "Multi-Family Home",
        title: " Mansion",
        description:
          "6 bedroom modern mansion equipped with everything you could ever need.",
        imgURL:
          "https://i.postimg.cc/gkw8KFWY/r-architecture-2g-Dwl-Iim3-Uw-unsplash.jpg",
        address:
          "Ratogesa, Golewa, Ngada Regency, East Nusa Tenggara, Indonesia",
        rooms: "16",
        bedrooms: "5",
        bathrooms: "5.5",
        garages: "4",
        area: "5200 sq ft",
        price: "35 400 000",
      },
      {
        id: "4",
        category: "Apartment",
        title: "Renovated Loft Apartment",
        description:
          "1 bedroom modern loft apartment equipped with integrated appliances.",
        imgURL: "https://i.postimg.cc/Zq0xXBkd/pexels-sharath-g-2251247.jpg",
        address: "Paligawan, Balete, Batangas, Philippines",
        rooms: "4",
        bedrooms: "1",
        bathrooms: "1",
        garages: "1",
        area: "1800 sq ft",
        price: "1 200 000",
      },
      {
        id: "5",
        category: "Multi-Family Home",
        title: "detached mansion",
        description: "2 bedroom apartment",
        imgURL: "https://i.postimg.cc/5NcKvmhk/pexels-pixabay-276724.jpg",
        address: "Cửa Nam, Thành phố Vinh, Nghe An, Vietnam",
        rooms: "4",
        bedrooms: "2",
        bathrooms: "2.5",
        garages: "1",
        area: "2600 sq ft",
        price: "2 300 000",
      },
      {
        id: "6",
        category: "Condo",
        title: "1 bedroom house",
        description: "American-style simple 1 bedroom house",
        imgURL:
          "https://i.postimg.cc/j5467zPB/naomi-hebert-MP0bga-S-d1c-unsplash.jpg",
        address: "8385 Neuhaus am Klausenbach, Austria",
        rooms: "4",
        bedrooms: "1",
        bathrooms: "1",
        garages: "1",
        area: "1800 sq ft",
        price: "1 100 000",
      },
      {
        id: "7",
        catgeory: "Single-Family Home",
        title: "Glamorous 3 bedroom apartment",
        description:
          "Europen-royalty style simple 3 bedroom top-floor apartment",
        imgURL:
          "https://i.postimg.cc/Gmsswk7G/mark-champs-Id2-IIl1j-OB0-unsplash.jpg ",
        address:
          "2 Main Bazzar, Mohalla Ferozpura, Harīpur, Haripur, Khyber Pakhtunkhwa, Pakistan",
        rooms: "7",
        bedrooms: "3",
        bathrooms: "4",
        garages: "2",
        area: "3200 sq ft",
        price: "7 600 000",
      },
      {
        id: "8",
        category: "Loft",
        title: "1 bedroom open-plan loft-style apartment",
        description:
          "1 bedroom open-plan loft-style apartment with loads of sunlight",
        imgURL:
          "https://i.postimg.cc/8zX0FVNL/davide-colonna-DZr-Zh-Vd-w-R0-unsplash.jpg",
        address: "Agios Spyridonas 601 00, Greece",
        rooms: "4",
        bedrooms: "1",
        bathrooms: "1",
        garages: "1",
        area: "1700 sq ft",
        price: "3 400 000",
      },
      {
        id: "9",
        catgeory: "Loft",
        title: "Glamorous 1 bedroom New York inspired loft",
        description: "New York style simple 1 bedroom second-floor loft",
        imgURL:
          "https://i.postimg.cc/63qjtjDY/aaron-huber-s95o-B2n9jng-unsplash.jpg",
        address: "Lam Thap, Lam Thap District, Krabi 81120, Thailand",
        rooms: "5",
        bedrooms: "1",
        bathrooms: "2",
        garages: "1",
        area: "1200 sq ft",
        price: "17 600 000",
      },
      {
        id: "10",
        category: "Single-Family Home",
        title: "New Build House",
        description:
          "newly-built house with excellent light-fixures and huge open-plan living/kitchen area with backyard",
        imgURL:
          "https://i.postimg.cc/Z5K46Z3R/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg",
        address: "Andkhoy, Afghanistan",
        rooms: "7",
        bedrooms: "3",
        bathrooms: "2",
        garages: "2",
        area: "4300 sq ft",
        price: "10 600 000",
      },
      {
        id: "11",
        category: "Multi-Family Home",
        title: "Victorian-style mansion on lake",
        description:
          "This newly-renovated mansion situated on this gorgeous lake is a one of a kind",
        imgURL:
          "https://i.postimg.cc/cC0JvzSG/evelyn-paris-XJn-P4-L958ds-unsplash.jpg",
        address: "27 Nelson St, Knysna Central, Knysna, 6571",
        rooms: "9",
        bedrooms: "4",
        bathrooms: "5",
        garages: "1",
        area: "7000 sq ft",
        price: "23 600 000",
      },
      {
        id: "12",
        category: "Single-Family Home",
        title: "Cozy restored Cottage",
        description:
          "Cozy cottage restored with top-of-the-range fittings and fixures",
        imgURL:
          "https://i.postimg.cc/ncN6TDXC/nikolai-artamonov-l-UHl-Rqz9-HYU-unsplash.jpg ",
        address: "Vicolo II Assunta Vergine, 1, 09090 Villa Verde OR, Italy",
        rooms: "7",
        bedrooms: "2",
        bathrooms: "3",
        garages: "3",
        area: "4c200 sq ft",
        price: "14 600 000",
      },
    ];

console.log(Houses);

function showItems(Houses) {
  document.querySelector("#houses").innerHTML = "";
  Houses.forEach((House, i) => {
    document.querySelector("#houses").innerHTML += `
    <div class="col align-items-center">
      <div class="card"  id="card-2"> 
         <img id="img" src=${House.imgURL} />
         <h5 class="title"> ${House.title}</h5>
         <p>${House.description}</p>
         <p><i class="fa-solid fa-location-dot"></i>${House.address}</p>
         <div class="container">
  <div class="row align-items-start">
    <div class="col">
     <p id="rooms"><i class="fa-solid fa-bed me-1"></i>${House.bedrooms}</p>
    </div>
    <div class="col">
      <p id="bathrooms"><i class="fa-solid fa-bath me-1"></i>${House.bathrooms}</p>
    </div>
    <div class="col">
       <p id="garage"><i class="fa-solid fa-warehouse me-1"></i>${House.garages}</p>
    </div>
    <div class="col">
       <p id="garage"><i class="fa-solid fa-ruler me-1"></i>${House.area} sq ft</p>
    </div>
  </div>
    </div>
             <h6><i class="fa-solid fa-dollar-sign"></i> ${House.price}</h6>
      </div>
    </div>
    `;
  });
}
showItems(Houses);
localStorage.setItem("Houses", JSON.stringify(Houses));

// localStorage.setItem("Houses", JSON.stringify(Houses));
// const filterPrice = (e) => {
//   const Price = e.target.value;
//   const priceFiltered = Houses.sort((a, b) => a.price - b.price);
//   if (Price === "asc") {
//     return showForSale(priceFiltered);
//   } else if (Price === "desc") {
//     return showForSale(priceFiltered.reverse());
//   } else if (Price === "all") {
//     const originalSort = Houses.sort((a, b) => a.id - b.id);
//     return showForSale(originalSort);
//   }
// };
// localStorage.setItem("Houses", JSON.stringify(Houses));
function filterBedrooms(e) {
  const bedrooms = e.target.value;
  if (bedrooms == "all") {
    return showItems(Houses);
  }
  const filtered = Houses.filter((House) => House.bedrooms == bedrooms);
  return showItems(filtered);
}
localStorage.setItem("Houses", JSON.stringify(Houses));

function filterPrice(e) {
  const price = e.target.value;
  if (price == "all") {
    return showItems(Houses);
  }
  const filtered = Houses.filter((House) => House.price == price);
  return showItems(filtered);
}
localStorage.setItem("Houses", JSON.stringify(Houses));

function categoryFilter(e) {
  const category = e.target.value;
  if (category == "all") {
    return showItems(Houses);
  }
  const filtered = Houses.filter((House) => House.category == category);
  return showItems(filtered);
}
localStorage.setItem("Houses", JSON.stringify(Houses));

function filterLocation(e) {
  const location = e.target.value;
  if (location == "all") {
    return showItems(Houses);
  }
  const filtered = Houses.filter((House) => House.address == location);
  return showItems(filtered);
}

localStorage.setItem("Houses", JSON.stringify(Houses));
