let weatherRequest = new XMLHttpRequest();

let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5a2cf03763628f501603892cdc61ae1d"
weatherRequest.open("get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function(){
    let weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);
    document.getElementById("testcurrent").innerHTML = weatherData.main.temp;

    let icon = "http://openweathermap.org/img/w/"+ weatherData.weather[0].icon +".png";
    let desc = weatherData.weather[0].description;

    document.getElementById("imgtest").setAttribute("src", icon);
    document.getElementById("imgtest").setAttribute("alt", desc);
    
}