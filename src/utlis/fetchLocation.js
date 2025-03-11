const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getCityFromCoordinates = (latitude, longitude) => {
  return fetch(
    `nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data.address) {
        return data.address.city || data.address.town || null;
      }
      return null;
    })
    .catch((error) => {
      console.error("Błąd pobierania miasta:", error);
      return null;
    });
};

export const getCityFromLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject("Geolokalizacja niedostępna");
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      getCityFromCoordinates(latitude, longitude).then(resolve).catch(reject);
    });
  });
};

export const getCityCordsByName = (city) => {
  return new Promise((resolve, reject) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const res = { lat: data[0].lat, lon: data[0].lon };
          resolve(res); // ✅ Poprawne wywołanie resolve
        } else {
          reject("Nie znaleziono miasta");
        }
      })
      .catch((error) => {
        console.error("Błąd pobierania miasta:", error);
        reject(error);
      });
  });
};
