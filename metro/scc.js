var m1 = ["M1", "red", "Девяткино", "Гражданский проспект", "Академическая", "Политехническая", "Площадь Мужества", "Лесная", "Выборгская", "Площадь Ленина", "Чернышевская", "Площадб Восстания", "Владимирская", "Пушкинская", "Технологический Институт", "Балтийская", "Нарвская", "Кировский завод", "Автово", "Лененский проспект", "Проспект ветеранов"];
var m2 = ["M2", "blue", "Парнас", "Проспект просвещения", "Озерки", "Удельная", "Пионерская", "Чёрная речка", "Петроградская", "Горьковская", "Невский проспект", "Сенная площядь", "Технологический Институт", "Фрунзенская", "Московские ворота", "Электросила", "Парк попеды", "Московская", "Звёздная", "Купчино"];
var m3 = ["M3", "green", "Беговая", "Ново-крестовкая", "Приморская", "Василеостровская", "Гостинный двор", "Маяковская", "Площадь Александра Невского", "Елизаровская", "Ломоносовская", "Пролетарская", "Обухово", "Рыбатское"];
var m4 = ["M4", "#e3cf36", "Улица Дыбенко", "Проспект Большевиков", "Ладожская", "Новочеркасская", "Площадь Александра Невского", "Лиговский проспект", "Достоевская", "Спасская"];
var m5 = ["M5", "purple", "Комендантский проспект", "Старая деревня", "Крестовский отсров", "Чкаловская", "Спортивная", "Садовая", "Звенигородская", "Обводный вокзал", "Волковская", "Бухаретская", "Международная", "Проспект славы", "Дунайская", "Шушары"];
var all = [];
all.push(m1, m2, m3, m4, m5);

var brs = {
	m1: ["#fa8787", "Девяткино", "Гражданский проспект", "Академическая", "Политехническая", "Площадь Мужества", "Лесная", "Выборгская", "Площадь Ленина", "Чернышевская", "Площадь Восстания", "Владимирская", "Пушкинская", "Технологический Институт 1", "Балтийская", "Нарвская", "Кировский завод", "Автово", "Лененский проспект", "Проспект ветеранов"],
	m2: ["#87a9fa", "Парнас", "Проспект просвещения", "Озерки", "Удельная", "Пионерская", "Чёрная речка", "Петроградская", "Горьковская", "Невский проспект", "Сенная площадь", "Технологический Институт 2", "Фрунзенская", "Московские ворота", "Электросила", "Парк победы", "Московская", "Звёздная", "Купчино"], 
	m3: ["#87faa8", "Беговая", "Ново-крестовкая", "Приморская", "Василеостровская", "Гостинный двор", "Маяковская", "Площадь Александра Невского 1", "Елизаровская", "Ломоносовская", "Пролетарская", "Обухово", "Рыбатское"],
	m4: ["#faed87", "Улица Дыбенко", "Проспект Большевиков", "Ладожская", "Новочеркасская", "Площадь Александра Невского 2", "Лиговский проспект", "Достоевская", "Спасская"],
	m5: ["#ca87fa", "Комендантский проспект", "Старая деревня", "Крестовский отсров", "Чкаловская", "Спортивная", "Садовая", "Звенигородская", "Обводный вокзал", "Волковская", "Бухаретская", "Международная", "Проспект славы", "Дунайская", "Шушары"]
}

var f = document.createElement("div");
f.setAttribute("id", "randomrnot");

var r = document.createElement("input");

r.setAttribute("type", "radio");
r.setAttribute("id", "random");
r.setAttribute("name", "rand");

var rl = document.createElement("label");
rl.setAttribute("for", "random");
 
rl.innerHTML = "Случайные выбранные ветки в случайном порядке";

var nr = document.createElement("input");

nr.setAttribute("type", "radio");
nr.setAttribute("id", "memorize");
nr.setAttribute("name", "rand");

var nrl = document.createElement("label");
nrl.setAttribute("for", "random")
nrl.innerHTML = "Запомнить";

var sub = document.createElement("button");
sub.setAttribute("onclick", "hhh()")
sub.innerHTML = "SUBMIT";

f.append(r, rl, document.createElement("br"), nr, nrl, document.createElement("br"));
var gamemode = document.createElement("p");
gamemode.innerHTML = "<b>Выберите режим игры</b>"
document.body.append(gamemode, f, document.createElement("br"));
var numques = document.createElement("select");

