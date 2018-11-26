var nums = [1, 23, 8, 17, 4, 6, 65, 9, 8]
console.log(nums);

//вывести элементы через каждые 2

result = "";
for(i = 0;  i < nums.length; i += 3){
	result += nums[i] + " ";
	console.log(result);  // как вывксти только конечный результат, а не елочку??
}

//элементы, которые больше, чем сумма первого и последнего элементов
result = "";
for(i = 0; i < nums.length; i ++){
	if(nums[i] >= nums[0] + nums[nums.length - 1]){
		result += nums[i] + " ";
	}
}
console.log(result);

//вывести среднее арифметическое
average = 0;
for (i=0; i < nums.length; i ++){
	average += nums[i]/nums.length;
}
console.log(average);

//На базе предыдущего массива сформировать новый массив, в который записать только чётные значения
updated = [];
for (i = 0; i < nums.length; i ++){
	if(!(nums[i]%2)){
		updated.push(nums[i]);
	}
}
console.log(updated);

//вывести гороскоп на текущий день
var horoscope = {
	"0" : {
		"Aquarius"     : "Is's Sunday!!! You're good!"
		,"Pisces"      : "Is's Sunday!!! You're good!"
		,"Aries"       : "Is's Sunday!!! You're good!"
		,"Taurus"      : "Is's Sunday!!! You're good!"
		,"Gemini"      : "Is's Sunday!!! You're good!"
		,"Cancer"      : "Is's Sunday!!! You're good!"
		,"Leo"         : "Is's Sunday!!! You're good!"
		,"Virgo"       : "Is's Sunday!!! You're good!"
		,"Libra"       : "Is's Sunday!!! You're good!"
		,"Scorpio"     : "Is's Sunday!!! You're good!"
		,"Sagittarius" : "Is's Sunday!!! You're good!"
		,"Capricorn"   : "Is's Sunday!!! You're good!"

	}
	,"1" : {
		"Aquarius"     : "Monday.... Not so good... Cheer up"
		,"Pisces"      : "Monday.... Not so good... Cheer up"
		,"Aries"       : "Monday.... Not so good... Cheer up"
		,"Taurus"      : "Monday.... Not so good... Cheer up"
		,"Gemini"      : "Monday.... Not so good... Cheer up"
		,"Cancer"      : "Monday.... Not so good... Cheer up"
		,"Leo"         : "Monday.... Not so good... Cheer up"
		,"Virgo"       : "Monday.... Not so good... Cheer up"
		,"Libra"       : "Monday.... Not so good... Cheer up"
		,"Scorpio"     : "Monday.... Not so good... Cheer up"
		,"Sagittarius" : "Monday.... Not so good... Cheer up"
		,"Capricorn"   : "Monday.... Not so good... Cheer up"

	}
	,"2" : {
		"Aquarius"     : "Tuesday - alittle bit better"
		,"Pisces"      : "Tuesday - alittle bit better"
		,"Aries"       : "Tuesday - alittle bit better"
		,"Taurus"      : "Tuesday - alittle bit better"
		,"Gemini"      : "Tuesday - alittle bit better"
		,"Cancer"      : "Tuesday - alittle bit better"
		,"Leo"         : "Tuesday - alittle bit better"
		,"Virgo"       : "Tuesday - alittle bit better"
		,"Libra"       : "Tuesday - alittle bit better"
		,"Scorpio"     : "Tuesday - alittle bit better"
		,"Sagittarius" : "Tuesday - alittle bit better"
		,"Capricorn"   : "Tuesday - alittle bit better"

	}
	,"3" : {
		"Aquarius"     : "Wednesday - middle of the working week"
		,"Pisces"      : "Wednesday - middle of the working week"
		,"Aries"       : "Wednesday - middle of the working week"
		,"Taurus"      : "Wednesday - middle of the working week"
		,"Gemini"      : "Wednesday - middle of the working week"
		,"Cancer"      : "Wednesday - middle of the working week"
		,"Leo"         : "Wednesday - middle of the working week"
		,"Virgo"       : "Wednesday - middle of the working week"
		,"Libra"       : "Wednesday - middle of the working week"
		,"Scorpio"     : "Wednesday - middle of the working week"
		,"Sagittarius" : "Wednesday - middle of the working week"
		,"Capricorn"   : "Wednesday - middle of the working week"

	}
	,"4" : {
		"Aquarius"     : "Thursday is almost Friday"
		,"Pisces"      : "Thursday is almost Friday"
		,"Aries"       : "Thursday is almost Friday"
		,"Taurus"      : "Thursday is almost Friday"
		,"Gemini"      : "Thursday is almost Friday"
		,"Cancer"      : "Thursday is almost Friday"
		,"Leo"         : "Thursday is almost Friday"
		,"Virgo"       : "Thursday is almost Friday"
		,"Libra"       : "Thursday is almost Friday"
		,"Scorpio"     : "Thursday is almost Friday"
		,"Sagittarius" : "Thursday is almost Friday"
		,"Capricorn"   : "Thursday is almost Friday"

	}
	,"5" : {
		"Aquarius"     : "Happy Friday!!!"
		,"Pisces"      : "Happy Friday!!!"
		,"Aries"       : "Happy Friday!!!"
		,"Taurus"      : "Happy Friday!!!"
		,"Gemini"      : "Happy Friday!!!"
		,"Cancer"      : "Happy Friday!!!"
		,"Leo"         : "Happy Friday!!!"
		,"Virgo"       : "Happy Friday!!!"
		,"Libra"       : "Happy Friday!!!"
		,"Scorpio"     : "Happy Friday!!!"
		,"Sagittarius" : "Happy Friday!!!"
		,"Capricorn"   : "Happy Friday!!!"
 
	}
	,"6" : {
		"Aquarius"     : "Relaxing day off..."
		,"Pisces"      : "Relaxing day off..."
		,"Aries"       : "Relaxing day off..."
		,"Taurus"      : "Relaxing day off..."
		,"Gemini"      : "Relaxing day off..."
		,"Cancer"      : "Relaxing day off..."
		,"Leo"         : "Relaxing day off..."
		,"Virgo"       : "Relaxing day off..."
		,"Libra"       : "Relaxing day off..."
		,"Scorpio"     : "Relaxing day off..."
		,"Sagittarius" : "Relaxing day off..."
		,"Capricorn"   : "Relaxing day off..."

	}
}

