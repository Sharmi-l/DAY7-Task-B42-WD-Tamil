//e.Print the country which uses US Dollars as currency:

let request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all', true)

request.send();

request.onload = function () {
   
    let data = JSON.parse(request.response)
    console.log(data);

    var res = data.filter((data) => data?.currencies?.USD?.symbol ==  "$");
    var res1 = res.map((data) => data.name.common);
    console.log("Countries using as USDollar as currency :",res1)


      }


// OUTPUT:

// Countries using as USDollar as currency : (20)

//  ['Ecuador', 'British Indian Ocean Territory', 'Puerto Rico', 'Timor-Leste', 'Cambodia', 'United States Virgin Islands', 'Micronesia', 'American Samoa', 'Marshall Islands', 'Bahamas', 'Northern Mariana Islands', 'Guam', 'El Salvador', 'Panama', 'United States', 'Palau', 'Turks and Caicos Islands', 'British Virgin Islands', 'United States Minor Outlying Islands', 'Caribbean Netherlands']

// 0: "Ecuador"
// 1: "British Indian Ocean Territory"
// 2: "Puerto Rico"
// 3: "Timor-Leste"
// 4: "Cambodia"
// 5: "United States Virgin Islands"
// 6: "Micronesia"
// 7: "American Samoa"
// 8: "Marshall Islands"
// 9: "Bahamas"
// 10: "Northern Mariana Islands"
// 11: "Guam"
// 12: "El Salvador"
// 13: "Panama"
// 14: "United States"
// 15: "Palau"
// 16: "Turks and Caicos Islands"
// 17: "British Virgin Islands"
// 18: "United States Minor Outlying Islands"
// 19: "Caribbean Netherlands"

/*.................................................................................................................................*/

    // data.filter((element) => {
    //     for(let key in element.currencies){
    //          if(element.currencies[key].USD = {name: 'United States dollar', symbol: '$'}){
    //            console.log(element.name.common)
    //          }
    //      }
    //  })
    