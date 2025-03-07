// Funkcja do grupowania danych według dnia i wyboru max temp + najczęstszego ikona
export const processDailyWeatherData = (data) => {
  const dailyData = {};

  data.list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0]; // Pobieramy tylko datę (YYYY-MM-DD)
    const tempMax = entry.main.temp_max;
    const icon = entry.weather[0].icon;

    if (!dailyData[date]) {
      dailyData[date] = { maxTemp: tempMax, icons: [icon] };
    } else {
      dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, tempMax);
      dailyData[date].icons.push(icon);
    }
  });

  // Wybieramy najczęściej występującą ikonę dla każdego dnia
  return Object.keys(dailyData).map((date) => {
    const iconCounts = dailyData[date].icons.reduce((acc, icon) => {
      acc[icon] = (acc[icon] || 0) + 1;
      return acc;
    }, {});

    const mostCommonIcon = Object.keys(iconCounts).reduce((a, b) =>
      iconCounts[a] > iconCounts[b] ? a : b
    );

    return {
      date,
      maxTemp: dailyData[date].maxTemp,
      icon: mostCommonIcon,
    };
  });
};

export const processHourlyWeatherData = (data) => {
  let hourlyData = {};

  hourlyData = data.list.slice(0, 5).map((item) => ({
    hour: item.dt_txt.split(" ")[1].slice(0, 5),
    dt: item.dt,
    temp: item.main.temp,
    icon: item.weather[0].icon,
    wind: item.wind,
  }));

  console.log(hourlyData);
  return hourlyData;
};
