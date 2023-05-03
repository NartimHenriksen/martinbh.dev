
// Sidebar Menu
function toggleNav() {
  var sidenav = document.getElementById("sidenav");
  if (sidenav.style.width === "250px") {
    closeNav();
  } else {
    openNav();
  }
}


function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}


function copy(text) {
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard");
}



// if (jQuery) {
//     console.log("jquery is loaded");
// } else {
//     console.log("Not loaded");
// }

// document.addEventListener('readystatechange', function(event) {
//     console.log(event.target.readyState); // check for more states
//     if (event.target.readyState === "complete") {
//         alert("Everything loaded now including images, scripts and styles.");
//     }
// });


