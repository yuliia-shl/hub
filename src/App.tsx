import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HubBusiness from './components/HubBusiness/HubBusiness';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';
import Reasons from './components/Reasons/Reasons';
import FAQ from './components/FAQ/FAQ';
import MoreInfo from './components/MoreInfo/MoreInfo';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HubBusiness />
        <Partners />
        <Modules />
        <Reasons />
        <FAQ />
        <MoreInfo />
      </main>
    </>
  );
}

export default App;
