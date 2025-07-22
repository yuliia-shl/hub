import './App.css';
import FAQ from './components/FAQ/FAQ';
import Header from './components/header/Header';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Partners />
      <Modules />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
