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
        
        if (eventList[eventIndex].name == "Preston") {
            
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

