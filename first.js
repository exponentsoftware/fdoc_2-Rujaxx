const countries = [
    "ALBANIA",
    "BOLIVIA",
    "CANADA",
    "DENMARK",
    "ETHIOPIA",
    "FINLAND",
    "GERMANY",
    "HUNGARY",
    "IRELAND",
    "JAPAN",
    "KENYA",
  ];


function createArrayOfArrays(array){
    let table = []
    for(let element of array){
        let names= element.toLowerCase();
        table.push([
            names.charAt(0).toUpperCase() + names.slice(1),
            names.substring(0,3).toUpperCase(),
            names.length
        ])
    }
    return table
}
  
  console.log(createArrayOfArrays(countries))