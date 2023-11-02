export async function fetchCountries(name) {
    const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,flags';
    const response = await fetch(`${baseUrl}${name}?fields=name,official,capital,population,flags.svg,languages`);
    
    if (!response.ok) {
        console.error('Error response:', response.status, response.statusText);
        throw new Error('Country not found');
    }

    const data = await response.json();
    console.log('API Response:', data);
    return data;
}