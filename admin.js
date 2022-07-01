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
        area: "1209 sq ft",
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
        area: "800 sq ft",
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
        area: "1200 sq ft",
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
        area: "800 sq ft",
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
        area: "2000 sq ft",
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
        area: "800 sq ft",
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
        area: "1200 sq ft",
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
        area: "700 sq ft",
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
        area: "900 sq ft",
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
        area: "1300 sq ft",
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
        area: "3000 sq ft",
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
        area: "1200 sq ft",
        price: "14 600 000",
      },
    ];
console.log(Houses);

localStorage.setItem("Houses", JSON.stringify(Houses));

function showItems(Houses) {
  document.querySelector("#adminhouses").innerHTML = "";
  Houses.forEach((House) => {
    document.querySelector("#adminhouses").innerHTML += `
    <tr>
      <td> ${House.id} </td>
      <td> ${House.category} </td>
      <td>t ${House.title} </td>
      <td> ${House.description} </td>
      <td> ${House.imgURL}</td>
      <td> ${House.address} </td>
      <td> ${House.rooms} </td>
      <td> ${House.bedrooms} </td>
      <td> ${House.bathrooms} </td>
      <td> ${House.garages} </td>
      <td> ${House.area} </td>
      <td> ${House.price}</td>
      <td><i class="fa-solid fa-trash-can" onclick="delItem(${House.id})"></i>
          <i class="fa-solid fa-pen-to-square" id="edit${House.id}" onclick="editItem(${House.id})"></i>
          <i class="fa-solid fa-floppy-disk" id="save${House.id}" onclick="updateItem(${House.id})"></i></td>
    
    `;
  });
}
showItems(Houses);
localStorage.setItem("Houses", JSON.stringify(Houses));

function delItem(id) {
  Houses = Houses.filter((House) => {
    return House.id != id;
  });
  localStorage.setItem("Houses", JSON.stringify(Houses));
  showItems(Houses);
}

localStorage.setItem("Houses", JSON.stringify(Houses));

function addItem() {
  let House = {
    id: Houses.length + 1,
    title: document.querySelector("#title").value,
    category: document.querySelector("#category").value,
    description: document.querySelector("#description").value,
    imgURL: document.querySelector("#imgURL").value,
    address: document.querySelector("#address").value,
    rooms: document.querySelector("#rooms").value,
    bedrooms: document.querySelector("#bedrooms").value,
    bathrooms: document.querySelector("#bathrooms").value,
    garages: document.querySelector("#garages").value,
    area: document.querySelector("#area").value,
    price: document.querySelector("#price").value,
  };
  Houses.push(House);
  localStorage.setItem("Houses", JSON.stringify(Houses));
}

//  Edit Function
// function editItem(id) {
//   document.querySelector(`#title${id}`).disabled = false;
//   document.querySelector(`#address${id}`).disabled = false;
//   document.querySelector(`#bedrooms${id}`).disabled = false;
//   document.querySelector(`#bathrooms${id}`).disabled = false;
//   document.querySelector(`#garages${id}`).disabled = false;
//   document.querySelector(`#area${id}`).disabled = false;
//   document.querySelector(`#category${id}`).disabled = false;
//   document.querySelector(`#imgURL${id}`).disabled = false;
//   document.querySelector(`#price${id}`).disabled = false;
//   document.querySelector(`#rooms${id}`).disabled = false;
//   document.querySelector(`#description${id}`).disabled = false;
// }

// function updateItem(id) {
//   const Houses = Houses.find((Houses) => {
//     return Houses.id == id;
//   });
//   const titleBox = document.querySelector(`#title${id}`);
//   const descriptionBox = document.querySelector(`#description${id}`);
//   const addressBox = document.querySelector(`#address${id}`);
//   const bedroomsBox = document.querySelector(`#bedrooms${id}`);
//   const bathroomsBox = document.querySelector(`#bathrooms${id}`);
//   const garageBox = document.querySelector(`#garage${id}`);
//   const areaBox = document.querySelector(`#area${id}`);
//   const typeBox = document.querySelector(`#category${id}`);
//   const imgBox = document.querySelector(`#imgURL${id}`);
//   const priceBox = document.querySelector(`#price${id}`);
//   const roomsBox = document.querySelector(`#rooms${id}`);

//   document.querySelector(`#title${id}`).disabled = true;
//   document.querySelector(`#description${id}`).disabled = true;
//   document.querySelector(`#address${id}`).disabled = true;
//   document.querySelector(`#bedrooms${id}`).disabled = true;
//   document.querySelector(`#bathrooms${id}`).disabled = true;
//   document.querySelector(`#garages${id}`).disabled = true;
//   document.querySelector(`#area${id}`).disabled = true;
//   document.querySelector(`#category${id}`).disabled = true;
//   document.querySelector(`#imgURL${id}`).disabled = true;
//   document.querySelector(`#price${id}`).disabled = true;
//   document.querySelector(`#rooms${id}`).disabled = true;

//   Houses.title = titleBox.value;
//   Houses.description = descriptionBox.value;
//   Houses.address = addressBox.value;
//   Houses.bedrooms = bedroomsBox.value;
//   Houses.bathrooms = bathroomsBox.value;
//   Houses.garage = garagesBox.value;
//   Houses.area = areaBox.value;
//   Houses.category = category.value;
//   Houses.imgURL = imgURLBox.value;
//   Houses.price = priceBox.value;
//   Houses.rooms = rooms.value;
//   localStorage.setItem("Houses", JSON.stringify(Houses));
// }
// showItems(Houses);

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
