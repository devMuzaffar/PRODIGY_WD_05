const getWeather = async (city) => {
  if (city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4f9f778866msh2d63fe61654e0fcp11feefjsnb884938ead14",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error;
      }

      const resultjson = await response.text();
      const result = JSON.parse(resultjson);
      const {
        cloud_pct,
        temp,
        feels_like,
        humidity,
        min_temp,
        max_temp,
        wind_speed,
        wind_degrees,
      } = result;

      const sunriseDate = new Date(result.sunrise * 1000).toLocaleTimeString();
      const sunsetDate = new Date(result.sunset * 1000).toLocaleTimeString();

      return {
        cloud_pct,
        temp,
        feels_like,
        humidity,
        max_temp,
        min_temp,
        wind_speed,
        wind_degrees,
        sunsetDate,
        sunriseDate,
      };
    } catch (error) {
      alert("Please Write Correctly");
      return null;
    }
  } else {
    alert("Please Type your correct City/State/Country Name!");
    return null;
  }
};

export default getWeather;
