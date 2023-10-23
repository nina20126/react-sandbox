import { useState } from 'react';
import randomColor from 'randomcolor';

function CounterButton() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('black');

    const changeColor = () => {
        let color = randomColor();
        setColor(color);
    }


    return(
        <>  
            <h1 style={{ color:color }}>Press the buttons!</h1>
            <p className="big"> {count}</p>
            <button onClick={() => setCount(count +1)}>Plus</button>
            <button onClick={() => setCount(count -1)}>Minus</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={changeColor}>Funny Button</button>
        </>
    )
}

export default CounterButton;