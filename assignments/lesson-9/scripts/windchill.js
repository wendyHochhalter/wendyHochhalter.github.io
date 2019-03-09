/*var speed = parseInt(document.getElementById("summary2").innerHTML);
var temp = parseInt(document.getElementById("summary5").innerHTML);*/

/*Brother Odom:

I tried several different approaches to tackle this part of the assignment. I spent about 4 hours in part alone. 
Seems like no matter how I introduce the formula, the result is always the same. I also tried using the wind chill formula
from CIT160, without success. I know the formula works.

I also checked the console to make sure I was  getting the right data from the summary. And I was.

I'm dissapointed that this script doesn't work properly. Can you help me figure out what I did worng?*/

//A COUPLE FORMULAS I TRIED:

// var wchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temp * Math.pow(speed, 0.16)));

/*
function windChill(tempF, speed){
    var wchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temp * Math.pow(speed, 0.16)));
    return wchill;
}
*/

/*var wchill = 0;
console.log("Init wchill " + wchill);
wchill = 35.74 + (0.6215 * temp);
console.log("Windchill 1 " + wchill);

wchill = wchill - (35.75 * Math.pow(speed, 0.16));
console.log("Windchill 2 " + wchill);

wchill = wchill + (0.4275 * (temp * Math.pow(speed, 0.16)));
console.log("Windchill 3 " + wchill);

wchill = Math.round(wchill);*/



/* LAST FORMULA I USED
var wchill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(speed, 0.16))) + 0.4275 * temp * (Math.pow(speed, 0.16));*/




/*var wchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);



wchill = Math.round(wchill);


document.getElementById("summary3").innerHTML = wchill;*/

var temp = parseInt(document.getElementById('summary2').innerHTML);
var speed = parseInt(document.getElementById('summary5').innerHTML);

var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

windChill = Math.round(windChill);
document.getElementById("summary3").innerHTML = windChill;
