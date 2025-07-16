const url = 'https://open-weather13.p.rapidapi.com/Forecast?latitude=40.730610&longitude=-73.935242&lang=EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '74393a9dc6mshe60df839b6d708ap1940c5jsn2ff7d7389924',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

async function call() {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
};