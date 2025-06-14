const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?contentType=csv&unitGroup=us&aggregateHours=24&location=Washington%2CDC%2CUSA&shortColumnNames=false';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '74393a9dc6mshe60df839b6d708ap1940c5jsn2ff7d7389924',
		'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com'
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