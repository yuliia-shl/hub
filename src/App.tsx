import './App.css';
import FAQ from './components/FAQ/FAQ';
import Header from './components/header/Header';
import HubBusiness from './components/HubBusiness/HubBusiness';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';

function App() {
  return (
    <>
      <Header />
      <HubBusiness />
      <Partners />
      <Modules />
      <FAQ />
    </>
  );
}

export default App;
