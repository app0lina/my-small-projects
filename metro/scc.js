var m1 = ["M1", "red", "Девяткино", "Гражданский проспект", "Академическая", "Политехническая", "Площадь Мужества", "Лесная", "Выборгская", "Площадь Ленина", "Чернышевская", "Площадб Восстания", "Владимирская", "Пушкинская", "Технологический Институт", "Балтийская", "Нарвская", "Кировский завод", "Автово", "Лененский проспект", "Проспект ветеранов"];
var m2 = ["M2", "blue", "Парнас", "Проспект просвещения", "Озерки", "Удельная", "Пионерская", "Чёрная речка", "Петроградская", "Горьковская", "Невский проспект", "Сенная площядь", "Технологический Институт", "Фрунзенская", "Московские ворота", "Электросила", "Парк попеды", "Московская", "Звёздная", "Купчино"];
var m3 = ["M3", "green", "Беговая", "Ново-крестовкая", "Приморская", "Василеостровская", "Гостинный двор", "Маяковская", "Площадь Александра Невского", "Елизаровская", "Ломоносовская", "Пролетарская", "Обухово", "Рыбатское"];
var m4 = ["M4", "#e3cf36", "Улица Дыбенко", "Проспект Большевиков", "Ладожская", "Новочеркасская", "Площадь Александра Невского", "Лиговский проспект", "Достоевская", "Спасская"];
var m5 = ["M5", "purple", "Комендантский проспект", "Старая деревня", "Крестовский отсров", "Чкаловская", "Спортивная", "Садовая", "Звенигородская", "Обводный вокзал", "Волковская", "Бухаретская", "Международная", "Проспект славы", "Дунайская", "Шушары"];
var all = [];
all.push(m1, m2, m3, m4, m5);

var brs = {
	m1: ["#e66565", "Девяткино", "Гражданский проспект", "Академическая", "Политехническая", "Площадь Мужества", "Лесная", "Выборгская", "Площадь Ленина", "Чернышевская", "Площадб Восстания", "Владимирская", "Пушкинская", "Технологический Институт 1", "Балтийская", "Нарвская", "Кировский завод", "Автово", "Лененский проспект", "Проспект ветеранов"],
	m2: ["#4287f5", "Парнас", "Проспект просвещения", "Озерки", "Удельная", "Пионерская", "Чёрная речка", "Петроградская", "Горьковская", "Невский проспект", "Сенная площадь", "Технологический Институт 2", "Фрунзенская", "Московские ворота", "Электросила", "Парк победы", "Московская", "Звёздная", "Купчино"], 
	m3: ["#69e665", "Беговая", "Ново-крестовкая", "Приморская", "Василеостровская", "Гостинный двор", "Маяковская", "Площадь Александра Невского 1", "Елизаровская", "Ломоносовская", "Пролетарская", "Обухово", "Рыбатское"],
	m4: ["#e6e465", "Улица Дыбенко", "Проспект Большевиков", "Ладожская", "Новочеркасская", "Площадь Александра Невского 2", "Лиговский проспект", "Достоевская", "Спасская"],
	m5: ["#b065e6", "Комендантский проспект", "Старая деревня", "Крестовский отсров", "Чкаловская", "Спортивная", "Садовая", "Звенигородская", "Обводный вокзал", "Волковская", "Бухаретская", "Международная", "Проспект славы", "Дунайская", "Шушары"]
}

var f = document.createElement("div");
	f.setAttribute("id", "randornot");

	var r = document.createElement("input");

	r.setAttribute("type", "radio");
	r.setAttribute("id", "random");
	r.setAttribute("name", "rand");
	r.setAttribute("value", "In random order");

	var rl = document.createElement("label");
	rl.setAttribute("for", "random");
	rl.innerHTML = "Станции в случайном порядке";

	var nr = document.createElement("input");

	nr.setAttribute("type", "radio");
	nr.setAttribute("id", "notrandom");
	nr.setAttribute("name", "rand");
	nr.setAttribute("value", "In original order");

	var nrl = document.createElement("label");
	nrl.setAttribute("for", "random")
	nrl.innerHTML = "Memorize";

	var sub = document.createElement("button");
	sub.setAttribute("onclick", "hhh()")
	sub.innerHTML = "SUBMIT";

	f.append(r, rl, document.createElement("br"), nr, nrl, document.createElement("br"));
	document.body.append(f);

	var numques = document.createElement("select");
	document.body.append(document.createElement("br"), numques, document.createElement("br"), document.createElement("br"));

	numques.setAttribute("id", "nques");
	for(var y = 2; y<=20;y++){
		var op = document.createElement("option");
		op.setAttribute("value", "op"+y);
		op.innerHTML = y;
		numques.append(op);
	}
	var br = document.createElement("div");
	br.setAttribute("id", "userbranch");
	
	for(var j = 0; j<all.length;j++){
		var cur = document.createElement("input");
		cur.setAttribute("type", "checkbox");
		cur.setAttribute("id", "m"+all[j][0].slice(1));
		var curl = document.createElement("label");
		
		curl.setAttribute("style", "color:"+all[j][1]+";");
		curl.innerHTML = all[j][0]; //m1, m2...
		br.append(cur, curl, document.createElement("br"))
	}
	document.body.append(br, document.createElement("br"), sub)

	var uron; //user random or not
	var nq; //number questions
	var ubr = []; //user branch

	function rand(min, max) {
      return (Math.floor(Math.random() * (max - min)) + min);
    };

	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var tb = document.createElement("table");
	var cor;
	function start(){
		if(uron == "random"){
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
		} else {

		}
	}
	
	function nextques() {
		var num = rand(0, ubr.length);
		var cur = brs[ubr[num]];
		q.innerHTML = cur[rand(1, cur.length)];
		cor = ubr[num];
	}

	function check(usbranch){
		if(usbranch == cor){
			alert("correct");
			nextques();
		} else {
			alert("nonono");
			nextques();
		}

	}



	function hhh() {
		
		for (var i = 0, length = document.getElementsByName("rand").length; i < length; i++) {
			if(document.getElementsByName("rand")[i].checked){
				uron = document.getElementsByName("rand")[i].id;
			}
		}

		if(uron == undefined) {
			alert("Choose if to ask you randomly or in order!")
		} else {
			nq = Number(nques.value.slice(2));
			for(var h = 1; h<6; h++){
				if(document.getElementById("m"+h).checked){
					
					ubr.push("m"+h)
				}
			}
			if(ubr.length<2){
				alert("To play you have to select at least 2 branches!")
				ubr = [];
			} else {
				document.body.innerHTML = "";
				start()
			}
		}
	}