numques.setAttribute("id", "nques");
for(var y = 5; y<101;y+=5){
	var op = document.createElement("option");
	op.setAttribute("value", "op"+y);
	op.innerHTML = y;
	numques.append(op);
}

$('input[type="radio"]').click(function(){
	
	if (document.getElementById("random").checked) {
			document.body.children[3].remove();
			var cont = document.createElement("div");
			cont.setAttribute("id", "contr")
			cont.append(document.createElement("br"), numques, document.createElement("br"), document.createElement("br"));
			randomrnot.after(cont);
	} else if(!!document.getElementById("contr")) {
			// document.body.children[4].remove();
			document.getElementById("contr").remove(); 
			randomrnot.after(document.createElement("br"))
	}
}) 

var br = document.createElement("div");
br.setAttribute("id", "userbranch");

var cur = document.createElement("input");
cur.setAttribute("type", "checkbox");
cur.setAttribute("id", "all")
var curl = document.createElement("label");
curl.innerHTML = 'Select all';
br.append(cur, curl, document.createElement("br"))

for(var j = 0; j<all.length;j++){
	cur = document.createElement("input");
	cur.setAttribute("type", "checkbox");
	cur.setAttribute("id", "m"+all[j][0].slice(1));
	
	curl = document.createElement("label");
	curl.setAttribute("style", "color:"+all[j][1]+";");
	curl.innerHTML = all[j][0]; //m1, m2...
	br.append(cur, curl, document.createElement("br"))
}
document.body.append(br, document.createElement("br"), sub)

var uron; //user random or not
var nq; //number questions
var ubr = []; //user branch

var numstprev;
var numstmain = 0;
var numstnext = 1;
function rand(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
};

function objcount(obj) {
    var count = 0;
    for(var prop in obj) {
       if(obj.hasOwnProperty(prop)) ++count;
    }
    return count;
};

var tr = document.createElement("tr");
var td = document.createElement("td");
var tb = document.createElement("table");
var cor;
var numq;

var ch = true;
var curr;
var numbr = 0;
var trbrupexists = false;



function stnext(){
	if(ch){
		stp.setAttribute("onclick", "stprev()")
		ch = false;
	}
	
	if(numstnext<curr.length){
		
		numstprev = numstmain;
		numstmain++;
		numstnext++;

		p.innerHTML = curr[numstprev];
		m.innerHTML = curr[numstmain];
		n.innerHTML = curr[numstnext];
	} else {
		p.innerHTML = curr[numstprev];
		m.innerHTML = curr[numstmain];
		n.innerHTML = ""
	}

	if((numstnext) == curr.length){
		stn.removeAttribute("onclick");
		n.innerHTML = ""
	} 
}

function stprev(){	
	if(!ch){
			stn.setAttribute("onclick", "stnext()")
			ch = true;
		}
		numstprev--;
		numstmain--;
		numstnext--; 
	if(numstprev < 0) {
		numstprev = undefined;
		p.innerHTML = "";
		stp.removeAttribute("onclick");
	} else {
		p.innerHTML = curr[numstprev];
	}
	m.innerHTML = curr[numstmain];
	n.innerHTML = curr[numstnext];
}

function brup(){
	if(numbr == 4) {
		numbr--;
		tr = document.createElement("tr");
		td = document.createElement("td");
		butt = document.createElement("button")
		td.setAttribute("class", "nope")
		tr.append(td);
		td = document.createElement("td");
		butt = document.createElement("button");
		butt.innerHTML = "↓ M"+ubr[numbr+1].slice(1)+" ↓";
		butt.setAttribute("id", "down");
		butt.setAttribute("onclick", "brdown()");
		td.setAttribute("class", "buttd");
		td.append(butt);
		tr.append(td);
		document.querySelector("table").append(tr);

		mbr.innerHTML = "M"+ubr[numbr].slice(1)
		mbr.setAttribute("style", "background-color:"+brs[ubr[numbr]][0])
		up.innerHTML = "↑ M"+ubr[numbr-1].slice(1)+" ↑";
	} else {
		numbr--;
		down.innerHTML = "↓ M"+ubr[numbr+1].slice(1)+" ↓";
		if(numbr >= 1){
			up.innerHTML = "↑ M"+ubr[numbr-1].slice(1)+" ↑";
		} else {
			document.querySelector("table").children[1].remove();
			trbrupexists = false;
		}
		mbr.innerHTML = "M"+ubr[numbr].slice(1)
		mbr.setAttribute("style", "background-color:"+brs[ubr[numbr]][0])
	}

	numstprev;
	numstmain = 0;	
	numstnext = 1;
	curr = brs[ubr[numbr]].slice(1);
	p.innerHTML = "";
	m.innerHTML = curr[numstmain];
	n.innerHTML = curr[numstnext];
}

