function realTimeClock() {
	// body...
	var rtClock = new Date();

	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();

	// var amPm = ( hours < 12 ) ? "AM" : "PM"
	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);
	document.getElementById('clock').innerHTML = 
		hours + " : " + minutes + " : " + seconds;

	var t = setTimeout(realTimeClock, 500);

}

function getWeekName() {

	if(getWeekNumber(new Date()) % 2 === 0 )
		document.getElementById('week').innerHTML = "нечётная неделя — знаменатель";
	else 
		document.getElementById('week').innerHTML = "чётная неделя — числитель";
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

// var result = getWeekNumber(new Date());
// document.write('It\'s currently week ' + result[1] + ' of ' + result[0]);

