var products = [
  {
    image_url: "https://www.fitmeals.co.in/wp-content/uploads/2021/06/25.jpg",
    name: "Almond Date Chocolate",
    details:
      "Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the ...",
    price: 1200.0,
  },

  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/23-360x360.jpg",
    name: "Coco Rush",
    details:
      "Coco Rush is made with dates, nuts, premium grade cacao and wholesome ingredients. A delicious, healthy ...",
    price: 550.0,
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/veganhomemadeenergybarsh-360x360.jpg",
    name: "Energy Bars",
    details:
      "Each bar brings a great texture with the energy and nutrients you need.  We keep things sweet by using only ...",
    price: 750.0,
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/24-360x361.jpg",
    name: "Flax Seed Balls",
    details:
      "A crunchy, chocolaty dessert for hunger pangs, Flax Seeds will provide you instant energy. About This Product ...",
    price: 550.0,
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/snack-nuttyBuddy-300x300-1.jpg",
    name: "Nutty Buddy",
    details:
      "Nutty Buddy – These Nutrient-packed nutty treats make for the perfect guilt-free snack … and ...",
    price: 650.0,
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/peanut-butter-balls-2-275x275.jpg",
    name: "Peanut Butter Truffles",
    details:
      "Creamy peanut butter completely coated in dark chocolate — The ultimate snack for those who love all things ...",
    price: 1050.0,
  },
];

localStorage.setItem("products", JSON.stringify(products));

// Lowcal data

var images = [
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/arrabbiata-sauce-680x900-1-360x359.jpg",
    name: "Arrabiata Sauce",
    details:
      "Fitmeals Arrabbiata sauce is a delicious blend of spicy chillies, tomatoes and authentic Italian ingredients. ...",
    price: 220.0,
  },

  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/12-360x359.jpg",

    name: "BBQ Sauce",
    details:
      "Our signature BBQ sauce has bold, smoky flavour with a hint of sweetness About This Product Bbq sauce has a ...",
    price: 250.0,
  },

  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/14--360x360.jpg",

    name: "Garlic Mayo",
    details:
      "The perfect blend of irresistible earthy tones of garlic into freshly prepared mayonnaise creates a ...",
    price: 180.0,
  },

  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/DSC_0007-360x359.jpg",

    name: "Green Pesto Sauce",
    details:
      "Our Basil Pesto is an excellent versatile spread that is ready to use. Its combination of ingredients offers ...",
    price: 320.0,
  },

  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/05/Homemade-Ketchup-3-BoulderLocavore.com_-1-360x360.jpg",

    name: "Homemade Ketchup",
    details:
      "The rich creamy texture of this organic vegan tomato ketchup along with a delicious blend of spices provides ...",
    price: 260.0,
  },

  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/05/11-360x360.jpg",

    name: "Honey Mustard Sauce",
    details:
      "DELICIOUS and CLASSIC blend of fresh creamy mustard! IMAGINE having this versatile sauce in your pantry. ...",
    price: 220.0,
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/05/12-360x361.jpg",

    name: "Mexican Sauce",
    details:
      "This spicy flavor packed blend serves as the perfect accompaniment with your food",
    price: 320.0,
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/pesto-rosso-4-680x952-1-360x360.jpg",

    name: "Red Pesto",
    details:
      "Amazing flavor our Sun-Dried Tomato Pesto adds to any Appetizer, Soup, Salad or Entree About This Product : ...",
    price: 350.0,
  },
];

localStorage.setItem("images", JSON.stringify(images));
