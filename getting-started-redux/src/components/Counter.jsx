import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const showCounter = useSelector(state => state.showCounter);

    const incrementHandler = () => {
        dispatch({ type: 'increment', amount: 5 })
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement', amount: 5 })
    }
    const toggleCounterHandler = () => {
        dispatch({ type: "toggle" })
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement by 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>

        </main>
    );
};

export default Counter;