function brdown(){
	numbr++;
	if(!trbrupexists) {
			
			var tr = document.createElement("tr");
			var td = document.createElement("td");
			td.setAttribute("class", "nope");
			tr.append(td);
			td = document.createElement("td");			
			var butt = document.createElement("button");
			butt.innerHTML = "↑ M"+ubr[numbr-1].slice(1)+" ↑";
			butt.setAttribute("id", "up");
			butt.setAttribute("onclick", "brup()");
			td.setAttribute("class", "main")
			td.append(butt);
			tr.append(td);
			document.querySelector("table").firstChild.after(tr);
			trbrupexists = true;

		}
		up.innerHTML = "↑ M"+ubr[numbr-1].slice(1)+" ↑";
		mbr.innerHTML = "M"+ubr[numbr].slice(1)
		mbr.setAttribute("style", "background-color:"+brs[ubr[numbr]][0])
		if(numbr < 4){
			down.innerHTML = "↓ M"+ubr[numbr+1].slice(1)+" ↓";
		} else {
			document.querySelector("table").lastChild.remove();
		}
		numstprev;
		numstmain = 0;	
		numstnext = 1;
		curr = brs[ubr[numbr]].slice(1);
		p.innerHTML = "";
		m.innerHTML = curr[numstmain];
		n.innerHTML = curr[numstnext];
}

function start(){

	if(uron == "random"){
		tb.setAttribute("class", "tbl")
		numq = nq;
		var nquesEl = document.createElement("div");
		nquesEl.setAttribute("id", "nques");
		nquesEl.innerHTML = numq+"/"+nq;
		document.body.append(nquesEl)
		var num = rand(0, ubr.length);
		var cur = brs[ubr[num]];
		td.innerHTML = cur[rand(1, cur.length)];
		td.setAttribute("colspan", 2);
		td.setAttribute("id", "q");
		cor = ubr[num];
		tr.append(td);
		tb.append(tr);
		tr = document.createElement("tr");
		td = document.createElement("td");
		for(var i = 0; i<ubr.length; i++){
			var but = document.createElement("button");
			but.innerHTML = "M"+ubr[i].slice(1);
			but.setAttribute("onclick", "check('"+ubr[i]+"')")
			td.append(but);
			td.setAttribute("id", ubr[i])
			td.style.backgroundColor = brs[ubr[i]][0];
			if(tr.children.length >= 2){
				tb.append(tr);
				tr = document.createElement("tr");
				i--;
			} else {
				tr.append(td);
				if(ubr[i] == ubr[ubr.length-1]) {
					tb.append(tr)
				}
			}
			td = document.createElement("td");
		}
		document.body.append(tb)

	} else if(uron == "memorize"){
		curr = brs[ubr[0]].slice(1);

		tb = document.createElement("table");
		tr = document.createElement("tr");
		td = document.createElement("td");
		//stations line
		td.setAttribute("id", "p");
		td.setAttribute("class", "side");
		tr.append(td);

		td = document.createElement("td");
		td.setAttribute("id", "m");
		td.setAttribute("class", "main");
		td.innerHTML = curr[numstmain]
		tr.append(td);

		td = document.createElement("td");
		td.setAttribute("id", "n");
		td.setAttribute("class", "side");
		td.innerHTML = curr[numstnext]
		tr.append(td);
		//end stations line

		tb.append(tr);
		tr = document.createElement("tr");
		td = document.createElement("td");
		//button branch up tr WAZ HERE
	
		tr = document.createElement("tr");
		td = document.createElement("td");
		butt = document.createElement("button");
		
		//start tr stprev mainbr stnext
		butt.setAttribute("class", "but");
		butt.innerHTML = "←";
		butt.setAttribute("id", "stp")
		// butt.setAttribute("onclick", "stprev()") // add in the stnext 
		td.setAttribute("class", "buttd");
		td.append(butt);
		tr.append(td);
		tb.append(tr);
		//end stprev

		//td butt clear
		td = document.createElement("td");
		//start mainbr
		td.setAttribute("class", "main");
		td.setAttribute("id", "mbr");
		td.setAttribute("style", "background-color:"+brs[ubr[numbr]][0])
		td.innerHTML = "M"+ubr[0].slice(1);
		tr.append(td);
		tb.append(tr);

		td = document.createElement("td");
		butt = document.createElement("button");

		butt.setAttribute("class", "but");
		butt.innerHTML = "→";
		butt.setAttribute("onclick", "stnext()")
		td.setAttribute("class", "buttd");
		butt.setAttribute("id", "stn");
		td.append(butt);
		tr.append(td);
		tb.append(tr);

		tr = document.createElement("tr");
		td = document.createElement("td");

		td.setAttribute("class", "nope")
		tr.append(td);
		td = document.createElement("td");
		butt = document.createElement("button");
		butt.innerHTML = "↓ M"+ubr[numbr+1].slice(1)+" ↓";
		butt.setAttribute("id", "down");
		butt.setAttribute("onclick", "brdown()");
		td.setAttribute("class", "buttd");
		td.append(butt);
		tr.append(td);
		tb.append(tr);
		document.body.append(tb);

		document.body.addEventListener("keydown", function(event) {
		  if (event.keyCode === 39) {
				event.preventDefault();
				document.getElementById("stn").click();
		  } else if(event.keyCode === 37) {
		  	event.preventDefault();
	 			document.getElementById("stp").click();
		  } else if(event.keyCode === 38) {
		  	event.preventDefault();
	 			if(document.getElementById("up") != null) {
					document.getElementById("up").click();
		  	}
		  } else if(event.keyCode === 40) {
		  	event.preventDefault();
		  	if(document.getElementById("down") != null) {
					document.getElementById("down").click();
		  	}
	 			
		  }
		});
	}
}

