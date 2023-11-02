export default async function fetchCountries(name) {
  const response = await fetch(`https://restcountries.com/v2/all/${name}?fields=name,name.official,capital,population,flags.svg,languages`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json();
  return data;
}
