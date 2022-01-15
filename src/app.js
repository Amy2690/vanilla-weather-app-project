function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "1c00a68e706b8cd07e7a56d3965e92f9";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
