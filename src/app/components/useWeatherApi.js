import { useState } from 'react';

const API_KEY = "67341a98943a430cbe335623252702";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const useWeatherApi = () => {
    const [cities, setCities] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async (cityName) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `${BASE_URL}?key=${API_KEY}&q=${cityName}&aqi=no`
            );

            if (!response.ok) {
                throw new Error("City not found");
            }

            const data = await response.json();

            if (!cities.some(city => city.location.name === data.location.name)) {
                setCities(prevCities => [...prevCities, data]);
            }

            return true;
        } catch (error) {
            setError(error.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { cities, setCities ,fetchWeather, error, loading , setLoading };
}