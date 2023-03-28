const countries = ['India','Sweden','Pakistan','Srilanka','Australia',]
var filteredcountries = countries.filter(function(word){
    return word[0] === 'E'
});
console.log(filteredcountries)