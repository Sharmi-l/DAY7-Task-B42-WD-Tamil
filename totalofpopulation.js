//d.Print the total population of countries using reduce function:

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all', true);

request.send();

request.onload = function () {
   
    var data = JSON.parse(request.response)
    console.log(data);
    
    let sum = data.reduce((acc, cvalue) => acc + cvalue.population, 0)
    console.log(`Total population of the world is : ${sum}`);

}

 //OUTPUT:

 //   Total population of the world is : 7777721563










  