// jshint esversion: 6

lightbox.option({
  'wrapAround': true
});

/*const search = document.getElementById("photo-search").addEventListener("keyup", myFunction);
//const caption = document.querySelectorAll
function myFunction() {
  let x = document.getElementById("photo-search");
  x = x.value.toLowerCase();
}*/

// Get all links in the document
let captions = document.body.getElementsByTagName("a");
// Get all the captions in the document
let counter = 0
while ( counter < 12 ) {
let totalCaptions = captions[counter].getAttribute("data-title");
totalCaptions = totalCaptions.toLowerCase();
console.log(totalCaptions);
counter ++;
}
// Get the data-title attribute of the first one
//var caption0 = captions[0].getAttribute("data-title");
// Get the src attribute of the second simply by reading the property
//var caption1 = captions[1].getAttribute("data-title");
//console.log(caption1);

/*function myFunction2() {
  var y = document.querySelectorAll("data-title")[0].getAttribute("class");
  console.log(y);
}*/

//let caption = document.getElementsByName("data-title");
//console.log(caption);
//for (let i = 0; i < ; i ++)


//function myFunction2() {
//  var y = document.getAttribute("data-title");
//  document.getAttribute("data-title");
//  console.log(y);
//}


//function myFunction2() {
//  let y = getAttribute.getElementsByName('data-set')[0];
//  console.log(y);
//}
//  const title = getAttribute('data-title');
//  for (let i=0; i < title.length; i++); {
//    console.log(title);
//    while (arr1.indexOf(arr2[i])) > -1) {
//      arr1.splice(arr1.indexOf(arr2[i]), 1);
//}

//working one
/* const list = document.querySelector('div');
const searchField = document.querySelector('#photo-search');
searchField.addEventListener('keyup', function(eventObject){
  const term = eventObject.target.value.toLowerCase();
  const images = list.getElementsByTagName('a');
  Array.from(images).forEach(function(image){
    const title = image.getAttribute('data-title');
    if(title.toLowerCase().indexOf(term) != -1){
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
      }
  });
}); */

/* function mySearchFunction() {
  var input, filter, a, item, i, txtValue;
  input = document.getElementById("photo-search");
  filter = input.value.toLowerCase();
  mainDiv = document.getElementByClassName("main-div");
  a = mainDiv.getElementsByTagName("a");  for (i = 0; i < li.length; i++) {
    item = a[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
*/

/* const search = document.querySelector('#photo-search');
const boxTexts = document.querySelectorAll('.main-div a');

const handleSearch = event => {
  const searchTerm = event.target.value.toLowerCase();

  boxTexts.forEach(boxText => {
    const text = boxText.textContent.toLowerCase();
    const box = boxText.parentElement;

    if(text.indexOf(searchTerm) > -1) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });

};

search.addEventListener('keyup', handleSearch);
*/


// search

/* document.getElementById("photo-search").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById("photo-search");
  x.value = x.value.toUpperCase();
} */


/* $(document).ready(function() {
  let images = document.getElementsByTagName('a');
  console.log(images);
//  x.value = x.value.toLowerCase();
}); */



/* $("#photo-search").keyup(function() {
    let search = $.trim(this.value);
    if (search === "")
        $('img').show();
    else {
        $('img').hide();
        search = search.split(" ").join("\\ ");
        $("img[alt*=" + search + " i]").show();
    }
}); */
