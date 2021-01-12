function showPosition() {
    // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    // var xhr = new XMLHttpRequest(),
    //       method = "GET",
    //       url = "api.openweathermap.org/data/2.5/weather?lat=42.25&lon=-72.35&appid=f4c4c0c68b80e96610420660681b1e46";
    //   xhr.open(method, url);
    //   console.log("Sent");
  
    //   //Call a function when the state changes.    
    //   // no need for self gymnastics any more
    //   // using onload, no need to test reasyState either
    //   xhr.onload = e => {
    //       if (xhr.status === 4){
    //           var jsonResponse = JSON.parse(xhr.responseText);
    //           console.log("Hi");
    //       }
    //       else {
    //           console.log(xhr.status);
    //       }
    //   var weather = jsonResponse.weather[0].main;
    //   console.log(weather);
    // }
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=42.25368145706318&lon=-72.35973439627313&appid=f4c4c0c68b80e96610420660681b1e46";
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var jsonResponse = JSON.parse(xhr.responseText);
            var weather = jsonResponse.weather[0].main;
            console.log(weather);
        }
    };
    xhr.send();
}

showPosition();