import './App.css';
import Interior from './Components/Interior';
import Myheader from './Components/Myheader';
import Welcome from './Components/Welcome';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Gallery from './Components/Gallery';
import Around from './Components/Around';
import Discover from './Components/Discover';
import Warm from './Components/Warm';
import Subscribe from './Components/Subscribe';
import Myfooter from './Components/Myfooter';

function App() {
  return (
    <div>
    <Myheader/>
    <Welcome/>
    <Interior/>
    <Gallery/>
    <Around/>
    <Discover/>
    <Warm/>
    <Subscribe/>
    <Myfooter/>
    </div>
  );
}

export default App;
