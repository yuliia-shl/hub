import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Provides from './components/Provides/Provides';
import Product from './components/Product/Product';
import HubBusiness from './components/HubBusiness/HubBusiness';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';
import Reasons from './components/Reasons/Reasons';
import FAQ from './components/FAQ/FAQ';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Provides />
        <Product />
        <HubBusiness />
        <Partners />
        <Modules />
        <Reasons />
        <FAQ />
        <MoreInfo />
      </main>
      <Footer />
    </>
  );
}

export default App;
