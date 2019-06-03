import React from 'react';
import './App.css';
import temperature from './assets/icons/temperature.png'
import humidity from './assets/icons/humidity.png'
import crops from './assets/icons/crops.png'
import rain from './assets/icons/rain.png'

function TemperatureCard(){
  return (
    <div className="Cards">
      <img className="CardIcons" src={temperature} alt="temperature"></img>
      <h3>Current Temperature</h3>
    </div>
  );
}

function HumidityCard(){
  return (
    <div className="Cards">
      <img className="CardIcons" src={humidity} alt="humidity"></img>
      <h3>Current Humidity</h3>
    </div>
  );
}

function TemperatureGraph(){
  return(
    <div className="Cards">
      <h3>Temperature Graph</h3>
    </div>
  );
}

function HumidityGraph(){
  return(
    <div className="Cards">
      <h3>Humidity Graph</h3>
    </div>
  );
}

function CropPrediction(){
  return(
    <div className="PredictionCards">
      <h3>Crop Prediction</h3>
      <img className="CardIcons" src={crops} alt="crops"></img>
    </div>
  );
}

function RainfallPrediction(){
  return(
    <div className="PredictionCards">
      <h3>Rainfall Prediction</h3>
      <img className="CardIcons" src={rain} alt="rain"></img>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="DataContent">
        <TemperatureCard></TemperatureCard>
        <HumidityCard></HumidityCard> 
        <TemperatureGraph></TemperatureGraph>
        <HumidityGraph></HumidityGraph>
      </div>
      <div className="Prediction">
        <CropPrediction></CropPrediction>
        <RainfallPrediction></RainfallPrediction>
      </div>
    </div>
  );
}

export default App;
