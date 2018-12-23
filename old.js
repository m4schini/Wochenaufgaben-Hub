
var firstSchoolWeek = 33; //<-- Change this to the first calender week of the current school year
var url = new URL(window.location.href);

var calenderWeek = parseInt(getWeekNumber(new Date())[1]);  console.log(calenderWeek);
var schoolWeek = calenderWeek-firstSchoolWeek;              console.log(schoolWeek);


var uriClass = url.searchParams.get("class");
var uriWeek = url.searchParams.get("week");
var klasse = 13;

console.log(uriClass+uriWeek);
if (uriClass == null && uriWeek == null) {
    window.location.pathname = "";
    window.location.href=window.location.href + "?week=" + schoolWeek + "&class=" + klasse;
} 

klasse = uriClass;
schoolWeek = uriWeek;
       
var PDFLINK = "https://www.bildung-bedeutet-freiheit.de/week/" + klasse + "/Klasse%20" + klasse + "%20Woche%20"+ schoolWeek +".pdf";

 

refreshPage();

function refreshPage() {

    $("#weektask").html(schoolWeek);
    $("#dropdownKlasse").html(klasse);
    refreshLink();

    

    //console.log(PDFLINK);
    var iframe = document.getElementById('frame_pdf');
    iframe.src = PDFLINK;
    iframe.src = iframe.src;

    var button = document.getElementById('toPDF');
    button.href = PDFLINK;
    button.href = button.href;

    window.location.href = window.location.href.split("?")[0] + "?week=" + schoolWeek + "&class=" + klasse;
}

function changeWeek(forwards) {
    if (forwards) {
        schoolWeek++;
    } else {
        schoolWeek--;
    }

    refreshPage();
}

function changeClass(neueKlasse) {
    console.log(neueKlasse)
    klasse = neueKlasse;
    console.log(klasse);

    refreshPage();
}

function refreshLink() {
    PDFLINK = "https://www.bildung-bedeutet-freiheit.de/week/" + klasse + "/Klasse%20" + klasse + "%20Woche%20"+ schoolWeek +".pdf";
}

function getFirstSchoolWeek() {
    $.getJSON("https://ferien-api.de/api/v1/holidays", function(data) {
        console.log(data.result);
    });
}

function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}
