var express = require('express');
var router = express.Router();

var data = [
  {
    "id": "01",
    "name": "CATEGORIES.SMARTPHONES.NAME",
    "description": "Some gems have hidden qualities beyond their luster, beyond their shine... is one of those gems.",
    "image": "images/product01.png",
    "questions": [
      {
        "id": "11",
        "question": "Which one of the below features are the most important for you?",
        "type": "SORT",
        "choices": [
          {
            "id": "111",
            "description": "A good camera!",
            "detail": "A good camera, I love taking pictures!"
          },
          {
            "id": "112",
            "description": "Good speakers!",
            "detail": "Good speakers, I listen to music all the time!"
          },
          {
            "id": "113",
            "description": "Good screen resolution!",
            "detail": "A good screen resolution, I love playing games and watching videos on the phone!"
          },
          {
            "id": "114",
            "description": "Large screen",
            "detail": "A large screen, I like to read on my phone"
          }
        ]
      },
      {
        "id": "12",
        "question": "How much you would like to spend?",
        "type": "SINGLE_CHOICE",
        "choices": [
          {
            "id": "121",
            "description": "Between $500 and $1,000",
            "detail": "Between $500 and $1,000"
          },
          {
            "id": "122",
            "description": "Between $1,000 and $1,500",
            "detail": "Between $1,000 and $1,500"
          },
          {
            "id": "123",
            "description": "Between $1,500 and $2,000",
            "detail": "Between $1,500 and $2,000"
          }
        ]
      },
      {
        "id": "13",
        "question": "Is there any functionality you cannot live without?",
        "type": "MULTIPLE_CHOICE",
        "choices": [
          {
            "id": "131",
            "description": "Bluetooth",
            "detail": "It is used to connect with other devices. Most used for sharing files (like pictures, videos, music, etc..) or to control other devices like headphones, speakers, etc..."
          },
          {
            "id": "132",
            "description": "Dual chip",
            "detail": "Mostly used by people who are customers of more than one phone provider."
          },
          {
            "id": "133",
            "description": "Water resistance",
            "detail": "Particularly useful for people who are constantly by the water. Be it for work or leisure."
          }
        ]
      }
    ]
  },
  {
    "id": "02",
    "name": "CATEGORIES.LAPTOPS.NAME",
    "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    "image": "images/product02.png",
    "questions": [
      {
        "question": "Which one of the below features are the most important for you?",
        "type": "SORT",
        "choices": [
          {
            "id": "211",
            "description": "Good memory!",
            "detail": "Good memory, I use the laptop with applications that demand a lot of memory usage!"
          },
          {
            "id": "212",
            "description": "Good processing power!",
            "detail": "Good processing power, I use the laptop with applications like image renderer, video editors, etc...!"
          },
          {
            "id": "213",
            "description": "Plenty of disk space!",
            "detail": "Plenty of disk space, I store a lot of files like videos, images, music on my laptop... I need space!"
          },
          {
            "id": "214",
            "description": "A good graphic board!",
            "detail": "A good graphic board, I want to be able to play games on my new laptop!"
          }
        ]
      }
    ]
  },
  {
    "id": "3",
    "name": "CATEGORIES.TELEVISIONS.NAME",
    "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    "image": "images/product03.png",
    "questions": [
      {
        "id": "3",
        "question": "Which one of the below features are the most important for you?",
        "type": "SORT",
        "choices": [
          {
            "id": "311",
            "description": "A large screen!",
            "detail": "A large screen, I have a big living room and I want to have my own cinema at home!"
          }, {
            "id": "312",
            "description": "Good resolution!",
            "detail": "Good resolution, I want to see the minimal details of the movies I watch!"
          }, {
            "id": "313",
            "description": "A great surround system!",
            "detail": "A great surround system, I want to feel like the sound of the movies are coming from all directions!"
          }
        ]
      }
    ]
  }
];


/* GET categories listing. */
router.get('/', function (req, res, next) {
  res.send(data);
});

/* GET one category by id. */
router.get('/:id', function (req, res, next) {
  var category = {};
  var id = req.params.id;

  var list = data.filter(function (element) {
    return element.id == id;
  });

  if (list.length !== 0) {
    category = list[0];
  }

  res.send(category);
});


module.exports = router;
