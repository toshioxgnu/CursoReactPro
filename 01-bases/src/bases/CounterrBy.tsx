import { useState } from "react"

interface Props  {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    click: number;
}

export const CounterBy = ( { initialValue = 5  } : Props ) => {

    const [counterState, setCounterState] = useState<CounterState>({
        counter: initialValue,
        click: 0
    });

    const { counter, click } = counterState;

    const handleClick = ( value : number ) => {
        setCounterState( ({click, counter}) => ({
            counter: counter + value,
            click: click + 1
        }));
    }


  return (
    <>
        <h1>CounterBy: { counter }</h1>
        <h1>Clicks: { click }</h1>


        <button
            onClick={ () => handleClick(1) }
        > +1 </button>
        <button
            onClick={ () => handleClick(5) }
        > +5 </button>
    </>
  )
}
