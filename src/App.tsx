import './App.css';
import FAQ from './components/FAQ/FAQ';
import Header from './components/header/Header';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';
import MoreInfo from './components/MoreInfo/MoreInfo';

function App() {
  return (
    <>
      <Header />
      <Partners />
      <Modules />
      <FAQ />
      <MoreInfo />
    </>
  );
}

export default App;
