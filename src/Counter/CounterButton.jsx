import {PropTypes} from 'prop-types'
//import { useState } from 'react';

export default function CounterButton({by,PI,Pd} ){

    

    //use state 1 array return krta hai with 1 value as a coounter and 2 nd one as a updater
    //const state = useState(0);

    //isliye aaisa krke hm directly usko variaables me save kr skte hai
    //const [count , setCount] = useState(0);
    
    // function Increamentby1(){
    //     //state[1](state[0]+1);
    //     setCount(count+by);
    //     PI(by)
    // }
    
    // function Decrementby1(){
    //     //state[1](state[0]+2);
    //     Pd(by);
    //     if(count-by>=0){
    //     setCount(count-by);
    //     }
    // }

   

    return(
        <div className="CounterButton">
            <div>
                <button className="Counterbutton" onClick={()=>PI(by)}>
                    +{by}
                </button>
            
                <button className="Counterbutton" onClick={()=>Pd(by)}>
                    -{by}
                </button>
            </div>            
        </div>

    )
}

CounterButton.propTypes={
    by: PropTypes.number
}

//isse agr me by ki koi value pass ni krunga in app.jsx tb bhi by ki value 1 pass hogi automatically.
CounterButton.defaultProps={
    by: 1
}