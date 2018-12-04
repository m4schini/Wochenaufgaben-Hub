//$.getJSON('http://ip-api.com/json/?callback=?', function(data) {
//    //console.log(data)
//});
            //http://ip-api.com/json/?callback=?
$.getJSON("https://ipapi.co/json/", function(data) {
    //console.log(JSON.stringify(data, null, 2));
    var xhr = new XMLHttpRequest();
    var json = JSON.stringify(data, null, 0)
    console.log(encodeURIComponent(JSON.stringify({"email": "hey@mail.com", "password": "101010"})));
    console.log(json)
                //http://51.38.126.114:1236
    var url = "https://localhost:1236/visit?data=" + encodeURI(json);
    console.log(url)
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json", 'charset=utf-8');
    xhr.onload = function () {
        console.log("response: " + xhr.responseText);
    };
    //var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
    xhr.send();
    //xhr.send("test")
})


        //$.getJSON('http://ip-api.com/json?callback=?', function(data) {
        //  console.log(JSON.stringify(data, null, 2));
  //
        //  var xhr = new XMLHttpRequest();
        //  var url = "http://localhost:1236/visit";
        //  xhr.open("POST", url, true);
        //  xhr.setRequestHeader("Content-Type", "application/json");
        //  xhr.onreadystatechange = function () {
        //      console.log(xhr.responseText);
        //  };
        //  //var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
        //  xhr.send(data);
        //});