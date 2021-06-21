
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1R4Habcdcw45YgtVzXub6fdmad4iqgTd9EvAWjfXcELA/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {

    for (var i = 0; i < data.length; i++) {

     var nameOfRestaurant = data[i].name_of_restaurant;

    if(nameOfRestaurant){
        var navbarBrand = document.getElementById('restaurant-name-1');
        var nameOfRestaurant2 = document.getElementById('restraurant-name-2');
        var nameOfRestaurant3 = document.getElementById('restraurant-name-3');
        var nameOfRestaurant4 = document.getElementById('restraurant-name-4');
        var nameOfRestaurant5 = document.getElementById('name-of-restaurant-5');


        navbarBrand.innerHTML = nameOfRestaurant;
        nameOfRestaurant2.innerHTML = nameOfRestaurant;
        nameOfRestaurant3.innerHTML = nameOfRestaurant;
        nameOfRestaurant4.innerHTML = nameOfRestaurant;
        nameOfRestaurant5.innerHTML = nameOfRestaurant;
       
      }

    }
    console.log(data);
  }

  window.addEventListener('DOMContentLoaded', init)
