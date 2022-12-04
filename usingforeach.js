
//c. Print the following details name, capital, flag using forEach function:

let request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all', true)

request.send();

request.onload = function () {
   
    var data = JSON.parse(request.response)
    console.log(data)

    data.forEach((value) => {

        
        console.log(value.name.common);       // Names
        console.log(value.capital[0]);          //capital
        //console.log(value.flags)            // Flags  
        console.log(value.flags.png);           // Flags  
        
   
    })
} 
 
// OUTPUT:

 /* 
 Mauritania
 Nouakchott
 https://flagcdn.com/w320/mr.png

 Aruba
 Oranjestad
 https://flagcdn.com/w320/aw.png

Argentina
 Buenos Aires
 https://flagcdn.com/w320/ar.png

 Sweden
 Stockholm
 https://flagcdn.com/w320/se.png

 Maldives
 Malé
 https://flagcdn.com/w320/mv.png

 Mexico
 Mexico City
 https://flagcdn.com/w320/mx.png

 New Zealand
 Wellington
 https://flagcdn.com/w320/nz.png

 Ecuador
 Quito
 https://flagcdn.com/w320/ec.png

 Wallis and Futuna
 Mata-Utu
 https://flagcdn.com/w320/wf.png

 Åland Islands
 Mariehamn
 https://flagcdn.com/w320/ax.png

 Montenegro
 Podgorica
 https://flagcdn.com/w320/me.png

 Pakistan
 Islamabad
 https://flagcdn.com/w320/pk.png   */
