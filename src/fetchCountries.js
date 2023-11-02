// fetchCountries.js
export default async function fetchCountries(name) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Country not found: ${name}`);
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
