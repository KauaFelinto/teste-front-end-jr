import './App.css'
import Header from './components/Header/Header';
import Home from './components/Main/Home';
import Products from './components/Products/Products';
import Parceiros from './components/Parceiros/Parceiros';
import Marcas from './components/Marcas/Marcas';
import Infos from './components/Infos/Infos';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="container">
      <Header />
      <Home />
      <Products />
      <Parceiros />
      <Marcas />
      <Infos />
      <Footer />
    </div>

  )
}

export default App;
