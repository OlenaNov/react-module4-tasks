import { useReducer } from "react";

// Exemple for large app

function countReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload};

        case 'decrement':
            return {...state, count: state.count - action.payload};

        default:
            throw new Error(`Unsuported action type ${action.type}`);
    };
};


//============ if init value in localStorage ============
//============  Lazy initialization ============ 
// const init = param => {
//     return {...param, count: param.count + 5};
// }
//============ if init value in localStorage ============

export default function CounterWithUseReducer() {
    const [state, dispatch] = useReducer(countReducer, {count: 0}
        //============ if init value in localStorage ============
        // , init
        //============ if init value in localStorage ============
        );

    return (
        <div>
        <h2>Counter with useReducer</h2>
        <p>{state.count}</p>
        <button 
            type="button" 
            onClick={() => dispatch({type: 'increment', payload: 1})}
        >Increase</button>
        <button 
            type="button" 
            onClick={() => dispatch({type: 'decrement', payload: 1})}
        >Decrease</button>
        </div>
    );
};