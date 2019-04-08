//NAV HAMBURGER
function toggleMenu(){
    
    document.getElementById("toggle").classList.toggle("hide");

}

function toggleMenu1(){
    
  document.getElementById("toggle1").classList.toggle("hide");

}

//WAYFINDING

var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length-1];

if (pageHREF !==""){
    var menu = document.querySelectorAll('ul.mainmenu li a');
    var i;

    for (i=0; i<menu.length; i++){
        var currentURL=(menu[i].getAttribute("href"));
        menu[i].parentNode.classsName="";
        if (currentURL===pageHREF){
            menu[i].parentNode.className="active";
        }
    }
}

//SLIDESHOW

var index = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {index = 1}    
  x[index-1].style.display = "block";  
  setTimeout(carousel, 3000); // thousands means the seconds it takes to change image
}

//CURENT DATE

var date = new Date();

// create an array with weekday and monthly values to be compared to the numbers from functions and return value (printing the text directly in the weather page)

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("todaysdate").innerHTML = weekday[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();