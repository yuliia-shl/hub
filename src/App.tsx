import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';
import Provides from './components/Provides/Provides';
import Reasons from './components/Reasons/Reasons';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Provides />
      <Partners />
      <Modules />
      <Reasons />
      <FAQ />
    </>
  );
}

export default App;
