//Weather Summary
let weatherRequest = new XMLHttpRequest();

let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5a2cf03763628f501603892cdc61ae1d"
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

/*//FORECAST

var weatherCall = new XMLHttpRequest();

var apiURLstr = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5a2cf03763628f501603892cdc61ae1d"
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
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var makeDate = weekday[date.getDay()] + ", " + month[date.getMonth()]+ " " + date.getDate();
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



}*/