import { useEffect, useState } from "react";

function Counter() {

    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);

    const handleCounterAIncrement = () => {
        setValueA(ps => ps + 1 );
    };

    const handleCounterBIncrement = () => {
        setValueB(ps => ps + 1 );
    };

    useEffect(() => {
        const total = valueA + valueB;
        document.title = `Total click ${total}`;
    }, [valueA, valueB])

        return (
            <div className="counter">
                <h2>Counter</h2>
                <button 
                    type="button" 
                    onClick={handleCounterAIncrement}
                    >Clicked Counter A {valueA} 
                </button>
                <button 
                    type="button" 
                    onClick={handleCounterBIncrement}
                    >Clicked Counter B {valueB} 
                </button>
            </div>
        );
};

export default Counter; 