const countries_array= ['India','Sweden','Pakistan','Srilanka','Australia']
let searching_index = countries_array.findIndex
(countries => countries === "Srilanka");
console.log(searching_index); 
console.log(countries_array[searching_index]);