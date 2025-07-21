import './App.css';
import Header from './components/header/Header';
import Partners from './components/Partners/Partners';
import Modules from './components/Modules/Modules';
import Provides from './components/Provides/Provides';

function App() {
  return (
    <>
      <Header />
      <Provides />
      <Partners />
      <Modules />
    </>
  );
}

export default App;
