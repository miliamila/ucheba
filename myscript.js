var date = new Date(); // получаем текущую дату
var time = date.getHours(); // получаем текущее время в часах
if(time < 12) // сравниваем время с числом 12
    alert('Доброе утро!'); // если время меньше 12
else if(time >= 12 && time < 17) // проверяем находится ли время в указанном промежутке
	alert('Добрый день!'); // больше или равно 12, но меньше 17
else    
	alert('Добрый вечер!'); // если время равно 17 и больше