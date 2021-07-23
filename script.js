
function fetchapi() {

   const city = document.getElementById("searchbar").value;
   const apikey = "c9167a5e0b4d07533c831bc6f538473e";
   const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

   fetch(api)
      .then((response) => {
         if (!response.ok) {
            throw new Error(document.getElementById("errorText").innerText = "Wrong location!")
         }
         document.getElementById("errorText").innerText = "";
         return response.json();
      })
      .then((data) => this.weatherInfo(data));

}

function weatherInfo(data) {

   const { name } = data;
   const { speed } = data.wind;
   const { temp, pressure, humidity } = data.main;
   const { description } = data.weather[0];


   document.getElementById("cityName").innerText = `${name}`;
   document.getElementById("temperature").innerText = `${temp}°C`;
   document.getElementById("weathByWords").innerText = `${description}`;

   document.getElementById("windsValue").innerText = `${speed}km/h`;
   document.getElementById("humidityValue").innerText = `${humidity}%`;
   document.getElementById("pressureValue").innerText = `${pressure}hPa`;

   document.getElementById("searchbar").value = "";

   displayInfo();


}

document.getElementById("searchbar").addEventListener("keyup", function (event) {

   if (event.key === "Enter") {
      fetchapi();
   }

});

function displayInfo() {

   document.getElementById("more-info").style.display = "flex";


}

