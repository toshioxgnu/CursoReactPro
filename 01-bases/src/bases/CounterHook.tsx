import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";

const MAX_COUNT = 10;

export const CounterHook = (  ) => {

    

  return (
    <>
        <h1>CounterHook: </h1>
        <h2 ref={ counterElement } >{ counter }</h2>

        <button
            onClick={ handleClick }
        > +1 </button>
    </>
  )
}
