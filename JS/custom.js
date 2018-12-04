function getClass() {
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    
    var classNumber = url.searchParams.get("class");
    console.log(classNumber);
    return classNumber;
}

var klasse = getClass;

function changeWeek(increaseWeek) {
    if (increaseWeek) {
        weeklyTask++;
    } else {
        weeklyTask--;
    }                                                       //https://www.bildung-bedeutet-freiheit.de/week/13/Klasse 13 Woche 1.pdf
    var iframe = document.getElementById("frame_pdf").src = "https://www.bildung-bedeutet-freiheit.de/week/13/Klasse%2013%20Woche%20"+weeklyTask+".pdf#viewfit";
    iframe.src = iframe.src;

    
    

    var PDFLINK = document.getElementById("toPDF").href = "https://www.bildung-bedeutet-freiheit.de/week/13/Klasse%2013%20Woche%20"+weeklyTask+".pdf#viewfit";
    button.href = button.href;
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

//var result = getWeekNumber(new Date());
var weeklyTask = parseInt(getWeekNumber(new Date())[1] - 33);
console.log("Woche " + weeklyTask)

var pdf = "https://www.bildung-bedeutet-freiheit.de/week/" + klasse + "/Klasse%20" + klasse + "%20Woche%20"+weeklyTask+".pdf#viewfit";
//https://www.bildung-bedeutet-freiheit.de/week/12/Klasse%2012%20Woche%2032.pdf

document.getElementById("frame_pdf").src = pdf //"https://www.bildung-bedeutet-freiheit.de/week/13/Klasse%2013%20Woche%20"+weeklyTask+".pdf#viewfit";
document.getElementById("toPDF").href = pdf //"https://www.bildung-bedeutet-freiheit.de/week/13/Klasse%2013%20Woche%20"+weeklyTask+".pdf#viewfit";
