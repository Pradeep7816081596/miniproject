function getweather(){
    let city=document.getElementById("city")

showweather(city.value)
}
async function showweather(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'deacfa879cmsh6f5ab53b7855531p1d8ccejsn3c810f646568',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);

    if(!response.ok){
    throw new Error("weather not display")

} 
	const result = await response.json()
   getdata(result)
} catch (error) {
	console.error(error);
}
}
function getdata(result){
    let item=document.getElementById('main')
    item.innerHTML=
    ` <p>city:${result.name}</p>
    <p>temperature:${result.main.temp}</p>

    `
  


    
}