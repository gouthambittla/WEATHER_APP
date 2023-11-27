const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "d344960a33d1eb7e4e140134dce4efc5";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector('.searchbtn');
const icon = document.querySelector(".logo img")



async function checkweather(city) {
    try {
        const res = await fetch(apiurl + city + `&appid=${apikey}`);
        const data = await res.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        if (data.weather[0].main == "Clouds") {
            icon.src = "./images/clouds.png";
            document.querySelector(".status").innerHTML = "Cloudy";
        } else if (data.weather[0].main == "Rain") {
            document.querySelector(".status").innerHTML = "Rain";
            icon.src = "./images/rain.png";
        } else if (data.weather[0].main == "Clear") {
            document.querySelector(".status").innerHTML = "Clear";
            icon.src = "./images/clear.png";
        } else if (data.weather[0].main == "Mist") {
            document.querySelector(".status").innerHTML = "Mist";
            icon.src = "./images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            document.querySelector(".status").innerHTML = "Snow";
            icon.src = "./images/snow.png";
        } else if (data.weather[0].main == "Drizzle") {
            document.querySelector(".status").innerHTML = "Drizzle";
            icon.src = "./images/clear.png";
        }
        document.querySelector(".weather-info").style.display = "block"

    } catch (error) {
        console.log(error + "the city is not found")
    }



}

searchbtn.addEventListener('click', () => {
    checkweather(search.value);
})


















// const searchValue = document.querySelector(".search input")
// const searchbtn = document.querySelector(".search img")
// const icon = document.querySelector(".logo img")
// async function checkweather(city) {
//     console.log(city)
//     try {
//         const res = await fetch(apiurl + city + `&appid=${apikey}`);
//         const data = await res.json();
//         console.log(data)
//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         if (data.weather[0].main == "Clouds") {
//             icon.src = "./images/clouds.png";
//             document.querySelector(".status").innerHTML = "Cloudy";
//         } else if (data.weather[0].main == "Rain") {
//             document.querySelector(".status").innerHTML = "Rain";
//             icon.src = "./images/rain.png";
//         } else if (data.weather[0].main == "Clear") {
//             document.querySelector(".status").innerHTML = "Clear";
//             icon.src = "./images/clear.png";
//         } else if (data.weather[0].main == "Mist") {
//             document.querySelector(".status").innerHTML = "Mist";
//             icon.src = "./images/mist.png";
//         } else if (data.weather[0].main == "Snow") {
//             document.querySelector(".status").innerHTML = "Snow";
//             icon.src = "./images/snow.png";
//         } else if (data.weather[0].main == "Drizzle") {
//             document.querySelector(".status").innerHTML = "Drizzle";
//             icon.src = "./images/clear.png";
//         }

//     } catch (error) {
//         console.log(error)
//     }
// }
// searchbtn.addEventListener("click", () => {
//     checkweather(searchValue.value);
// })



