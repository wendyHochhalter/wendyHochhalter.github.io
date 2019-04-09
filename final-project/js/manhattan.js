//CURENT DATE

var date = new Date();

// create an array with weekday and monthly values to be compared to the numbers from functions and return value (printing the text directly in the weather page)

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("todaysdate").innerHTML = weekday[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

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

//TEMPLE INFO JSON

var temples, templesindex;
var article = document.querySelector('article');
var requestURL = "https://raw.githubusercontent.com/wendyHochhalter/wendyHochhalter.github.io/master/final-project/json/temple_info.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var templedata = request.response;
    showTempleInfo(templedata);

}

function showTempleInfo(jsonObj){

    temples = jsonObj["temples"];

    for (templesindex = 0; templesindex < temples.length; templesindex++){

        if (temples[templesindex].name == "Manhattan, NY")
        populateTempleInfo(temples[templesindex]);


    }

}

function populateTempleInfo(jsonObj){

    var temple = jsonObj;

    var templeArticle = document.createElement("article");
    var infoH2 = document.createElement("h2");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    var para4 = document.createElement("p");
    var para5 = document.createElement("p");
    var para6 = document.createElement("p");
    var para7 = document.createElement("p");
    var para8 = document.createElement("p");
 

    infoH2.textContent = temple.information;
    para1.textContent = "Address: " + temple.address;
    para2.textContent = "Telephone: " + temple.telephone;
    para3.textContent = "Email: " + temple.email;
    para4.textContent = "Services: " + temple.services;
    para5.textContent = "History: " + temple.history;
    para6.textContent = "Ordinance Schedule: " + temple.ordinanceSchedule;
    para7.textContent = "Endowment Sessions: " + temple.endowmentSchedule;
    para8.textContent = "Closure Dates: " + temple.templeClosure;


    templeArticle.appendChild(infoH2);
    templeArticle.appendChild(para1);
    templeArticle.appendChild(para2);
    templeArticle.appendChild(para3);
    templeArticle.appendChild(para4);
    templeArticle.appendChild(para5);
    templeArticle.appendChild(para6);
    templeArticle.appendChild(para7);
    templeArticle.appendChild(para8);
    templeArticle.className = "templeinfo";

    article.appendChild(templeArticle);


}

//WEATHER SUMMARY
let weatherRequest = new XMLHttpRequest();

let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=4274994&units=imperial&APPID=5a2cf03763628f501603892cdc61ae1d"
weatherRequest.open("get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function(){

    let weatherSummary = JSON.parse(weatherRequest.responseText);

    console.log(weatherSummary);

    document.getElementById("summary1").innerHTML = weatherSummary.weather[0].description;
    document.getElementById("summary2").innerHTML = weatherSummary.main.temp;
    document.getElementById("summary4").innerHTML = weatherSummary.main.humidity;
    document.getElementById("summary5").innerHTML = weatherSummary.wind.speed;

// WINDCHILL

var temp = parseInt(document.getElementById('summary2').innerHTML);
var speed = parseInt(document.getElementById('summary5').innerHTML);

var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

windChill = Math.round(windChill);
document.getElementById("summary3").innerHTML = windChill;

// WIND DIRECTION

/*Define variables*/

let d = [weatherSummary.wind.deg];
let dir = "";

/*Convert degrees to direction*/

if ((d >= 337 && d <= 360) || (d >=0 && d <= 22)) {
dir ="north";
}

else if (d >= 23 && d <= 67) {
dir ="northeast";
}

else if (d >= 68 && d <= 112) {
dir ="east";
}

else if (d >= 113 && d <= 157) {
dir ="southeast";
}

else if (d >= 158 && d <= 202) {
dir ="south";
}

else if (d >= 203 && d <= 246) {
dir ="southwest";
}

else if (d >= 247 && d <= 290) {
dir ="west";
}

else dir = "northwest"

/*Define span id of 'direction' and get element from variable 'dir'*/

document.getElementById("summary6").textContent=dir;

}