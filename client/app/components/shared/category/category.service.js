/**
 * @ngdoc
 * @name app.components.shared.category.service
 * @description "Service responsible for providing the category data coming from the server"
 */
'use strict';

angular.module('app.components.shared.category.service', [])

  .service('CategoryService', CategoryService);


function CategoryService() {
  this.data = [
    {
      "id": "01",
      "name": "CATEGORIES.SMARTPHONES.NAME",
      "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      "image": "images/product01.png",
      "questions": [
        {
          "question": "Which one of the below features are the most important for you?",
          "type": "SORT",
          "choices": [
            {
              "id": "11",
              "description": "A good camera, I love taking pictures!"
            },
            {
              "id": "12",
              "description": "Good speakers, I listen to music all the time!"
            },
            {
              "id": "13",
              "description": "A good screen resolution, I love playing games and watching videos on the phone!"
            },
            {
              "id": "14",
              "description": "A large screen, I like to read on my phone"
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
              "id": "21",
              "description": "Good memory, I use the laptop with applications that demand a lot of memory usage!"
            },
            {
              "id": "22",
              "description": "Good processing power, I use the laptop with applications like image renderer, video editors, etc...!"
            },
            {
              "id": "23",
              "description": "Plenty of disk space, I store a lot of files like videos, images, music on my laptop... I need space!"
            },
            {
              "id": "24",
              "description": "A good graphic board, I want to be able to play games on my new laptop!"
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
          "question": "Which one of the below features are the most important for you?",
          "type": "SORT",
          "choices": [
            {
              "id": "31",
              "description": "A large screen, I have a big living room and I want to have my own cinema at home!"
            }, {
              "id": "32",
              "description": "Good resolution, I want to see the minimal details of the movies I watch!",
            }, {
              "id": "33",
              "description": "A great surround system, I want to feel like the sound of the movies are coming from all directions!"
            }
          ]
        }
      ]
    }
  ];

  this.getData = function () {
    return this.data;
  };

  this.setData = function (data) {
    this.data = data;
  };


  /*
   *returns the entire list of items
   */
  this.query = function () {
    return this.getData();
  };


  /*
   * Returns only 1 element that matches the ID requested
   * */
  this.get = function (id) {
    // find the item that matches that id
    var list = $.grep(this.getData(), function (element, index) {
      return (element.id == id);
    });
    if (list.length === 0) {
      return {};
    }
    // even if list contains multiple items, just return first one
    return list[0];
  };


  // options parameter is an object with key value pairs
  // in this simple implementation, value is limited to a single value (no arrays)
  this.findMany = function (options) {
    // find games that match all of the options
    var list = $.grep(this.getData(), function (element, index) {
      var matchAll = true;
      $.each(options, function (optionKey, optionValue) {
        if (element[optionKey] != optionValue) {
          matchAll = false;
          return false;
        }
      });
      return matchAll;
    });
  };

  // add a new data item that does not exist already
  // must compute a new unique id and backfill in
  this.addOne = function (dataItem) {
    // must calculate a unique ID to add the new data
    var newId = this.newId();
    dataItem.gameid = newId;
    this.data.push(dataItem);
    return dataItem;
  };

  // return an id to insert a new data item at
  this.newId = function () {
    // find all current ids
    var currentIds = $.map(this.getData(), function (dataItem) {
      return dataItem.gameid;
    });
    // since id is numeric, and we will treat like an autoincrement field, find max
    var maxId = Math.max.apply(Math, currentIds);
    // increment by one
    return maxId + 1;
  };

  this.updateOne = function (gameid, dataItem) {
    // find the game that matches that id
    var games = this.getData();
    var match = null;
    for (var i = 0; i < games.length; i++) {
      if (games[i].gameid == gameid) {
        match = games[i];
        break;
      }
    }
    if (!angular.isObject(match)) {
      return {};
    }
    angular.extend(match, dataItem);
    return match;
  };

  this.deleteOne = function (gameid) {
    // find the game that matches that id
    var games = this.getData();
    var match = false;
    for (var i = 0; i < games.length; i++) {
      if (games[i].gameid == gameid) {
        match = true;
        games.splice(i, 1);
        break;
      }
    }
    return match;
  };
}