import './App.css';
import FAQ from './components/FAQ/FAQ';
import Header from './components/header/Header';
import Product from './components/Product/Product';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Product />
      <Partners />
      <Modules />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
