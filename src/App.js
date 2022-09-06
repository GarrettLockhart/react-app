import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Infocard from './components/cards/Infocard';

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Infocard />
    </div>
  );
}

export default App;
