const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries(); 

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');
    // for(const country of countries){
    //     const countryDiv = document.createElement('div');
    //     countryDiv.classList.add('country');
    //     countryDiv.innerHTML = `
    //         <h4>Name: ${country.name.common}</h4>
    //         <p>Official: ${country.name.official}</p>
    //         <p>Area: ${country.area}</p>
    //         <p>Borders: ${country.borders[0]}</p>
    //         <p>Flags: ${country.flags.png}</p>
    //     `
    //     countriesContainer.appendChild(countryDiv);
    // }
    countries.forEach(country =>{
        // console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
                 <h4>Name: ${country.name.common}</h4>
                 <p>Official: ${country.name.official}</p>
                 <p>Area: ${country.area}</p>
                 <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
             `
             countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (code) =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
   const countryDetail = document.getElementById('country-detail');
   countryDetail.innerHTML = `
   <h4>Name: ${country.name.common}</h4>
   <img src="${country.flags.png}">
   `
}