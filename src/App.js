import './App.css';
import Banner from './components/Banner/Banner';
import Constrainter from './components/Constrainter/Constrainter';
import Details from './components/Details/Details';
import Register from './components/Register/Register';
import Boxes from './components/Boxes/Boxes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Constrainter>
        <Details />
        <Register />
        <Boxes />
      </Constrainter>
      <Footer />
    </div>
  );
}

export default App;
