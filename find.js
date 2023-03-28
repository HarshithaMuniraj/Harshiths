const countries = ['India','Sweden','Pakistan','Srilanka','Australia']
var firstcountries = countries.find(function(element){
    return element.length = 1;
});
console.log(firstcountries);