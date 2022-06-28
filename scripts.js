
const Houses = [
  {
    title: " Large Detached House",
    description:
      "2 bedroom detached house with 1.5 bathrooms and a garage on a beautiful property",
    address: "rrowtown, New Zealand",
    imgURL:
      "https://i.postimg.cc/SKLvNYTt/zac-gudakov-FH3zl-Ds-Y4-Z4-unsplash.jpg",
    rooms: "4",
    bedrooms: "2",
    bathrooms: "1.5",
    garages: "1",
    area: "1209 sq ft",
    price: "R5.0 m",
  },
  {
    title: "Top-Floor Penthouse",
    description:
      "recently renovated top-floor penthouse equipped with vaulted ceilings, integrated appliaces and underground assigned parking",
    address: "Atabey, Yeni, 32670 Atabey/Isparta, Turkey",
    imgURL:
      "https://i.postimg.cc/T1zfrWVv/roberto-nickson-emqn-SQw-QQDo-unsplash.jpg",
    rooms: "9",
    bedrooms: "5",
    bathrooms: "3",
    garages: "2 double-door",
    area: "800 sq ft",
    price: "R15.7m",
  },
  {
    title: " Mansion",
    description:
      "6 bedroom modern mansion equipped with everything you could ever need.",
    imgURL:
      "https://i.postimg.cc/gkw8KFWY/r-architecture-2g-Dwl-Iim3-Uw-unsplash.jpg",
    address: "Ratogesa, Golewa, Ngada Regency, East Nusa Tenggara, Indonesia",
    rooms: "16",
    bedrooms: "5",
    bathrooms: "5.5",
    garages: "4",
    area: "1200 sq ft",
    price: "35.4m",
  },
  {
    title: "Renovated Loft Apartment",
    description:
      "1 bedroom modern loft apartment equipped with integrated appliances.",
    imgURL: "https://i.postimg.cc/Zq0xXBkd/pexels-sharath-g-2251247.jpg",
    address: "Paligawan, Balete, Batangas, Philippines",
    rooms: "4",
    bedrooms: "1",
    bathrooms: "1",
    garages: "underground parking",
    area: "800 sq ft",
    price: "1.2m",
  },
  {
    title: "detached mansion",
    description: "2 bedroom apartment",
    imgURL: "https://i.postimg.cc/5NcKvmhk/pexels-pixabay-276724.jpg",
    address: "Cửa Nam, Thành phố Vinh, Nghe An, Vietnam",
    rooms: "4",
    bedrooms: "2",
    bathrooms: "2.5",
    garages: "1",
    area: "2000 sq ft",
    price: "2.3m",
  },
  {
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
    price: "1.1m",
  },
  {
    title: "Glamorous 3 bedroom apartment",
    description: "Europen-royalty style simple 3 bedroom top-floor apartment",
    imgURL:
      "https://i.postimg.cc/Gmsswk7G/mark-champs-Id2-IIl1j-OB0-unsplash.jpg ",
    address:
      "2 Main Bazzar, Mohalla Ferozpura, Harīpur, Haripur, Khyber Pakhtunkhwa, Pakistan",
    rooms: "7",
    bedrooms: "3",
    bathrooms: "4",
    garages: "underground parking",
    area: "1200 sq ft",
    price: "7.6m",
  },
  {
    title: "1 bedroom open-plan loft-style apartment",
    description:
      "1 bedroom open-plan loft-style apartment with loads of sunlight",
    imgURL:
      "https://i.postimg.cc/8zX0FVNL/davide-colonna-DZr-Zh-Vd-w-R0-unsplash.jpg",
    address: "Agios Spyridonas 601 00, Greece",
    rooms: "4",
    bedrooms: "1",
    bathrooms: "1",
    garages: "1 underground parking",
    area: "700 sq ft",
    price: "3.4m",
  },
  {
    title: "Glamorous 1 bedroom New York inspired loft",
    description: "New York style simple 1 bedroom second-floor loft",
    imgURL:
      "https://i.postimg.cc/63qjtjDY/aaron-huber-s95o-B2n9jng-unsplash.jpg",
    address: "Lam Thap, Lam Thap District, Krabi 81120, Thailand",
    rooms: "5",
    bedrooms: "1",
    bathrooms: "2",
    garages: "underground parking",
    area: "900 sq ft",
    price: "17.6m",
  },
  {
    title: "New Build House",
    description:
      "newly-built house with excellent light-fixures and huge open-plan living/kitchen area with backyard",
    imgURL:
      "https://i.postimg.cc/Z5K46Z3R/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg",
    address: "Andkhoy, Afghanistan",
    rooms: "7",
    bedrooms: "3",
    bathrooms: "2",
    garages: "1 2-door garage",
    area: "1300 sq ft",
    price: "10.6m",
  },
  {
    title: "Victorian-style mansion on lake",
    description:
      "This newly-renovated mansion situated on this gorgeous lake is a one of a kind",
    imgURL:
      "https://i.postimg.cc/cC0JvzSG/evelyn-paris-XJn-P4-L958ds-unsplash.jpg",
    address: "27 Nelson St, Knysna Central, Knysna, 6571",
    rooms: "9",
    bedrooms: "4",
    bathrooms: "5",
    garages: "non-covered parking",
    area: "3000 sq ft",
    price: "23.6m",
  },
  {
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
    price: "14.6m",
  },
];

console.log(Houses);

function showItems(Houses) {
  document.querySelector("#houses").innerHTML = "";
  Houses.forEach((House, i) => {
    document.querySelector("#houses").innerHTML += `
    <div class="card mb-3" id="card-2">
    <img id="img" src=${House.imgURL} /></div>
    `;
  });
}
showItems(Houses);

const nameSort = (e) => {
  const direction = e.target.value;
  const sorted = items.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  if (direction === "asc") {
    showHouses(sorted);
  } else {
    showHouses(sorted.reverse());
  }
};

