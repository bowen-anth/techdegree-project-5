lightbox.option({
  'wrapAround': true
});

const list = document.querySelector('div');
const searchField = document.querySelector('#photo-search');
searchField.addEventListener('keyup', function(eventObject){
  const term = eventObject.target.value.toLowerCase();
  const images = list.getElementsByTagName('a');
  Array.from(images).forEach(function(image){
    //I think the title const is messing it up?
    const title = image.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
      }
  });
});

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
