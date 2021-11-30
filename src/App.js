import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About';
import AllMeals from './components/AllMeals/AllMeals';
// import Social from './components/Social/Social';
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <AllMeals />
      <Order />
      {/* <Social /> */}
    </div>
  );
}

export default App;
