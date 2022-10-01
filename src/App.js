
import './App.css';
import NetflixOriginals from './Components/NEtflix_og/NetflixOriginals';
import TopRated from './Components/Top-rated/TopRated';
import TrendingNow from './Components/Trendng_now/TrendingNow';
import Comedy from "./Components/Comedy/Comedy"
import Horror from './Components/Horror/HorrorMovies';
import Documentary from './Components/Documentaries/Documentary';
import Romance from "./Components/Romance/Romance";
import HorrorMovies from './Components/Horror/HorrorMovies';
import Navbar from './Components/Navbar';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      {/* <h1>Welcome to Netflix Clone.</h1> */}
      <NetflixOriginals/>
      <TrendingNow/>
      <TopRated/>
      <Comedy/>
      {/* <HorrorMovies/> */}
      <Documentary/>
      <Romance/>
    </div>
    
  );
}

export default App;
