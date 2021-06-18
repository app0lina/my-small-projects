var red1 = ["b1", "Девяткино", "Гражданский проспект", "Академическая", "Политехническая", "Площадь Мужества", "Лесная", "Выборгская", "Площадь Ленина", "Чернышевская", "Площадб Восстания", "Владимирская", "Пушкинская", "Технологический Институт", "Балтийская", "Нарвская", "Кировский завод", "Автово", "Лененский проспект", "Проспект ветеранов"];
var blue2 = ["b2", "Парнас", "Проспект просвещения", "Озерки", "Удельная", "Пионерская", "Чёрная речка", "Петроградская", "Горьковская", "Невский проспект", "Сенная площядь", "Технологический Институт", "Фрунзенская", "Московские ворота", "Электросила", "Парк попеды", "Московская", "Звёздная", "Купчино"];
var green3 = ["b3", "Беговая", "Ново-крестовкая", "Приморская", "Василеостровская", "Гостинный двор", "Маяковская", "Площадь Александра Невского", "Елизаровская", "Ломоносовская", "Пролетарская", "Обухово", "Рыбатское"];
var yell4 = ["b4", "Улица Дыбенко", "Проспект Большевиков", "Ладожская", "Новочеркасская", "Площадь Александра Невского", "Лиговский проспект", "Достоевская", "Спасская"];
var purp5 = ["b5", "Комендантский проспект", "Старая деревня", "Крестовский отсров", "Чкаловская", "Спортивная", "Садовая", "Звенигородская", "Обводный вокзал", "Волковская", "Бухаретская", "Международная", "Проспект славы", "Дунайская", "Шушары"];

var f = document.createElement("form");
f.setAttribute("id", "randornot");

var r = document.createElement("input");

r.setAttribute("type", "radio");
r.setAttribute("id", "random");
r.setAttribute("name", "rand");
r.setAttribute("value", "rand");

var rl = document.createElement("label");
rl.setAttribute("for", "random");
rl.innerHTML = "In random order";

var nr = document.createElement("input");

nr.setAttribute("type", "radio");
nr.setAttribute("id", "notrandom");
nr.setAttribute("name", "rand");

var nrl = document.createElement("label");
nrl.setAttribute("for", "random")
nrl.innerHTML = "In original order";

var sub = document.createElement("button");
sub.setAttribute("onclick", "submit()")
sub.innerHTML = "SUBMIT";

f.append(r, rl, nr, nrl, sub);
document.body.append(f);

function submit() {
	alert($('input[name=random]:checked', '#randornot').val()); 
}
