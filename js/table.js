// alert('table linked');
// USING GOOGLE SHEET AS A DATABASE:

//   var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSv3DEtfYC4z5urg09SyWrqYYKtMZmPEu0a_JDFEpzJMJXYb2xe2QsdRVp6RHsb0_TNgfyUB-bj-AYD/pubhtml';
  


//   function init() {
//     Tabletop.init( {
//       key: publicSpreadsheetUrl,
//       callback: showInfo,
//       simpleSheet: true 
//     } )
//   }


//   var navbarBrand = document.getElementsByClassName('restaurant-name');
  

 
      



  
//   function showInfo(data, tabletop) {
//     for (var i = 0; i < data.length; i++) {


//         if(name_of_restraurant) {
//             console.log(name_of_restraurant);
//         }
        
//         // if(navbarBrand) {
//         //     var el_span = document.createElement('span');
//         //     el_span.setAttribute('class', 'bold');
//         //     el_span.appendChild(document.createTextNode(currentName));
//         //      entry.appendChild(el_span);
//         // }
//     }
// }
// window.addEventListener('DOMContentLoaded', init)





// function init() {
//     Tabletop.init( {
//       key: 'https://docs.google.com/spreadsheets/d/1R4Habcdcw45YgtVzXub6fdmad4iqgTd9EvAWjfXcELA/edit?usp=sharing',
//       simpleSheet: true }
//     ).then(function(data, tabletop) { 
//       alert(data)
//     })
//   }
//   window.addEventListener('DOMContentLoaded', init)




{/* <script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
<script type='text/javascript'>     */}
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
{/* </script> */}
