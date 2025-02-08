import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

interface Forecast {
    date : string
    temperatureC : number;
    temperatureF : number;
    summary : string; 
}

interface WeatherState {

    forecasts: Forecast[] | null;
    loading: boolean;
    error: string | null;
}
//async action request

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async () => {
    const response = await fetch("weatherforecast");
    if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();

});

const initialState : WeatherState = {
  forecasts: null,
  loading: false,
  error: null
}


const weatherSlice = createSlice({

    name:"weather",

    initialState,

    reducers: {},

    extraReducers: (builder)=>{
        builder
        .addCase(fetchWeather.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchWeather.fulfilled, (state, action : PayloadAction<Forecast[]>)=>{
            state.loading = false;
            state.forecasts = action.payload;
        })
        .addCase(fetchWeather.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || "Error loading"
        })
    }

})

export default weatherSlice.reducer;