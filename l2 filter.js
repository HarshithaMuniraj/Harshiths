function alphaCountry() {
    const countries = ['India','Sweden','Pakistan','Srilanka','Australia']
    const finalObj = [];
    let alphaIndexer = 0;

    while (alphaIndexer !== countries.length) {
    const startsWith = countries.filter((obj) => obj.name.startsWith(countries[alphaIndexer]))
    finalObj.push({'letter': countries[alphaIndexer], 'count': startsWith.length + ' times'})
    alphaIndexer++
  }

  return finalObj;
  
}
