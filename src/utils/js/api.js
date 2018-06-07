














// export const getCity = async (cityName) => {
// 	const ApiKey = '9c851ab6006c9f489db83a26efadf5c4';
// 	try {
// 		const requestToUpdate = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${ApiKey}&units=metric`);
// 		const data = await requestToUpdate.json();
// 		return data;
// 	} catch (err) {
// 		console.log(err)
// 	}
// }

// export const updateCity = async (id) => {
// 	const ApiKey = '9c851ab6006c9f489db83a26efadf5c4';
// 	try {
// 		const requestToUpdate = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${ApiKey}&units=metric`);
// 		const data = await requestToUpdate.json();
// 		return data;
// 	} catch (err) {
// 		console.log(err)
// 	}
// }