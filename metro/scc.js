var m1 = ["M1", "red", "Девяткино", "Гражданский проспект", "Академическая", "Политехническая", "Площадь Мужества", "Лесная", "Выборгская", "Площадь Ленина", "Чернышевская", "Площадб Восстания", "Владимирская", "Пушкинская", "Технологический Институт", "Балтийская", "Нарвская", "Кировский завод", "Автово", "Лененский проспект", "Проспект ветеранов"];
var m2 = ["M2", "blue", "Парнас", "Проспект просвещения", "Озерки", "Удельная", "Пионерская", "Чёрная речка", "Петроградская", "Горьковская", "Невский проспект", "Сенная площядь", "Технологический Институт", "Фрунзенская", "Московские ворота", "Электросила", "Парк попеды", "Московская", "Звёздная", "Купчино"];
var m3 = ["M3", "green", "Беговая", "Ново-крестовкая", "Приморская", "Василеостровская", "Гостинный двор", "Маяковская", "Площадь Александра Невского", "Елизаровская", "Ломоносовская", "Пролетарская", "Обухово", "Рыбатское"];
var m4 = ["M4", "#e3cf36", "Улица Дыбенко", "Проспект Большевиков", "Ладожская", "Новочеркасская", "Площадь Александра Невского", "Лиговский проспект", "Достоевская", "Спасская"];
var m5 = ["M5", "purple", "Комендантский проспект", "Старая деревня", "Крестовский отсров", "Чкаловская", "Спортивная", "Садовая", "Звенигородская", "Обводный вокзал", "Волковская", "Бухаретская", "Международная", "Проспект славы", "Дунайская", "Шушары"];
var all = [];
all.push(m1, m2, m3, m4, m5);

var brs = {
	m1: ["Девяткино", "Гражданский проспект", "Академическая", "Политехническая", "Площадь Мужества", "Лесная", "Выборгская", "Площадь Ленина", "Чернышевская", "Площадб Восстания", "Владимирская", "Пушкинская", "Технологический Институт", "Балтийская", "Нарвская", "Кировский завод", "Автово", "Лененский проспект", "Проспект ветеранов"],
	m2: ["Парнас", "Проспект просвещения", "Озерки", "Удельная", "Пионерская", "Чёрная речка", "Петроградская", "Горьковская", "Невский проспект", "Сенная площядь", "Технологический Институт", "Фрунзенская", "Московские ворота", "Электросила", "Парк попеды", "Московская", "Звёздная", "Купчино"], 
	m3: ["Беговая", "Ново-крестовкая", "Приморская", "Василеостровская", "Гостинный двор", "Маяковская", "Площадь Александра Невского", "Елизаровская", "Ломоносовская", "Пролетарская", "Обухово", "Рыбатское"],
	m4: ["Улица Дыбенко", "Проспект Большевиков", "Ладожская", "Новочеркасская", "Площадь Александра Невского", "Лиговский проспект", "Достоевская", "Спасская"],
	m5: ["Комендантский проспект", "Старая деревня", "Крестовский отсров", "Чкаловская", "Спортивная", "Садовая", "Звенигородская", "Обводный вокзал", "Волковская", "Бухаретская", "Международная", "Проспект славы", "Дунайская", "Шушары"]
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
	//document.body.append(f);

	var numques = document.createElement("select");
	//document.body.append(document.createElement("br"), numques, document.createElement("br"), document.createElement("br"));

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
	//document.body.append(br, document.createElement("br"), sub)

	var uron = "random"; //user random or not
	var nq = 10; //number questions
	var ubr = ["m1", "m3", "m4"]; //user branch

	function rand(min, max) {
      return (Math.floor(Math.random() * (max - min)) + min);
    };
	
	function start(){
		if(uron == "random") {
			var nql = nq; //number questions left
			var tb = document.createElement("table");
			var tr = document.createElement("tr");
			var td = document.createElement("td");
			for(var t = 0;t<ubr.length;t++){
				if(tr.children.length < 3){
					td = document.createElement("td")
					td.innerHTML = "M"+ubr[t].slice(1);
					tr.append(td);
					td = document.createElement("td");
				} else {
					tb.append(tr);
					tr = createElement("tr");
				}
				
			} 
		
			document.body.append(tb)
		} 
	}
	// function nextques ??? (){
	// 	
	// }

	start();

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
			if(ubr.length<1){
				alert("To play you have to select at least 1 branch!")
				ubr = [];
			} else {
				document.body.innerHTML = "";
				start()
			}
		}
	}

