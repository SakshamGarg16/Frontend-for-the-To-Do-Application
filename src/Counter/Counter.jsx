import { useState } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

export default function Counter(){

    const [count , setCount] = useState(0);

    function Parenincrementfunction(by){
        setCount(count+by);
    }
    function Parendecfunction(by){
        if(count-by>=0){
            setCount(count-by);
            }
    }
    function reset(){
        setCount(0);
    }

    return(
        <>
        <span className="countprt">{count}</span>
        <CounterButton PI={Parenincrementfunction} Pd={Parendecfunction}/>
        <CounterButton by={2} PI={Parenincrementfunction} Pd={Parendecfunction}/>
        <CounterButton by={5} PI={Parenincrementfunction} Pd={Parendecfunction}/>
        <button className='Resetbtn' onClick={reset}>Reset</button>
        </>
    )
}