console.log(horoscope[new Date().getDay()])

//вывести погоду на неделю в цикле
var weather = {
	"Sunday" : {
		"Weather" : {
			"temperature" : "-4; -7"
			,"wind"       : "6 m/s"
			,"humidity"   : "71 %"
		}	
	}
	,"Monday" : {
		"Weather" : {
			"temperature" : "-2; -4"
			,"wind"       : "10 m/s"
			,"humidity"   : "73 %"
		}	
	}
	,"Tuesday" : {
		"Weather" : {
			"temperature" : "-3; -7"
			,"wind"       : "2 m/s"
			,"humidity"   : "76 %"
		}	
	}
	,"Wednesday" : {
		"Weather" : {
			"temperature" : "-4; -8"
			,"wind"       : "5 m/s"
			,"humidity"   : "82 %"
		}	
	}
	,"Thursday" : {
		"Weather" : {
			"temperature" : "-6; -11"
			,"wind"       : "15 m/s"
			,"humidity"   : "67 %"
		}	
	}
	,"Friday" : {
		"Weather" : {
			"temperature" : "-7; -13"
			,"wind"       : "10 m/s"
			,"humidity"   : "70 %"
		}	
	}
	,"Saturday" : {
		"Weather" : {
			"temperature" : "-9; -13"
			,"wind"       : "20 m/s"
			,"humidity"   : "100%"
		}	
	}
}

for(var id in weather){
	console.log(id, ":", weather[id])
}

console.log(weather["Friday"]["Weather"]["temperature"])

/*3хмерный массив) _ размер 3 уровень массива - простой массив - переменная - артикул, 
и я ее подставляю и вывожу - подставить как ключ, условная конструкция, если фейковый ключ*/

var clothes = {
	"001" : {
		"Good's name" : "Dress"
		,"Price"      : "120$"
		,"Color"      : ["white", "black", "yellow", "red"]
		,"Size"       : ["S", "M", "L", "XL"] 
	}
	,"002" : {
		"Good's name" : "T-shirt"
		,"Price"      : "95$"
		,"Color"      : ["grey", "green", "white"]
		,"Size"       : ["M", "L", "XL", "XXL"] 
	}
	,"003" : {
		"Good's name" : "Skirt"
		,"Price"      : "87$"
		,"Color"      : ["blue", "red", "white", "black"]
		,"Size"       : ["S", "M", "L", "XL"] 
	}
	,"004" : {
		"Good's name" : "Trouses"
		,"Price"      : "110$"
		,"Color"      : ["black", "white", "grey", "white"]
		,"Size"       : ["XXS", , "XS", "S", "M", "L", "XL"] 
	}
}



var productItem = "001";
for(var id in clothes){
	if (id == productItem){
		console.log (clothes[id])
	}
	else {
		console.log("Product item wasn't found. Please change id and try again.")
	}
} // почему на выходе получаю нужный товар и сообщение, что продукт не найден?









