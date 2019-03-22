//FISH HAVEN JAVASCRIPT

//CURRENT DATE
var date = new Date();

// create an array with weekday and monthly values to be compared to the numbers from functions and return value (printing the text directly in the weather page)

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("todaysdate").innerHTML = weekday[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

//NAV HAMBURGUER

function toggleMenu(){
    
    document.getElementById("toggle").classList.toggle("hide");
}

//WEATHER SUMMARY
let weatherRequest = new XMLHttpRequest();

let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=5a2cf03763628f501603892cdc61ae1d"
weatherRequest.open("get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function(){

    let weatherSummary = JSON.parse(weatherRequest.responseText);

    console.log(weatherSummary);

    document.getElementById("summary1").innerHTML = weatherSummary.weather[0].description;
    document.getElementById("summary2").innerHTML = weatherSummary.main.temp;
    document.getElementById("summary4").innerHTML = weatherSummary.main.humidity;
    document.getElementById("summary5").innerHTML = weatherSummary.wind.speed;


}

// WINDCHILL

var temp = parseInt(document.getElementById('summary2').innerHTML);
var speed = parseInt(document.getElementById('summary5').innerHTML);

var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

windChill = Math.round(windChill);
document.getElementById("summary3").innerHTML = windChill;


//FORECAST

var weatherCall = new XMLHttpRequest();

var apiURLstr = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=5a2cf03763628f501603892cdc61ae1d"
weatherCall.open("get", apiURLstr, true);
weatherCall.send();

weatherCall.onload = function(){

    var weatherForecast = JSON.parse(weatherCall.responseText);

    console.log(weatherForecast); 

    var foreDate = [];
    var foreIcon = [];
    var foreTemp = [];
    var description = [];
    //For loop to find the time of the day

for(i = 0; i < weatherForecast.list.length; i++){

    var time = weatherForecast.list[i].dt_txt;
    
    if(time.includes("18:00:00")){

        var date = new Date(weatherForecast.list[i].dt * 1000);
        var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var makeDate = weekday[date.getDay()] + ". " + month[date.getMonth()]+ " " + date.getDate();
        foreDate.push(makeDate);

        var icon = "http://openweathermap.org/img/w/"+ weatherForecast.list[i].weather["0"].icon +".png";
        foreIcon.push(icon);

        var desc = weatherForecast.list[i].weather[0].description;
        description.push(desc);

        var temp = weatherForecast.list[i].main.temp_max;
        var temp = Math.round(temp);
        foreTemp.push(temp);
    }

    continue;

}

//Forecast Days

document.getElementById("days1").innerHTML = foreDate[0];
document.getElementById("days2").innerHTML = foreDate[1];
document.getElementById("days3").innerHTML = foreDate[2];
document.getElementById("days4").innerHTML = foreDate[3];
document.getElementById("days5").innerHTML = foreDate[4];

//Showing icons and alts on forecast

document.getElementById("fimg1").setAttribute("src", foreIcon[0]);
document.getElementById("fimg1").setAttribute("alt", desc);

document.getElementById("fimg2").setAttribute("src", foreIcon[1]);
document.getElementById("fimg2").setAttribute("alt", desc);

document.getElementById("fimg3").setAttribute("src", foreIcon[2]);
document.getElementById("fimg3").setAttribute("alt", desc);

document.getElementById("fimg4").setAttribute("src", foreIcon[3]);
document.getElementById("fimg4").setAttribute("alt", desc);

document.getElementById("fimg5").setAttribute("src", foreIcon[4]);
document.getElementById("fimg5").setAttribute("alt", desc);

//Forecast Temps

document.getElementById("f1").innerHTML = foreTemp[0] + "°F";
document.getElementById("f2").innerHTML = foreTemp[1] + "°F";
document.getElementById("f3").innerHTML = foreTemp[2] + "°F";
document.getElementById("f4").innerHTML = foreTemp[3] + "°F";
document.getElementById("f5").innerHTML = foreTemp[4] + "°F";



}

//PRESTON EVENTS

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var eventRequest = new XMLHttpRequest();
eventRequest.open("GET", requestURL);
eventRequest.responseType = "json";
eventRequest.send();

eventRequest.onload = function () {
    
    var info = eventRequest.response;
    showPrestonEvents(info);
}

function showPrestonEvents(info) {

    var eventIndex = 0;
    var eventList = info["towns"];
    
    for (eventIndex=0; eventIndex < eventList.length; eventIndex++) {
        
        if (eventList[eventIndex].name == "Fish Haven") {
            
            var eventArticle = document.createElement("article");
            var listed = document.createElement("ol");
            
            
            var events = eventList[eventIndex].events;
            
            for (i=0; i < events.length; i++) {
                
                var eventLine = document.createElement("li");
                eventLine.textContent = events[i];
                listed.appendChild(eventLine);
                
            }
            eventArticle.appendChild(listed);
            eventsPreston.appendChild(eventArticle);
            
        }
        
    }
    
}

var eventsPreston = document.querySelector(".articleEvents");

