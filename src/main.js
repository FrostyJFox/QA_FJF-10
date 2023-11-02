import fetchCountries from './fetchCountries.js';
import debounce from 'lodash/debounce';
import Notiflix from 'notiflix';

const searchBox = document.getElementById('search-box');
const message = document.getElementById('message');
const countryList = document.getElementById('country-list');
const countryInfo = document.getElementById('country-info');

const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

async function searchCountries() {
  const query = searchBox.value.trim();

  if (query === '') {
    clearResults();
    return;
  }

  try {
    const countries = await fetchCountries(query);

    if (countries.length > 10) {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      clearResults();
    } else if (countries.length >= 2 && countries.length <= 10) {
      renderCountryList(countries);
      clearCountryInfo();
    } else if (countries.length === 1) {
      renderCountryInfo(countries[0]);
    } else {
      Notiflix.Notify.failure('Oops, there is no country with that name.');
      clearResults();
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    Notiflix.Notify.failure('Error fetching data. Please try again.');
  }
}

function clearResults() {
  message.innerHTML = '';
  countryList.innerHTML = '';
  clearCountryInfo();
}

function clearCountryInfo() {
  countryInfo.innerHTML = '';
}

function renderCountryList(countries) {
  countryList.innerHTML = '';
  countries.forEach((country) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<img src="${country.flags.svg}" alt="${country.name.official}"> ${country.name.official}`;
    listItem.addEventListener('click', () => renderCountryInfo(country));
    countryList.appendChild(listItem);
  });
}

function renderCountryInfo(country) {
  message.innerHTML = '';
  countryList.innerHTML = '';
  const flag = `<img src="${country.flags.svg}" alt="${country.name.official}">`;
  const infoHTML = `<h2>${country.name.official}</h2>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Languages: ${country.languages.map((lang) => lang.name).join(', ')}</p>`;
  countryInfo.innerHTML = `${flag}${infoHTML}`;
}
