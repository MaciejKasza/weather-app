import React from "react";

export const formatDate = (date) => {
  return date.toLocaleDateString(navigator.language, {
    weekday: "long", // Pełna nazwa dnia (Thursday)
    day: "2-digit", // Dwucyfrowy dzień (31)
    month: "short", // Skrócona nazwa miesiąca (Aug)
  });
};

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};
