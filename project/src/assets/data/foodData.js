const foodData = [
  {
    "id": 1,
    "title": "Grilled Sandwich",
    "price": 109.95,
    "description": "A tasty blend of spiced potatoes, fresh vegetables, and tangy chutneys, toasted to perfection",
    "category": "sandwitch",
    "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/grilled-sandwich-4.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Veggie Burger",
    "price": 22.3,
    "description": "Enjoy our Classic Veggie Burger, made with fresh vegetables and spices, grilled to perfection and topped with crisp lettuce, tomatoes, and signature sauce for a tasty, plant-based treat.",
    "category": "burger",
    "image": "https://i.pinimg.com/originals/97/da/26/97da268ca85129275b94af124e9862ed.png",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Beef Burger",
    "price": 55.99,
    "description": "Enjoy the hearty taste of our Classic Beef Burger, made with a perfectly grilled beef patty, fresh ingredients, and a signature sauce for a satisfying meal.",
    "category": "burger",
    "image": "https://www.eatingwell.com/thmb/UY5N-tQKYgA91XJBwiolc_1nbJ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3757723-7c4020ccc47240138323b9bc5b730e8d.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Chicken Burger",
    "price": 15.99,
    "description": "Savor the rich flavors of our Signature Chicken Burger, featuring a juicy, seasoned chicken patty, fresh toppings, and a special sauce for an irresistible taste experience.",
    "category": "burger",
    "image": "https://assets.unileversolutions.com/recipes-v2/243652.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "Tandoori Chicken",
    "price": 695,
    "description": "Tandoori chicken is a dish made from chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven",
    "category": "chicken",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmMJXi2fsWuz6Bfxa649aK5JpnV8PEk7jhA&s",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": " Seekh Kebabs ",
    "price": 168,
    "description": "Kebab, kabob, kebap, kebob, or kabab is a variety of roasted meat dishes that originated in the Middle East.",
    "category": "chicken",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8E15Gqu2eQ05ldEPQNElFQzFiOzuTwO0fw&s",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "Grild Fish",
    "price": 9.99,
    "description": "Grilled fish recipe with step wise pictures. Grilled fish recipe has a basic lemon pepper marinate and it taste simple delicious",
    "category": "fish",
    "image": "https://media.istockphoto.com/id/855749956/photo/roasted-sea-bream-fish-with-lemon-slices.jpg?s=612x612&w=0&k=20&c=nQhzbjXPnpBDexnk3oK-lU_twHhdTC5R2MixllKbHXE=",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "BBQ Platter",
    "price": 10.99,
    "description": "BBQ Platter | Mutton Tikka Boti | Beef Seekh Kabab | Chicken Tikka Boti | SooperChef",
    "category": "bbq",
    "image": "https://i.ytimg.com/vi/OuN08lBrLN8/maxresdefault.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "Chicken Karahi",
    "price": 64,
    "description": "f you want to make the BEST Chicken Karahi, the way they make it in Peshawar, you have to try this",
    "category": "chicken",
    "image": "https://fatimacooks.net/wp-content/uploads/2020/02/Chicken-Karahi.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "Beef Handi",
    "price": 109,
    "description": "Beef handi is a simple and easy but incredibly delicious chicken curry made with boneless beef and a few common ingredients.",
    "category": "beef",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSkK7EBrLQ4aGK5TqF4obG2h_fn7Oo9qSeg&s",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Beef Nihari",
    "price": 109,
    "description": "It is mainly cooked with beef shank but can be made with mutton or chicken",
    "category": "beef",
    "image": "https://untoldrecipesbynosheen.com/wp-content/uploads/2020/09/Nihari-new-hero-scaled.jpeg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": " Daal Mash",
    "price": 114,
    "description": "Maash ki daal or white urad dal has a slightly thick texture unlike other lentils. It has a nutty",
    "category": "daal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLyEXAOdLglkcLENU9VLKxAJ6Vy7oBI1abg&s",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Chicken Sajji",
    "price": 599,
    "description": "A traditional Balochi Chicken Sajji is made in an open fire",
    "category": "chicken",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKqzIPci6HSlN35XwqcG3Md7WG-RRFLvfmQ&s",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Beef Paya",
    "price": 999.99,
    "description": "Beef paya is a traditional South Asian dish of cow trotters (hooves) cooked with spices.",
    "category": "beef",
    "image": "https://i.ytimg.com/vi/QAiJ_1Ypt40/maxresdefault.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "Supreme Pizza ",
    "price": 56.99,
    "description": "Delight in the Veggie Supreme Pizza, packed with fresh vegetables, melted cheese, and a flavorful sauce on a crispy crust for the perfect bite.",
    "category": "pizza",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsO8_BXeu1PTx2mLrb7OPazuxz4hJp273FQ&s",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "Chicken Fajita Pizza",
    "price": 29.95,
    "description": "Savor the Chicken Fajita Pizza, topped with spiced chicken, bell peppers, onions, and a rich blend of cheese, delivering a fiesta of flavors in every slice.",
    "category": "pizza",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZaFZAX9NBAwazed5aL-x0O_v1SSZKVgFRw&s",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Cheese Pizza",
    "price": 39.99,
    "description": "Sometimes all you want at the end of the day is a simple cheese pizza.",
    "category": "pizza",
    "image": "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "Homemade Pizza",
    "price": 9.85,
    "description": "Savor the Chicken Fajita Pizza, topped with spiced chicken, bell peppers, onions, and a rich blend of cheese, delivering a fiesta of flavors in every slice.m",
    "category": "pizza",
    "image": "https://www.shutterstock.com/image-photo/slice-hot-italian-pizza-stretching-600nw-2246561873.jpg",
    "rating": {
      "rate": 4.7,
      "count": 130
    }
  },
  {
    "id": 19,
    "title": "Pepperoni Pizza",
    "price": 7.95,
    "description": "This Pepperoni Pizza is melty, meaty, and downright delicious with a garlic herb crust",
    "category": "pizza",
    "image": "https://img.freepik.com/premium-photo/colorful-homemade-pizza-with-black-ham-cherry-tomatoes_1126714-13363.jpg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 20,
    "title": "Supreme Pizza",
    "price": 12.99,
    "description": "This supreme pizza recipe is easy to make at home, and you probably have a few of the ingredients",
    "category": "pizza",
    "image": "https://www.southernliving.com/thmb/neXdkcBhnuLrIuF30-ZJ8GYVr-E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Supreme_Pizza_006-3b04db62117d404e9c37b126d7a7f0a2.jpg",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  }
]
export default foodData;

