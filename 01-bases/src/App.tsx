
import logo from './logo.svg';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterrBy';

function App() {
  return (
    <>
      <Counter  initialValue={ 15 } />
      <CounterBy />
    </>
  );
}

export default App;
