// jshint esversion: 6

//lightbox jquery plugin

lightbox.option({
  'wrapAround': true
});

//my js code from here to line 34

const search = document.getElementById("photo-search").addEventListener("keyup", myFunction);
function myFunction() {

const captionArray = [];

  // Get all links in the document
  let captions = document.body.getElementsByTagName("a");
  // Get all the captions in the document
  let captionCount = document.querySelectorAll("a[data-title]");
  for (i=0; i < captionCount.length; i++) {
  // Get each caption, make it lowercase, and log it to console
  let allCaptions = captions[i].getAttribute("data-title");
  let totalCaptions = allCaptions.toLowerCase();
  //add each caption to captionArray
  captionArray.push(totalCaptions);
  console.log(captionArray);
  //search term is x
  let x = document.getElementById("photo-search");
  x = x.value.toLowerCase();
  //show the image(s) if any of the search term is in the caption
  if (totalCaptions.indexOf(x) > -1) {
    captionCount[i].style.display = "block";
  } else {
    captionCount[i].style.display = "none";
  }
  }
}

// ignore everything below here
// it is all my experimenting

  /*
  let y = (captionArray.filter(element => element.includes(x)));
  console.log(y);
  if (totalCaptions.indexOf(x) > -1) {
    allCaptions[i].style.display = "block";
  } else {
    allCaption[i].style.display = "none";
  }
  }
}
/*
// Get search value, set as x, set lowercase, and log to console
  let x = document.getElementById("photo-search");
  x = x.value.toLowerCase();
  let y = (captionArray.filter(element => element.includes(x)));
  console.log(y);
  function display(){
  const images = document.getElementsbyTagName("img") = "none";
}
}*/

/*
const images = list.getElementsByTagName('a');
Array.from(images).forEach(function(image){
  const title = image.getAttribute('data-title');
  if(title.toLowerCase().indexOf(x) != -1){
    image.style.display = 'block';
  } else {
    image.style.display = 'none';
    }
});
};
*/

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
