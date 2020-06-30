lightbox.option({
  'wrapAround': true
});

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
const list = document.querySelector('div');
const searchField = document.querySelector('#photo-search');
searchField.addEventListener('keyup', function(eventObject){
  const term = eventObject.target.value.toLowerCase();
  const images = list.getElementsByTagName('a');
  Array.from(images).forEach(function(image){
    const title = image.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
      }
  });
});

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
