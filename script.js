const url = 'https://meteostat.p.rapidapi.com/point/monthly?lat=52.5244&lon=13.4105&alt=43&start=2020-01-01&end=2020-12-31';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '74393a9dc6mshe60df839b6d708ap1940c5jsn2ff7d7389924',
		'x-rapidapi-host': 'meteostat.p.rapidapi.com'
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
}