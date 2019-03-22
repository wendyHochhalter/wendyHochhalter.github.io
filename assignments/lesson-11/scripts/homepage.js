//HOMEPAGE JS

//CURENT DATE

var date = new Date();

// create an array with weekday and monthly values to be compared to the numbers from functions and return value (printing the text directly in the weather page)

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("todaysdate").innerHTML = weekday[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

//NAV HAMBURGER
function toggleMenu(){
    
    document.getElementById("toggle").classList.toggle("hide");

}
//TOWN INFO JSON

var towns, townsindex;
var article = document.querySelector('article');
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var towndata = request.response;
    showTownInfo(towndata);

}

function showTownInfo(jsonObj){

    towns = jsonObj["towns"];

// Comments to self: These three for loops make sure the towns are "found" and displayed in the right order.

    for (townsindex = 0; townsindex < towns.length; townsindex++){

        if (towns[townsindex].name == "Preston")
        populateTownInfo(towns[townsindex]);


    }

    for (townsindex = 0; townsindex < towns.length; townsindex++){

        if (towns[townsindex].name == "Soda Springs")
        populateTownInfo(towns[townsindex]);

    }

    for (townsindex = 0; townsindex < towns.length; townsindex++){

        if (towns[townsindex].name == "Fish Haven")
        populateTownInfo(towns[townsindex]);

    }

}

function populateTownInfo(jsonObj){

    var town = jsonObj;

    var townArticle = document.createElement("article");
    var townH2 = document.createElement("h2");
    var townH3 = document.createElement("h3");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    var townImg = document.createElement("img");

    townH2.textContent = town.name;
    townH3.textContent = town.motto;
    para1.textContent = "Year Founded: " + town.yearFounded;
    para2.textContent = "Population: " + town.currentPopulation;
    para3.textContent = "Average Rainfall: " + town.averageRainfall;

    //Note to self: This switch compares the content from the H2s (name)  to each case, to assign an image.

    switch(townH2.textContent){

        case "Preston":
        townImg.src="images/preston250w.jpg";
        break;

        case "Soda Springs":
        townImg.src="images/soda-springs250w.jpg";
        break;

        case "Fish Haven":
        townImg.src="images/fishaven250w.jpg";
        break;
    }

    townArticle.appendChild(townH2);
    townArticle.appendChild(townH3);
    townArticle.appendChild(para1);
    townArticle.appendChild(para2);
    townArticle.appendChild(para3);
    townArticle.appendChild(townImg);
    townArticle.className = "towninfo";

    article.appendChild(townArticle);


}