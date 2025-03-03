const cities = ["Manila", "Cebu", "Bacolod", "London", "Berlin"];

// Destructruing
const [manila, cebu, , bacolod, , , dubai = "Dubai"] = cities;
console.log(manila); //Manila
console.log(bacolod); //London
console.log(dubai); //Dubai  -> default if cities[x] is undefined
