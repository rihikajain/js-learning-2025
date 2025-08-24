
const button = document.getElementById('search-button')
const input = document.getElementById('city-input')
const cityName = document.getElementById('city-name')
const cityTemp = document.getElementById('city-temp')
const cityTime = document.getElementById('city-time')

input.addEventListener('input', validateForm)
function validateForm() {
  if (input.value == "") {
    alert("Name must be filled out");

  }
  else button.disabled = false
}

async function getData(cityname) {
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=a69b1e2b96b944e482850248252408&q=${cityname}&aqi=yes`)
  return await promise.json()
}

button.addEventListener('click', async () => {
  const value = input.value
  const result = await getData(value)
  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
  cityTime.innerText = `${result.location.localtime}`
  cityTemp.innerText = `${result.current.temp_c}`
})

////////////////////////////////////////////////////////////////////

const locName = document.getElementById('loc-name')
const locTemp = document.getElementById('loc-temp')
const locTime = document.getElementById('loc-time')
const buttongetlocation = document.getElementById('get-location-button')
buttongetlocation.addEventListener('click', async () => {
  navigator.geolocation.getCurrentPosition(gotLoc, failedLoc)
})

async function getDataLL(lat, long) {
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=a69b1e2b96b944e482850248252408&q=${lat},${long}&aqi=yes`)
  return await promise.json()
}
async function gotLoc(position) {
  const result = await getDataLL(position.coords.latitude, position.coords.longitude)
  console.log(result)
  locName.innerText = `${result.location.name},${result.location.country}`
  locTime.innerText = `${result.location.localtime}`
  locTemp.innerText = `${result.current.temp_c}`
}

function failedLoc() {
  console.log('error!!!')
}

