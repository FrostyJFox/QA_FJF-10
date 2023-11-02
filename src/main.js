// main.js
import { fetchCountries } from './fetchCountries.js';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce'

const searchBox = document.getElementById('search-box');
const countryList = document.getElementById('country-list');
const countryInfo = document.getElementById('country-info');

searchBox.addEventListener('input', debounce(onSearch, 300));

function onSearch() {
    const searchQuery = searchBox.value.trim();

    if (searchQuery === '') {
        clearResults();
        return;
    }

    fetchCountries(searchQuery)
        .then((countries) => {
            console.log('Countries:', countries);
            if (countries.length === 1) {
                displayCountryInfo(countries[0]);
            } else if (countries.length >= 2 && countries.length <= 10) {
                displayCountryList(countries);
            } else if (countries.length > 10) {
                Notiflix.Notify.failure('Too many matches found. Please enter a more specific name.');
                clearResults();
            } else {
                Notiflix.Notify.failure('Oops, there is no country with that name.');
                clearResults();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            Notiflix.Notify.failure('Oops, there is no country with that name.');
            clearResults();
        })

        .catch((error) => {
            Notiflix.Notify.failure('Oops, there is no country with that name.');
            clearResults();
        });

    }
function clearResults() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}

function displayCountryInfo(country) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name.official}">
        <h2>${country.name.official}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population.toLocaleString()}</p>
        <p>Languages: ${country.languages.map(lang => lang.name).join(', ')}</p>
    `;
}

function displayCountryInfo(country) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name.official}">
        <h2>${country.name.official}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population.toLocaleString()}</p>
        <p>Languages: ${country.languages.map(lang => lang.name).join(', ')}</p>
    `;
}
