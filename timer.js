var event = 0;
var i = 0;
//dichiarazione array date eventi
var eventYear =  [2018, 					2018, 			2019,					2019,						2019,				2019,								2019,										2019,													2019,						2019,							2019,						2019];
var eventMonth = [12, 						12,					1,						1,							4,					4,									5,											6,														8,							11,								12,							12];
var eventDay =   [8, 							25,					1,						6,							21,					25,									1,											2,														15,							1,								8,							25];
var eventName =  [" Immacolata", 	" Natale",	" Capodanno",	"ll' Epifania",	" Pasqua",	"lla Liberazione",	"lla Festa del lavoro",	"lla Festa della Repubblica",	" Ferragosto",	" Tutti i Santi",	" Immacolata", 	" Natale"];


function timer(){
	var now = new Date();
	var eventDate = new Date(eventYear[event], eventMonth[event]-1, eventDay[event], 0, 0, 0);

	var currentTiime = now.getTime();
	var eventTime = eventDate.getTime();

	var remTime = eventTime - currentTiime;

	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	document.getElementById("day").innerHTML = d;
	document.getElementById("hour").innerHTML = h;
	document.getElementById("minute").innerHTML = m;
	document.getElementById("second").innerHTML = s;
	document.getElementById("eventName").innerHTML = "Timer a" + "<b>" + eventName[event] + "</b>";
	document.title = "Timer a" + eventName[event];

//stili


	if(s == 59){
		document.getElementById("minute").style.transform = "rotateY(360deg)";
	}
	if(m == 59){
		document.getElementById("hour").style.transform = "rotateY(360deg)";
	}
	if(h == 23){
		document.getElementById("day").style.transform = "rotateY(360deg)";
	}

	if(d == 0){
		document.getElementById("d").style.display = "none";
		document.getElementById("centralTimer").style.width = "237px";
	}
	else document.getElementById("d").style.display = "block";
	if(h == 0 && d == 0){
		document.getElementById("h").style.display = "none";
		document.getElementById("centralTimer").style.width = "158px";
	}
	else document.getElementById("h").style.display = "block";
	if(m == 0 && h == 0 && d == 0){
		document.getElementById("m").style.display = "
