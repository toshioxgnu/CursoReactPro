
import logo from './logo.svg';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterrBy';
import { CounterEffect } from './bases/CounterEffect';

function App() {
  return (
    <>
      <Counter  initialValue={ 15 } />
      <CounterBy />
      <CounterEffect />

    </>
  );
}

export default App;
