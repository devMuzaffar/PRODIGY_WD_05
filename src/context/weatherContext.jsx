import { createContext, useState } from "react";

export const weatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const [weatherData, setWeatherData] = useState({});

    return <weatherContext.Provider value={{weatherData, setWeatherData}}>
        {children}
    </weatherContext.Provider>
}