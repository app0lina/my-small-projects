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
	f.setAttribute("id", "randornot");

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
	gamemode.innerHTML = "Выберите режим игры"
	document.body.append(gamemode, f);

	var numques = document.createElement("select");
	document.body.append(document.createElement("br"), numques, document.createElement("br"), document.createElement("br"));

	numques.setAttribute("id", "nques");
	for(var y = 5; y<55;y+=5){
		var op = document.createElement("option");
		op.setAttribute("value", "op"+y);
		op.innerHTML = y;
		numques.append(op);
	}
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

	function rand(min, max) {
      return (Math.floor(Math.random() * (max - min)) + min);
    };

	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var tb = document.createElement("table");
	var cor;
	var numq;
	function start(){
		alert(uron)
		if(uron == "random"){
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
			var prev = document.createElement("div");
			prev.innerHTML = brs[ubr[0]][1];
			prev.setAttribute("class", "side");
			prev.setAttribute("id", "p");
			document.body.append(prev);

			var main = document.createElement("div");
			main.innerHTML = brs[ubr[0]][2];
			main.setAttribute("class", "main");
			main.setAttribute("id", "m");
			document.body.append(main);

			var next = document.createElement("div");
			next.innerHTML = brs[ubr[0]][3];
			next.setAttribute("class", "side");
			next.setAttribute("id", "n");
			document.body.append(next);
			
			var bp = document.createElement("div");
			bp.append(document.createElement("button"));
			bp.firstChild.innerHTML = "<";
			bp.setAttribute("class", "but")
			document.body.append(document.createElement("br"), document.createElement("br"), bp)
		}
	}
	
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
			q.innerHTML = "GAME OVER"
		}
	}

	function check(usbranch){
		if(usbranch == cor){
			var kk = document.getElementById(usbranch).firstChild;
			kk.style.border = "4px solid #21b04a";
			setTimeout(function(){kk.style.border = null}, 300)
			nextques();
		} else {
			var qq = document.getElementById(usbranch).firstChild;
			var correct = document.getElementById(cor).firstChild;
			qq.style.border = "4px solid red";
			correct.style.border = "4px solid #21b04a";
			setTimeout(function(){qq.style.border = null; correct.style.border = null;}, 300)
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
			nq = Number(nques.value.slice(2));
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
				alert("To play you have to select at least 2 branches!")
				ubr = [];
			} else {
				document.body.innerHTML = "";
				start()
			}
		}
	}