var points = 0;

function nextques() {
	var num = rand(0, ubr.length);
	var cur = brs[ubr[num]];
	q.innerHTML = cur[rand(1, cur.length)];
	cor = ubr[num];
	numq--;
	nques.innerHTML = numq+"/"+nq;
	if(numq == 0){
		for(var h = 0; h<document.querySelectorAll("button").length;h++){
			document.querySelectorAll("button")[h].setAttribute("disabled", "true")
		}
		q.innerHTML = "GAME OVER";
		nques.innerHTML = "Correct: "+points+"/"+nq;
	}
};

function check(usbranch){
	if(usbranch == cor){
		var kk = document.getElementById(usbranch).firstChild;
		kk.style.backgroundColor = "#21b04a";
		setTimeout(function(){kk.style.backgroundColor = "#e9e9ed"}, 300);
		points++;
		nextques();
	} else {
		var qq = document.getElementById(usbranch).firstChild;
		var correct = document.getElementById(cor).firstChild;
		qq.style.backgroundColor = "red";
		correct.style.backgroundColor = "#21b04a";
		setTimeout(function(){qq.style.backgroundColor = "#e9e9ed"; correct.style.backgroundColor = "#e9e9ed";}, 300)
		nextques();
	}
}

function hhh() {
	
	for (var k = 0; k < document.getElementsByName("rand").length; k++) {
		if(document.getElementsByName("rand")[k].checked){
			uron = document.getElementsByName("rand")[k].id;
		}
	}

	if(uron == undefined) {
		alert("Choose if to ask you randomly or in order!")
	} else {
		if(document.querySelectorAll('input[type="radio"]')[0].checked)	nq = Number(nques.value.slice(2));
	
		if(document.getElementById("all").checked == true){
			for(var b = 1; b<6; b++) {
				ubr.push("m"+b)
			}
		} else {
			for(var b = 1; b<6; b++) {
				if (document.getElementById("m"+b).checked) ubr.push("m"+b)
			}
		}

		if(ubr.length<2 || all.checked == false){
			alert("To play or memorize you have to select at least 2 branches!")
			ubr = [];
		} else {
			document.body.innerHTML = "";
			start(ubr.indexOf(ubr[0]))
		}
	}
}