'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// NOTE: OLD SCHOOL METHOD using XML

// IMPORTANT: 260: AJAX call
console.log('-----AJAX call-----');
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `  <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${+(
//               data.population / 1000000
//             ).toFixed()} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('philippines');

// IMPORTANT: 263 Promises + Fetch API
console.log('------ Promises + Fetch API-----');

// NOTE: What is a Promise?
// Promise -> an object that is used as a placeholder for the future result of an asynchronous operation. IN SHORT: a container for future value
// Instead of Nesting callbacks, we can *chain promises (escaping callback hell)
// no longer need to rel on events and callbacks passed into async functions to handle async result
// An ES6 feature (2015)

const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

// IMPORTANT: 264: Consuming a Promise
console.log('-----Consuming a Promise -----');

// Render a country
const renderCountry = function (data, className = '') {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0]?.name;

  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${flag}" />
      <div class="country__data">
        <h3 class="country__name">${name}</h3>
        <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${language || 'Unknown'}</p>
        <p class="country__row"><span>💰</span>${currency || 'Unknown'}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

// convert json
const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg}: (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  // COUNTRY 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      console.log('Main Country Data:', data[0]); // Inspect the response
      const country = data[0];

      // Validate main country data
      if (!country || !country.name || !country.name.common) {
        throw new Error('Invalid main country data');
      }
      renderCountry(country);

      const neighborCode = country.borders?.[0];
      if (!neighborCode) {
        throw new Error('No neighbor found!');
      }

      // COUNTRY 2: Fetch the neighboring country by its code
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighborCode}`);
    })
    .then(data => {
      console.log('Neighbor Country Data:', data);
      const neighbor = data[0];
      // const neighbor = 'jskdjsdkl';
      //(optionl) Validate neighbor country data
      if (!neighbor || !neighbor.name || !neighbor.name.common) {
        throw new Error('Invalid neighbor country data');
      }

      renderCountry(neighbor, 'neighbor');
    })
    .catch(err => {
      console.error(`${err}`);
      renderError(`Oops, something went wrong! ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  countriesContainer.innerHTML = '';
  getCountryData('philippines');
});

// IMPORTANT: 270: The event loop
console.log('------The event loop------');

// NOTE: UNCOMMENT to see the LOGS
// console.log('Start Test');
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);

// Promise.resolve('resolved Promise1').then(result => {
//   console.log(result);
// });

// Promise.resolve('resolved Promise2').then(result => {
//   for (let i = 0; i < 100; i++) {}
//   console.log(result);
// });

// console.log('Test End');

// ?RESULT
// Start Test
// Test End
// resolved Promise1 //? microtask queue (1st to execute over callback queue)
// resolved Promise2 //? may take more time if there is heavy calculation
// 0 sec timer //? callback queue is least priority on the event loop

// IMPORTANT: 271: Building a simple Promise
console.log('------Building a simple Promise------');

const myPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You won!'); //* pass the fulfilled value to be consumed by the `.then` handler
    } else {
      reject(new Error('You lose!')); //* pass the rejected value to be consumed by the `.catch` handler
    }
  }, 2000);
});

myPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// NOTE: Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

// * Promise chain
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('And waited for additional 1 second');
  });

// * Immediate promise calls
Promise.resolve('IMMEDIATELY RESOLVED').then(res => console.log(res));
Promise.reject(new Error('IMMEDIATELY REJECT')).catch(err => console.log(err));

// IMPORTANT: 271: Promisifying the Geologication API
console.log('------Promisifying the Geologication API------');

const getPosition = function () {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(resolvedValue => console.log(resolvedValue));

// NOTE: gets my currentlocation and display the info
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryCode}`);

      return fetch(`https://restcountries.com/v2/name/${data.countryCode}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);

// IMPORTANT: 271: Async Await
console.log('------Async Await------');

const getPosition2 = function () {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI2 = async function () {
  try {
    //* GEOLOCATION
    const pos = await getPosition2();
    const { latitude: lat, longitude: lng } = pos.coords;

    //* REVERSE GEOCODING
    //* The reverse geocoding API (https://api.bigdatacloud.net/data/reverse-geocode-client) provides details about the location based on latitude and longitude.
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );

    // Handle errors manually for 404 or other non-OK responses
    if (!resGeo.ok)
      throw new Error(`Problem with geocoding (${resGeo.status})`);

    const dataGeo = await resGeo.json();
    // console.log('Reverse Geocoding Data:', dataGeo);

    // Check if countryCode exists in the response
    if (!dataGeo.countryCode) {
      throw new Error('Country code not found in geocoding response');
    }

    //* COUNTRY DATA
    //* The REST Countries API (https://restcountries.com/v3.1/alpha/{code}) provides detailed information about a country based on its country code.
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${dataGeo.countryCode}`
    );

    // Handle errors manually for 404 or other non-OK responses
    if (!res.ok) throw new Error(`Country not found (${res.status})`);

    const data = await res.json(); // Await the JSON parsing
    console.log('Country Data:', data[0]);

    // Render the first country in the response
    renderCountry(data[0]);

    // return `you are in ${dataGeo.city}, ${dataGeo.countryCode}`; //*The same as below
    return `you are in ${dataGeo.city}, ${data[0].cca2}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong: ${err.message}`);

    //* Reject promise returned from async function
    //* Rethrowing the error in the catch block is essential for maintaining proper error handling in asynchronous code. It ensures that errors are propagated correctly, preventing the Promise from being mistakenly resolved and avoiding unexpected behavior like logging undefined.
    throw err;
  }
};

console.log('1. Will get the location');

// const city = whereAmI2();
// console.log(city);

// *handle the resolved value from the async function

// NOTE: USING PROMISE CHAINING
// whereAmI2()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err}`))
//   .finally(() => console.log('3. Finished getting location'));

// *NOTE: USING ASYNC (RECOMMEDNED)
(async function () {
  try {
    const city = await whereAmI2();
    console.log(`2: ${city}`);
  } catch (error) {
    console.error(`2: ${error.message}`);
  }
  console.log('3. Finished getting location');
})();

// IMPORTANT:277: reTURNING Promises in Parallel
console.log('---reTURNING Promises in Parallel-----');

const get3Countries = async function (c1, c2, c3) {
  try {
    // NOTE: RUN IN SEQUENCE
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    //*NOTE: RUN IN PARALLEL
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(country => country[0].capital[0]));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('uk', 'canada', 'philippines');

// IMPORTANT:277: Other Promises Combinators: race, allSettled and any
console.log('---Other Promises Combinators: race, allSettled and any-----');

// NOTE: Promise.race()
// 1st settled Promises wins the race
// short circuits if either resolved or reject is returned
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/uk`),
    getJSON(`https://restcountries.com/v3.1/name/france`),
  ]);

  console.log(res[0].name.common);
})();

const timeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

(async function () {
  try {
    const res = await Promise.race([
      getJSON(`https://restcountries.com/v3.1/name/vietnam`),
      timeout(2),
    ]);
    console.log(res[0].name.common);
  } catch (error) {
    console.error(error);
  }
})();

//* NOTE: Promise.allSettled
// returns all settled promises whether rejected or not;
// never shortcuits

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//* NOTE: Promise.any [ES2021]
// returns the 1st fulfilled promise
// rejected promises will be ignored
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
