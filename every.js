const countries = ['India','Sweden','Pakistan','Srilanka','Australia']
    function categorizeCountries(keyword) {
        for (country of countries) {
            if (keyword = 'land') {
                console.log([countries.filter((country) => country.endsWith('land'))])
            }
            else {
                console.log('Country does not Exists')
            }
        } 
    }
    console.log(categorizeCountries(['land']))