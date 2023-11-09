// fetchCountries.js
export async function fetchCountries(name) {
    const baseUrl = 'https://restcountries.com/v3.1/name/';
    const response = await fetch(`${baseUrl}${name}?fields=name,official,capital,population,flags,languages`);
    
    if (!response.ok) {
        throw new Error('Country not found');
    }

    const data = await response.json();
    return data;
}