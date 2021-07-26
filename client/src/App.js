import './App.css';
import RollDice from './components/RollDice';

const App = () => {
  return (
    <div className="app">
      <h1 className='app__title'>Don't Roll Doubles</h1>
      <RollDice />
    </div>
  );
}

export default App;
