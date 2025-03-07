import React, { useState, useEffect } from "react";

const LiveTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(formattedTime);
    };

    updateTime(); // Ustawienie początkowego czasu
    const interval = setInterval(updateTime, 5000); // Odświeżanie co sekundę

    return () => clearInterval(interval); // Czyszczenie interwału przy odmontowaniu
  }, []);

  return <>{currentTime}</>;
};

export default LiveTime;
