import './App.css';
import Header from './components/Header/Header';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';
import Reasons from './components/Reasons/Reasons';
import FAQ from './components/FAQ/FAQ';
import OurHubsGallery from './components/OurHubsGallery/OurHubsGallery';

function App() {
  return (
    <>
      <Header />
      <Partners />
      <Modules />
      <Reasons />
      <OurHubsGallery />
      <FAQ />
    </>
  );
}

export default App;
