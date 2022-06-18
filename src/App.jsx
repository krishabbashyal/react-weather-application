import './App.css';


let API = process.env.React_App_API_KEY


async function getData() {
  let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Texarkana&appid=${API}&units=imperial`)
  let response = await data.json()
  return response
}

getData().then(response => console.log((response)))


function App() {

  
  

  return (
    <div className="App">
      <header className="App-header">
       <h2>Texarkana</h2>
       <h1>96°F</h1>
       <p>scattered clouds</p>
       <p>Low: 92°F</p>
       <p>High: 95°F</p>
       <p>Feels Like: 105°F</p>
       <p>Humidity: 50%</p>
       <h3>{}</h3>
      </header>
    </div>
  );
}

export default App;
