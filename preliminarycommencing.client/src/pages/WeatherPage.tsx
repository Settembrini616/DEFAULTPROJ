import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { RootState } from "../store/store";
import { fetchWeather } from "../store/weatherSlice";

const WeatherPage = ()=> {
    const dispatch = useDispatch();
    
    const {forecasts, loading, error} = useSelector((state:RootState)=> state.weather);

    useEffect(()=>{
        dispatch(fetchWeather() as any);
    }, [dispatch]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!forecasts) return <p>No data</p>

    return (
        <div>
            <h1>Weather Forecast</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map((forecast) => (
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
           
    )

}

export default WeatherPage;
