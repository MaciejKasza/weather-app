import icon_01d from "../assets/weatherIcons/01d.png";
import icon_01n from "../assets/weatherIcons/01d.png";
import icon_02d from "../assets/weatherIcons/02d.png";
import icon_02n from "../assets/weatherIcons/02n.png";
import icon_03d from "../assets/weatherIcons/03d.png";
import icon_03n from "../assets/weatherIcons/03n.png";
import icon_04d from "../assets/weatherIcons/04d.png";
import icon_04n from "../assets/weatherIcons/04n.png";
import icon_09d from "../assets/weatherIcons/09d.png";
import icon_09n from "../assets/weatherIcons/09n.png";
import icon_10d from "../assets/weatherIcons/10d.png";
import icon_10n from "../assets/weatherIcons/10n.png";
import icon_11d from "../assets/weatherIcons/11d.png";
import icon_11n from "../assets/weatherIcons/11n.png";
import icon_13d from "../assets/weatherIcons/13d.png";
import icon_13n from "../assets/weatherIcons/13n.png";
import icon_50d from "../assets/weatherIcons/50d.png";
import icon_50n from "../assets/weatherIcons/50n.png";

export const getWeaterIcon = (id, darkMode) => {
  switch (id) {
    case "01n":
      return icon_01n;
    case "01d":
      return icon_01d;
    case "02n":
      return icon_02n;
    case "02d":
      return icon_02d;
    case "03n":
      return icon_03n;
    case "03d":
      return icon_03d;
    case "04n":
      return icon_04n;
    case "04d":
      return icon_04d;
    case "09n":
      return icon_09n;
    case "09d":
      return icon_09d;
    case "10n":
      return icon_10n;
    case "10d":
      return icon_10d;
    case "11n":
      return icon_11n;
    case "11d":
      return icon_11d;
    case "13n":
      return icon_13n;
    case "13d":
      return icon_13d;
    case "50n":
      return icon_50n;
    case "50d":
      return icon_50d;
    default:
      break;
  }
};
