const loadCountris = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries => {
    // const countriesContainer = document.getElementById('countries-container');
    // for(const country of countries){
        // const countryDiv = document.createElement('div');           
        // countryDiv.innerHTML = `
        //     <h3>Country Name:</h3>
        //     <p>official Name:</p>
        //     <p>Uro Name:</p>
        // `;
        // countriesContainer.appendChild(countriesDiv)

        const countriesContainer = document.getElementById('countries-container');
        countries.forEach(country => {
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('country-design');
            countryDiv.innerHTML = `
                <h3>Country Name: ${country.name.common}</h3>
                <p>official Name:</p>
                <p>Capital: ${country.capital ? country.capital[0]: 'no capital'}</p>
                <p>Uro Name:</p>
                <button onclick="loadCountrisDetails('${country.cca2}')">Details</button>
            `;
            countriesContainer.appendChild(countryDiv);
        })

        
    }
const loadCountrisDetails = (code) => {
//https://restcountries.com/v3.1/alpha/{code}
const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country details',code);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetails(data[0]))
}
const displayCountriesDetails = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h2> Details: ${country.name.common}</h2>
        <img src="${country.flags.png}">
        
    `;

}
loadCountris();