import { useEffect, useRef, useState } from "react";

const MAX_COUNT = 10;


export const useCounter = () => {

    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter( prev =>  Math.min(prev + 1, MAX_COUNT) );
    }

    useEffect(() => {
        if(counter < 10) return;

        console.log('%cValor maximo','color: red; background-color:black;');

        const tl = gsap.timeline();

        tl.to(counterElement.current , {y: -10, duration: 0.5, ease: 'bounce' });
        tl.to(counterElement.current , {y: 0, duration: 0.5});

    }, [counter]);



    return {
        counter,
        counterElement,
        handleClick

    }
}
