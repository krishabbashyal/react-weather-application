import './App.css';

async function getData() {
  let data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Texarkana&appid=6d4f5ac82e55cbf44a1ff5c499b60765&units=imperial')
  let response = await data.json()
  return response
}

console.log(getData())


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
