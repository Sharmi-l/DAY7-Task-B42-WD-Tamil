//a.Get all the countries from the Asia continent /region using the Filter function:

let request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all', true)

request.send();

request.onload = function () {
   
    let data = JSON.parse(request.response)
    console.log(data);
    
    let result = data.filter((element)=>element.region==="Asia")
   // console.log(result);

    let asiaFilter = result.map((element) => element.name.common);
    console.log(asiaFilter);

    }


//OUTPUT:

// 0
// : 
// "Maldives"
// 1
// : 
// "Pakistan"
// 2
// : 
// "Malaysia"
// 3
// : 
// "Uzbekistan"
// 4
// : 
// "Singapore"
// 5
// : 
// "Qatar"
// 6
// : 
// "Kazakhstan"
// 7
// : 
// "Bahrain"
// 8
// : 
// "India"
// 9
// : 
// "Macau"
// 10
// : 
// "Syria"
// 11
// : 
// "Kyrgyzstan"
// 12
// : 
// "Palestine"
// 13
// : 
// "Timor-Leste"
// 14
// : 
// "Taiwan"
// 15
// : 
// "South Korea"
// 16
// : 
// "Iraq"
// 17
// : 
// "Cambodia"
// 18
// : 
// "Sri Lanka"
// 19
// : 
// "Israel"
// 20
// : 
// "Tajikistan"
// 21
// : 
// "Azerbaijan"
// 22
// : 
// "Georgia"
// 23
// : 
// "China"
// 24
// : 
// "Thailand"
// 25
// : 
// "Indonesia"
// 26
// : 
// "Turkmenistan"
// 27
// : 
// "Turkey"
// 28
// : 
// "Iran"
// 29
// : 
// "Lebanon"
// 30
// : 
// "Philippines"
// 31
// : 
// "Kuwait"
// 32
// : 
// "Oman"
// 33
// : 
// "Afghanistan"
// 34
// : 
// "Armenia"
// 35
// : 
// "Bangladesh"
// 36
// : 
// "Laos"
// 37
// : 
// "Nepal"
// 38
// : 
// "Myanmar"
// 39
// : 
// "United Arab Emirates"
// 40
// : 
// "Bhutan"
// 41
// : 
// "Jordan"
// 42
// : 
// "Vietnam"
// 43
// : 
// "Brunei"
// 44
// : 
// "Japan"
// 45
// : 
// "Hong Kong"
// 46
// : 
// "Saudi Arabia"
// 47
// : 
// "North Korea"
// 48
// : 
// "Mongolia"
// 49
// : 
// "Yemen"
// length
// : 
// 50
// [[Prototype]]
// : 
// Array(0)
