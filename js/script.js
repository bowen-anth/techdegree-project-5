lightbox.option({
  'wrapAround': true
});

document.getElementById("photo-search").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById("photo-search");
  x.value = x.value.toLowerCase();
}

console.log();
