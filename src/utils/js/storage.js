







































// import { getCity, updateCity } from './api';
// import localForage from 'localforage';

// let myCities = [];

// let listeners = [];

// const publish = () => {
//   listeners.forEach(listener => listener());
// };

// export const subscribe = (callback) => {
//   listeners.push(callback);
// };

// const initialize = () => {

//   localForage.getItem('cities').then((cities) => {
//     if (cities) {
//       myCities = cities;
//       console.log('initialize()')
//       publish();
//     }
//   }).catch(err => console.log('There is a problem with proper LocalForage set: ' + err))
// }

// initialize();

// const setLocalForage = () => {
//   localForage.setItem('cities', myCities).then((val) => {
//     console.log('Properly set data in LocalForage')
//   }).catch(err => console.log('There is a problem with proper LocalForage set: ' + err));
// }

// export const addCity = (e) => {
//   e.preventDefault();
//   const cityname = e.target.elements.city_name.value.trim();
//   getCity(cityname).then((res) => {
//     const city = {
//       id: res.id,
//       name: res.name,
//       temp: res.main.temp,
//       wind: res.wind.speed,
//     }
//     myCities.push(city);
//     publish();
//     setLocalForage();
//   })
// }
// export const getCityData = () => {
//   let cityData = [...myCities];
//   console.log('getCityData()');
//   return cityData;
// }

// export const removeCity = (cityToRemove) => {
//   const myData = myCities.filter((city) => {
//     return cityToRemove !== city.id
//   })
//   console.log('remove');
//   myCities = myData;
// }

// export const updateCityData = (id) => {

//   updateCity(id).then((res) => {
//     const dataCities = [...myCities];

//     const index = dataCities.findIndex((city) => {
//       if (city.id === res.id) {
//         return true
//       } else {
//         return false
//       }
//     })
//     dataCities[index] = {
//       id: res.id,
//       name: res.name,
//       temp: res.main.temp,
//       wind: res.wind.speed
//     }
//     myCities = dataCities;
//     publish();
//     setLocalForage();
//   });
// }
